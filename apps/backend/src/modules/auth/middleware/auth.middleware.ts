import ENV from "../../../config/env.js";
import jwt from "jsonwebtoken";
import type { RequestHandler } from "express";
import { ApiError } from "../../../common/utils/ApiError.js";
import type { JwtUserPayload } from "../../../common/utils/token.js";
import { getUserById } from "../repository/auth.repository.js";

export const authMiddleware: RequestHandler = async (req, _res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized access, token is missing");
    }

    const decoded = jwt.verify(
      accessToken,
      ENV.ACCESS_TOKEN_SECRET,
    ) as JwtUserPayload;

    const existingUser = await getUserById(decoded.userId);

    if (!existingUser) {
      throw new ApiError(404, "User not found");
    }

    if (!existingUser.isActive) {
      throw new ApiError(403, "Account has been deactivated");
    }

    req.user = decoded;

    next();
  } catch (error) {
    console.log("Error: ", error);
    next(error);
  }
};
