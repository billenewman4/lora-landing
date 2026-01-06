import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lora AI | Intelligent Operations for Distributors & Manufacturers",
  description:
    "AI that prices, forecasts, and reorders — so you don't have to. Surface hidden margin, prevent stockouts, and make data-backed decisions.",
  keywords: [
    "AI pricing",
    "demand forecasting",
    "inventory management",
    "distribution",
    "manufacturing",
    "CPG",
    "operations",
  ],
  openGraph: {
    title: "Lora AI | Intelligent Operations",
    description:
      "AI that prices, forecasts, and reorders — so you don't have to.",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
