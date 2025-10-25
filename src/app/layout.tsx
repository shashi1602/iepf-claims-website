import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IEPF Claims Pro - Recover Your Unclaimed Shares & Dividends",
  description: "Professional assistance for IEPF claims, lost shares recovery, and dividend collection. Expert guidance to help you reclaim what's rightfully yours.",
  keywords: "IEPF claims, unclaimed shares, dividend recovery, share recovery, transmission of shares, investor assistance",
  authors: [{ name: "Shashikanth Thummanapalli" }],
  openGraph: {
    title: "IEPF Claims Pro - Recover Your Unclaimed Shares & Dividends",
    description: "Professional assistance for IEPF claims, lost shares recovery, and dividend collection.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
