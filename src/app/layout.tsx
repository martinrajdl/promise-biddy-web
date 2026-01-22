import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/*
 * Root Layout
 *
 * Uses system fonts for fast loading and native feel.
 * The layout is intentionally simple - just header, main content, footer.
 * No dark mode toggle since we want a consistent, calm experience.
 */

export const metadata: Metadata = {
  title: "Promise Buddy - A gentle habit companion",
  description:
    "Promise Buddy helps you keep personal promises by caring for a virtual buddy. No shame, no pressure. Just gentle support for the goals that matter to you.",
  keywords: [
    "habit tracker",
    "sobriety app",
    "quit smoking",
    "personal goals",
    "gentle accountability",
    "habit companion",
  ],
  openGraph: {
    title: "Promise Buddy - A gentle habit companion",
    description:
      "An app to help you help yourself. Keep personal promises with the support of a virtual buddy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
