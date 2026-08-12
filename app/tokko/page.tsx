import type { Metadata } from "next";
import InternalPage from "../components/InternalPage";
export const metadata: Metadata = { title: "Integración con Tokko Broker | Ideamos Inmobiliarias", description: "Conectá el inventario de Tokko Broker con una web inmobiliaria diseñada para tu marca." };
export default function Page() { return <InternalPage pageKey="tokko" />; }