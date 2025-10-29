"use client";

import { useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage, type ContactState } from "@/app/contact/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const initialState: ContactState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </Button>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState<ContactState, FormData>(
    async (prev, fd) => {
      const res = await sendMessage(prev, fd);
      if (res.ok) formRef.current?.reset();
      return res;
    },
    initialState
  );

  return (
    <form ref={formRef} action={formAction} className="grid max-w-lg gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={6} required />
      </div>

      {/* honeypot (hidden) */}
      <input className="hidden" tabIndex={-1} autoComplete="off" name="hp" />

      <div className="flex items-center gap-3">
        <SubmitButton />
        {state?.ok && !state?.dev && (
          <span className="text-sm text-green-500" role="status">
            Thanks! I’ll reply soon.
          </span>
        )}
        {state?.ok && state?.dev && (
          <span className="text-sm text-amber-500" role="status">
            Dev mode: message logged to server console (not emailed).
          </span>
        )}
        {state?.error && (
          <span className="text-sm text-red-500" role="status">
            {state.error}
          </span>
        )}
      </div>
    </form>
  );
}