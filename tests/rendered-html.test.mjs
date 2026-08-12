import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /Una web para mostrar mejor/);
  assert.match(html, /Tokko Broker/);
  assert.match(html, /demo-site-live\.png/);
  assert.match(html, /backend-panel-real\.png/);
  assert.match(html, /process-discovery\.webp/);
  assert.match(html, /process-design\.webp/);
  assert.match(html, /process-launch\.webp/);
  assert.match(html, /feature-glyph/);
  assert.match(html, /Todo en el mismo flujo/);
  assert.match(html, /premium-flow-icon/);
  assert.match(html, /Catálogo alineado/);
  assert.match(html, /Fichas que convierten/);
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
});
test("mantiene fija la columna izquierda del FAQ en escritorio", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /main\{overflow-x:clip;overflow-y:visible\}/);
  assert.match(css, /\.faq-section\{[^}]*overflow:visible;[^}]*align-items:start/);
  assert.match(css, /\.faq-intro\{position:sticky;top:24px;height:clamp\(520px,calc\(100vh - 48px\),680px\)/);
  assert.match(css, /@media\(max-width:850px\)\{\.faq-section\{gap:35px\}\.faq-intro\{position:relative;top:auto;height:auto/);
});
test("renderiza la página interna de opciones y precios", async () => {
  const response = await render("/precios");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Un alcance claro/);
  assert.match(html, /Cotización personalizada/);
  assert.match(html, /Presencia inmobiliaria/);
  assert.match(html, /Operación digital/);
  assert.match(html, /Ecosistema con Tokko/);
  assert.match(html, /inmobiliaria\.ideamos\.ar/);
  assert.doesNotMatch(html, /Ã|Â|â€|â†|âœ/);
});