import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bungee, Spectral_SC } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

const spectral = Spectral_SC({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});

export const metadata: Metadata = {
  title: "Party Decoration",
  description: "Decoration Organizer Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)] font-sans `${bungee.variable} ${spectral.variable}`">
        <LenisProvider> 
        {children}
        </LenisProvider>
      </body>
    </html>
  );
}