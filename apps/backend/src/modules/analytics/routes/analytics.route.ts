import { Router } from "express";
import { authMiddleware } from "../../auth/index.js";
import { getDashboardAnalyticsController } from "../controller/analytics.controller.js";

const analyticsRouter: Router = Router();
/**
 * @route GET /api/analytics/dashboard
 * @desc Get dashboard analytics for current user
 * @access Private
 */
analyticsRouter
  .route("/dashboard")
  .get(authMiddleware, getDashboardAnalyticsController);

export { analyticsRouter };
