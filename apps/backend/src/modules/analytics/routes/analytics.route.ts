import { Router } from "express";
import { authMiddleware } from "../../auth/index.js";
import {
  getDashboardAnalyticsController,
  getUrlAnalyticsController,
} from "../controller/analytics.controller.js";

const analyticsRouter: Router = Router();

/**
 * @route GET /api/analytics/dashboard
 * @desc Get dashboard analytics for current user
 * @access Private
 */
analyticsRouter
  .route("/dashboard")
  .get(authMiddleware, getDashboardAnalyticsController);

/**
 * @route GET /api/analytics/url/:urlId
 * @desc Get detailed analytics for a URL
 * @access Private
 */
analyticsRouter
  .route("/url/:urlId")
  .get(authMiddleware, getUrlAnalyticsController);

export { analyticsRouter };
