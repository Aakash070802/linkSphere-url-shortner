import { signInSchema, signUpSchema } from "../validator/auth.validator.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import { ApiResponse } from "../../../common/utils/ApiResponse.js";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";
import type { RequestHandler } from "express";
import {
  getCurrentUserService,
  refreshTokenService,
  signinService,
  signoutService,
  signupService,
} from "../service/auth.service.js";
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "../../../common/constants/cookieOptions.js";

const signUpController: RequestHandler = asyncHandler(async (req, res) => {
  const validatedData = signUpSchema.safeParse(req.body);

  if (!validatedData.success) {
    throw new ApiError(400, "Validation Failed", validatedData.error.issues);
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

  const loggedInUser = await signinService(validatedData.data, {
    userAgent: req.headers["user-agent"],
    ipAddress: req.ip,
  });

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
    const currentUser = await getCurrentUserService(req.user.userId);

    res
      .status(200)
      .json(
        new ApiResponse(true, "Current user fetched successfully", currentUser),
      );
  },
);

const refreshTokenController: RequestHandler = asyncHandler(
  async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new ApiError(401, "Refresh token missing");
    }

    const tokens = await refreshTokenService(refreshToken, {
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip,
    });

    res
      .status(200)
      .cookie("accessToken", tokens.accessToken, accessTokenCookieOptions)
      .cookie("refreshToken", tokens.refreshToken, refreshTokenCookieOptions)
      .json(new ApiResponse(true, "Tokens refreshed successfully"));
  },
);

const signOutController: RequestHandler = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await signoutService(refreshToken);
  }

  res
    .status(200)
    .clearCookie("accessToken", accessTokenCookieOptions)
    .clearCookie("refreshToken", refreshTokenCookieOptions)
    .json(new ApiResponse(true, "SignOut successfully"));
});

export {
  signUpController,
  signInController,
  signOutController,
  getCurrentUserController,
  refreshTokenController,
};
