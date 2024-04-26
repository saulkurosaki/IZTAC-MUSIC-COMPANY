import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "El nombre debe contener al menos 3 caracteres"),
  number: z
    .string()
    .max(14, "El numero debe contener como máximo 14 caracteres"),
  email: z.string().email("Correo invalido"),
  company: z
    .string()
    .max(30, "La empresa debe contener como máximo 30 caracteres"),
  matter: z
    .string()
    .min(5, "El asunto debe contener al menos 5 caracteres")
    .max(120, "El asunto debe contener como máximo 120 caracteres"),
  description: z
    .string()
    .min(15, "La descripción debe contener al menos 15 caracteres")
    .max(300, "La descripción debe contener máximo 300 caracteres"),
});
