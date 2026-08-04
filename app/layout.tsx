import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Ideamos Inmobiliarias | Web, gestión y Tokko Broker",
    description: "Web inmobiliaria premium con panel autogestionable, publicación de propiedades, gestión de consultas e integración opcional con Tokko Broker.",
    openGraph: {
      title: "Tu web. Tus propiedades. Todo conectado.",
      description: "Web premium, panel de gestión e integración con Tokko Broker para inmobiliarias.",
      type: "website",
      locale: "es_AR",
      siteName: "Ideamos Inmobiliarias",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ideamos Inmobiliarias: web, propiedades y Tokko Broker" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ideamos Inmobiliarias",
      description: "Web premium, panel de gestión e integración con Tokko Broker.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}