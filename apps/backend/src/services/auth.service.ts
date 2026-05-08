import { createUser } from "../repositories/auth.repository.js";
import { hashPassword } from "../utils/password.js";
import type { SignUpInput } from "../validators/auth.validator.js";

async function signupService(userData: SignUpInput) {
  const hashedPassword = await hashPassword(userData.password);

  const newUser = await createUser({
    ...userData,
    password: hashedPassword,
  });

  return newUser;
}

export { signupService };
