import { ApiError } from "../../../common/utils/ApiError.js";
import { getUrlById } from "../../url/index.js";
import {
  getDashboardStats,
  getTopLinks,
  getUniqueVisitors,
  getUrlAnalytics,
} from "../repository/analyticsQueries.repository.js";

export async function getDashboardAnalyticsService(userId: string) {
  const [stats, topLinks, uniqueVisitors] = await Promise.all([
    getDashboardStats(userId),
    getTopLinks(userId),
    getUniqueVisitors(userId),
  ]);

  return {
    stats: {
      totalLinks: Number(stats?.totalLinks ?? 0),
      totalClicks: Number(stats?.totalClicks ?? 0),
      uniqueVisitors: Number(uniqueVisitors?.uniqueVisitors ?? 0),
    },
    topLinks,
  };
}

export async function getUrlAnalyticsService(urlId: string, userId: string) {
  const existingUrl = await getUrlById(urlId);

  if (!existingUrl || existingUrl.userId !== userId) {
    throw new ApiError(404, "URL not found");
  }

  const analytics = await getUrlAnalytics(urlId);

  return analytics;
}
