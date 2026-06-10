import type { RequestHandler } from "express";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";
import {
  getDashboardAnalyticsService,
  getUrlAnalyticsService,
} from "../service/analyticsQueries.service.js";
import { ApiResponse } from "../../../common/utils/ApiResponse.js";
import { ApiError } from "../../../common/utils/ApiError.js";

export const getDashboardAnalyticsController: RequestHandler = asyncHandler(
  async (req, res) => {
    const analytics = await getDashboardAnalyticsService(req.user.userId);

    res
      .status(200)
      .json(
        new ApiResponse(
          true,
          "Dashboard analytics fetched successfully",
          analytics,
        ),
      );
  },
);

export const getUrlAnalyticsController: RequestHandler = asyncHandler(
  async (req, res) => {
    const { urlId } = req.params;

    if (!urlId) {
      throw new ApiError(400, "URL ID is required");
    }

    const analytics = await getUrlAnalyticsService(
      urlId as string,
      req.user.userId,
    );

    res
      .status(200)
      .json(
        new ApiResponse(true, "URL analytics fetched successfully", analytics),
      );
  },
);
