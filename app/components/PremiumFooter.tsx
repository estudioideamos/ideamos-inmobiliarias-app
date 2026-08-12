import BrandLogo from "./BrandLogo";
import ContactSection from "./ContactSection";
import Marquee from "./Marquee";

const contactUrl = "/contacto";
const demoUrl = "https://inmobiliaria.ideamos.ar/";

export default function PremiumFooter({ showContactSection = true }: { showContactSection?: boolean }) {
  return (
    <>{showContactSection && <><ContactSection /><Marquee label="Cierre comercial" tone="forest" items={["DEMO PERSONALIZADA", "PROPUESTA CLARA", "WEB + GESTIÓN", "TOKKO OPCIONAL", "ACOMPAÑAMIENTO DIRECTO"]} /></>}<footer className="premium-footer">
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
        <div className="footer-quick-links">
          <input className="footer-toggle-input" id="footer-quick-toggle" type="checkbox" />
          <label className="footer-toggle-label" htmlFor="footer-quick-toggle">ACCESO RÁPIDO <span aria-hidden="true" /></label>
          <nav><a href="/la-plataforma">La Plataforma</a><a href="/funcionalidades">Funcionalidades</a><a href="/tokko-broker">Tokko Broker</a><a href="/beneficios">Beneficios</a><a href="/precios">Precios</a></nav>
        </div>
        <div className="footer-quick-links footer-useful-links">
          <input className="footer-toggle-input" id="footer-useful-toggle" type="checkbox" />
          <label className="footer-toggle-label" htmlFor="footer-useful-toggle">INFORMACIÓN ÚTIL <span aria-hidden="true" /></label>
          <nav><a href="/preguntas-frecuentes">Preguntas Frecuentes</a><a href={contactUrl}>Contacto</a><a href={contactUrl}>Pedir propuesta</a><a href="https://ideamos.ar/" target="_blank" rel="noreferrer">Estudio Ideamos ↗</a></nav>
        </div>
        <div className="footer-contact"><span>HABLEMOS</span><h3>¿Lo vemos con tu inmobiliaria?</h3><a href={contactUrl}>hola@ideamos.ar <span aria-hidden="true">↗</span></a><p>Buenos Aires, Argentina</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 IDEAMOS Propiedades</span><span>DISEÑO · PRODUCTO · TECNOLOGÍA</span><a href="https://ideamos.com.ar/" target="_blank" rel="noreferrer">IMAGINADO POR ESTUDIO IDEAMOS ↗</a></div>
    </footer></>
  );
}
