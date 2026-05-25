import ENV from "./config/env.js";
import { app } from "./app.js";
import { db } from "./config/db.js";
import { sql } from "drizzle-orm";
import { connectRedis } from "./config/redis.js";

const PORT = ENV.PORT || 8000;

async function startServer() {
  try {
    await db.execute(sql`SELECT 1`);
    console.log("Database connected successfully");

    await connectRedis();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect database", error);
    process.exit(1);
  }
}

startServer();
