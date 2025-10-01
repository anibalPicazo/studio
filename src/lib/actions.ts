"use server";

import { z } from "zod";
import { rewriteResume, type RewriteResumeInput } from "@/ai/flows/resume-rewrite";

// Contact Form
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // In a real app, you would send an email or save to a database here.
    console.log("Contact form submitted successfully:", validatedFields.data);
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (e) {
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}


// Resume Rewriter
const resumeSchema = z.object({
  resumeDataUri: z.string().startsWith("data:"),
  portfolioText: z.string().min(1),
});

type ResumeRewriteState = {
  rewrittenResume?: string;
  error?: string;
};

export async function generateRewrittenResume(
  input: RewriteResumeInput
): Promise<ResumeRewriteState> {
  const validatedFields = resumeSchema.safeParse(input);

  if (!validatedFields.success) {
    return { error: "Invalid input provided." };
  }

  try {
    const result = await rewriteResume(validatedFields.data);
    return { rewrittenResume: result.rewrittenResume };
  } catch (error) {
    console.error("Error rewriting resume:", error);
    return { error: "Failed to rewrite resume. Please try again." };
  }
}
