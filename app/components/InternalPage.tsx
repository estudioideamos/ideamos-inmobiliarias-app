import BrandLogo from "./BrandLogo";
import Marquee from "./Marquee";

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20conocer%20Ideamos%20Inmobiliarias";
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
      ["01", "Propiedades", "Alta guiada en tres pasos, ficha técnica, hasta 13 imágenes, portada, destacados, estados, duplicación y vista pública."],
      ["02", "Emprendimientos", "Estado de obra, entrega, tipologías, precios, desarrollador, arquitectura, amenities, calidades y galerías."],
      ["03", "Consultas", "Nombre, mensaje, email, teléfono y propiedad de interés; seguimiento como Nueva, Contactada o Cerrada."],
      ["04", "Rendimiento", "Publicaciones activas, borradores, destacadas, valor de cartera, contactos y porcentaje con seguimiento."],
      ["05", "Identidad y acceso", "Datos comerciales públicos, cuenta administradora, cambio y recuperación de contraseña y cierre seguro."],
      ["06", "Manual incorporado", "Seis recorridos operativos paso a paso y accesos directos para comprobar cada publicación en la web."],
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
    stat: "05", statLabel: "RESPUESTAS / SIN LETRA CHICA",
    marquee: ["IMPLEMENTACIÓN CLARA", "TOKKO OPCIONAL", "DISEÑO A MEDIDA", "SOPORTE INCLUIDO"],
    heading: <>Lo importante,<br /><em>respondido de frente.</em></>,
    intro: "Si tu operación tiene una necesidad particular, la revisamos juntos durante una demostración.",
    cards: [
      ["01", "¿Necesito usar Tokko?", "No. Podés administrar la cartera desde Ideamos. La integración es opcional."],
      ["02", "¿La web usa mi identidad?", "Sí. Adaptamos colores, tipografías, logo, tono, contenidos y datos de contacto."],
      ["03", "¿Puedo gestionar consultas?", "Sí. Cada mensaje llega con la propiedad de origen y puede marcarse como Nueva, Contactada o Cerrada."],
    ],
    image: "/premium-photos/fachada-urbana.webp",
    imageAlt: "Fachada residencial premium",
    label: "ACOMPAÑAMIENTO DIRECTO",
    bullets: ["Web responsive", "Propiedades y emprendimientos", "Panel, métricas y consultas", "Tokko opcional sin perder carga manual", "Cuenta segura, manual y soporte"],
  },
} satisfies Record<PageKey, any>;

export default function InternalPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];
  return (
    <main className={`internal-page internal-${pageKey}`}>
      <header className="topbar internal-topbar">
        <a className="brand" href="/" aria-label="Ideamos Inmobiliarias, inicio"><BrandLogo /></a>
        <nav aria-label="Navegación principal">
          <a className={pageKey === "producto" ? "active" : ""} href="/producto">La Plataforma</a>
          <a className={pageKey === "funciones" ? "active" : ""} href="/funciones">Funcionalidades</a>
          <a className={pageKey === "tokko" ? "active" : ""} href="/tokko">Tokko</a>
          <a className={pageKey === "valor" ? "active" : ""} href="/beneficios">Beneficios</a>
          <a href="/precios">Precios</a>
        </nav>
        <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
      </header>

      <section className="internal-hero">
        <div className="internal-hero-copy">
          <p className="eyebrow light"><span /> {page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
          <div><a className="button button-accent" href={contactUrl}>Coordinar una demo <Arrow /></a><a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Ver sitio real <Arrow /></a></div>
        </div>
        <aside className="internal-hero-stat"><strong>{page.stat}</strong><span>{page.statLabel}</span><i /></aside>
      </section>

      <Marquee label={page.eyebrow} tone="paper" items={page.marquee} />

      <section className="internal-story section">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> En detalle</p><h2>{page.heading}</h2></div>
          <p>{page.intro}</p>
        </div>
        <div className="internal-card-grid">
          {page.cards.map(([number, title, copy]: string[]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
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
        <a className="round-cta" href={contactUrl}><span>COORDINAR</span><b>↗</b><small>UNA DEMO</small></a>
      </section>

      <footer className="pricing-footer internal-footer">
        <a className="brand footer-brand" href="/"><BrandLogo /></a>
        <p>Web + gestión para inmobiliarias.</p>
        <nav><a href="/producto">La Plataforma</a><a href="/funciones">Funcionalidades</a><a href="/tokko">Tokko</a><a href="/beneficios">Beneficios</a><a href="/preguntas">Preguntas Frecuentes</a></nav>
        <span>© 2026 IDEAMOS</span>
      </footer>
    </main>
  );
}