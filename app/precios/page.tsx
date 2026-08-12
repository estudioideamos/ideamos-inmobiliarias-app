import type { Metadata } from "next";
import BrandLogo from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "Opciones y precios | Ideamos Inmobiliarias",
  description: "Conocé los alcances disponibles para crear tu web inmobiliaria, gestionar propiedades y conectar Tokko Broker.",
};

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20una%20propuesta%20para%20mi%20inmobiliaria";

const Check = () => <span className="check" aria-hidden="true">✓</span>;
const Arrow = () => <span aria-hidden="true">↗</span>;

const scopes = [
  {
    number: "01",
    eyebrow: "ALCANCE INICIAL",
    title: "Presencia inmobiliaria",
    copy: "Para profesionalizar la exhibición de tu cartera con una experiencia propia, clara y preparada para convertir visitas en consultas.",
    icon: "/generated-icons/process-discovery.webp",
    includes: ["Diseño adaptado a tu marca", "Catálogo y fichas completas", "Buscador con filtros", "WhatsApp y formularios", "Experiencia mobile y base SEO"],
  },
  {
    number: "02",
    eyebrow: "MÁS ELEGIDO",
    title: "Operación digital",
    copy: "La web y el sistema trabajando juntos para que tu equipo publique, edite y siga oportunidades desde un único lugar.",
    icon: "/generated-icons/process-design.webp",
    featured: true,
    includes: ["Todo lo del alcance inicial", "Panel autogestionable", "Propiedades y emprendimientos", "Consultas centralizadas", "Capacitación y puesta online"],
  },
  {
    number: "03",
    eyebrow: "INTEGRACIÓN OPCIONAL",
    title: "Ecosistema con Tokko",
    copy: "Para inmobiliarias que ya operan con Tokko Broker y necesitan llevar ese inventario a una web diseñada para su marca.",
    icon: "/generated-icons/process-launch.webp",
    includes: ["Todo lo de operación digital", "Conexión con Tokko Broker", "Mapeo y prueba de catálogo", "Sincronización de fotos y fichas", "Acompañamiento de lanzamiento"],
  },
];

