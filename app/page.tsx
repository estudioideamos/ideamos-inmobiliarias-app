import BrandLogo from "./components/BrandLogo";

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20conocer%20Ideamos%20Inmobiliarias";

const Arrow = () => <span aria-hidden="true">↗</span>;
const Check = () => <span className="check" aria-hidden="true">✓</span>;

const visitorFeatures = [
  ["01", "Experiencia mobile", "Tu catálogo se adapta a celulares, tablets y escritorio con una navegación rápida y clara."],
  ["02", "Buscador con filtros", "Operación, tipo, ubicación, ambientes, precio y los datos que realmente usa un interesado."],
  ["03", "Fichas completas", "Galerías, descripción, características, ubicación y contacto directo desde cada propiedad."],
  ["04", "Consultas por propiedad", "Cada mensaje llega identificado con el inmueble que despertó el interés del visitante."],
  ["05", "WhatsApp integrado", "Un acceso directo para convertir búsquedas en conversaciones con tu equipo comercial."],
  ["06", "SEO inmobiliario", "Páginas preparadas para que Google pueda entender tu cartera y tu zona de trabajo."],
];

const businessFeatures = [
  ["INVENTARIO", "Publicá, editá, destacá, pausá o duplicá propiedades desde un único panel."],
  ["EMPRENDIMIENTOS", "Presentá proyectos con unidades, galería, amenities, ubicación y estado comercial."],
  ["CONSULTAS", "Ordená oportunidades como nuevas, contactadas o cerradas sin perder el contexto."],
  ["CONTENIDOS", "Actualizá textos, secciones y datos esenciales sin depender de cambios técnicos."],
];

