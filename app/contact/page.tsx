import Section from "@/components/section";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <Section title="Contact">
      <p className="mb-8 max-w-2xl text-muted-foreground">
        Send me a note about roles or collaborations. I typically respond within a day.
      </p>
      <ContactForm />
    </Section>
  );
}