const comparison = [
  ["Sitio diseñado para tu marca", true, true, true],
  ["Catálogo, filtros y fichas", true, true, true],
  ["Panel para publicar y editar", false, true, true],
  ["Gestión de consultas", false, true, true],
  ["Emprendimientos", "Opcional", true, true],
  ["Conexión con Tokko Broker", false, false, true],
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <header className="topbar pricing-topbar">
        <a className="brand" href="/" aria-label="Ideamos Inmobiliarias, inicio"><BrandLogo /></a>
        <nav aria-label="Navegación de precios">
          <a href="/#ejemplo">Producto</a>
          <a href="/#funciones">Funciones</a>
          <a href="/#tokko">Tokko Broker</a>
          <a className="active" href="/precios">Precios</a>
        </nav>
        <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
      </header>

      <section className="pricing-hero">
        <div className="pricing-hero-copy">
          <p className="eyebrow"><span /> Opciones y precios</p>
          <h1>Un alcance claro.<br /><em>Una inversión con sentido.</em></h1>
          <p>No vendemos una plantilla genérica. Definimos la propuesta según tu marca, cartera, contenidos, forma de trabajo y necesidad de integración.</p>
          <div className="pricing-hero-actions">
            <a className="button button-accent" href={contactUrl}>Pedir una cotización <Arrow /></a>
            <a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Explorar la demo <Arrow /></a>
          </div>
        </div>
        <aside className="pricing-principle">
          <span>CRITERIO / 01</span>
          <strong>Sin precios inventados</strong>
          <p>Primero entendemos qué necesita tu inmobiliaria. Después recibís una propuesta con alcance, etapas y opcionales bien separados.</p>
          <div><i /> Relevamiento breve</div>
          <div><i /> Propuesta detallada</div>
          <div><i /> Tokko solo si lo necesitás</div>
        </aside>
      </section>

      <section className="pricing-scopes section">
        <div className="section-heading centered narrow">
          <p className="eyebrow"><span /> Configuraciones posibles</p>
          <h2>Elegí desde dónde<br />querés <em>empezar.</em></h2>
          <p>Los alcances se pueden ajustar y combinar. La inversión final se cotiza según el punto de partida real de tu inmobiliaria.</p>
        </div>
        <div className="scope-grid">
          {scopes.map((scope) => (
            <article className={scope.featured ? "scope-card featured" : "scope-card"} key={scope.number}>
              <div className="scope-card-top"><span>{scope.number}</span><small>{scope.eyebrow}</small></div>
              <div className="scope-icon"><img src={scope.icon} alt="" /></div>
              <h2>{scope.title}</h2>
              <p>{scope.copy}</p>
              <div className="scope-price"><small>INVERSIÓN</small><strong>Cotización personalizada</strong><span>según alcance y operación</span></div>
              <ul>{scope.includes.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
              <a className={scope.featured ? "button button-accent full" : "button button-soft full"} href={contactUrl}>Cotizar este alcance <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-variables">
        <div className="pricing-variables-intro">
          <p className="eyebrow light"><span /> Cómo cotizamos</p>
          <h2>Cuatro variables.<br /><em>Todo transparente.</em></h2>
          <p>La propuesta muestra qué se incluye, qué es opcional y qué depende de la información que ya tengas disponible.</p>
        </div>
        <div className="variable-list">
          <article><span>01</span><div><h3>Identidad y contenidos</h3><p>Logo, sistema visual, textos, secciones y material disponible.</p></div></article>
          <article><span>02</span><div><h3>Cartera y migración</h3><p>Cantidad de propiedades, emprendimientos, fotos y datos a ordenar.</p></div></article>
          <article><span>03</span><div><h3>Gestión del equipo</h3><p>Usuarios, circuitos de publicación y seguimiento de consultas.</p></div></article>
          <article><span>04</span><div><h3>Integraciones</h3><p>Tokko Broker u otras necesidades específicas de la operación.</p></div></article>
        </div>
      </section>

      <section className="pricing-compare section">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Comparación rápida</p><h2>Qué suma<br />cada <em>alcance.</em></h2></div>
          <p>Una lectura simple para identificar la configuración más cercana a tu punto de partida.</p>
        </div>
        <div className="comparison-table" role="table" aria-label="Comparación de alcances">
          <div className="comparison-row comparison-head" role="row"><span>CAPACIDAD</span><b>PRESENCIA</b><b>OPERACIÓN</b><b>TOKKO</b></div>
          {comparison.map(([label, initial, operation, tokko]) => (
            <div className="comparison-row" role="row" key={String(label)}>
              <strong>{label}</strong>
              {[initial, operation, tokko].map((value, index) => <span key={index} className={value === false ? "not-included" : ""}>{value === true ? "✓" : value === false ? "—" : value}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-faq section">
        <div>
          <p className="eyebrow"><span /> Antes de cotizar</p>
          <h2>Lo importante,<br /><em>sin letra chica.</em></h2>
        </div>
        <div className="pricing-faq-list">
          <details open><summary>¿Por qué no publican un precio único?<span>−</span></summary><p>Porque no cuesta lo mismo ordenar una cartera existente que partir de cero, ni una web sin integración que una operación conectada con Tokko. La propuesta separa cada parte para que sepas exactamente qué estás contratando.</p></details>
          <details><summary>¿Tokko Broker es obligatorio?<span>+</span></summary><p>No. Podés administrar toda la cartera desde el panel de Ideamos. La conexión con Tokko es opcional.</p></details>
          <details><summary>¿Puedo empezar con un alcance y sumar después?<span>+</span></summary><p>Sí. La solución está pensada para crecer: podés comenzar con el sitio y ampliar la gestión o la integración cuando tu operación lo necesite.</p></details>
          <details><summary>¿La propuesta diferencia implementación y servicios?<span>+</span></summary><p>Sí. Presentamos el alcance inicial, los opcionales y cualquier servicio recurrente que corresponda de forma separada.</p></details>
        </div>
      </section>

      <section className="pricing-final">
        <div>
          <p className="eyebrow light"><span /> Próximo paso</p>
          <h2>Contanos cómo trabaja<br />tu inmobiliaria.</h2>
          <p>Te ayudamos a elegir el alcance correcto, sin compromisos y sin agregar funciones que no necesitás.</p>
        </div>
        <div className="pricing-final-actions">
          <a className="button button-accent" href={contactUrl}>Solicitar propuesta <Arrow /></a>
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
