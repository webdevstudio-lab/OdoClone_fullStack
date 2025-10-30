import zod from "zod";

const emailSchema = zod.string().email().min(5).max(250);
const passwordSchema = zod
  .string()
  .min(6)
  .max(50)
  .refine(
    (password) =>
      /(?=.*[A-Z])/.test(password) &&
      /(?=.*[a-z])/.test(password) &&
      /(?=.*[0-9])/.test(password)
  );
const nameSchema = zod.string().min(2).max(100);

export const validateEmail = (email) => {
  if (!email) {
    return "L'adresse email est obligatoire";
  }
  if (emailSchema.safeParse(email).error) {
    return "Veuillez entrer une adresse email valide";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Le mot de passe est obligatoire";
  }
  if (passwordSchema.safeParse(password).error) {
    return "Le mot de passe doit contenir au moins 6 caractères, avec une lettre majuscule, une lettre minuscule et un chiffre";
  }

  return "";
};

export const validateName = (name) => {
  if (!name) {
    return "Le nom est obligatoire";
  }
  if (nameSchema.safeParse(name).error) {
    return "Le nom doit avoir au moins 2 caractères";
  }
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "La confirmation du mot de passe est obligatoire";
  }
  if (password !== confirmPassword) {
    return "Les mots de passe ne correspondent pas";
  }
  return "";
};

export const validateActivationCode = (code) => {
  if (!code) {
    return "Le code d'activation est obligatoire";
  }
  if (code.length !== 6) {
    return "Le code d'activation doit avoir 6 caractères";
  }
  if (!/^[0-9]+$/.test(code)) {
    return "Le code d'activation doit contenir uniquement des chiffres";
  }

  return "";
};