const faqs = [
  ["¿Necesito usar Tokko Broker?", "No. Podés administrar toda la cartera desde el panel de Ideamos. Tokko es una integración opcional para inmobiliarias que ya trabajan con esa plataforma."],
  ["¿La web se adapta a la identidad de mi inmobiliaria?", "Sí. Trabajamos colores, tipografías, logo, tono, secciones y datos de contacto para construir una experiencia propia, no una plantilla genérica."],
  ["¿Puedo publicar propiedades y emprendimientos?", "Sí. El sistema contempla ambos tipos de contenido, con fichas completas, galerías, estados, precios, borradores y destacados."],
  ["¿Qué pasa con las consultas?", "Los formularios llegan al panel con la referencia de la propiedad. Así el equipo sabe qué vio cada persona y puede seguir la oportunidad."],
  ["¿La web queda preparada para celulares y Google?", "Sí. El diseño es responsive y la estructura está pensada para ofrecer una buena experiencia de navegación y una base sólida de posicionamiento."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ideamos Inmobiliarias, inicio">
          <BrandLogo />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#ejemplo">Ejemplo</a>
          <a href="#funciones">Funciones</a>
          <a href="#tokko">Tokko Broker</a>
          <a href="/precios">Precios</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Sitios web para inmobiliarias</p>
          <h1>Una web para mostrar mejor.<br /><em>Un sistema para vender más.</em></h1>
          <p className="hero-lead">Publicá tus propiedades en un sitio profesional, administrá todo desde un panel simple y conectá tu inventario con Tokko Broker cuando lo necesites.</p>
          <div className="hero-actions">
            <a className="button button-accent" href={contactUrl}>Quiero conocer el sistema <Arrow /></a>
            <a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Ver demo funcionando <Arrow /></a>
          </div>
          <div className="hero-benefits" aria-label="Beneficios principales">
            <span><Check /> Diseño profesional</span>
            <span><Check /> Optimizada para Google</span>
            <span><Check /> Sin tocar código</span>
          </div>
        </div>

        <div className="hero-product" aria-label="Vista real de la plataforma">
          <span className="hero-sticker sticker-one">100%<br /><b>MOBILE</b></span>
          <span className="hero-sticker sticker-two">TOKKO<br /><b>READY</b></span>
          <figure className="site-browser">
            <div className="browser-chrome"><i /><i /><i /><span>inmobiliaria.ideamos.ar</span><b>⋯</b></div>
            <img src="/demo-site-live.png" alt="Sitio inmobiliario real desarrollado por Ideamos" />
          </figure>
          <figure className="panel-card">
            <div><span className="mini-brand">i</span><b>Panel de gestión</b><small>ONLINE</small></div>
            <img src="/backend-panel-real.png" alt="Panel real para administrar propiedades" />
          </figure>
          <div className="hero-property-row" aria-hidden="true">
            <img src="/tokko-property-1.jpg" alt="" />
            <img src="/tokko-property-2.jpg" alt="" />
            <img src="/tokko-property-3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Una plataforma completa">
        <p>UNA SOLUCIÓN PARA TODA TU OPERACIÓN DIGITAL</p>
        <div><span>SITIO WEB</span><i>+</i><span>PROPIEDADES</span><i>+</i><span>PANEL</span><i>+</i><span>TOKKO</span><i>+</i><span>CONSULTAS</span></div>
      </section>

      <section className="intro section" id="ejemplo">
        <div className="section-heading centered">
          <p className="eyebrow"><span /> Una experiencia real</p>
          <h2>Tu inmobiliaria merece<br />mucho más que <em>un catálogo.</em></h2>
          <p>La web trabaja como una herramienta comercial: presenta tu marca, organiza la búsqueda y lleva a cada interesado hacia una consulta concreta.</p>
        </div>
        <div className="device-stage">
          <div className="device-glow" aria-hidden="true" />
          <figure className="desktop-device">
            <div className="device-bar"><span /><span /><span /></div>
            <img src="/demo-site-live.png" alt="Demo real del sitio web inmobiliario en escritorio" />
          </figure>
          <figure className="mobile-device">
            <div className="mobile-speaker" />
            <img src="/demo-site-live.png" alt="Adaptación móvil del sitio inmobiliario" />
          </figure>
          <aside className="result-card"><small>TODO CONECTADO</small><strong>Web + gestión</strong><span>Una sola experiencia para tu equipo y tus clientes.</span></aside>
        </div>
        <div className="proof-grid">
          <article><strong>01</strong><h3>Tu marca primero</h3><p>La experiencia visual se diseña alrededor de tu identidad, zonas y tipo de cartera.</p></article>
          <article><strong>02</strong><h3>Buscar es fácil</h3><p>Filtros claros y fichas completas para que cada visitante encuentre lo que necesita.</p></article>
          <article><strong>03</strong><h3>Consultar es inmediato</h3><p>Formularios y WhatsApp disponibles en el momento de mayor intención.</p></article>
        </div>
      </section>

      <section className="features section" id="funciones">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Pensada para tus visitantes</p><h2>Todo lo que esperan<br />de una web <em>moderna.</em></h2></div>
          <p>Una navegación clara, rápida y centrada en las propiedades. Desde la primera búsqueda hasta el contacto con tu inmobiliaria.</p>
        </div>
        <div className="feature-list">
          {visitorFeatures.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={`feature-icon icon-${number}`} aria-hidden="true">
                <span className="feature-glyph"><i /><i /><i /></span>
                <b className="feature-node" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-section">
        <div className="workspace-copy">
          <p className="eyebrow light"><span /> Pensada para tu inmobiliaria</p>
          <h2>El control queda<br /><em>de tu lado.</em></h2>
          <p>Un panel simple para sostener la operación diaria sin esperar que alguien haga cada cambio por vos.</p>
          <a className="button button-light" href={contactUrl}>Conocer el panel <Arrow /></a>
        </div>
        <div className="workspace-visual">
          <figure className="dashboard-window">
            <img src="/backend-panel-real.png" alt="Backend real del sistema Ideamos Inmobiliarias" />
            <figcaption>CAPTURA REAL DEL SISTEMA</figcaption>
          </figure>
          {businessFeatures.map(([title, copy], index) => (
            <article className={`workspace-note note-${index + 1}`} key={title}>
              <span>0{index + 1}</span><div><b>{title}</b><small>{copy}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="tokko-section section" id="tokko">
        <div className="section-heading centered narrow">
          <p className="eyebrow"><span /> Integración disponible</p>
          <h2>Tokko, tu equipo y tu web.<br /><em>Todo en el mismo flujo.</em></h2>
          <p>Conectamos tu inventario con una operación simple y una experiencia comercial diseñada para tu marca. Sin cargas duplicadas y sin perder el control.</p>
        </div>
        <div className="integration-flow" aria-label="Flujo entre Tokko Broker, el panel y el sitio web">
          <article className="flow-card tokko-card">
            <span className="flow-step">01 / ORIGEN</span>
            <div className="flow-logo premium-flow-icon"><img src="/generated-icons/process-discovery.webp" alt="" /></div>
            <h3>Tu inventario como origen</h3>
            <p>Tomamos propiedades, fotos, precios y disponibilidad desde tu operación actual en Tokko Broker.</p>
            <div className="property-stack"><img src="/tokko-property-1.jpg" alt="Propiedad real sincronizada" /><img src="/tokko-property-2.jpg" alt="Propiedad real sincronizada" /><img src="/tokko-property-4.jpg" alt="Propiedad real sincronizada" /></div>
          </article>
          <div className="flow-connector"><i /><span>API</span><i /></div>
          <article className="flow-card ideamos-card">
            <span className="flow-step">02 / GESTIÓN</span>
            <div className="flow-logo premium-flow-icon"><img src="/generated-icons/process-design.webp" alt="" /></div>
            <h3>Decidís desde un solo lugar</h3>
            <p>Revisá lo sincronizado y publicá propiedades o contenido propio sin duplicar tareas.</p>
            <img className="flow-screen" src="/backend-panel-real.png" alt="Panel de Ideamos Inmobiliarias" />
          </article>
          <div className="flow-connector"><i /><span>SYNC</span><i /></div>
          <article className="flow-card web-card">
            <span className="flow-step">03 / RESULTADO</span>
            <div className="flow-logo premium-flow-icon"><img src="/generated-icons/process-launch.webp" alt="" /></div>
            <h3>Tu cartera, lista para vender</h3>
            <p>Cada actualización llega a una web rápida, clara y diseñada alrededor de tu marca.</p>
            <img className="flow-screen" src="/demo-site-live.png" alt="Resultado público del sitio inmobiliario" />
          </article>
        </div>
        <div className="integration-points">
          <span><i className="point-icon point-sync" aria-hidden="true"><b /><b /></i><span><strong>Catálogo alineado</strong><small>Inventario sin duplicaciones</small></span></span>
          <span><i className="point-icon point-edit" aria-hidden="true"><b /><b /></i><span><strong>Libertad para publicar</strong><small>Carga propia cuando la necesitás</small></span></span>
          <span><i className="point-icon point-verified" aria-hidden="true"><b /><b /></i><span><strong>Conexión validada</strong><small>Probamos el flujo antes de salir</small></span></span>
          <span><i className="point-icon point-gallery" aria-hidden="true"><b /><b /></i><span><strong>Fichas que convierten</strong><small>Fotos y datos listos para consultar</small></span></span>
        </div>
      </section>

      <section className="launch-section section" id="proceso">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Puesta en marcha</p><h2>De tu identidad<br />a una web <em>lista para vender.</em></h2></div>
          <p>Nos ocupamos de transformar la plataforma en una experiencia propia y dejamos a tu equipo preparado para usarla.</p>
        </div>
        <div className="launch-steps">
          <article><span>1</span><div className="step-art"><img src="/generated-icons/process-discovery.webp" alt="" /></div><h3>Conocemos tu operación</h3><p>Marca, cartera, zonas, servicios y objetivos comerciales.</p><small>REUNIÓN INICIAL</small></article>
          <article><span>2</span><div className="step-art"><img src="/generated-icons/process-design.webp" alt="" /></div><h3>Diseñamos y configuramos</h3><p>Identidad, contenido, catálogo, contactos y conexión con Tokko si aplica.</p><small>IMPLEMENTACIÓN</small></article>
          <article><span>3</span><div className="step-art"><img src="/generated-icons/process-launch.webp" alt="" /></div><h3>Publicamos y acompañamos</h3><p>Salida online, capacitación y soporte para empezar a operar.</p><small>LANZAMIENTO</small></article>
        </div>
      </section>

      <section className="plan-section">
        <div className="plan-copy">
          <p className="eyebrow light"><span /> Una solución a tu medida</p>
          <h2>Todo lo necesario para<br /><em>dar el próximo paso.</em></h2>
          <p>Cada inmobiliaria tiene una operación distinta. Por eso armamos una propuesta según tu marca, cantidad de propiedades, contenidos e integración.</p>
        </div>
        <article className="plan-card">
          <div className="plan-card-head"><span>IDEAMOS INMOBILIARIAS</span><b>PLAN A MEDIDA</b></div>
          <h3>Web + sistema de gestión</h3>
          <ul>
            <li><Check /> Diseño adaptado a tu marca</li>
            <li><Check /> Catálogo y fichas de propiedades</li>
            <li><Check /> Panel autogestionable</li>
            <li><Check /> Consultas centralizadas</li>
            <li><Check /> Integración opcional con Tokko</li>
            <li><Check /> Publicación y acompañamiento</li>
          </ul>
          <a className="button button-accent full" href="/precios">Ver opciones y precios <Arrow /></a>
          <small>Sin precios inventados: primero entendemos tu operación.</small>
        </article>
      </section>

      <section className="faq-section section" id="preguntas">
        <div className="faq-intro">
          <div className="faq-intro-top">
            <p className="eyebrow light"><span /> Preguntas frecuentes</p>
            <div className="faq-badge"><span>05</span><small>RESPUESTAS<br />CLAVE</small></div>
          </div>
          <h2>Antes de empezar,<br /><em>todo claro.</em></h2>
          <p>Respondemos lo esencial para que puedas evaluar la plataforma con tranquilidad y sin letra chica.</p>
          <a className="faq-cta" href={contactUrl}><span><small>¿TENÉS OTRA DUDA?</small><b>Hablemos de tu inmobiliaria</b></span><Arrow /></a>
          <div className="faq-assurance"><i /><span>Demo personalizada · Respuesta directa</span></div>
        </div>
        <div className="faq-list">
          <div className="faq-list-head"><span>LO QUE MÁS NOS PREGUNTAN</span><small>IDEAMOS / INMOBILIARIAS</small></div>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span className="faq-number">0{index + 1}</span><b>{question}</b><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <footer className="premium-footer">
        <div className="footer-orbit" aria-hidden="true" />
        <section className="footer-cta">
          <div><p className="eyebrow light"><span /> Tu próxima herramienta comercial</p><h2>Una web que muestra.<br />Un sistema que <em>ordena.</em></h2></div>
          <a className="round-cta" href={contactUrl} aria-label="Coordinar una demostración"><span>COORDINAR</span><b>↗</b><small>UNA DEMO</small></a>
        </section>
        <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#inicio"><BrandLogo /></a>
            <p>Web, panel de gestión y catálogo conectado para inmobiliarias que quieren mostrar mejor y trabajar más simple.</p>
            <span className="system-status"><i /> DEMO ONLINE</span>
          </div>
          <nav><span>PRODUCTO</span><a href="#ejemplo">Sitio web</a><a href="#funciones">Funciones</a><a href="#tokko">Tokko Broker</a><a href="/precios">Precios</a><a href={demoUrl} target="_blank" rel="noreferrer">Ver demo ↗</a></nav>
          <nav><span>IDEAMOS</span><a href="#preguntas">Preguntas</a><a href={contactUrl}>Pedir propuesta</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos ↗</a></nav>
          <div className="footer-contact"><span>HABLEMOS</span><h3>¿Lo vemos con tu inmobiliaria?</h3><a href={contactUrl}>hola@ideamos.ar <Arrow /></a><p>Buenos Aires, Argentina</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 IDEAMOS</span><span>DISEÑO · PRODUCTO · TECNOLOGÍA</span><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">ESTUDIO IDEAMOS ↗</a></div>
      </footer>
    </main>
  );
}