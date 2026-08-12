import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Ideamos Inmobiliarias | Sitio web, gestión y Tokko Broker",
    description: "Un sitio inmobiliario profesional, un panel simple para publicar propiedades y la posibilidad de sincronizar tu cartera con Tokko Broker.",
    openGraph: {
      title: "Una web para mostrar mejor. Un sistema para vender más.",
      description: "Sitio web, panel de gestión e integración opcional con Tokko Broker para inmobiliarias.",
      type: "website",
      locale: "es_AR",
      siteName: "Ideamos Inmobiliarias",
      images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Ideamos Inmobiliarias: sitio web y sistema de gestión" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ideamos Inmobiliarias",
      description: "Una web para mostrar mejor. Un sistema para vender más.",
      images: ["/og-v2.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body id="top" className={`${geistSans.variable} ${geistMono.variable}`}>{children}<FloatingActions /></body></html>;
}