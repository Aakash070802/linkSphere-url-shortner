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

export function isUrlExpired(expiresAt: string | Date | null): boolean {
  if (!expiresAt) {
    return false;
  }

  return new Date(expiresAt) < new Date();
}

export function getUrlCacheKey(shortCode: string): string {
  return `url:${shortCode}`;
}

export async function deleteCache(key: string) {
  await redis.del(key);
}
