import { z } from "zod";
import { CONTACT_EMAIL } from "@/data/legal";

export const contactTopics = ["Product question", "Early access", "Sales", "Partnership", "Feedback", "Other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  topic: z.enum(contactTopics),
  message: z.string().trim().min(1, "Please enter a message").max(2000),
});
export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a prefilled email to the company address. */
export function buildContactMailto(v: ContactInput) {
  const subject = `[${v.topic}] Message from ${v.name}`;
  const body = `${v.message}\n\n— ${v.name}${v.company ? `, ${v.company}` : ""}\n${v.email}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Submission handler. No email service is connected yet, so this opens the
 * visitor's email app with the message filled in. Replace the body with a
 * call to a real sending service once one is configured.
 */
export async function submitContact(v: ContactInput): Promise<"handoff"> {
  window.location.href = buildContactMailto(v);
  return "handoff";
}
