import Marquee from "./Marquee";
import SiteHeader from "./SiteHeader";
import PremiumFooter from "./PremiumFooter";
import OrbitCta from "./OrbitCta";

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "/contacto";
const Arrow = () => <span aria-hidden="true">↗</span>;

type PageKey = "producto" | "funciones" | "tokko" | "valor" | "preguntas";

const pages = {
  producto: {
    eyebrow: "La plataforma",
    title: <>Tu web y tus propiedades,<br /><em>en un mismo sistema.</em></>,
    lead: "Una plataforma completa para publicar propiedades y emprendimientos, recibir consultas, medir la operación y administrar tu presencia desde un panel seguro.",
    stat: "07", statLabel: "MÓDULOS / UN SISTEMA",
    marquee: ["WEB A MEDIDA", "PANEL AUTOGESTIONABLE", "CATÁLOGO CONECTADO", "CONSULTAS CON CONTEXTO"],
    heading: <>Todo lo que ve tu cliente.<br /><em>Todo lo que usa tu equipo.</em></>,
    intro: "La experiencia pública y la operación interna trabajan juntas para que cada actualización tenga impacto comercial.",
    cards: [
      ["01", "Una presencia propia", "Diseño, contenidos, filtros y fichas construidos alrededor de la identidad de tu inmobiliaria."],
      ["02", "Inventario bajo control", "Creá, editá, duplicá y eliminá propiedades; usá estados Publicada, Borrador o Reservada y definí destacadas."],
      ["03", "Proyectos y oportunidades", "Gestioná emprendimientos completos y seguí cada consulta como Nueva, Contactada o Cerrada."],
    ],
    image: "/demo-site-live.png",
    imageAlt: "Sitio web inmobiliario desarrollado por Ideamos",
    label: "EXPERIENCIA PÚBLICA",
    bullets: ["Sitio responsive y catálogo filtrable", "Propiedades con ficha técnica y galerías", "Emprendimientos con unidades y equipo", "Panel general e inventario", "Consultas con seguimiento", "Rendimiento y valor de cartera", "Ajustes, cuenta segura y manual"],
  },
  funciones: {
    eyebrow: "Funcionalidades",
    title: <>Herramientas concretas.<br /><em>Una operación más simple.</em></>,
    lead: "Cada función resuelve una tarea real: mostrar mejor, actualizar más rápido y responder con toda la información.",
    stat: "07", statLabel: "MÓDULOS / INTEGRADOS",
    marquee: ["FILTROS INTELIGENTES", "FICHAS COMPLETAS", "GESTIÓN CENTRALIZADA", "SEO READY"],
    heading: <>Menos tareas repetidas.<br /><em>Más tiempo para vender.</em></>,
    intro: "No sumamos funciones por sumar. Diseñamos un recorrido claro para visitantes, asesores y administradores.",
    cards: [
      ["01", "Propiedades", "Publicá propiedades completas en pocos pasos y hacé que cada oportunidad se vea mejor: ficha técnica, galería, portada, destacados y estados listos para vender."],
      ["02", "Emprendimientos", "Presentá cada desarrollo con la profundidad que necesita para generar confianza: avance de obra, entrega, unidades, precios, arquitectura, amenities y galerías."],
      ["03", "Consultas", "Convertí cada mensaje en una oportunidad accionable. Tu equipo recibe los datos del contacto y la propiedad de interés, y acompaña cada consulta hasta su cierre."],
      ["04", "Rendimiento", "Entendé qué está pasando sin armar reportes aparte: visualizá la cartera publicada, el valor disponible, las consultas recibidas y el avance comercial."],
      ["05", "Identidad y acceso", "Mantené tu marca consistente y tu operación protegida. Administrá los datos públicos del sitio y el acceso seguro del equipo desde un único lugar."],
      ["06", "Manual incorporado", "Dale autonomía al equipo desde el primer día con recorridos simples, ayuda paso a paso y accesos directos para verificar cada cambio publicado."],
    ],
    image: "/backend-panel-real.png",
    imageAlt: "Panel de administración de Ideamos Inmobiliarias",
    label: "PANEL DE GESTIÓN",
    bullets: ["Búsqueda y filtros dentro del inventario", "Galería con portada y carga de archivos", "Estados Publicada, Borrador y Reservada", "Propiedades destacadas", "Métricas comerciales y de cartera", "Ajustes públicos y cuenta administradora"],
  },
  tokko: {
    eyebrow: "Integración con Tokko Broker",
    title: <>Tu inventario en Tokko.<br /><em>Tu marca al frente.</em></>,
    lead: "Conectamos la cartera que ya administrás con una experiencia web diseñada para tu inmobiliaria. Sin duplicar tareas.",
    stat: "02", statLabel: "FUENTES / UN CATÁLOGO",
    marquee: ["TOKKO READY", "SINCRONIZACIÓN", "CONTROL DE PUBLICACIÓN", "WEB PROPIA"],
    heading: <>Una conexión opcional.<br /><em>Un flujo mucho más claro.</em></>,
    intro: "Tokko sigue siendo el origen de tu inventario; Ideamos transforma esa información en una experiencia pública cuidada.",
    cards: [
      ["01", "Probamos antes de sincronizar", "La plataforma identifica la cuenta y muestra cuántas propiedades y emprendimientos están habilitados para web."],
      ["02", "Sincronizamos los registros útiles", "Ingresan propiedades disponibles y emprendimientos publicables con fotos, precios, ficha y origen identificado."],
      ["03", "Actualizamos filtros reales", "Cada sincronización incorpora tipologías y localidades de Tokko para usarlas directamente en el catálogo."],
      ["04", "Conservás el modo manual", "Los registros propios siguen editables. Podés pausar o desvincular Tokko sin borrar la cartera existente."],
    ],
    image: "/tokko-property-2.jpg",
    imageAlt: "Propiedad publicada mediante la integración con Tokko",
    label: "FLUJO TOKKO + IDEAMOS",
    bullets: ["API key cifrada y protegida", "Prueba de conexión desde el panel", "Propiedades y emprendimientos", "Tipologías y localidades sincronizadas", "Carga manual siempre disponible", "Pausa o desvinculación sin perder contenido"],
  },
  valor: {
    eyebrow: "Beneficios para tu inmobiliaria",
    title: <>Una mejor presencia.<br /><em>Una operación más valiosa.</em></>,
    lead: "La plataforma no es solamente una web: mejora cómo perciben tu marca, cómo trabaja tu equipo y cómo llegan las oportunidades.",
    stat: "04", statLabel: "BENEFICIOS / UN SISTEMA",
    marquee: ["MEJOR PERCEPCIÓN", "MÁS AUTONOMÍA", "RESPUESTAS MÁS RÁPIDAS", "ESCALA DIGITAL"],
    heading: <>Mostrar mejor también es<br /><em>vender mejor.</em></>,
    intro: "Una experiencia digital cuidada aumenta la confianza antes del primer contacto y ordena todo lo que sucede después.",
    cards: [
      ["01", "Eleva tu marca", "Tu inmobiliaria deja de verse como una plantilla y empieza a comunicar una identidad reconocible."],
      ["02", "Ordena el trabajo", "Inventario, emprendimientos, consultas, métricas, ajustes y ayuda viven en un único panel."],
      ["03", "Da contexto para decidir", "Cada ficha facilita la consulta y el panel muestra cartera, contactos y seguimiento comercial."],
    ],
    image: "/premium-photos/casa-paisaje.webp",
    imageAlt: "Residencia premium presentada en una web inmobiliaria",
    label: "PRESENCIA QUE CONVIERTE",
    bullets: ["Más confianza desde la primera visita", "Autonomía para publicar y corregir", "Seguimiento ordenado de consultas", "Lectura de cartera y rendimiento", "Una base preparada para crecer"],
  },
  preguntas: {
    eyebrow: "Preguntas frecuentes",
    title: <>Antes de empezar,<br /><em>todo claro.</em></>,
    lead: "Las respuestas esenciales para evaluar la plataforma, la implementación y la integración con tranquilidad.",
    stat: "09", statLabel: "RESPUESTAS / SIN LETRA CHICA",
    marquee: ["IMPLEMENTACIÓN CLARA", "TOKKO OPCIONAL", "DISEÑO A MEDIDA", "SOPORTE INCLUIDO"],
    heading: <>Lo importante,<br /><em>respondido de frente.</em></>,
    intro: "Si tu operación tiene una necesidad particular, la revisamos juntos durante una demostración.",
    cards: [
      ["01", "¿Necesito usar Tokko Broker?", "No. Podés administrar toda la cartera desde el panel de Ideamos. Tokko es una integración opcional para inmobiliarias que ya trabajan con esa plataforma."],
      ["02", "¿La web se adapta a la identidad de mi inmobiliaria?", "Sí. Trabajamos colores, tipografías, logo, tono, secciones y datos de contacto para construir una experiencia propia, no una plantilla genérica."],
      ["03", "¿Puedo publicar propiedades y emprendimientos?", "Sí. El sistema contempla ambos tipos de contenido, con fichas completas, galerías, estados, precios, borradores y destacados."],
      ["04", "¿Qué pasa con las consultas?", "Cada mensaje llega al panel con la propiedad que generó el interés. Tu equipo puede responder con contexto y seguir la oportunidad como Nueva, Contactada o Cerrada."],
      ["05", "¿La web queda preparada para celulares y Google?", "Sí. El diseño es responsive y la estructura está pensada para ofrecer una navegación clara, rápida y una base sólida de posicionamiento."],
      ["06", "¿Qué incluye la puesta en marcha?", "Incluye la adaptación visual a tu marca, la configuración de la plataforma, la publicación inicial, la capacitación y el acompañamiento para empezar a operar."],
      ["07", "¿Cuánto demora la implementación?", "El cronograma se define según el volumen de contenido, la identidad disponible y las integraciones necesarias. Antes de comenzar dejamos etapas, responsables y fecha de salida claramente acordados."],
      ["08", "¿Qué necesitamos para comenzar?", "Tu logo, lineamientos de marca, datos comerciales y el contenido disponible. Si todavía falta definir alguna pieza, te ayudamos a ordenarla durante la puesta en marcha."],
      ["09", "¿Puedo actualizar la web después del lanzamiento?", "Sí. Tu equipo puede administrar propiedades, emprendimientos, consultas y contenidos desde el panel. Y cuando necesites un cambio mayor, contás con nuestro acompañamiento."],
    ],
    image: "/premium-photos/fachada-urbana.webp",
    imageAlt: "Fachada residencial premium",
    label: "ACOMPAÑAMIENTO DIRECTO",
    bullets: ["Web responsive", "Propiedades y emprendimientos", "Panel, métricas y consultas", "Tokko opcional sin perder carga manual", "Cuenta segura, manual y soporte"],
  },
} satisfies Record<PageKey, any>;

