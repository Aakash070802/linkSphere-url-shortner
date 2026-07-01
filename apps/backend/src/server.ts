import { sql } from "drizzle-orm";
import ENV from "./config/env.js";
import { app } from "./app.js";
import { connectRedis, redis } from "./config/redis.js";
import { closeDatabaseConnection, db } from "./config/db.js";

const PORT = ENV.PORT || 8000;

let isShuttingDown = false;

async function cleanupResources() {
  await Promise.all([redis.quit(), closeDatabaseConnection()]);

  console.log("✅ Resources released");
}

async function startServer() {
  try {
    await Promise.all([db.execute(sql`SELECT 1`), connectRedis()]);

    console.log("✅ PostgreSQL connected");
    console.log("✅ Redis connected");

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    const gracefulShutdown = (signal: string) => {
      if (isShuttingDown) return;

      isShuttingDown = true;

      console.log(`\n${signal} received. Shutting down gracefully...`);

      server.close((error) => {
        if (error) {
          console.error("❌ Error closing HTTP server:", error);
          process.exit(1);
        }

        void cleanupResources()
          .then(() => {
            console.log("✅ Server shutdown completed");
            process.exit(0);
          })
          .catch((error) => {
            console.error("❌ Error during shutdown:", error);
            process.exit(1);
          });
      });
    };

    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

void startServer();
