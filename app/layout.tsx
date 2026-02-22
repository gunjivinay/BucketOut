import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bucketout.app"),
  title: "BucketOut | Instant Task Marketplace",
  description:
    "BucketOut connects task posters and nearby taskers for instant and general tasks with chat, secure payments, ratings, and built-in safety features.",
  keywords: [
    "task marketplace",
    "gig marketplace",
    "local taskers",
    "instant tasks",
    "BucketOut",
  ],
  openGraph: {
    title: "BucketOut | Instant Task Marketplace",
    description:
      "Post tasks, discover nearby taskers, chat, pay, and manage every task safely in one app.",
    url: "https://bucketout.app",
    siteName: "BucketOut",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BucketOut | Instant Task Marketplace",
    description:
      "A two-sided mobile marketplace for task posters and taskers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}