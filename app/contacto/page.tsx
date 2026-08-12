import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PremiumFooter from "../components/PremiumFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contacto | Ideamos Inmobiliarias",
  description: "Coordiná una demostración de Ideamos Inmobiliarias y recibí una recomendación para tu web, gestión de propiedades e integración con Tokko Broker.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader active="contacto" />
      <section className="internal-hero contact-hero">
        <div className="internal-hero-copy">
          <p className="eyebrow light"><span /> Contacto</p>
          <h1>Conozcamos tu operación.<br /><em>Diseñemos el próximo paso.</em></h1>
          <p>Una conversación breve alcanza para entender tu cartera, tus herramientas actuales y qué necesita tu inmobiliaria para mostrar mejor y trabajar con más claridad.</p>
        </div>
        <aside className="internal-hero-stat"><strong>01</strong><span>CHARLA / UNA PROPUESTA CLARA</span><i /></aside>
      </section>
      <section className="contact-page-main section">
        <div className="contact-page-aside">
          <p className="eyebrow"><span /> Sin formularios eternos</p>
          <h2>Contanos lo esencial.<br /><em>Nosotros hacemos las preguntas correctas.</em></h2>
          <p>Recibimos tu consulta directamente por WhatsApp y coordinamos una demostración enfocada en tu operación real.</p>
          <div className="contact-page-promises"><span><b>01</b> Respuesta directa</span><span><b>02</b> Demo personalizada</span><span><b>03</b> Propuesta sin letra chica</span></div>
        </div>
        <ContactForm />
      </section>
      <PremiumFooter showContactSection={false} />
    </main>
  );
}
