import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://jersonmorrow.com"),
  title: {
    default: "Jerson Morrow",
    template: "%s | Jerson Morrow",
  },
  description: "Developer, Software Engineer.",
  openGraph: {
    title: "Jerson Morrow",
    description: "Developer, Software Engineer.",
    url: "https://jersonmorrow.com",
    siteName: "Jerson Morrow",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: unknown[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black dark:text-white bg-white dark:bg-gradient-radial",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
