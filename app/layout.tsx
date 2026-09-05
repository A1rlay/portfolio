import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IDENTITY } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
  The title is derived from IDENTITY in ./content.ts, which is also what the
  hero terminal and app/opengraph-image.tsx read. Changing the role in one
  place changes it in the <title>, the OG card and the page together.
*/
const TITLE = `${IDENTITY.name} · ${IDENTITY.role}`;

const DESCRIPTION =
  "Abdel Perez is a software engineer working across test automation, CI/CD and AWS cloud infrastructure on a production multi-tenant SaaS — Playwright and Vitest suites, GitHub Actions pipelines, Docker, Terraform, and production reliability work.";

const SHORT_DESCRIPTION =
  "Software engineer across test automation, CI/CD and AWS cloud infrastructure. Playwright · Vitest · GitHub Actions · Docker · Terraform.";

export const metadata: Metadata = {
  metadataBase: new URL(IDENTITY.siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Abdel Perez",
    "Software Engineer",
    "Test Automation",
    "CI/CD",
    "Cloud Infrastructure",
    "Playwright",
    "Vitest",
    "GitHub Actions",
    "Docker",
    "Terraform",
    "AWS Lambda",
    "QA Automation",
    "Portfolio",
  ],
  authors: [{ name: IDENTITY.name }],
  creator: IDENTITY.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: SHORT_DESCRIPTION,
    url: IDENTITY.siteUrl,
    siteName: IDENTITY.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHORT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1b17",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Opts back into Next 16's scroll-behavior handling on navigation,
      // which it no longer does by default (see upgrading/version-16).
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
