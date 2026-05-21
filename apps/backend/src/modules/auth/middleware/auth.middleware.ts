import ENV from "../../../config/env.js";
import jwt from "jsonwebtoken";
import type { RequestHandler } from "express";
import { ApiError } from "../../../common/utils/ApiError.js";
import type { JwtUserPayload } from "../../../common/utils/token.js";

export const authMiddleware: RequestHandler = (req, _res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    throw new ApiError(401, "Unauthorized access, token is missing");
  }

  const decoded = jwt.verify(
    accessToken,
    ENV.ACCESS_TOKEN_SECRET,
  ) as JwtUserPayload;

  req.user = decoded;
  next();
};
