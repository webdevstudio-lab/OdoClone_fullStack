import { z } from 'zod';

export const devisSchema = z.object({
  description: z.string().trim().optional(),
});

export const itemSchema = z.object({
  description: z
    .string()
    .trim()
    .max(100, {
      message: 'La description doit avoir au maximum 100 caractères',
    })
    .min(1, { message: 'La description doit avoir au moins 1 caractères' }),
  unite: z
    .string()
    .trim()
    .max(10, {
      message: 'La unité doit avoir au maximum 100 caractères',
    })
    .min(1, { message: 'La unité doit avoir au moins 1 caractères' }),
  quantity: z.number(),
  unitePrice: z.number(),
});
