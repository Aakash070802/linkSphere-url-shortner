import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { urls } from "./urls.schema.js";

export const analytics = pgTable("analytics", {
  id: uuid("id").defaultRandom().primaryKey(),
  urlId: uuid("url_id")
    .notNull()
    .references(() => urls.id),
  ipAddress: text("ip_address").notNull(),
  userAgent: text("user_agent"),
  country: text("country"),
  city: text("city"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});
