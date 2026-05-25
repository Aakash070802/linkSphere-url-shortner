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

async function getUrlById(urlId: string) {
  const [url] = await db.select().from(urls).where(eq(urls.id, urlId));

  return url;
}

async function incrementUrlClicks(shortCode: string) {
  await db
    .update(urls)
    .set({ clicks: sql`${urls.clicks} + 1` })
    .where(eq(urls.shortCode, shortCode));
}

async function deleteUrlById(urlId: string) {
  const [deletedUrl] = await db
    .delete(urls)
    .where(eq(urls.id, urlId))
    .returning();

  return deletedUrl;
}

async function updateUrlById(
  urlId: string,
  updateData: {
    originalUrl: string;
    expiresAt: Date | null;
  },
) {
  const [updatedUrl] = await db
    .update(urls)
    .set({
      originalUrl: updateData.originalUrl,
      expiresAt: updateData.expiresAt,
    })
    .where(eq(urls.id, urlId))
    .returning();

  return updatedUrl;
}

export {
  createShortUrl,
  getUrlByShortCode,
  getUrlById,
  incrementUrlClicks,
  deleteUrlById,
  updateUrlById,
};

export type { CreateShortUrlInput };
