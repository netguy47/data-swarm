import { pgTable, text, timestamp, boolean, integer, serial } from "drizzle-orm/pg-core";

export const systemLogs = pgTable("system_logs", {
    Id: text("Id").primaryKey(),
    Timestamp: timestamp("Timestamp", { withTimezone: true }),
    LogText: text("LogText"),
    ViolationFlag: boolean("ViolationFlag"),
});

export const leads = pgTable("leads", {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    pbsScore: integer("pbsScore").default(0),
    status: text("status").default("pending"),
});
