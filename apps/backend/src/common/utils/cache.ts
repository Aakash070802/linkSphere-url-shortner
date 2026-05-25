import { redis } from "../../config/redis.js";

export async function getCache<T>(key: string): Promise<T | null> {
  const data = await redis.get(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as T;
}

export async function setCache(
  key: string,
  value: unknown,
  ttlInSeconds: number,
) {
  await redis.set(key, JSON.stringify(value), { EX: ttlInSeconds });
}
