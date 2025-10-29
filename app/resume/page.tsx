import type { Metadata } from "next";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé — Your Name",
  openGraph: {
    title: "Résumé — Your Name",
    description: "Résumé — Your Name",
    url: "/resume",
  },
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Section title="Résumé">
      <div className="mb-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/resume.pdf" download>
            Download résumé (PDF)
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>

      <div className="rounded-xl border bg-muted/20 p-2">
        {/* Most browsers render PDF in <iframe>. Fallback link is inside. */}
        <iframe
          src="/resume.pdf"
          title="Résumé PDF"
          className="h-[80vh] w-full rounded-lg"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          If the PDF doesn’t load,{" "}
          <a className="underline" href="/resume.pdf" download>
            download it here
          </a>
          .
        </p>
      </div>
    </Section>
  );
}