const groups = [
  {
    eyebrow: "Experiencia del visitante",
    title: "Una b\u00fasqueda simple. Una decisi\u00f3n mejor informada.",
    intro: "Cada interacci\u00f3n est\u00e1 pensada para que encontrar, conocer y consultar una propiedad resulte natural desde cualquier dispositivo.",
    items: [
      ["mobile", "Optimizaci\u00f3n m\u00f3vil", "El cat\u00e1logo se adapta a celulares, tablets y escritorio para que cada propiedad conserve su impacto en cualquier pantalla."],
      ["adaptive", "Dise\u00f1o adaptable a tu marca", "Una experiencia visual flexible, construida alrededor de tu identidad y preparada para presentar la cartera con criterio profesional."],
      ["location", "B\u00fasqueda geogr\u00e1fica", "Tus clientes encuentran propiedades por barrio, localidad o zona y llegan m\u00e1s r\u00e1pido a las opciones que realmente les interesan."],
      ["tour", "Recorridos y fotos 360\u00b0", "Sum\u00e1 galer\u00edas inmersivas para mostrar cada espacio con mayor profundidad y generar inter\u00e9s antes de la visita."],
      ["print", "Ficha lista para imprimir", "Cada propiedad puede consultarse, guardarse o imprimirse en una ficha clara, completa y lista para compartir."],
      ["inquiry", "Consultas desde cada propiedad", "El formulario conserva el contexto de la publicaci\u00f3n para que el equipo sepa exactamente qu\u00e9 gener\u00f3 el inter\u00e9s."],
      ["filters", "Filtros que aceleran la b\u00fasqueda", "Tipolog\u00eda, operaci\u00f3n, precio, ambientes y ubicaci\u00f3n ordenan la cartera y reducen la fricci\u00f3n de cada b\u00fasqueda."],
      ["share", "Propiedades listas para compartir", "Facilit\u00e1 la difusi\u00f3n de cada publicaci\u00f3n por WhatsApp, redes sociales y otros canales de contacto."],
      ["contact", "Contacto siempre visible", "Formularios y datos comerciales aparecen en los momentos clave para transformar una visita en una conversaci\u00f3n."]
    ],
  },
  {
    eyebrow: "Operaci\u00f3n inmobiliaria",
    title: "M\u00e1s autonom\u00eda para el equipo. Menos tareas dispersas.",
    intro: "Las herramientas internas concentran la gesti\u00f3n cotidiana y permiten acompa\u00f1ar cada oportunidad con m\u00e1s informaci\u00f3n y menos pasos.",
    items: [
      ["whatsapp", "WhatsApp integrado", "Cada propiedad puede abrir una conversaci\u00f3n directa con tu equipo para responder en el canal que tus clientes ya utilizan."],
      ["calendar", "Coordinaci\u00f3n de visitas", "Organiz\u00e1 solicitudes de visita con la propiedad y los datos del interesado siempre vinculados a la conversaci\u00f3n."],
      ["crm", "Conexi\u00f3n con CRM", "Integr\u00e1 Tokko Broker y consultanos por otros CRM para mantener la cartera sincronizada sin duplicar tareas."],
      ["dashboard", "Panel de administraci\u00f3n", "Gestion\u00e1 propiedades, emprendimientos, consultas, destacados y rendimiento desde un entorno claro y centralizado."],
      ["pages", "P\u00e1ginas administrables", "Actualiz\u00e1 contenidos institucionales y comerciales sin depender de un programador para cada cambio cotidiano."]
    ],
  },
  {
    eyebrow: "Marketing y crecimiento",
    title: "Una plataforma preparada para atraer, medir y crecer.",
    intro: "Tu presencia digital deja de ser una vidriera aislada y se convierte en una base activa para campa\u00f1as, contenidos y posicionamiento.",
    items: [
      ["search", "Optimizado para b\u00fasquedas", "La arquitectura del sitio y de cada ficha crea una base s\u00f3lida para mejorar la visibilidad org\u00e1nica de tu cartera."],
      ["landing", "Landing pages", "Cre\u00e1 experiencias espec\u00edficas para campa\u00f1as, emprendimientos, tasaciones o captaci\u00f3n de nuevas oportunidades."],
      ["blog", "Noticias y contenidos", "Public\u00e1 novedades, an\u00e1lisis y contenido de valor para construir autoridad y mantener activa la presencia de tu marca."],
      ["analytics", "Tracking y anal\u00edtica", "Conect\u00e1 herramientas de medici\u00f3n para entender c\u00f3mo navegan los usuarios y qu\u00e9 acciones generan mejores resultados."],
      ["seo", "Configuraci\u00f3n SEO", "Defin\u00ed t\u00edtulos, descripciones y direcciones claras para presentar mejor cada p\u00e1gina ante buscadores y usuarios."]
    ],
  },
] as const;

