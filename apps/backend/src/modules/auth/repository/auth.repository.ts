import { db } from "../../../config/db.js";
import { users } from "../../../db/schema.js";
import type { InferInsertModel } from "drizzle-orm";
import { eq } from "drizzle-orm";

type CreateUserInput = InferInsertModel<typeof users>;

async function createUser(userData: CreateUserInput) {
  const [newUser] = await db.insert(users).values(userData).returning({
    id: users.id,
    name: users.name,
    email: users.email,
    isActive: users.isActive,
    createdAt: users.createdAt,
  });

  return newUser;
}

async function findUserByEmail(email: string) {
  const [user] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      password: users.password,
      isActive: users.isActive,
    })
    .from(users)
    .where(eq(users.email, email));

  return user;
}

async function getUserById(userId: string) {
  const [user] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      isActive: users.isActive,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.id, userId));

  return user;
}

async function deactivateUser(userId: string) {
  const [updatedUser] = await db
    .update(users)
    .set({ isActive: false })
    .where(eq(users.id, userId))
    .returning({
      id: users.id,
      name: users.name,
      email: users.email,
      isActive: users.isActive,
    });

  return updatedUser;
}

export { createUser, findUserByEmail, getUserById, deactivateUser };
