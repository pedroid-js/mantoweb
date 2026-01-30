"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <title>Mantossalvo - Iniciativa de microdonaciones para divulgación científica</title>
        <meta name="description" content="Una iniciativa global basada en microdonaciones para apoyar divulgación científica, educación y proyectos relacionados con el manto terrestre." />
        <meta property="og:title" content="Mantossalvo - Iniciativa de microdonaciones" />
        <meta property="og:description" content="Pequeñas aportaciones, a gran escala, para apoyar divulgación científica y educación." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mantossalvo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mantossalvo" />
        <meta name="twitter:description" content="Iniciativa global de microdonaciones para divulgación científica." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <div className="noise-overlay min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
