import { Router } from "express";
import {
  getCurrentUserController,
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

authRouter.route("/me").get(authMiddleware, getCurrentUserController);

export { authRouter };
