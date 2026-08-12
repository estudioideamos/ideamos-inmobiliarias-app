import type { Metadata } from "next";
import InternalPage from "../components/InternalPage";
export const metadata: Metadata = { title: "Preguntas frecuentes | Ideamos Inmobiliarias", description: "Respuestas claras sobre la plataforma, Tokko, implementación, soporte y publicación." };
export default function Page() { return <InternalPage pageKey="preguntas" />; }