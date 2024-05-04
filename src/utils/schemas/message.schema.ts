import { z } from "astro/zod";

export const MessageSchema = z.object({
  name: z.string().min(4).max(30),
  email: z.string().email(),
  content: z.string().min(50).max(300),
});
