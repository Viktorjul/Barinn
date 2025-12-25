import type { Metadata } from "next";
import { Climate_Crisis, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-custom",
  display: "swap",
});

const subtextFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-orange-squash",
  display: "swap",
});

const paragraphFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-paragraph",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barinn",
  description: "A Next.js web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${climateCrisis.className} ${climateCrisis.variable} ${subtextFont.variable} ${paragraphFont.variable}`}>{children}</body>
    </html>
  );
}