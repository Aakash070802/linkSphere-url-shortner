import { z } from "zod";

export const createShortUrlSchema = z.object({
  originalUrl: z.url("Invalid URL format"),
  expiresAt: z.iso.datetime().optional(),
});

export type CreateShortUrlInput = z.infer<typeof createShortUrlSchema>;
