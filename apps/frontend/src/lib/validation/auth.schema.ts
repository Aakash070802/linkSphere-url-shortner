import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Please enter a valid email address.").trim(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(16, "Password cannot exceed 16 characters."),
});

export const signUpSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters.")
      .max(30, "Username cannot exceed 30 characters.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores.",
      ),

    email: z.email("Please enter a valid email address.").trim(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(16, "Password cannot exceed 16 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type SignInFormData = z.infer<typeof signInSchema>;

export type SignUpFormData = z.infer<typeof signUpSchema>;
