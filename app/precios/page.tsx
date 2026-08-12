import type { Metadata } from "next";
import BrandLogo from "../components/BrandLogo";
import Marquee from "../components/Marquee";
import PricingPlans from "./PricingPlans";

export const metadata: Metadata = {
  title: "Precios de lanzamiento | Ideamos Inmobiliarias",
  description: "Dos planes para crear tu web inmobiliaria, gestionar propiedades y sumar Tokko Broker cuando lo necesites.",
};

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20conocer%20los%20planes%20de%20lanzamiento";
const Arrow = () => <span aria-hidden="true">↗</span>;

const comparison = [
  ["Capacidad de propiedades", "Hasta 2.000", "Ilimitadas"],
  ["Soporte técnico", "Standard", "Plus"],
  ["Tiempo de respuesta", "Hasta 5 días", "Hasta 1 día"],
  ["Web diseñada para tu marca", "✓", "✓"],
  ["Panel autogestionable", "✓", "✓"],
  ["Consultas con contexto", "✓", "✓"],
  ["Atención por email y chatbot", "✓", "✓"],
  ["WhatsApp y videollamadas", "✓", "✓"],
  ["Cambios asistidos", "✓", "✓"],
  ["Integración con Tokko Broker", "Opcional", "Opcional"],
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <header className="topbar pricing-topbar">
        <a className="brand" href="/" aria-label="Ideamos Inmobiliarias, inicio"><BrandLogo /></a>
        <nav aria-label="Navegación de precios">
          <a href="/#producto">Producto</a>
          <a href="/#funciones">Funciones</a>
          <a href="/#tokko">Tokko Broker</a>
          <a className="active" href="/precios">Precios</a>
        </nav>
        <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
      </header>

      <section className="pricing-hero">
        <div className="pricing-hero-copy">
          <p className="eyebrow"><span /> Precios de lanzamiento</p>
          <h1>Dos planes.<br /><em>Todo lo que necesitás.</em></h1>
          <p>Elegí la capacidad y el nivel de acompañamiento que mejor se adapta a tu inmobiliaria. La plataforma, la web y las funciones comerciales están incluidas desde el inicio.</p>
          <div className="pricing-hero-actions">
            <a className="button button-accent" href="#planes">Ver planes <Arrow /></a>
            <a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Explorar la demo <Arrow /></a>
          </div>
        </div>
        <aside className="pricing-principle">
          <span>LANZAMIENTO / 2026</span>
          <strong>Precios claros para empezar ahora</strong>
          <p>Dos opciones simples, sin módulos confusos. Cambia la capacidad del catálogo y la prioridad de soporte.</p>
          <div><i /> Todas las funcionalidades incluidas</div>
          <div><i /> Sin permanencia forzada</div>
          <div><i /> Tokko disponible como integración</div>
        </aside>
      </section>

      <Marquee
        label="Beneficios de los planes de lanzamiento"
        tone="paper"
        items={["PRECIO DE LANZAMIENTO", "DOS PLANES CLAROS", "WEB + GESTIÓN", "TOKKO OPCIONAL", "SOPORTE INCLUIDO"]}
      />

      <section className="pricing-scopes section" id="planes">
        <div className="section-heading centered narrow">
          <p className="eyebrow"><span /> Elegí tu plan</p>
          <h2>La misma plataforma.<br />El respaldo que <em>necesitás.</em></h2>
          <p>Inmobiliaria cubre una operación profesional completa. Inmobiliaria Plus suma catálogo ilimitado y soporte prioritario.</p>
        </div>
        <PricingPlans />
      </section>

      <section className="pricing-variables">
        <div className="pricing-variables-intro">
          <p className="eyebrow light"><span /> Incluido desde el inicio</p>
          <h2>Una solución completa.<br /><em>No un sitio aislado.</em></h2>
          <p>En ambos planes recibís la experiencia pública y las herramientas internas necesarias para operar con claridad.</p>
        </div>
        <div className="variable-list">
          <article><span>01</span><div><h3>Web diseñada para tu marca</h3><p>Identidad, catálogo, filtros, fichas, contenidos y puntos de contacto.</p></div></article>
          <article><span>02</span><div><h3>Panel de gestión</h3><p>Propiedades, emprendimientos, destacados, estados y consultas en un solo lugar.</p></div></article>
          <article><span>03</span><div><h3>Puesta online acompañada</h3><p>Configuración, publicación, capacitación y soporte para comenzar a trabajar.</p></div></article>
          <article><span>04</span><div><h3>Tokko cuando lo necesites</h3><p>La integración es opcional para inmobiliarias que ya operan con Tokko Broker.</p></div></article>
        </div>
      </section>

      <section className="pricing-compare section">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Comparación rápida</p><h2>Dos planes.<br /><em>Cero dudas.</em></h2></div>
          <p>La diferencia está en el volumen de cartera y el nivel de prioridad. El producto completo está en ambos.</p>
        </div>
        <div className="comparison-table" role="table" aria-label="Comparación de planes">
          <div className="comparison-row comparison-head two-plans" role="row"><span>CAPACIDAD</span><b>INMOBILIARIA</b><b>INMOBILIARIA PLUS</b></div>
          {comparison.map(([label, standard, plus]) => (
            <div className="comparison-row two-plans" role="row" key={label}>
              <strong>{label}</strong><span>{standard}</span><span>{plus}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-faq section">
        <div>
          <p className="eyebrow"><span /> Antes de elegir</p>
          <h2>Lo importante,<br /><em>sin letra chica.</em></h2>
        </div>
        <div className="pricing-faq-list">
          <details open><summary>¿Qué incluye el precio de lanzamiento?<span>−</span></summary><p>Incluye la plataforma, la web adaptada a tu marca, el panel de gestión, las funciones publicadas en cada plan, la puesta online y el soporte correspondiente.</p></details>
          <details><summary>¿Tokko Broker es obligatorio?<span>+</span></summary><p>No. Podés administrar toda la cartera desde el panel de Ideamos. La conexión con Tokko es opcional y se define durante la implementación.</p></details>
          <details><summary>¿Cuál es la diferencia entre los dos planes?<span>+</span></summary><p>Inmobiliaria admite hasta 2.000 propiedades y soporte Standard. Plus ofrece propiedades ilimitadas, soporte prioritario y respuesta de hasta un día.</p></details>
          <details><summary>¿Puedo cambiar de plan más adelante?<span>+</span></summary><p>Sí. Podés comenzar con Inmobiliaria y pasar a Plus cuando aumente tu cartera o necesites una prioridad de soporte mayor.</p></details>
        </div>
      </section>

      <section className="pricing-final">
        <div>
          <p className="eyebrow light"><span /> Próximo paso</p>
          <h2>Elegí el plan.<br />Nosotros te acompañamos.</h2>
          <p>Coordinamos una demostración, revisamos tu operación y dejamos claro el recorrido de implementación.</p>
        </div>
        <div className="pricing-final-actions">
          <a className="button button-accent" href={contactUrl}>Consultar por los planes <Arrow /></a>
          <a className="text-link" href={demoUrl} target="_blank" rel="noreferrer">Ver demo funcionando <Arrow /></a>
        </div>
      </section>

      <footer className="pricing-footer">
        <a className="brand footer-brand" href="/"><BrandLogo /></a>
        <p>Web + gestión para inmobiliarias.</p>
        <nav><a href="/">Inicio</a><a href={demoUrl} target="_blank" rel="noreferrer">Demo ↗</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos ↗</a></nav>
        <span>© 2026 IDEAMOS</span>
      </footer>
    </main>
  );
}