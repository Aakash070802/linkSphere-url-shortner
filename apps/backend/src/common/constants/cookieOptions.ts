import ENV from "../../config/env.js";

const isProduction = ENV.NODE_ENV === "production";

export const accessTokenCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
} as const;

export const refreshTokenCookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
} as const;
