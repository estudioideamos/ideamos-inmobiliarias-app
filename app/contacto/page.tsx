import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PremiumFooter from "../components/PremiumFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contacto | Ideamos Inmobiliarias",
  description: "Contactá a Ideamos Inmobiliarias para conocer la plataforma, coordinar una demostración o consultar por los planes.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader active="contacto" />
      <section className="internal-hero contact-hero">
        <div className="internal-hero-copy">
          <p className="eyebrow light"><span /> Contacto</p>
          <h1>Conozcamos tu inmobiliaria.<br /><em>Hablemos de tu próxima web.</em></h1>
          <p>Escribinos para conocer la plataforma, coordinar una demostración o consultar por los planes.</p>
        </div>
        <aside className="internal-hero-stat"><strong>01</strong><span>CONTACTO / RESPUESTA DIRECTA</span><i /></aside>
      </section>
      <section className="contact-page-main section">
        <div className="contact-page-aside">
          <p className="eyebrow"><span /> Datos de contacto</p>
          <h2>Estamos para<br /><em>responderte.</em></h2>
          <div className="contact-data contact-page-data">
            <a href="https://wa.me/5491167681777" target="_blank" rel="noreferrer"><span>WHATSAPP</span><b>+54 9 11 6768 1777</b><i>↗</i></a>
            <a href="mailto:hola@ideamos.ar"><span>EMAIL</span><b>hola@ideamos.ar</b><i>↗</i></a>
            <div><span>BASE</span><b>Buenos Aires, Argentina</b><i>AR</i></div>
          </div>
        </div>
        <ContactForm />
      </section>
      <PremiumFooter showContactSection={false} />
    </main>
  );
}
