import { signUpSchema } from "../validators/auth.validator.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import type { RequestHandler } from "express";
import { signupService } from "../services/auth.service.js";

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

export { signUpController };
