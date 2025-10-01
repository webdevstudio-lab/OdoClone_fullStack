import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit avoir au moins 2 caractères' })
    .trim(),
});

export const userPasswordSchema = z.object({
  oldPassword: z.string().trim(),
  newPassword: z
    .string()
    .min(6, { message: 'Le mot de passe doit avoir au moins 6 caractères' })
    .max(50, { message: 'Le mot de passe doit avoir au maximum 50 caractères' })
    .refine(
      password =>
        /(?=.*[A-Z])/.test(password) &&
        /(?=.*[a-z])/.test(password) &&
        /(?=.*[0-9])/.test(password),
      {
        message:
          'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre',
      }
    ),
});
