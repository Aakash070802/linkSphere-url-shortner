import { db } from "../../../config/db.js";
import { urls } from "../../../db/schema.js";
import { eq, sql, type InferInsertModel } from "drizzle-orm";

type CreateShortUrlInput = InferInsertModel<typeof urls>;

async function createShortUrl(urlData: CreateShortUrlInput) {
  const [newShortUrl] = await db.insert(urls).values(urlData).returning();

  return newShortUrl;
}

async function getUrlByShortCode(shortCode: string) {
  const [url] = await db
    .select()
    .from(urls)
    .where(eq(urls.shortCode, shortCode));

  return url;
}

async function incrementUrlClicks(shortCode: string) {
  await db
    .update(urls)
    .set({ clicks: sql`${urls.clicks} + 1` })
    .where(eq(urls.shortCode, shortCode));
}

export { createShortUrl, getUrlByShortCode, incrementUrlClicks };

export type { CreateShortUrlInput };
