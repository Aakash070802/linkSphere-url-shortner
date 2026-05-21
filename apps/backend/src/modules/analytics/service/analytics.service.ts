import { getLocationFromIp } from "../../../common/utils/geo.js";
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
  const location = getLocationFromIp(ipAddress);

  const analytics = await createAnalytics({
    urlId,
    ipAddress,
    userAgent,
    country: location.country,
    city: location.city,
  });

  return analytics;
}

export { createAnalyticsService };
