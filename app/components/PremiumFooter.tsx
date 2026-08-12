import BrandLogo from "./BrandLogo";

const contactUrl = "mailto:hola@ideamos.ar?subject=Quiero%20conocer%20Ideamos%20Inmobiliarias";
const demoUrl = "https://inmobiliaria.ideamos.ar/";

export default function PremiumFooter() {
  return (
    <footer className="premium-footer">
      <div className="footer-orbit" aria-hidden="true" />
      <section className="footer-cta">
        <div><p className="eyebrow light"><span /> Tu próxima herramienta comercial</p><h2>Una web que muestra.<br />Un sistema que <em>ordena.</em></h2></div>
        <a className="round-cta" href={contactUrl} aria-label="Coordinar una demostración"><span>COORDINAR</span><b>↗</b><small>UNA DEMO</small></a>
      </section>
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="/"><BrandLogo /></a>
          <p>Web, panel de gestión y catálogo conectado para inmobiliarias que quieren mostrar mejor y trabajar más simple.</p>
          <span className="system-status"><i /> DEMO ONLINE</span>
        </div>
        <nav><span>PRODUCTO</span><a href="/la-plataforma">La Plataforma</a><a href="/funcionalidades">Funcionalidades</a><a href="/tokko-broker">Tokko Broker</a><a href="/beneficios">Beneficios</a><a href="/precios">Precios</a><a href={demoUrl} target="_blank" rel="noreferrer">Ver demo ↗</a></nav>
        <nav><span>IDEAMOS</span><a href="/preguntas-frecuentes">Preguntas Frecuentes</a><a href={contactUrl}>Pedir propuesta</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos ↗</a></nav>
        <div className="footer-contact"><span>HABLEMOS</span><h3>¿Lo vemos con tu inmobiliaria?</h3><a href={contactUrl}>hola@ideamos.ar <span aria-hidden="true">↗</span></a><p>Buenos Aires, Argentina</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 IDEAMOS Propiedades</span><span>DISEÑO · PRODUCTO · TECNOLOGÍA</span><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">ESTUDIO IDEAMOS ↗</a></div>
    </footer>
  );
}
