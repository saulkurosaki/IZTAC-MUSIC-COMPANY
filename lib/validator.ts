import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe contener al menos 2 caracteres"),
  number: z
    .string()
    .min(8, "El numero debe contener al menos 8 caracteres")
    .max(14, "El numero debe contener como máximo 14 caracteres"),
  email: z.string().email(),
  company: z
    .string()
    .min(3, "El nombre de la empresa debe contener al menos 2 caracteres"),
  matter: z
    .string()
    .min(5, "El asunto debe contener al menos 5 caracteres")
    .max(120, "El asunto debe contener como máximo 120 caracteres"),
  description: z
    .string()
    .min(15, "La descripción debe contener al menos 15 caracteres"),
});
