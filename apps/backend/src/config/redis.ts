import { createClient } from "redis";
import ENV from "./env.js";

const redis: ReturnType<typeof createClient> = createClient({
  url: ENV.REDIS_URL,
});

redis.on("error", (error) => {
  console.log("Redis Error:", error);
});

async function connectRedis() {
  await redis.connect();
}

export { redis, connectRedis };
