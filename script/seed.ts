import { db } from "../server/db";
import { leads } from "../shared/schema";
import "dotenv/config";

const targetCompanies = [
    "netflix.com", "stripe.com", "airbnb.com", "uber.com", "snowflake.com",
    "databricks.com", "mongodb.com", "vercel.com", "slack.com", "openai.com",
    "anthropic.com", "scale.com", "palantir.com", "affirm.com", "jetblue.com",
    "mercy.net", "amazon.com", "microsoft.com", "google.com", "meta.com",
    "apple.com", "plaid.com", "brex.com", "ramp.com", "rippling.com",
    "gusto.com", "notion.so", "figma.com", "canva.com", "miro.com",
    "atlassian.com", "asana.com", "monday.com", "smartsheet.com", "airtable.com",
    "zoom.us", "hubspot.com", "salesforce.com", "workday.com", "servicenow.com",
    "okta.com", "crowdstrike.com", "datadoghq.com", "cloudflare.com", "fastly.com",
    "hashicorp.com", "docker.com", "gitlab.com", "github.com", "postman.com"
];

const seedLeads = async () => {
    console.log("🌱 Starting database seed...");

    try {
        const insertData = targetCompanies.map((domain, index) => ({
            email: `data.vp@${domain}`,
            status: "pending", // Strategist agent looks for 'pending'
            pbsScore: 0 // Will be calibrated by Strategist
        }));

        await db.insert(leads).values(insertData);

        console.log(`✅ Successfully inserted ${insertData.length} enterprise target leads into the swarm pipeline.`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Failed to seed database:", error);
        process.exit(1);
    }
};

seedLeads();
