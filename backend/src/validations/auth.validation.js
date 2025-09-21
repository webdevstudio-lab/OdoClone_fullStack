import { z } from 'zod';

const emailSchema = z
  .string()
  .email({ message: "Format de L'email invalide" })
  .min(5)
  .max(250);
const passwordSchema = z
  .string()
  .min(6, { message: 'Le mot de passe doit avoir au moins 6 caractères' })
  .max(50, { message: 'Le mot de passe doit avoir au maximum 50 caractères' });
const registerPasswordSchema = z
  .string()
  .min(6, { message: 'Le mot de passe doit avoir au moins 6 caractères' })
  .max(50, {
    message: 'le mot de passe doit avoir au maximum 50 caractères',
  })
  .refine(
    password =>
      /(?=.*[A-Z])/.test(password) &&
      /(?=.*[a-z])/.test(password) &&
      /(?=.*[0-9])/.test(password),
    {
      message:
        'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre',
    }
  );

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(5, { message: 'Le nom doit avoir au moins 5 caractères' })
      .max(30, { message: 'Le nom doit avoir au maximum 30 caractères' }),
    email: emailSchema,
    password: registerPasswordSchema,
    confirmpassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmpassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmpassword'],
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional(),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z
  .object({
    password: registerPasswordSchema,
    confirmpassword: passwordSchema,
    code: z.string().trim().min(6).max(40),
  })
  .refine(data => data.password === data.confirmpassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmpassword'],
  });

export const verifyEmailSchema = z.object({
  code: z.string().trim().min(6).max(40),
});

export const resendVerifyEmaildSchema = z.object({
  email: emailSchema,
});
