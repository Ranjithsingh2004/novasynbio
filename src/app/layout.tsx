import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NovaSyn Biosciences — Engineering the Future of Human Health",
  description:
    "NovaSyn Biosciences pioneers AI-driven drug discovery and next-generation gene therapies to transform how humanity fights disease. Explore our research in precision medicine, biomarker discovery, and clinical analytics.",
  keywords: [
    "biotechnology",
    "gene therapy",
    "AI drug discovery",
    "precision medicine",
    "biotech company",
    "NovaSyn",
    "CRISPR",
    "clinical trials",
    "molecular biology",
  ],
  openGraph: {
    title: "NovaSyn Biosciences — Engineering the Future of Human Health",
    description:
      "Pioneering AI-driven drug discovery and next-generation gene therapies to transform how humanity fights disease.",
    type: "website",
    locale: "en_US",
    siteName: "NovaSyn Biosciences",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaSyn Biosciences",
    description:
      "Pioneering AI-driven drug discovery and next-generation gene therapies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-text-primary`}
      >
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
