import { createAnalytics } from "../repository/analytics.repository.js";

type CreateAnalyticsServiceInput = {
  urlId: string;
  ipAddress: string;
  userAgent: string;
};

async function createAnalyticsService({
  urlId,
  ipAddress,
  userAgent,
}: CreateAnalyticsServiceInput) {
  const analytics = await createAnalytics({
    urlId,
    ipAddress,
    userAgent,
  });

  return analytics;
}

export { createAnalyticsService };
