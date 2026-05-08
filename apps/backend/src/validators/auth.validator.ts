import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(50),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
