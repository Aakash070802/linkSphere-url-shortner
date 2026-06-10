import {
  getDashboardStats,
  getTopLinks,
} from "../repository/analyticsQueries.repository.js";

export async function getDashboardAnalyticsService(userId: string) {
  const [stats, topLinks] = await Promise.all([
    getDashboardStats(userId),
    getTopLinks(userId),
  ]);

  return {
    stats: {
      totalLinks: Number(stats?.totalLinks ?? 0),
      totalClicks: Number(stats?.totalClicks ?? 0),
    },
    topLinks,
  };
}
