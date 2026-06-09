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
  return async (req, _res, next) => {
    const ipAddress = getClientIp(req);
    const redisKey = `${options.keyPrefix}:${ipAddress}`;
    const currentRequestCount = await redis.incr(redisKey);

    if (currentRequestCount === 1) {
      await redis.expire(redisKey, options.windowInSeconds);
    }

    if (currentRequestCount > options.maxRequests) {
      throw new ApiError(429, "Too many requests. Please try again later.");
    }

    next();
  };
}
