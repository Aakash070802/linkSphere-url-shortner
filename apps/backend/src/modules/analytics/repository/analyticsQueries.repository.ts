import { db } from "../../../config/db.js";
import { urls } from "../../../db/schema.js";
import { eq, sql, desc } from "drizzle-orm";

export async function getDashboardStats(userId: string) {
  const [stats] = await db
    .select({
      totalLinks: sql<number>`count(*)`,
      totalClicks: sql<number>`coalesce(sum(${urls.clicks}), 0)`,
    })
    .from(urls)
    .where(eq(urls.userId, userId));

  return stats;
}

export async function getTopLinks(userId: string) {
  const topLinks = await db
    .select({
      id: urls.id,
      shortCode: urls.shortCode,
      originalUrl: urls.originalUrl,
      clicks: urls.clicks,
    })
    .from(urls)
    .where(eq(urls.userId, userId))
    .orderBy(desc(urls.clicks))
    .limit(5);

  return topLinks;
}
