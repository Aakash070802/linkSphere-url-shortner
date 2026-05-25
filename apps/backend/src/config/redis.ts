import { createClient } from "redis";
import ENV from "./env.js";

const redis: ReturnType<typeof createClient> = createClient({
  url: ENV.REDIS_URL,
});

redis.on("error", (error) => {
  console.log("Redis Error:", error);
});

async function connectRedis() {
  try {
    await redis.connect();
    console.log("Redis connected successfully");
  } catch (error) {
    console.log("Redis connection failed:", error);
  }
}

export { redis, connectRedis };
