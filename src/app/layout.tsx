import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lora AI | Intelligent Operations for Distributors",
  description:
    "AI agents that execute pricing, procurement, and demand planning for SKU-intensive distributors. Express your strategy — Lora executes it.",
  keywords: [
    "AI pricing",
    "procurement automation",
    "demand planning",
    "distributor operations",
    "food distribution",
    "margin optimization",
    "SKU management",
  ],
  openGraph: {
    title: "Lora AI | Intelligent Operations for Distributors",
    description:
      "AI agents that execute pricing, procurement, and demand planning for distributors.",
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
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
