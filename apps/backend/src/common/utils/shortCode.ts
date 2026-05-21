import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 7);

export function generateShortCode(): string {
  return nanoid();
}
