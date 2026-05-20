import { Router } from "express";
import {
  getCurrentUserController,
  refreshTokenController,
  signInController,
  signUpController,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter: Router = Router();

/**
 * @route POST /auth/signup
 * @desc Register a new user
 * @access Public
 */
authRouter.route("/signup").post(signUpController);

/**
 * @route POST /auth/signin
 * @desc Authenticate user and return user data
 * @access Public
 */
authRouter.route("/signin").post(signInController);

/**
 * @route POST /auth/refresh
 * @desc Refresh access token using refresh token
 * @access Public
 */
authRouter.route("/refresh").post(refreshTokenController);

/**
 * @route GET /auth/me
 * @desc Get current authenticated user
 * @access Private
 */
authRouter.route("/me").get(authMiddleware, getCurrentUserController);

export { authRouter };
