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

export const metadata: Metadata = {
  title: "Abdel Perez — DevOps Engineer & QA Tester",
  description:
    "Abdel Perez is a DevOps engineer and QA tester who builds reliable pipelines, automates the boring parts, and ships software that stays green.",
  keywords: [
    "Abdel Perez",
    "DevOps",
    "QA",
    "Testing",
    "CI/CD",
    "Automation",
    "Portfolio",
  ],
  authors: [{ name: "Abdel Perez" }],
  openGraph: {
    title: "Abdel Perez — DevOps Engineer & QA Tester",
    description:
      "DevOps engineer and QA tester. Reliable pipelines, thorough testing, software that stays green.",
    type: "website",
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
