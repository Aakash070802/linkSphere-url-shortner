import { db } from "../../../config/db.js";
import { sessions } from "../../../db/schema.js";
import type { InferInsertModel } from "drizzle-orm";
import { eq, and } from "drizzle-orm";

type CreateSessionInput = InferInsertModel<typeof sessions>;

async function createSession(sessionData: CreateSessionInput) {
  const [session] = await db.insert(sessions).values(sessionData).returning();

  return session;
}

async function findSessionByRefreshToken(refreshToken: string) {
  const [session] = await db
    .select()
    .from(sessions)
    .where(eq(sessions.refreshToken, refreshToken));

  return session;
}

async function invalidateSession(sessionId: string) {
  const [session] = await db
    .update(sessions)
    .set({ isValid: false })
    .where(and(eq(sessions.id, sessionId), eq(sessions.isValid, true)))
    .returning();

  return session;
}

export { createSession, findSessionByRefreshToken, invalidateSession };
export type { CreateSessionInput };
