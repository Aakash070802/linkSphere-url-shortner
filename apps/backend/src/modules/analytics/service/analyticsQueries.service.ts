import {
  getDashboardStats,
  getTopLinks,
} from "../repository/analyticsQueries.repository.js";

export async function getDashboardAnalyticsService(userId: string) {
  const [stats, topLinks] = await Promise.all([
    getDashboardStats(userId),
    getTopLinks(userId),
  ]);

  return { stats, topLinks };
}
