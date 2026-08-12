import type { Metadata } from "next";
import InternalPage from "../components/InternalPage";
export const metadata: Metadata = { title: "Funciones | Ideamos Inmobiliarias", description: "Explorá las funciones para publicar propiedades, ordenar consultas y gestionar tu presencia digital." };
export default function Page() { return <InternalPage pageKey="funciones" />; }