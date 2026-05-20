import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (err instanceof ApiError) {
    res
      .status(err.statusCode)
      .json(new ApiResponse(false, err.message, err.errors));

    return;
  }

  res.status(500).json(new ApiResponse(false, "Internal Server Error"));
};

export { errorMiddleware };
