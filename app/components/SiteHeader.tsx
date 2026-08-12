import BrandLogo from "./BrandLogo";

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const Arrow = () => <span aria-hidden="true">↗</span>;

type ActivePage = "plataforma" | "funcionalidades" | "tokko" | "precios" | "preguntas" | "contacto";

const navItems: Array<{ key: ActivePage; href: string; label: string }> = [
  { key: "plataforma", href: "/la-plataforma", label: "La Plataforma" },
  { key: "funcionalidades", href: "/funcionalidades", label: "Funcionalidades" },
  { key: "tokko", href: "/tokko-broker", label: "Tokko Broker" },
  { key: "precios", href: "/precios", label: "Precios" },
  { key: "preguntas", href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { key: "contacto", href: "/contacto", label: "Contacto" },
];

export default function SiteHeader({ active }: { active?: ActivePage }) {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Ideamos Inmobiliarias, inicio"><BrandLogo /></a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => <a className={active === item.key ? "active" : ""} href={item.href} key={item.key}>{item.label}</a>)}
      </nav>
      <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menú de navegación"><span /><span /><span /></summary>
        <nav aria-label="Navegación móvil">
          <div className="mobile-menu-head">
            <a className="brand mobile-menu-brand" href="/" aria-label="Volver al inicio"><BrandLogo /></a>
            <span>MENÚ / IDEAMOS</span>
          </div>
          <div className="mobile-menu-links">
            {navItems.map((item, index) => <a className={active === item.key ? "active" : ""} href={item.href} key={item.key}><small>0{index + 1}</small><b>{item.label}</b><span aria-hidden="true">↗</span></a>)}
          </div>
          <div className="mobile-menu-bottom">
            <p><span /> Plataforma web + gestión inmobiliaria</p>
            <a className="mobile-demo-link" href={demoUrl} target="_blank" rel="noreferrer"><i aria-hidden="true" /><b>Ver demo funcionando</b><span aria-hidden="true">↗</span></a>
            <div><a href="mailto:hola@ideamos.ar">hola@ideamos.ar</a><span>Buenos Aires · Argentina</span></div>
          </div>
        </nav>
      </details>
    </header>
  );
}
