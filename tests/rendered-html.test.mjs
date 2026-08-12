import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renderiza la landing comercial terminada", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Una web para mostrar mejor/);
  assert.match(html, /Tokko Broker/);
  assert.match(html, /demo-site-live\.png/);
  assert.match(html, /backend-panel-real\.png/);
  assert.match(html, /Solicitar una propuesta/);
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