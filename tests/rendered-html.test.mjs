import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renderiza la landing comercial terminada", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Web y gestión para/);
  assert.match(html, /Tokko Broker/);
  assert.match(html, /demo-site-live\.png/);
  assert.match(html, /mobile-demo-reel/);
  assert.match(html, /hola@ideamos\.com\.ar/);
  assert.match(html, /floating-top/);
  assert.match(html, /whatsapp\.svg/);
  assert.match(html, /mobile-orbit/);
  assert.match(html, /Preguntas Frecuentes/);
  assert.match(html, /mobile-menu/);
  assert.match(html, /Abrir menú de navegación/);
  assert.match(html, /Encontrá tu lugar/);
  assert.match(html, /Propiedades que/);
  assert.match(html, /interior-limestone\.webp/);
  assert.match(html, /fachada-urbana\.webp/);
  assert.match(html, /casa-paisaje\.webp/);
  assert.match(html, /Una web que se siente/);
  assert.match(html, /puesta en escena/);
  assert.match(html, /backend-panel-real\.png/);
  assert.match(html, /process-discovery\.webp/);
  assert.match(html, /process-design\.webp/);
  assert.match(html, /process-launch\.webp/);
  assert.match(html, /feature-responsive\.webp/);
  assert.match(html, /feature-filters\.webp/);
  assert.match(html, /feature-listing\.webp/);
  assert.match(html, /feature-inquiry\.webp/);
  assert.match(html, /feature-chat\.webp/);
  assert.match(html, /feature-seo\.webp/);
  assert.match(html, /Qué es Ideamos Inmobiliarias/);
  assert.match(html, /Qué resuelve/);
  assert.match(html, /Beneficios para tu inmobiliaria/);
  assert.match(html, /VIDEO PRÓXIMAMENTE/);
  assert.match(html, /Todo en el mismo flujo/);
  assert.match(html, /premium-flow-icon/);
  assert.match(html, /flow-inventory\.webp/);
  assert.match(html, /flow-control\.webp/);
  assert.match(html, /flow-website-lead\.webp/);
  assert.match(html, /Catálogo alineado/);
  assert.match(html, /Fichas que convierten/);
  assert.match(html, /WEB INMOBILIARIA/);
  assert.match(html, /CONVERTÍ INTERÉS EN OPORTUNIDADES/);
  assert.match(html, /ideamos-symbol/);
  assert.match(html, /M0 0h140l96 96v82h-88/);
  assert.match(html, /Ver opciones y precios/);
  assert.match(html, /¿Necesito usar Tokko Broker\?/);
  assert.match(html, /Podés administrar/);
  assert.match(html, /↗/);
  assert.doesNotMatch(html, /Ã|Â|â€|â†|âœ/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/);
});

test("incluye metadata social propia", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /Ideamos Inmobiliarias/);
  assert.match(layout, /og-v2\.png/);
  assert.match(layout, /summary_large_image/);
  const icon = await readFile(new URL("../app/icon.svg", import.meta.url), "utf8");
  assert.match(icon, /animateTransform/);
});
test("mantiene fija la columna izquierda del FAQ en escritorio", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /main\{overflow-x:clip;overflow-y:visible\}/);
  assert.match(css, /residencia-blue-hour\.webp/);
  assert.match(css, /aspect-ratio:390\/844/);
  assert.match(css, /translate3d\(0,-66\.666%,0\)/);
  assert.match(css, /\.faq-section\{[^}]*overflow:visible;[^}]*align-items:start/);
  assert.match(css, /\.faq-intro\{position:sticky;top:24px;height:clamp\(520px,calc\(100vh - 48px\),680px\)/);
  assert.match(css, /@media\(max-width:850px\)\{\.faq-section\{gap:35px\}\.faq-intro\{position:relative;top:auto;height:auto/);
});
test("renderiza la página interna de opciones y precios", async () => {
  const response = await render("/precios");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Precios de lanzamiento/);
  assert.match(html, /Premium/);
  assert.match(html, /Plus/);
  assert.match(html, /250\.000/);
  assert.match(html, /300\.000/);
  assert.match(html, /Otros países/);
  assert.match(html, /Propiedades ilimitadas/);
  assert.match(html, /PRECIO DE LANZAMIENTO/);
  assert.match(html, /pricing-hero-stat/);
  assert.match(html, /inmobiliaria\.ideamos\.ar/);
  assert.doesNotMatch(html, /Ã|Â|â€|â†|âœ/);
});
test("renderiza las páginas internas de producto", async () => {
  const routes = [
    ["/la-plataforma", "Tu web y tus propiedades"],
    ["/funcionalidades", "Herramientas concretas"],
    ["/tokko-broker", "Tu inventario en Tokko"],
    ["/beneficios", "Una mejor presencia"],
    ["/preguntas-frecuentes", "Antes de empezar"],
  ];
  for (const [pathname, marker] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(marker));
    assert.match(html, /Coordinar una demo/);
    assert.match(html, /internal-showcase/);
    assert.doesNotMatch(html, /Ã|Â|â€|â†|âœ/);
  }
});

test("renderiza contacto con formulario funcional", async () => {
  const response = await render("/contacto");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Conozcamos tu inmobiliaria/);
  assert.match(html, /contact-form/);
  assert.match(html, /Enviar consulta/);
  assert.match(html, /5491167681777/);
  assert.doesNotMatch(html, /Ã|Â|â€|â†|âœ/);
});

test("la sección de valor mantiene fija su columna izquierda", async () => {
  const css = await readFile(join(process.cwd(), "app", "globals.css"), "utf8");
  assert.match(css, /\.value-intro\{position:sticky;top:112px/);
  assert.match(css, /\.value-grid article\{min-height:130px/);
  assert.match(css, /\.launch-price-card\{min-height:760px/);
  assert.match(css, /\.internal-hero\{min-height:650px/);
});

test("incluye navegación y responsive mobile integral", async () => {
  const header = await readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(header, /mobile-menu/);
  assert.match(header, /Navegación móvil/);
  assert.match(css, /@media\(max-width:700px\)/);
  assert.match(css, /\.premium-footer\{text-align:center\}/);
  assert.match(css, /\.integration-flow\{display:grid;grid-template-columns:1fr/);
  assert.match(css, /\.mobile-menu-root>nav\{position:fixed!important/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});
