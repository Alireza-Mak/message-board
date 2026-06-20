import { z } from "zod";

const messageSchema = z.object({
    message: z
        .string()
        .trim()
        .min(3, "Message must be at least 3 characters long")
        .max(50, "Message must be at most 50 characters long"),
});

export { messageSchema };
