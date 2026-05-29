/* eslint-disable */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import localFont from 'next/font/local';

const matrixType = localFont({
  src: [
    {
      path: '../fonts/MatrixType-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MatrixType-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-matrixtype'
});

export const metadata: Metadata = {
  title: "Venvem | Premium AI Ecosystem",
  description: "A luxury platform for AI products, software downloads, and service booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${matrixType.variable} bg-background text-on-background font-body-md min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container antialiased`}
      >
        <div className="bg-grain"></div>

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
