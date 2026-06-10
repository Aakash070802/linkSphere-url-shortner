import { db } from "../../../config/db.js";
import { analytics, urls } from "../../../db/schema.js";
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

export async function getUrlAnalytics(urlId: string) {
  const analyticsData = await db
    .select({
      id: analytics.id,
      ipAddress: analytics.ipAddress,
      country: analytics.country,
      city: analytics.city,
      userAgent: analytics.userAgent,
      createdAt: analytics.createdAt,
    })
    .from(analytics)
    .where(eq(analytics.urlId, urlId))
    .orderBy(desc(analytics.createdAt))
    .limit(100);

  return analyticsData;
}
