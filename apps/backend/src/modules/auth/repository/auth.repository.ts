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
    })
    .from(users)
    .where(eq(users.email, email));

  return user;
}

export { createUser, findUserByEmail };
