import type { InferInsertModel } from "drizzle-orm";
import { analytics } from "../../../db/schema.js";
import { db } from "../../../config/db.js";

type CreateAnalyticsInput = InferInsertModel<typeof analytics>;

async function createAnalytics(analyticsData: CreateAnalyticsInput) {
  const [newAnalytics] = await db
    .insert(analytics)
    .values(analyticsData)
    .returning();

  return newAnalytics;
}

export { createAnalytics };
export type { CreateAnalyticsInput };
