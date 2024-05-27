import { z } from "zod";
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SigninType = z.infer<typeof signinInput>;

export const createPostInput = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  published: z.boolean().optional(),
});

export type CreatePostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
  id: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
  published: z.boolean().optional(),
});

export type UpdatePostType = z.infer<typeof updatePostInput>;