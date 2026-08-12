import BrandLogo from "./BrandLogo";

const demoUrl = "https://inmobiliaria.ideamos.ar/";
const Arrow = () => <span aria-hidden="true">↗</span>;

type ActivePage = "plataforma" | "funcionalidades" | "tokko" | "precios" | "preguntas" | "contacto";

export default function SiteHeader({ active }: { active?: ActivePage }) {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Ideamos Inmobiliarias, inicio"><BrandLogo /></a>
      <nav aria-label="Navegación principal">
        <a className={active === "plataforma" ? "active" : ""} href="/la-plataforma">La Plataforma</a>
        <a className={active === "funcionalidades" ? "active" : ""} href="/funcionalidades">Funcionalidades</a>
        <a className={active === "tokko" ? "active" : ""} href="/tokko-broker">Tokko Broker</a>
        <a className={active === "precios" ? "active" : ""} href="/precios">Precios</a>
        <a className={active === "preguntas" ? "active" : ""} href="/preguntas-frecuentes">Preguntas Frecuentes</a>
        <a className={active === "contacto" ? "active" : ""} href="/contacto">Contacto</a>
      </nav>
      <a className="button button-dark topbar-cta" href={demoUrl} target="_blank" rel="noreferrer">Ver demo <Arrow /></a>
    </header>
  );
}
