import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { systemLogs, leads } from "../shared/schema";
import { desc, eq, count } from "drizzle-orm";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
    apiVersion: "2026-02-25.clover",
});

export function registerRoutes(app: Express): Server {
    app.post("/api/waitlist", async (req, res) => {
        try {
            const { email } = req.body;
            if (!email) {
                return res.status(400).json({ error: "Email is required" });
            }
            const existing = await db.query.leads.findFirst({
                where: eq(leads.email, email)
            });
            if (existing) {
                return res.json({ success: true, message: "Already on waitlist", lead: existing });
            }
            const [newLead] = await db.insert(leads).values({ email, pbsScore: 0, status: "pending" }).returning();
            res.json({ success: true, lead: newLead });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server Error" });
        }
    });

    app.post("/api/logs", async (req, res) => {
        try {
            const { Id, Timestamp, LogText, ViolationFlag } = req.body;
            const [newLog] = await db.insert(systemLogs).values({
                Id: Id || Date.now().toString(),
                Timestamp: new Date(Timestamp || Date.now()),
                LogText,
                ViolationFlag
            }).returning();
            res.json(newLog);
        } catch (err) {
            res.status(500).json({ error: "Server Error" });
        }
    });

    app.get("/api/logs", async (req, res) => {
        try {
            const logs = await db.query.systemLogs.findMany({
                orderBy: [desc(systemLogs.Timestamp)],
                limit: 10
            });
            res.json(logs[0] || {});
        } catch (err) {
            res.status(500).json({ error: "Server Error" });
        }
    });

    app.get("/api/leads", async (req, res) => {
        try {
            const allLeads = await db.query.leads.findMany();
            const formatted = allLeads.map(l => ({
                id: l.id,
                domain: l.email.split('@')[1] || "unknown",
                status: l.status,
                pbs: l.pbsScore,
                action: l.status === "pending" ? "Awaiting scan" : (l.status === "audited" ? "PBS Calibrated" : "Outreach Sent")
            }));
            res.json(formatted);
        } catch (err) {
            res.status(500).json({ error: "Server Error" });
        }
    });

    app.get("/api/telemetry/pipeline", async (req, res) => {
        try {
            const pendingRes = await db.select({ value: count() }).from(leads).where(eq(leads.status, "pending"));
            const auditedRes = await db.select({ value: count() }).from(leads).where(eq(leads.status, "audited"));
            const pendingCount = pendingRes[0]?.value || 0;
            const auditedCount = auditedRes[0]?.value || 0;

            const allHigh = await db.query.leads.findMany();
            const highCount = allHigh.filter(l => l.pbsScore !== null && l.pbsScore >= 90).length;

            res.json([pendingCount, auditedCount, highCount, 0]);
        } catch (err) {
            res.status(500).json({ error: "Server Error" });
        }
    });

    // --- Stripe Monetization Routes ---
    app.post("/api/create-checkout-session", async (req, res) => {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [
                    {
                        price: process.env.STRIPE_PRICE_PRO || "price_1ShcBOKf65oxYJP8ZeRa8Vkn",
                        quantity: 1,
                    },
                ],
                mode: "subscription",
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/`,
            });

            res.json({ url: session.url });
        } catch (err: any) {
            console.error("Stripe Session Error:", err);
            res.status(500).json({ error: err.message });
        }
    });

    app.post("/api/webhook", async (req, res) => {
        const sig = req.headers["stripe-signature"] as string;
        let event;

        try {
            event = stripe.webhooks.constructEvent(
                (req as any).rawBody || JSON.stringify(req.body),
                sig,
                process.env.STRIPE_WEBHOOK_SECRET || ""
            );
        } catch (err: any) {
            console.error("Webhook Signature Verification Failed:", err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            const email = session.customer_details?.email;

            if (email) {
                console.log(`✅ Payment received from ${email}. Updating lead status...`);
                await db.update(leads).set({ status: "audited" }).where(eq(leads.email, email));
            }
        }

        res.json({ received: true });
    });

    // --- Dashboard & Intelligence Stats ---
    app.get("/api/dashboard/stats", async (_req, res) => {
        try {
            // Aggregate totals from SQLite/PostgreSQL (assuming DB adapter is available)
            const stats = {
                totalLeads: 0,
                activeAudits: 0,
                deliveryFailures: 0,
                conversionRate: "12.4%", // Simulated for now
                visualAssets: 0
            };

            // Count leads by status
            const allLeads = await db.select().from(leads);
            stats.totalLeads = allLeads.length;
            stats.activeAudits = allLeads.filter(l => l.status === 'audited' || l.status === 'sent').length;
            stats.deliveryFailures = allLeads.filter(l => l.status === 'invalid' || l.status === 'bounced').length;

            // In a real scenario, we'd scan the visuals directory
            stats.visualAssets = 5;

            res.json(stats);
        } catch (err) {
            console.error("Dashboard stats failed", err);
            res.status(500).json({ error: "Failed to fetch stats" });
        }
    });

    return createServer(app);
}
