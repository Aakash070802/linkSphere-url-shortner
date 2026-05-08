import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users.schema.js";

export const urls = pgTable("urls", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  originalUrl: text("original_url").notNull(),
  shortCode: text("short_code").notNull().unique(),
  clicks: integer("clicks").default(0).notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
  }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});
