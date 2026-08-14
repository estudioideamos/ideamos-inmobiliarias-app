import type { CSSProperties } from "react";
import styles from "./FunctionalityCatalog.module.css";

const groups = [
  {
    eyebrow: "Experiencia del visitante",
    title: "Una búsqueda simple. Una decisión mejor informada.",
    intro: "Cada interacción está pensada para que encontrar, conocer y consultar una propiedad resulte natural desde cualquier dispositivo.",
    items: [
      ["mobile", "Optimización móvil", "El catálogo se adapta a celulares, tablets y escritorio para que cada propiedad conserve su impacto en cualquier pantalla."],
      ["adaptive", "Diseño adaptable a tu marca", "Una experiencia visual flexible, construida alrededor de tu identidad y preparada para presentar la cartera con criterio profesional."],
      ["location", "Búsqueda geográfica", "Tus clientes encuentran propiedades por barrio, localidad o zona y llegan más rápido a las opciones que realmente les interesan."],
      ["tour", "Recorridos y fotos 360°", "Sumá galerías inmersivas para mostrar cada espacio con mayor profundidad y generar interés antes de la visita."],
      ["print", "Ficha lista para imprimir", "Cada propiedad puede consultarse, guardarse o imprimirse en una ficha clara, completa y lista para compartir."],
      ["inquiry", "Consultas desde cada propiedad", "El formulario conserva el contexto de la publicación para que el equipo sepa exactamente qué generó el interés."],
      ["filters", "Filtros que aceleran la búsqueda", "Tipología, operación, precio, ambientes y ubicación ordenan la cartera y reducen la fricción de cada búsqueda."],
      ["share", "Propiedades listas para compartir", "Facilitá la difusión de cada publicación por WhatsApp, redes sociales y otros canales de contacto."],
      ["contact", "Contacto siempre visible", "Formularios y datos comerciales aparecen en los momentos clave para transformar una visita en una conversación."],
    ],
  },
  {
    eyebrow: "Operación inmobiliaria",
    title: "Más autonomía para el equipo. Menos tareas dispersas.",
    intro: "Las herramientas internas concentran la gestión cotidiana y permiten acompañar cada oportunidad con más información y menos pasos.",
    items: [
      ["whatsapp", "WhatsApp integrado", "Cada propiedad puede abrir una conversación directa con tu equipo para responder en el canal que tus clientes ya utilizan."],
      ["calendar", "Coordinación de visitas", "Organizá solicitudes de visita con la propiedad y los datos del interesado siempre vinculados a la conversación."],
      ["crm", "Conexión con CRM", "Integrá Tokko Broker y consultanos por otros CRM para mantener la cartera sincronizada sin duplicar tareas."],
      ["dashboard", "Panel de administración", "Gestioná propiedades, emprendimientos, consultas, destacados y rendimiento desde un entorno claro y centralizado."],
      ["pages", "Páginas administrables", "Actualizá contenidos institucionales y comerciales sin depender de un programador para cada cambio cotidiano."],
    ],
  },
  {
    eyebrow: "Marketing y crecimiento",
    title: "Una plataforma preparada para atraer, medir y crecer.",
    intro: "Tu presencia digital deja de ser una vidriera aislada y se convierte en una base activa para campañas, contenidos y posicionamiento.",
    items: [
      ["search", "Optimizado para búsquedas", "La arquitectura del sitio y de cada ficha crea una base sólida para mejorar la visibilidad orgánica de tu cartera."],
      ["landing", "Landing pages", "Creá experiencias específicas para campañas, emprendimientos, tasaciones o captación de nuevas oportunidades."],
      ["blog", "Noticias y contenidos", "Publicá novedades, análisis y contenido de valor para construir autoridad y mantener activa la presencia de tu marca."],
      ["analytics", "Tracking y analítica", "Conectá herramientas de medición para entender cómo navegan los usuarios y qué acciones generan mejores resultados."],
      ["seo", "Configuración SEO", "Definí títulos, descripciones y direcciones claras para presentar mejor cada página ante buscadores y usuarios."],
    ],
  },
] as const;

type IconName = (typeof groups)[number]["items"][number][0];

const visitorPositions = ["0% 0%", "50% 0%", "100% 0%", "0% 50%", "50% 50%", "100% 50%", "0% 100%", "50% 100%", "100% 100%"] as const;
const twoRowPositions = ["0% 0%", "50% 0%", "100% 0%", "0% 100%", "50% 100%"] as const;
const visitorIcons = ["mobile", "adaptive", "location", "tour", "print", "inquiry", "filters", "share", "contact"] as const;
const operationIcons = ["whatsapp", "calendar", "crm", "dashboard", "pages"] as const;
const marketingIcons = ["search", "landing", "blog", "analytics", "seo"] as const;

function iconStyle(type: IconName): CSSProperties {
  const visitorIndex = visitorIcons.indexOf(type as (typeof visitorIcons)[number]);
  if (visitorIndex >= 0) {
    return {
      backgroundImage: "url('/generated-icons/capabilities-visitor.png')",
      backgroundSize: "300% 300%",
      backgroundPosition: visitorPositions[visitorIndex],
    };
  }

  const operationIndex = operationIcons.indexOf(type as (typeof operationIcons)[number]);
  if (operationIndex >= 0) {
    return {
      backgroundImage: "url('/generated-icons/capabilities-operations.png')",
      backgroundSize: "300% 200%",
      backgroundPosition: twoRowPositions[operationIndex],
    };
  }

  const marketingIndex = marketingIcons.indexOf(type as (typeof marketingIcons)[number]);
  return {
    backgroundImage: "url('/generated-icons/capabilities-marketing.png')",
    backgroundSize: "300% 200%",
    backgroundPosition: twoRowPositions[marketingIndex],
  };
}

function Glyph({ type }: { type: IconName }) {
  return (
    <div className={`capability-icon capability-icon-3d capability-icon-${type} ${styles.icon}`} aria-hidden="true">
      <span className={styles.sprite} style={iconStyle(type)} />
    </div>
  );
}

export default function FunctionalityCatalog() {
  return (
    <section className="capability-catalog" aria-labelledby="capability-catalog-title">
      <header className="capability-catalog-intro">
        <p className="eyebrow"><span /> Mapa de funcionalidades</p>
        <h2 id="capability-catalog-title">Todo lo que puede sumar<br /><em>tu plataforma.</em></h2>
        <p>Una visión completa de las herramientas disponibles. Después podemos ajustar el alcance y priorizar las que mejor encajan con tu operación.</p>
      </header>
      {groups.map((group, groupIndex) => (
        <section className="capability-group" key={group.eyebrow}>
          <header>
            <div><span>0{groupIndex + 1}</span><p>{group.eyebrow}</p></div>
            <h3>{group.title}</h3>
            <p>{group.intro}</p>
          </header>
          <div className="capability-grid">
            {group.items.map(([icon, title, copy], index) => (
              <article className="capability-card" key={title}>
                <Glyph type={icon} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{title}</h4>
                <p>{copy}</p>
                {icon === "crm" && <a href="/contacto?plan=Otro CRM">CONSULTANOS POR OTROS CRM&apos;S <span aria-hidden="true">{"\u2197"}</span></a>}
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
