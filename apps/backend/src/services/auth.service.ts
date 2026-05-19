import {
  createUser,
  findUserByEmail,
} from "../repositories/auth.repository.js";
import { ApiError } from "../utils/ApiError.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import type { SigninInput, SignUpInput } from "../validators/auth.validator.js";

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

async function signinService(userData: SigninInput) {
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

export { signupService, signinService };
