import type { Metadata } from "next";
import InternalPage from "../components/InternalPage";
export const metadata: Metadata = { title: "La Plataforma | Ideamos Inmobiliarias", description: "Conocé la plataforma que reúne sitio web, catálogo, panel y consultas para inmobiliarias." };
export default function Page() { return <InternalPage pageKey="producto" />; }
