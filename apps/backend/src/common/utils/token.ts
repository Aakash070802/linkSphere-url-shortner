import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { type StringValue } from "ms";
import ENV from "../../config/env.js";
import crypto from "node:crypto";

type JwtUserPayload = {
  userId: string;
  email: string;
};

function generateAccessToken(payload: JwtUserPayload): string {
  const signOptions: SignOptions = {
    expiresIn: ENV.ACCESS_EXPIRES_IN as StringValue,
  };

  return jwt.sign(payload, ENV.ACCESS_TOKEN_SECRET as Secret, signOptions);
}

function generateRefreshToken(payload: JwtUserPayload): string {
  const signOptions: SignOptions = {
    expiresIn: ENV.REFRESH_EXPIRES_IN as StringValue,
  };

  return jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET as Secret, signOptions);
}

function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function verifyRefreshToken(token: string): JwtUserPayload {
  return jwt.verify(
    token,
    ENV.REFRESH_TOKEN_SECRET as Secret,
  ) as JwtUserPayload;
}

export {
  generateAccessToken,
  generateRefreshToken,
  hashToken,
  verifyRefreshToken,
};

export type { JwtUserPayload };
