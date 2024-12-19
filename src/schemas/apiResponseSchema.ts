// src/schemas/apiResponseSchema.ts

import { z } from "zod";

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().nullable(),
  error: z
    .object({
      code: z.string(),
      message: z.string(),
      details: z.any().optional(),
    })
    .nullable()
    .optional(),
  meta: z
    .object({
      timestamp: z.string(),
    })
    .catchall(z.any())
    .optional(),
});
