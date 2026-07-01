import ENV from "./env.js";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let cachedPool: Pool | null = null;

const createDatabaseClient = () => {
  if (cachedPool) {
    return drizzle(cachedPool);
  }

  cachedPool = new Pool({
    connectionString: ENV.DB_URL,
  });

  return drizzle(cachedPool);
};

async function closeDatabaseConnection() {
  if (cachedPool) {
    await cachedPool.end();
    console.log("✅ PostgreSQL disconnected");
  }
}

const db = createDatabaseClient();

export { db, createDatabaseClient, closeDatabaseConnection };
