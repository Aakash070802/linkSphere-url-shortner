import type {
  CreateShortUrlInput,
  UpdateShortUrlInput,
} from "../validator/url.validator.js";
import { generateShortCode } from "../../../common/utils/shortCode.js";
import {
  createShortUrl,
  deleteUrlById,
  getUrlById,
  getUrlByShortCode,
  incrementUrlClicks,
  updateUrlById,
} from "../repository/url.repository.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import {
  deleteCache,
  getCache,
  getUrlCacheKey,
  isUrlExpired,
  setCache,
} from "../../../common/utils/cache.js";

type CreateShortUrlServiceInput = {
  userId: string;
  data: CreateShortUrlInput;
};

async function createShortUrlService({
  userId,
  data,
}: CreateShortUrlServiceInput) {
  const shortCode = generateShortCode();

  const newShortUrl = await createShortUrl({
    userId,
    originalUrl: data.originalUrl,
    shortCode,
    expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
  });

  return newShortUrl;
}

type CachedUrl = {
  id: string;
  originalUrl: string;
  shortCode: string;
  expiresAt: string | null;
};

async function redirectToOriginalUrlService(shortCode: string) {
  const cacheKey = getUrlCacheKey(shortCode);
  const cachedUrl = await getCache<CachedUrl>(cacheKey);

  if (cachedUrl) {
    if (isUrlExpired(cachedUrl.expiresAt)) {
      throw new ApiError(410, "Short URL has expired");
    }

    await incrementUrlClicks(shortCode);
    console.log("Cache HIT:", cacheKey);
    return cachedUrl;
  }

  console.log("Cache MISS:", cacheKey);

  const url = await getUrlByShortCode(shortCode);
  if (!url) {
    throw new ApiError(404, "Short URL not found");
  }

  if (isUrlExpired(url.expiresAt)) {
    throw new ApiError(410, "Short URL has expired");
  }

  const ttlInSeconds = url.expiresAt
    ? Math.floor((new Date(url.expiresAt).getTime() - Date.now()) / 1000)
    : 3600;

  if (ttlInSeconds <= 0) {
    throw new ApiError(410, "Short URL has expired");
  }

  await setCache(cacheKey, url, ttlInSeconds);

  await incrementUrlClicks(shortCode);

  return url;
}

async function deleteShortUrlService(urlId: string, userId: string) {
  const existingUrl = await getUrlById(urlId);

  if (!existingUrl || existingUrl.userId !== userId) {
    throw new ApiError(404, "Short URL not found");
  }

  const deletedUrl = await deleteUrlById(urlId);

  const cacheKey = getUrlCacheKey(existingUrl.shortCode);
  await deleteCache(cacheKey);

  return deletedUrl;
}

async function updateShortUrlService(
  urlId: string,
  userId: string,
  updateData: UpdateShortUrlInput,
) {
  const existingUrl = await getUrlById(urlId);

  if (!existingUrl || existingUrl.userId !== userId) {
    throw new ApiError(404, "Short URL not found");
  }

  const updatedUrl = await updateUrlById(urlId, {
    originalUrl: updateData.originalUrl,
    expiresAt: updateData.expiresAt ? new Date(updateData.expiresAt) : null,
  });

  const cacheKey = getUrlCacheKey(existingUrl.shortCode);
  await deleteCache(cacheKey);

  return updatedUrl;
}

export {
  createShortUrlService,
  redirectToOriginalUrlService,
  deleteShortUrlService,
  updateShortUrlService,
};