export default function InternalPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];
  const tokkoIcons = ["/generated-icons/tokko-verify.png", "/generated-icons/tokko-records.png", "/generated-icons/tokko-filters.png", "/generated-icons/tokko-manual.png"];
  const functionIcons = ["/generated-icons/functions-properties.webp", "/generated-icons/functions-developments.webp", "/generated-icons/functions-inquiries.webp", "/generated-icons/functions-performance.webp", "/generated-icons/functions-identity.webp", "/generated-icons/functions-manual.webp"];
  const platformIcons = ["/generated-icons/platform-presence.webp", "/generated-icons/platform-inventory.webp", "/generated-icons/platform-opportunities.webp"];
  return (
    <main className={`internal-page internal-${pageKey}`}>
      <SiteHeader active={pageKey === "producto" ? "plataforma" : pageKey === "funciones" ? "funcionalidades" : pageKey === "tokko" ? "tokko" : pageKey === "preguntas" ? "preguntas" : undefined} />

      <section className="internal-hero">
        <div className="internal-hero-copy">
          <p className="eyebrow light"><span /> {page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
          <div><a className="button button-accent" href={contactUrl}>Coordinar una demo <Arrow /></a><a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Ver sitio real <Arrow /></a></div>
          {pageKey === "tokko" && <a className="crm-consult-badge crm-consult-badge-light" href="/contacto?plan=Otro CRM">CONSULTANOS POR OTROS CRM&apos;S <span aria-hidden="true">↗</span></a>}
        </div>
        <aside className="internal-hero-stat"><strong>{page.stat}</strong><span>{page.statLabel}</span><i /></aside>
      </section>

      <Marquee label={page.eyebrow} tone="paper" items={page.marquee} />

      <section className="internal-story section">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> En detalle</p><h2>{page.heading}</h2></div>
          <p>{page.intro}</p>
        </div>
        <div className={`internal-card-grid${pageKey === "preguntas" ? " internal-faq-premium-grid" : ""}`}>
          {page.cards.map(([number, title, copy]: string[], index: number) => pageKey === "preguntas" ? (
            <details className="internal-faq-card" key={number} open={index === 0}>
              <summary><span>{number}</span><h3>{title}</h3><i aria-hidden="true" /></summary>
              <p>{copy}</p>
            </details>
          ) : (
            <article key={number}>{pageKey === "tokko" && <img className="tokko-card-icon" src={tokkoIcons[index]} alt="" />}{pageKey === "funciones" && <div className="function-card-icon" aria-hidden="true"><img src={functionIcons[index]} alt="" /></div>}{pageKey === "producto" && <div className="function-card-icon platform-card-icon" aria-hidden="true"><img src={platformIcons[index]} alt="" /></div>}<span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="internal-showcase">
        <figure><img src={page.image} alt={page.imageAlt} /></figure>
        <div>
          <p className="eyebrow light"><span /> {page.label}</p>
          <h2>Diseñado para verse bien.<br /><em>Preparado para funcionar.</em></h2>
          <div className="internal-bullets">{page.bullets.map((bullet: string, index: number) => <span key={bullet}><b>0{index + 1}</b>{bullet}</span>)}</div>
          <a className="button button-accent" href={contactUrl}>Quiero conocerlo <Arrow /></a>
        </div>
      </section>

      <section className="internal-next">
        <div><p className="eyebrow"><span /> Siguiente paso</p><h2>Veamos cómo funcionaría<br /><em>con tu inmobiliaria.</em></h2></div>
        <OrbitCta href={contactUrl} className="internal-orbit-cta" />
      </section>

      <PremiumFooter />
    </main>
  );
}