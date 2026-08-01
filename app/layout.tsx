import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://abdel-perez.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abdel Perez — Platform & Test Infrastructure Engineer",
  description:
    "Abdel Perez owns test/CI infrastructure and observability end-to-end on production multi-tenant SaaS — building reliable pipelines, DevOps infrastructure (AWS Lambda, Terraform, Docker), and the tests that keep software honest.",
  keywords: [
    "Abdel Perez",
    "Platform Engineer",
    "Test Infrastructure",
    "DevOps",
    "QA",
    "CI/CD",
    "Observability",
    "AWS Lambda",
    "Terraform",
    "Portfolio",
  ],
  authors: [{ name: "Abdel Perez" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdel Perez — Platform & Test Infrastructure Engineer",
    description:
      "Owns test/CI infrastructure and observability end-to-end on production multi-tenant SaaS. CI/CD · observability · reliability.",
    url: SITE_URL,
    siteName: "Abdel Perez",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdel Perez — Platform & Test Infrastructure Engineer",
    description:
      "Owns test/CI infrastructure and observability end-to-end on production multi-tenant SaaS. CI/CD · observability · reliability.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1b17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
