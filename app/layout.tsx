// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/side-footer";
import CommandMenu from "@/components/command-menu";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Your Name — Portfolio";
const siteDesc =
  "Software Engineer (Data Science). Selected projects, case studies, and impact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s · Your Name",
  },
  description: siteDesc,
  keywords: [
    "Software Engineer",
    "Data Science",
    "Machine Learning",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: siteName,
    description: siteDesc,
    siteName: "Your Name",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Your Name" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDesc,
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <CommandMenu />
          <main id="main" className="mx-auto w-full max-w-6xl px-4">{children}</main>
          <SiteFooter />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
