import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const american_Purpose = localFont({
  src: "./fonts/American_Purpose.ttf",
  variable: "--font-american-purpose",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elevate'24",
  description: "webpage for Elevate'24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${american_Purpose.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
