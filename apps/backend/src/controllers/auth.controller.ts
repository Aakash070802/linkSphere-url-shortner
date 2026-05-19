import { signInSchema, signUpSchema } from "../validators/auth.validator.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import type { RequestHandler } from "express";
import { signinService, signupService } from "../services/auth.service.js";
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "../constants/cookieOptions.js";

const signUpController: RequestHandler = asyncHandler(async (req, res) => {
  const validatedData = signUpSchema.safeParse(req.body);

  if (!validatedData.success) {
    throw new ApiError(
      400,
      "Validation Failed",
      validatedData.error.flatten().fieldErrors,
    );
  }

  const newUser = await signupService(validatedData.data);

  res
    .status(201)
    .json(new ApiResponse(true, "User created successfully", newUser));
});

const signInController: RequestHandler = asyncHandler(async (req, res) => {
  const validatedData = signInSchema.safeParse(req.body);

  if (!validatedData.success) {
    throw new ApiError(
      400,
      "Validation Failed",
      validatedData.error.flatten().fieldErrors,
    );
  }

  const loggedInUser = await signinService(validatedData.data);

  res
    .status(200)
    .cookie("accessToken", loggedInUser.accessToken, accessTokenCookieOptions)
    .cookie(
      "refreshToken",
      loggedInUser.refreshToken,
      refreshTokenCookieOptions,
    )
    .json(new ApiResponse(true, "SignIn Successful", loggedInUser.user));
});

const getCurrentUserController: RequestHandler = asyncHandler(
  async (req, res) => {
    const currentUser = req.user;

    if (!currentUser) {
      throw new ApiError(404, "User does not exists");
    }

    res.status(200).json(
      new ApiResponse(true, "Current user fetched successfully", {
        userId: currentUser.userId,
        email: currentUser.email,
      }),
    );
  },
);
const signOutController: RequestHandler = asyncHandler(async (req, res) => {});

export { signUpController, signInController, getCurrentUserController };
