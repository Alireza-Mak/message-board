import { z } from "zod";

const userSchema = z.object({
    username: z
        .string()
        .trim()
        .min(1, "username or email must be at least 1 characters long")
        .max(50, "username or email must be at most 50 characters long"),
    password: z
        .string()
        .trim()
        .min(1, "password must be at most 64 characters long")
        .max(64, "password must be at most 64 characters long"),
});

export { userSchema };
