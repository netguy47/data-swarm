import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../shared/schema';

if (!process.env.DATABASE_URL) {
    // Graceful fallback for local development if not provided
    console.warn("DATABASE_URL not set, falling back to local default.");
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/postgres"
});

export const db = drizzle(pool, { schema });
