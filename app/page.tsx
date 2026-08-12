const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20conocer%20Ideamos%20Inmobiliarias";

const Arrow = () => <span aria-hidden="true">â†—</span>;
const Check = () => <span className="check" aria-hidden="true">âœ“</span>;

const visitorFeatures = [
  ["01", "Experiencia mobile", "Tu catÃ¡logo se adapta a celulares, tablets y escritorio con una navegaciÃ³n rÃ¡pida y clara."],
  ["02", "Buscador con filtros", "OperaciÃ³n, tipo, ubicaciÃ³n, ambientes, precio y los datos que realmente usa un interesado."],
  ["03", "Fichas completas", "GalerÃ­as, descripciÃ³n, caracterÃ­sticas, ubicaciÃ³n y contacto directo desde cada propiedad."],
  ["04", "Consultas por propiedad", "Cada mensaje llega identificado con el inmueble que despertÃ³ el interÃ©s del visitante."],
  ["05", "WhatsApp integrado", "Un acceso directo para convertir bÃºsquedas en conversaciones con tu equipo comercial."],
  ["06", "SEO inmobiliario", "PÃ¡ginas preparadas para que Google pueda entender tu cartera y tu zona de trabajo."],
];

const businessFeatures = [
  ["INVENTARIO", "PublicÃ¡, editÃ¡, destacÃ¡, pausÃ¡ o duplicÃ¡ propiedades desde un Ãºnico panel."],
  ["EMPRENDIMIENTOS", "PresentÃ¡ proyectos con unidades, galerÃ­a, amenities, ubicaciÃ³n y estado comercial."],
  ["CONSULTAS", "OrdenÃ¡ oportunidades como nuevas, contactadas o cerradas sin perder el contexto."],
  ["CONTENIDOS", "ActualizÃ¡ textos, secciones y datos esenciales sin depender de cambios tÃ©cnicos."],
];

