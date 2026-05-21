import type { CreateShortUrlInput } from "../validator/url.validator.js";
import { generateShortCode } from "../../../common/utils/shortCode.js";
import {
  createShortUrl,
  getUrlByShortCode,
  incrementUrlClicks,
} from "../repository/url.repository.js";
import { ApiError } from "../../../common/utils/ApiError.js";

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

async function redirectToOriginalUrlService(shortCode: string) {
  const url = await getUrlByShortCode(shortCode);

  if (!url) {
    throw new ApiError(404, "Short URL not found");
  }

  if (url.expiresAt && new Date(url.expiresAt) < new Date()) {
    throw new ApiError(410, "Short URL has expired");
  }

  await incrementUrlClicks(shortCode);

  return url;
}

export { createShortUrlService, redirectToOriginalUrlService };
