import { z } from "zod";

export const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const careerApplicationFieldsSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(7, "Please enter a valid phone number"),
  positionId: z.string().trim().min(1, "Please select a position"),
  linkedin: z
    .string()
    .trim()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  portfolio: z
    .string()
    .trim()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  coverLetter: z
    .string()
    .trim()
    .min(40, "Please share a short note about why you're a fit (at least 40 characters)"),
});

export type CareerApplicationFields = z.infer<typeof careerApplicationFieldsSchema>;
