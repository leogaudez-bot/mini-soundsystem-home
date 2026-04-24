import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Sound System — concept audio domestique",
  description:
    "Landing conceptuelle pour un mini sound system d’appartement/maison, avec business plan et plans vectoriels de principe.",
  openGraph: {
    title: "Mini Sound System — concept audio domestique",
    description:
      "Un mini sound system pensé pour appartement et maison: landing, business plan et plans vectoriels de principe.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Sound System — concept audio domestique",
    description:
      "Landing conceptuelle pour un mini sound system d’appartement/maison.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
