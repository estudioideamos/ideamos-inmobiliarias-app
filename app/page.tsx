const demoUrl = "https://inmobiliaria.ideamos.ar/";
const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20una%20demo%20del%20sistema%20inmobiliario";

const Check = () => <span className="check" aria-hidden="true">✓</span>;
const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ideamos Inmobiliarias, inicio">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><b>IDEAMOS</b><small>INMOBILIARIAS</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#producto">Producto</a>
          <a href="#tokko">Tokko</a>
          <a href="#incluye">Qué incluye</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="nav-cta" href={contactUrl}>Pedir una demo <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Sistema integral para inmobiliarias</div>
          <h1>Tu web.<br />Tus propiedades.<br /><em>Todo conectado.</em></h1>
          <p>Un sitio inmobiliario diseñado para vender, con un panel simple para publicar y la posibilidad de sincronizar tu cartera desde Tokko Broker.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={contactUrl}>Quiero una demo <Arrow /></a>
            <a className="button button-ghost" href={demoUrl} target="_blank" rel="noreferrer">Ver una web funcionando <Arrow /></a>
          </div>
          <div className="hero-proof">
            <div><Check /><span><b>Web a tu medida</b><small>Identidad propia, no una plantilla genérica</small></span></div>
            <div><Check /><span><b>Panel autogestionable</b><small>Publicá sin depender de un desarrollador</small></span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista del sitio inmobiliario y su panel de gestión">
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="browser-window public-preview">
            <div className="browser-bar"><span /><span /><span /><small>tuinmobiliaria.com.ar</small></div>
            <div className="property-hero">
              <img src="/hero-interior.jpg" alt="Interior contemporáneo de una propiedad" />
              <div className="property-overlay">
                <span>VENTA · PALERMO</span>
                <h2>Espacios que<br />se eligen bien.</h2>
                <button type="button">Explorar propiedades <Arrow /></button>
              </div>
            </div>
          </div>
          <div className="admin-float">
            <div className="admin-float-head"><span className="mini-logo">i</span><b>Panel de gestión</b><i>•••</i></div>
            <div className="admin-kpis">
              <div><small>PUBLICADAS</small><strong>48</strong><span>+6 este mes</span></div>
              <div><small>CONSULTAS</small><strong>17</strong><span>5 nuevas</span></div>
            </div>
            <div className="admin-row"><img src="/property-home.jpg" alt="" /><span><b>Casa del Lago</b><small>USD 485.000</small></span><i>PUBLICADA</i></div>
            <div className="admin-row muted"><span className="row-placeholder" /><span><b>Nuevo emprendimiento</b><small>Borrador guardado</small></span><i>BORRADOR</i></div>
          </div>
          <div className="sync-badge"><span className="sync-icon">T</span><span><small>SINCRONIZACIÓN</small><b>Tokko conectado</b></span><i>✓</i></div>
        </div>
      </section>

      <section className="capability-strip" aria-label="Capacidades principales">
        <span>WEB INMOBILIARIA</span><i>+</i><span>PANEL DE GESTIÓN</span><i>+</i><span>TOKKO BROKER</span><i>+</i><span>CONSULTAS Y LEADS</span>
      </section>

      <section className="problem-section" id="producto">
        <div className="section-kicker">01 / EL PROBLEMA</div>
        <div className="problem-grid">
          <h2>Publicar una propiedad no debería significar <em>duplicar tareas.</em></h2>
          <div className="problem-copy">
            <p>Tu equipo ya tiene bastante con captar, mostrar y cerrar operaciones. El sistema conecta la gestión de la cartera con una web profesional para que cada publicación trabaje mejor.</p>
            <a href="#incluye">Conocé el sistema <span>↓</span></a>
          </div>
        </div>
        <div className="comparison">
          <article className="comparison-old">
            <span>LA FORMA DE SIEMPRE</span>
            <h3>Información dispersa.<br />Procesos manuales.</h3>
            <ul>
              <li><i>01</i> Cargar la misma propiedad en varios lugares</li>
              <li><i>02</i> Pedir cambios cada vez que la web se desactualiza</li>
              <li><i>03</i> Consultas perdidas entre mails y mensajes</li>
            </ul>
          </article>
          <article className="comparison-new">
            <span>CON IDEAMOS INMOBILIARIAS</span>
            <h3>Una operación.<br />Un solo lugar.</h3>
            <ul>
              <li><Check /> Sitio y catálogo conectados</li>
              <li><Check /> Propiedades, fotos y estados autogestionables</li>
              <li><Check /> Consultas ordenadas dentro del panel</li>
            </ul>
            <div className="comparison-signal"><i /><span>Todo actualizado</span><b>AHORA</b></div>
          </article>
        </div>
      </section>

      <section className="features-section" id="incluye">
        <div className="section-head">
          <div><span className="section-kicker">02 / TODO LO QUE NECESITÁS</span><h2>Una plataforma.<br /><em>Cuatro ventajas.</em></h2></div>
          <p>La cara pública que tus clientes esperan y la herramienta interna que tu equipo necesita para trabajar todos los días.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-web">
            <div className="feature-number">01</div>
            <div className="mini-site">
              <div className="mini-site-top"><b>inmobiliaria</b><span>Propiedades &nbsp; Nosotros &nbsp; Contacto</span></div>
              <img src="/property-home.jpg" alt="Casa contemporánea publicada en una web inmobiliaria" />
              <div><small>PROPIEDAD DESTACADA</small><strong>Una web a la altura<br />de tu cartera.</strong></div>
            </div>
            <h3>Web premium con tu marca</h3>
            <p>Diseño a medida, catálogo con filtros, fichas completas, emprendimientos, tasaciones y contacto por WhatsApp.</p>
          </article>

          <article className="feature-card feature-panel">
            <div className="feature-number">02</div>
            <div className="panel-list">
              <div><span>PROPIEDAD</span><span>ESTADO</span></div>
              <p><i className="thumb one" /><span><b>Piso Alto</b><small>Recoleta · Venta</small></span><em>PUBLICADA</em></p>
              <p><i className="thumb two" /><span><b>Casa del Lago</b><small>Nordelta · Venta</small></span><em>DESTACADA</em></p>
              <p><i className="thumb three" /><span><b>Loft Distrito</b><small>Palermo · Alquiler</small></span><em>BORRADOR</em></p>
            </div>
            <h3>Panel claro y autogestionable</h3>
            <p>Creá, editá, duplicá, destacá o pausá publicaciones. Administrá fotos, precios, estados y detalles sin tocar código.</p>
          </article>

          <article className="feature-card feature-tokko" id="tokko">
            <div className="feature-number">03</div>
            <div className="tokko-visual">
              <div className="tokko-source"><b>T</b><span><strong>Tokko Broker</strong><small>Tu inventario actual</small></span></div>
              <div className="flow-line"><i /><i /><i /></div>
              <div className="tokko-destination"><span className="mini-logo">i</span><span><strong>Tu sitio web</strong><small>Catálogo actualizado</small></span><em>✓</em></div>
            </div>
            <h3>Conexión con Tokko Broker</h3>
            <p>Vinculá la API, probá la conexión y sincronizá el catálogo. La carga manual sigue disponible cuando la necesitás.</p>
          </article>

          <article className="feature-card feature-leads">
            <div className="feature-number">04</div>
            <div className="lead-visual">
              <div className="lead-head"><span>CONSULTAS RECIENTES</span><b>Ver todas ↗</b></div>
              <div className="lead-person"><i>MS</i><span><b>María S.</b><small>Consulta por Casa del Lago</small></span><em>NUEVA</em></div>
              <div className="lead-actions"><span>maría@email.com</span><button type="button">Contactar</button></div>
            </div>
            <h3>Consultas que no se pierden</h3>
            <p>Los formularios de cada propiedad llegan al panel con su contexto. Marcá oportunidades como nuevas, contactadas o cerradas.</p>
          </article>
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-copy">
          <span className="section-kicker light">03 / PANEL INTEGRAL</span>
          <h2>Todo tu negocio,<br /><em>de un vistazo.</em></h2>
          <p>Propiedades, emprendimientos, consultas y rendimiento. Diseñado para que cualquier persona del equipo pueda usarlo desde el primer día.</p>
          <ul>
            <li><Check /><span><b>Inventario ordenado</b><small>Buscá y filtrá por estado, zona, tipo u operación.</small></span></li>
            <li><Check /><span><b>Galerías profesionales</b><small>Cargá hasta 13 imágenes y elegí la portada.</small></span></li>
            <li><Check /><span><b>Borradores y destacados</b><small>Prepará publicaciones sin mostrarlas antes de tiempo.</small></span></li>
            <li><Check /><span><b>Vista del rendimiento</b><small>Seguí publicaciones activas, consultas y valor de cartera.</small></span></li>
          </ul>
          <a className="button button-light" href={contactUrl}>Ver el panel en una demo <Arrow /></a>
        </div>
        <div className="dashboard-demo">
          <aside>
            <div className="dash-brand"><span className="mini-logo">i</span><b>inmobiliaria</b></div>
            <small>ESPACIO DE TRABAJO</small>
            <strong>Tu Inmobiliaria</strong>
            <nav>
              <span className="active">▦ &nbsp; Panel general</span>
              <span>⌂ &nbsp; Propiedades <b>48</b></span>
              <span>◇ &nbsp; Emprendimientos <b>8</b></span>
              <span>☏ &nbsp; Consultas <i>5</i></span>
              <span>↗ &nbsp; Rendimiento</span>
            </nav>
            <div className="dash-user"><i>TV</i><span><b>Tu equipo</b><small>Administración</small></span></div>
          </aside>
          <div className="dashboard-main">
            <header><div><small>PANEL GENERAL</small><h3>Buenos días.</h3></div><button type="button">+ Nueva propiedad</button></header>
            <div className="dashboard-stats">
              <article><span>PUBLICACIONES ACTIVAS</span><strong>48</strong><div className="bars">{[4,7,5,8,6,9,8].map((h, i) => <i key={i} style={{height: `${h * 7}px`}} />)}</div></article>
              <article><span>BORRADORES</span><strong>6</strong><small>Pendientes</small></article>
              <article><span>CONSULTAS</span><strong>17</strong><small>5 nuevas</small></article>
            </div>
            <div className="dashboard-table">
              <div className="table-title"><span><small>ACTIVIDAD RECIENTE</small><b>Últimas propiedades</b></span><em>Ver inventario ↗</em></div>
              <div className="table-head"><span>PROPIEDAD</span><span>OPERACIÓN</span><span>PRECIO</span><span>ESTADO</span></div>
              {[
                ["Piso Alto", "Recoleta, CABA", "Venta", "USD 745.000", "PUBLICADA"],
                ["Casa del Lago", "Nordelta, Tigre", "Venta", "USD 485.000", "PUBLICADA"],
                ["Loft Distrito", "Palermo, CABA", "Alquiler", "USD 2.300", "BORRADOR"],
              ].map((row, i) => <div className="table-row" key={row[0]}><span><i className={`table-thumb t${i + 1}`} /><b>{row[0]}<small>{row[1]}</small></b></span><span>{row[2]}</span><strong>{row[3]}</strong><em className={i === 2 ? "draft" : ""}>{row[4]}</em></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="tokko-section">
        <div className="tokko-copy">
          <span className="section-kicker">04 / TOKKO BROKER</span>
          <h2>Si ya usás Tokko,<br /><em>no empezás de cero.</em></h2>
          <p>Conectamos tu cuenta al sistema para que el catálogo de la web se alimente desde tu inventario. Y si una propiedad necesita un tratamiento especial, también podés cargarla de forma manual.</p>
          <div className="tokko-points"><span><Check /> Prueba de conexión</span><span><Check /> Sincronización del catálogo</span><span><Check /> Fotos y fichas completas</span><span><Check /> Carga manual disponible</span></div>
        </div>
        <div className="sync-flow" aria-label="Flujo de sincronización entre Tokko, el sistema y la web">
          <article><span>01</span><div className="source-logo">T</div><h3>Tokko Broker</h3><p>Tu equipo mantiene el inventario donde ya trabaja.</p></article>
          <i className="connector"><b>•••</b><small>API</small></i>
          <article className="flow-center"><span>02</span><div className="source-logo ideamos-logo">i</div><h3>Sistema Ideamos</h3><p>Procesa datos, imágenes, estados y disponibilidad.</p></article>
          <i className="connector"><b>•••</b><small>SYNC</small></i>
          <article><span>03</span><div className="source-logo web-logo">↗</div><h3>Tu web</h3><p>El catálogo se presenta con tu identidad y estrategia.</p></article>
        </div>
      </section>

      <section className="process-section">
        <div className="section-head compact">
          <div><span className="section-kicker">05 / PUESTA EN MARCHA</span><h2>De la idea a tu web.<br /><em>Sin vueltas.</em></h2></div>
          <p>Adaptamos el sistema a tu inmobiliaria, cargamos la identidad y dejamos al equipo listo para operar.</p>
        </div>
        <div className="process-grid">
          <article><span>01</span><div className="process-icon">◎</div><h3>Entendemos tu operación</h3><p>Marca, zonas, tipo de cartera, servicios y forma de trabajo.</p><small>REUNIÓN INICIAL</small></article>
          <article><span>02</span><div className="process-icon">◇</div><h3>Diseñamos tu experiencia</h3><p>Web, contenido, catálogo y estructura comercial a tu medida.</p><small>DISEÑO + CONFIGURACIÓN</small></article>
          <article><span>03</span><div className="process-icon">↗</div><h3>Publicamos y acompañamos</h3><p>Conectamos Tokko si aplica, capacitamos y salimos online.</p><small>LANZAMIENTO</small></article>
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="faq-title"><span className="section-kicker">06 / PREGUNTAS FRECUENTES</span><h2>Antes de empezar,<br /><em>todo claro.</em></h2><p>Si tu operación tiene una necesidad particular, la vemos en la demo.</p><a href={contactUrl}>Hablemos <Arrow /></a></div>
        <div className="faq-list">
          <details open><summary>¿Necesito usar Tokko Broker?<span /></summary><p>No. Podés administrar toda la cartera desde el panel. Tokko es una integración opcional para inmobiliarias que ya trabajan con esa plataforma.</p></details>
          <details><summary>¿La web lleva la identidad de mi inmobiliaria?<span /></summary><p>Sí. Adaptamos colores, tipografías, logo, tono de comunicación, secciones y datos de contacto para que el resultado se sienta propio.</p></details>
          <details><summary>¿Puedo publicar propiedades y emprendimientos?<span /></summary><p>Sí. El sistema cuenta con módulos separados para propiedades y emprendimientos, con fichas, galerías, estados, precios y borradores.</p></details>
          <details><summary>¿Qué pasa con las consultas de los interesados?<span /></summary><p>Los formularios de las propiedades llegan al panel con la referencia del inmueble. El equipo puede ordenarlas como nuevas, contactadas o cerradas.</p></details>
          <details><summary>¿Puedo hacer cambios sin depender de ustedes?<span /></summary><p>Sí. El panel está pensado para la operación diaria. Para cambios de diseño o nuevas funciones, nuestro equipo puede acompañarte.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-copy">
          <span>WEB + GESTIÓN + TOKKO</span>
          <h2>Tu próxima operación<br />puede empezar <em>acá.</em></h2>
          <p>Pedí una demo y te mostramos cómo se vería el sistema adaptado a tu inmobiliaria.</p>
          <div><a className="button button-primary" href={contactUrl}>Coordinar una demo <Arrow /></a><a className="text-link" href={demoUrl} target="_blank" rel="noreferrer">Ver caso en vivo <Arrow /></a></div>
        </div>
        <div className="cta-seal"><span className="brand-mark large" aria-hidden="true"><i /><i /><i /></span><small>HECHO PARA<br />INMOBILIARIAS</small></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span><b>IDEAMOS</b><small>INMOBILIARIAS</small></span></a>
        <p>Webs y sistemas pensados para inmobiliarias que quieren mostrar mejor, trabajar más simple y crecer con una identidad propia.</p>
        <div><a href={demoUrl} target="_blank" rel="noreferrer">Demo en vivo</a><a href={contactUrl}>hola@ideamos.ar</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos</a></div>
        <small>© 2026 IDEAMOS. TODOS LOS DERECHOS RESERVADOS.</small>
      </footer>
    </main>
  );
}