type IconName = (typeof groups)[number]["items"][number][0];

function Glyph({ type }: { type: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    mobile: <><rect x="8" y="3" width="12" height="26" rx="3"/><path d="M12 7h4M13 25h2"/></>,
    adaptive: <><rect x="3" y="6" width="26" height="18" rx="3"/><path d="M9 29h14M16 24v5M8 11h7v7H8zM19 11h5M19 15h5M19 19h3"/></>,
    location: <><path d="M16 29S7 21 7 13a9 9 0 1 1 18 0c0 8-9 16-9 16Z"/><circle cx="16" cy="13" r="3"/></>,
    tour: <><path d="M26 11a11 11 0 1 0 1 9M25 5v7h-7"/><path d="m11 20 5-4 5 4v7H11Z"/></>,
    print: <><path d="M9 12V4h14v8M8 24H5V13h22v11h-3M9 20h14v9H9z"/><path d="M23 16h1"/></>,
    inquiry: <><path d="M5 6h22v16H13l-6 5v-5H5Z"/><path d="M10 12h12M10 16h8"/></>,
    filters: <><path d="M4 6h24L19 17v8l-6 3V17Z"/><path d="M10 10h12"/></>,
    share: <><circle cx="7" cy="16" r="3"/><circle cx="25" cy="7" r="3"/><circle cx="25" cy="25" r="3"/><path d="m10 14 12-6M10 18l12 6"/></>,
    contact: <><rect x="4" y="7" width="24" height="18" rx="3"/><path d="m6 10 10 8 10-8"/><circle cx="25" cy="24" r="4"/></>,
    whatsapp: <><path d="M27 15a11 11 0 0 1-16 10l-6 2 2-6A11 11 0 1 1 27 15Z"/><path d="M12 10c1 5 4 8 9 10"/></>,
    calendar: <><rect x="4" y="7" width="24" height="21" rx="3"/><path d="M10 3v8M22 3v8M4 13h24M11 21l3 3 7-7"/></>,
    crm: <><ellipse cx="11" cy="8" rx="7" ry="3"/><path d="M4 8v12c0 2 3 3 7 3M18 8v6"/><path d="M21 16a6 6 0 1 1-3 11M21 13v6h-6"/></>,
    dashboard: <><rect x="3" y="4" width="26" height="24" rx="4"/><path d="M3 10h26M10 10v18M14 15h10M14 20h7M14 24h9"/></>,
    pages: <><rect x="5" y="5" width="20" height="24" rx="3"/><path d="M9 10h12M9 15h12M9 20h8"/><path d="M11 2h16a3 3 0 0 1 3 3v20"/></>,
    search: <><circle cx="14" cy="14" r="9"/><path d="m21 21 7 7M11 14h6M14 11v6"/></>,
    landing: <><rect x="3" y="5" width="26" height="23" rx="3"/><path d="M3 11h26M8 16h10M8 21h16M22 14v7"/></>,
    blog: <><path d="M7 3h14l5 5v21H7Z"/><path d="M21 3v6h6M11 14h11M11 19h11M11 24h7"/></>,
    analytics: <><path d="M5 27V16M12 27V10M19 27V19M26 27V5"/><path d="m5 12 7-5 7 5 7-9"/></>,
    seo: <><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8M5 27h8M23 5v6M20 8h6"/></>,
  };
  return <div className="capability-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg><i /></div>;
}

export default function FunctionalityCatalog() {
  return (
    <section className="capability-catalog" aria-labelledby="capability-catalog-title">
      <header className="capability-catalog-intro">
        <p className="eyebrow"><span /> Mapa de funcionalidades</p>
        <h2 id="capability-catalog-title">Todo lo que puede sumar<br /><em>tu plataforma.</em></h2>
        <p>Una visi\u00f3n completa de las herramientas disponibles. Despu\u00e9s podemos ajustar el alcance y priorizar las que mejor encajan con tu operaci\u00f3n.</p>
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

