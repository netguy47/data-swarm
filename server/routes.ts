import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { systemLogs, leads } from "../shared/schema";
import { desc, eq, count } from "drizzle-orm";

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

    return createServer(app);
}
