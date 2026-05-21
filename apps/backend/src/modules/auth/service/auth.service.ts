import { createUser, findUserByEmail } from "../repository/auth.repository.js";
import {
  createSession,
  findSessionByRefreshToken,
  invalidateSession,
} from "../repository/session.repository.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import {
  comparePassword,
  hashPassword,
} from "../../../common/utils/password.js";
import {
  generateAccessToken,
  generateRefreshToken,
  hashToken,
  verifyRefreshToken,
} from "../../../common/utils/token.js";
import type { SigninInput, SignUpInput } from "../validator/auth.validator.js";

type SigninMetadata = {
  userAgent?: string | undefined;
  ipAddress?: string | undefined;
};

async function signupService(userData: SignUpInput) {
  const existingUser = await findUserByEmail(userData.email);

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const hashedPassword = await hashPassword(userData.password);

  const newUser = await createUser({
    ...userData,
    password: hashedPassword,
  });

  return newUser;
}

async function signinService(userData: SigninInput, metadata: SigninMetadata) {
  const existingUser = await findUserByEmail(userData.email);

  if (!existingUser) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await comparePassword(
    userData.password,
    existingUser.password,
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const accessToken = generateAccessToken({
    userId: existingUser.id,
    email: existingUser.email,
  });

  const refreshToken = generateRefreshToken({
    userId: existingUser.id,
    email: existingUser.email,
  });

  const hashedRefreshToken = hashToken(refreshToken);

  await createSession({
    userId: existingUser.id,
    refreshToken: hashedRefreshToken,
    userAgent: metadata.userAgent,
    ipAddress: metadata.ipAddress,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return {
    user: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    },
    accessToken,
    refreshToken,
  };
}

async function signoutService(refreshToken: string) {
  const hashedRefreshToken = hashToken(refreshToken);

  const existingSession = await findSessionByRefreshToken(hashedRefreshToken);

  if (existingSession && existingSession.isValid) {
    await invalidateSession(existingSession.id);
  }
}

async function refreshTokenService(
  refreshToken: string,
  metadata: SigninMetadata,
) {
  const hashedRefreshToken = hashToken(refreshToken);

  const existingSession = await findSessionByRefreshToken(hashedRefreshToken);

  if (!existingSession || !existingSession.isValid) {
    throw new ApiError(401, "Invalid refresh token");
  }

  let decoded;

  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch {
    throw new ApiError(401, "Refresh token expired or invalid");
  }

  await invalidateSession(existingSession.id);

  const newAccessToken = generateAccessToken({
    userId: decoded.userId,
    email: decoded.email,
  });

  const newRefreshToken = generateRefreshToken({
    userId: decoded.userId,
    email: decoded.email,
  });

  const hashedNewRefreshToken = hashToken(newRefreshToken);

  await createSession({
    userId: decoded.userId,
    refreshToken: hashedNewRefreshToken,
    userAgent: metadata.userAgent,
    ipAddress: metadata.ipAddress,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
}

export { signupService, signinService, signoutService, refreshTokenService };
