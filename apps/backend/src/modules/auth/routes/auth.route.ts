import { Router } from "express";
import {
  deactivateUserController,
  getCurrentUserController,
  refreshTokenController,
  signInController,
  signOutController,
  signUpController,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { rateLimit } from "../../../common/middleware/rateLimit.middleware.js";

const authRouter: Router = Router();

const authStrictLimiter = rateLimit({
  windowInSeconds: 60,
  maxRequests: 5,
  keyPrefix: "auth-strict",
});

const authRefreshLimiter = rateLimit({
  windowInSeconds: 60,
  maxRequests: 10,
  keyPrefix: "auth-refresh",
});

/**
 * @route POST /auth/signup
 * @desc Register a new user
 * @access Public
 */
authRouter.route("/signup").post(authStrictLimiter, signUpController);

/**
 * @route POST /auth/signin
 * @desc Authenticate user and return user data
 * @access Public
 */
authRouter.route("/signin").post(authStrictLimiter, signInController);

/**
 * @route POST /auth/signout
 * @desc Sign out user by clearing tokens
 * @access Private
 */
authRouter.route("/signout").post(authMiddleware, signOutController);

/**
 * @route POST /auth/refresh
 * @desc Refresh access token using refresh token
 * @access Public
 */
authRouter.route("/refresh").post(authRefreshLimiter, refreshTokenController);

/**
 * @route GET /auth/me
 * @desc Get current authenticated user
 * @access Private
 */
authRouter.route("/me").get(authMiddleware, getCurrentUserController);

/**
 * @route DELETE /auth/delete
 * @desc Deactivate the current user's account
 * @access Private
 */
authRouter.route("/delete").delete(authMiddleware, deactivateUserController);

export { authRouter };
