import type { RequestHandler } from "express";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";
import { createShortUrlSchema } from "../validator/url.validator.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import { ApiResponse } from "../../../common/utils/ApiResponse.js";
import {
  createShortUrlService,
  redirectToOriginalUrlService,
} from "../service/url.service.js";
import { createAnalyticsService } from "../../analytics/index.js";
import { getClientIp } from "../../../common/utils/ip.js";

const urlHealthController: RequestHandler = async (_req, res) => {
  res.status(200).json({
    success: true,
    message: "URL module working",
  });
};

const createShortUrlController: RequestHandler = asyncHandler(
  async (req, res) => {
    const validateData = createShortUrlSchema.safeParse(req.body);

    if (!validateData.success) {
      throw new ApiError(400, "Validation Failed", validateData.error.issues);
    }

    const newShortUrl = await createShortUrlService({
      userId: req.user.userId,
      data: validateData.data,
    });

    res
      .status(201)
      .json(
        new ApiResponse(true, "Short URL created successfully", newShortUrl),
      );
  },
);

const redirectToOriginalUrlController: RequestHandler = asyncHandler(
  async (req, res) => {
    const { shortCode } = req.params;

    if (!shortCode || Array.isArray(shortCode)) {
      throw new ApiError(400, "Invalid short code");
    }

    const url = await redirectToOriginalUrlService(shortCode);

    void createAnalyticsService({
      urlId: url.id,
      ipAddress: getClientIp(req),
      userAgent: req.headers["user-agent"] || "unknown",
    }).catch((error) => {
      console.error("Analytics creation failed:", error);
    });

    return res.redirect(url.originalUrl);
  },
);

export {
  urlHealthController,
  createShortUrlController,
  redirectToOriginalUrlController,
};
