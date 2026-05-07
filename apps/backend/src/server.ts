import ENV from "./config/envConfig.js";
import { app } from "./app.js";
import { db } from "./config/db.js";

const PORT = ENV.PORT || 8000;

async function startServer() {
  try {
    await db.execute("SELECT 1");

    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect database", error);
    process.exit(1);
  }
}

startServer();
