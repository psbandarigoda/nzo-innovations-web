import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email"),
  company: z.string().trim().min(1, "Company name is required"),
  role: z.string().trim().optional(),
  message: z.string().trim().min(20, "Please provide more detail about your needs"),
  jobApplication: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
