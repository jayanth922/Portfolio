"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Write at least 10 characters."),
  hp: z.string().max(0).optional(), // honeypot: must be empty
});

export type ContactState = { ok?: boolean; error?: string; dev?: boolean };

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    hp: formData.get("hp"),
  });

  if (!parsed.success) {
    const first =
      Object.values(parsed.error.flatten().fieldErrors).flat()[0] ??
      "Invalid input";
    return { ok: false, error: first };
  }

  // bot filled the hidden field → pretend success but drop it
  if (parsed.data.hp) return { ok: true };

  const { name, email, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.log("[DEV] CONTACT MESSAGE:", { name, email, message });
    return { ok: true, dev: true };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Portfolio <noreply@example.com>",
      to: [process.env.CONTACT_TO || "you@example.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });
    return { ok: true };
  } catch (e) {
    console.error(e);
    return { ok: false, error: "Failed to send. Please try again later." };
  }
}