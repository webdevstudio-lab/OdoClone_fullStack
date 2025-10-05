import { z } from 'zod';

export const clientSchema = z.object({
  name: z
    .string()
    .uppercase()
    .min(2, { message: 'Le nom doit avoir au moins 2 caractères' })
    .max(100)
    .trim(),
  email: z
    .string()
    .email({ message: "Format de L'email invalide" })
    .min(5)
    .max(250),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Le format du numero de telephone n'est pas valide" })
    .max(14, { message: "Le format du numero de telephone n'est pas valide" })
    .refine(phone => /^0[1-9]{1}[0-9]{8}$/.test(phone), {
      message: "Le format du numero de telephone n'est pas valide",
    }),
  address: z
    .string()
    .uppercase()
    .min(2, { message: "L'adresse doit avoir au moins 2 caractères" })
    .max(250)
    .optional(),
  logo: z.string().min(5).max(250).optional(),
});
