import type { Request } from "express";

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.ip || "unknown";
}
