import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const clashDisplayBold = localFont({
  src: "./fonts/ClashDisplay-Bold.otf",
  variable: "--font-clash-bold",
  display: "swap",
});

const clashDisplayRegular = localFont({
  src: "./fonts/ClashDisplay-Regular.otf",
  variable: "--font-clash-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barinn",
  description: "A Next.js web application",
};

//dev branch
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplayBold.variable} ${clashDisplayRegular.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}