import type { RequestHandler } from "express";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";
import { getDashboardAnalyticsService } from "../service/analyticsQueries.service.js";
import { ApiResponse } from "../../../common/utils/ApiResponse.js";

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
