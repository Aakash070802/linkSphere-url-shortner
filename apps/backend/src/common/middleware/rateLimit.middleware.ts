import type { RequestHandler } from "express";
import { getClientIp } from "../utils/ip.js";
import { redis } from "../../config/redis.js";
import { ApiError } from "../utils/ApiError.js";

interface RateLimitOptions {
  windowInSeconds: number;
  maxRequests: number;
  keyPrefix: string;
}

export function rateLimit(options: RateLimitOptions): RequestHandler {
  return async (req, res, next) => {
    const ipAddress = getClientIp(req);
    const redisKey = `${options.keyPrefix}:${ipAddress}`;
    const currentRequestCount = await redis.incr(redisKey);

    if (currentRequestCount === 1) {
      await redis.expire(redisKey, options.windowInSeconds);
    }

    const remainingRequests = Math.max(
      options.maxRequests - currentRequestCount,
      0,
    );
    const ttl = await redis.ttl(redisKey);

    res.setHeader("X-RateLimit-Limit", options.maxRequests);
    res.setHeader("X-RateLimit-Remaining", remainingRequests);
    res.setHeader("X-RateLimit-Reset", ttl);

    if (currentRequestCount > options.maxRequests) {
      res.setHeader("Retry-After", ttl);
      throw new ApiError(429, "Too many requests. Please try again later.");
    }

    next();
  };
}