const faqs = [
  ["Â¿Necesito usar Tokko Broker?", "No. PodÃ©s administrar toda la cartera desde el panel de Ideamos. Tokko es una integraciÃ³n opcional para inmobiliarias que ya trabajan con esa plataforma."],
  ["Â¿La web se adapta a la identidad de mi inmobiliaria?", "SÃ­. Trabajamos colores, tipografÃ­as, logo, tono, secciones y datos de contacto para construir una experiencia propia, no una plantilla genÃ©rica."],
  ["Â¿Puedo publicar propiedades y emprendimientos?", "SÃ­. El sistema contempla ambos tipos de contenido, con fichas completas, galerÃ­as, estados, precios, borradores y destacados."],
  ["Â¿QuÃ© pasa con las consultas?", "Los formularios llegan al panel con la referencia de la propiedad. AsÃ­ el equipo sabe quÃ© vio cada persona y puede seguir la oportunidad."],
  ["Â¿La web queda preparada para celulares y Google?", "SÃ­. El diseÃ±o es responsive y la estructura estÃ¡ pensada para ofrecer una buena experiencia de navegaciÃ³n y una base sÃ³lida de posicionamiento."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ideamos Inmobiliarias, inicio">
          <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span><b>IDEAMOS</b><small>INMOBILIARIAS</small></span>
        </a>
        <nav aria-label="NavegaciÃ³n principal">
          <a href="#ejemplo">Ejemplo</a>
          <a href="#funciones">Funciones</a>
          <a href="#tokko">Tokko Broker</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="button button-dark topbar-cta" href={contactUrl}>Quiero mi sitio <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Sitios web para inmobiliarias</p>
          <h1>Una web para mostrar mejor.<br /><em>Un sistema para vender mÃ¡s.</em></h1>
          <p className="hero-lead">PublicÃ¡ tus propiedades en un sitio profesional, administrÃ¡ todo desde un panel simple y conectÃ¡ tu inventario con Tokko Broker cuando lo necesites.</p>
          <div className="hero-actions">
            <a className="button button-accent" href={contactUrl}>Quiero conocer el sistema <Arrow /></a>
            <a className="button button-soft" href={demoUrl} target="_blank" rel="noreferrer">Ver demo funcionando <Arrow /></a>
          </div>
          <div className="hero-benefits" aria-label="Beneficios principales">
            <span><Check /> DiseÃ±o profesional</span>
            <span><Check /> Optimizada para Google</span>
            <span><Check /> Sin tocar cÃ³digo</span>
          </div>
        </div>

        <div className="hero-product" aria-label="Vista real de la plataforma">
          <span className="hero-sticker sticker-one">100%<br /><b>MOBILE</b></span>
          <span className="hero-sticker sticker-two">TOKKO<br /><b>READY</b></span>
          <figure className="site-browser">
            <div className="browser-chrome"><i /><i /><i /><span>inmobiliaria.ideamos.ar</span><b>â‹¯</b></div>
            <img src="/demo-site-live.png" alt="Sitio inmobiliario real desarrollado por Ideamos" />
          </figure>
          <figure className="panel-card">
            <div><span className="mini-brand">i</span><b>Panel de gestiÃ³n</b><small>ONLINE</small></div>
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
        <p>UNA SOLUCIÃ“N PARA TODA TU OPERACIÃ“N DIGITAL</p>
        <div><span>SITIO WEB</span><i>+</i><span>PROPIEDADES</span><i>+</i><span>PANEL</span><i>+</i><span>TOKKO</span><i>+</i><span>CONSULTAS</span></div>
      </section>

      <section className="intro section" id="ejemplo">
        <div className="section-heading centered">
          <p className="eyebrow"><span /> Una experiencia real</p>
          <h2>Tu inmobiliaria merece<br />mucho mÃ¡s que <em>un catÃ¡logo.</em></h2>
          <p>La web trabaja como una herramienta comercial: presenta tu marca, organiza la bÃºsqueda y lleva a cada interesado hacia una consulta concreta.</p>
        </div>
        <div className="device-stage">
          <div className="device-glow" aria-hidden="true" />
          <figure className="desktop-device">
            <div className="device-bar"><span /><span /><span /></div>
            <img src="/demo-site-live.png" alt="Demo real del sitio web inmobiliario en escritorio" />
          </figure>
          <figure className="mobile-device">
            <div className="mobile-speaker" />
            <img src="/demo-site-live.png" alt="AdaptaciÃ³n mÃ³vil del sitio inmobiliario" />
          </figure>
          <aside className="result-card"><small>TODO CONECTADO</small><strong>Web + gestiÃ³n</strong><span>Una sola experiencia para tu equipo y tus clientes.</span></aside>
        </div>
        <div className="proof-grid">
          <article><strong>01</strong><h3>Tu marca primero</h3><p>La experiencia visual se diseÃ±a alrededor de tu identidad, zonas y tipo de cartera.</p></article>
          <article><strong>02</strong><h3>Buscar es fÃ¡cil</h3><p>Filtros claros y fichas completas para que cada visitante encuentre lo que necesita.</p></article>
          <article><strong>03</strong><h3>Consultar es inmediato</h3><p>Formularios y WhatsApp disponibles en el momento de mayor intenciÃ³n.</p></article>
        </div>
      </section>

      <section className="features section" id="funciones">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Pensada para tus visitantes</p><h2>Todo lo que esperan<br />de una web <em>moderna.</em></h2></div>
          <p>Una navegaciÃ³n clara, rÃ¡pida y centrada en las propiedades. Desde la primera bÃºsqueda hasta el contacto con tu inmobiliaria.</p>
        </div>
        <div className="feature-list">
          {visitorFeatures.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={`feature-icon icon-${number}`} aria-hidden="true"><i /></div>
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
          <p>Un panel simple para sostener la operaciÃ³n diaria sin esperar que alguien haga cada cambio por vos.</p>
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
          <p className="eyebrow"><span /> IntegraciÃ³n disponible</p>
          <h2>Tu web inmobiliaria<br />conectada con <em>Tokko Broker.</em></h2>
          <p>Si ya usÃ¡s Tokko, sincronizamos tu inventario para evitar cargas duplicadas. Si no lo usÃ¡s, podÃ©s gestionar todo desde el panel de Ideamos.</p>
        </div>
        <div className="integration-flow" aria-label="Flujo entre Tokko Broker, el panel y el sitio web">
          <article className="flow-card tokko-card">
            <span className="flow-step">01 / ORIGEN</span>
            <div className="flow-logo">T</div>
            <h3>Tokko Broker</h3>
            <p>Propiedades, fotos, precios y disponibilidad desde tu inventario actual.</p>
            <div className="property-stack"><img src="/tokko-property-1.jpg" alt="Propiedad real sincronizada" /><img src="/tokko-property-2.jpg" alt="Propiedad real sincronizada" /><img src="/tokko-property-4.jpg" alt="Propiedad real sincronizada" /></div>
          </article>
          <div className="flow-connector"><i /><span>API</span><i /></div>
          <article className="flow-card ideamos-card">
            <span className="flow-step">02 / GESTIÃ“N</span>
            <div className="flow-logo ideamos">i</div>
            <h3>Panel Ideamos</h3>
            <p>ControlÃ¡ lo sincronizado y conservÃ¡ la opciÃ³n de publicar contenido propio.</p>
            <img className="flow-screen" src="/backend-panel-real.png" alt="Panel de Ideamos Inmobiliarias" />
          </article>
          <div className="flow-connector"><i /><span>SYNC</span><i /></div>
          <article className="flow-card web-card">
            <span className="flow-step">03 / RESULTADO</span>
            <div className="flow-logo web">â†—</div>
            <h3>Tu sitio web</h3>
            <p>Una cartera actualizada, dentro de una experiencia diseÃ±ada para tu marca.</p>
            <img className="flow-screen" src="/demo-site-live.png" alt="Resultado pÃºblico del sitio inmobiliario" />
          </article>
        </div>
        <div className="integration-points"><span><Check /> SincronizaciÃ³n de catÃ¡logo</span><span><Check /> Carga manual disponible</span><span><Check /> Prueba de conexiÃ³n</span><span><Check /> Fotos y fichas completas</span></div>
      </section>

      <section className="launch-section section">
        <div className="section-heading split">
          <div><p className="eyebrow"><span /> Puesta en marcha</p><h2>De tu identidad<br />a una web <em>lista para vender.</em></h2></div>
          <p>Nos ocupamos de transformar la plataforma en una experiencia propia y dejamos a tu equipo preparado para usarla.</p>
        </div>
        <div className="launch-steps">
          <article><span>1</span><div className="step-art"><i /><i /></div><h3>Conocemos tu operaciÃ³n</h3><p>Marca, cartera, zonas, servicios y objetivos comerciales.</p><small>REUNIÃ“N INICIAL</small></article>
          <article><span>2</span><div className="step-art"><i /><i /></div><h3>DiseÃ±amos y configuramos</h3><p>Identidad, contenido, catÃ¡logo, contactos y conexiÃ³n con Tokko si aplica.</p><small>IMPLEMENTACIÃ“N</small></article>
          <article><span>3</span><div className="step-art"><i /><i /></div><h3>Publicamos y acompaÃ±amos</h3><p>Salida online, capacitaciÃ³n y soporte para empezar a operar.</p><small>LANZAMIENTO</small></article>
        </div>
      </section>

      <section className="plan-section">
        <div className="plan-copy">
          <p className="eyebrow light"><span /> Una soluciÃ³n a tu medida</p>
          <h2>Todo lo necesario para<br /><em>dar el prÃ³ximo paso.</em></h2>
          <p>Cada inmobiliaria tiene una operaciÃ³n distinta. Por eso armamos una propuesta segÃºn tu marca, cantidad de propiedades, contenidos e integraciÃ³n.</p>
        </div>
        <article className="plan-card">
          <div className="plan-card-head"><span>IDEAMOS INMOBILIARIAS</span><b>PLAN A MEDIDA</b></div>
          <h3>Web + sistema de gestiÃ³n</h3>
          <ul>
            <li><Check /> DiseÃ±o adaptado a tu marca</li>
            <li><Check /> CatÃ¡logo y fichas de propiedades</li>
            <li><Check /> Panel autogestionable</li>
            <li><Check /> Consultas centralizadas</li>
            <li><Check /> IntegraciÃ³n opcional con Tokko</li>
            <li><Check /> PublicaciÃ³n y acompaÃ±amiento</li>
          </ul>
          <a className="button button-accent full" href={contactUrl}>Solicitar una propuesta <Arrow /></a>
          <small>Sin precios inventados: primero entendemos tu operaciÃ³n.</small>
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
          <div><p className="eyebrow light"><span /> Tu prÃ³xima herramienta comercial</p><h2>Una web que muestra.<br />Un sistema que <em>ordena.</em></h2></div>
          <a className="round-cta" href={contactUrl} aria-label="Coordinar una demostraciÃ³n"><span>COORDINAR</span><b>â†—</b><small>UNA DEMO</small></a>
        </section>
        <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#inicio"><span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span><span><b>IDEAMOS</b><small>INMOBILIARIAS</small></span></a>
            <p>Web, panel de gestiÃ³n y catÃ¡logo conectado para inmobiliarias que quieren mostrar mejor y trabajar mÃ¡s simple.</p>
            <span className="system-status"><i /> DEMO ONLINE</span>
          </div>
          <nav><span>PRODUCTO</span><a href="#ejemplo">Sitio web</a><a href="#funciones">Funciones</a><a href="#tokko">Tokko Broker</a><a href={demoUrl} target="_blank" rel="noreferrer">Ver demo â†—</a></nav>
          <nav><span>IDEAMOS</span><a href="#preguntas">Preguntas</a><a href={contactUrl}>Pedir propuesta</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos â†—</a></nav>
          <div className="footer-contact"><span>HABLEMOS</span><h3>Â¿Lo vemos con tu inmobiliaria?</h3><a href={contactUrl}>hola@ideamos.ar <Arrow /></a><p>Buenos Aires, Argentina</p></div>
        </div>
        <div className="footer-bottom"><span>Â© 2026 IDEAMOS</span><span>DISEÃ‘O Â· PRODUCTO Â· TECNOLOGÃA</span><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">ESTUDIO IDEAMOS â†—</a></div>
      </footer>
    </main>
  );
}