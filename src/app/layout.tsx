// src/app/layout.tsx  ← FINAL VERSION
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chaloletsgo – Driver First Cab",
  description: "India's fairest cab platform – 8 AM & 8 PM auto payouts",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>chaloletsgo</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}