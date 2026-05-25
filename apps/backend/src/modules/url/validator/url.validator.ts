import { z } from "zod";

export const createShortUrlSchema = z.object({
  originalUrl: z.url("Invalid URL format"),
  expiresAt: z.iso.datetime().optional(),
});

export const updateShortUrlSchema = z.object({
  originalUrl: z.url("Invalid URL format"),
  expiresAt: z.iso.datetime().optional(),
});

export type CreateShortUrlInput = z.infer<typeof createShortUrlSchema>;

export type UpdateShortUrlInput = z.infer<typeof updateShortUrlSchema>;
