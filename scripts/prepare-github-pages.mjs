import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";
import path from "node:path";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "docs");
const clientDir = path.join(projectRoot, "dist", "client");
const port = process.env.PAGES_PORT || "4399";
const localBaseUrl = `http://127.0.0.1:${port}`;
const pagesUrl = (process.env.PAGES_URL || "https://estudioideamos.github.io/ideamos-inmobiliarias-app").replace(/\/$/, "");
const routes = [
  { pathname: "/", output: "index.html", marker: "Una web para mostrar mejor.", depth: 0 },
  { pathname: "/la-plataforma", output: path.join("la-plataforma", "index.html"), marker: "Tu web y tus propiedades", depth: 1 },
  { pathname: "/funcionalidades", output: path.join("funcionalidades", "index.html"), marker: "Herramientas concretas", depth: 1 },
  { pathname: "/tokko-broker", output: path.join("tokko-broker", "index.html"), marker: "Tu inventario en Tokko", depth: 1 },
  { pathname: "/valor", output: path.join("valor", "index.html"), marker: "Una mejor presencia", depth: 1 },
  { pathname: "/preguntas-frecuentes", output: path.join("preguntas-frecuentes", "index.html"), marker: "Antes de empezar", depth: 1 },
  { pathname: "/precios", output: path.join("precios", "index.html"), marker: "Dos planes.", depth: 1 },
  { pathname: "/contacto", output: path.join("contacto", "index.html"), marker: "Conozcamos tu inmobiliaria", depth: 1 },
];
const isWindows = process.platform === "win32";
const serverCommand = isWindows ? (process.env.ComSpec || "cmd.exe") : "npm";
const serverArgs = isWindows
  ? ["/d", "/s", "/c", `npm.cmd run start -- --port ${port}`]
  : ["run", "start", "--", "--port", port];

async function fetchPage(pathname, timeoutMs = 60000) {
  const startedAt = Date.now();
  let lastError;
  const url = `${localBaseUrl}${pathname}`;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.text();
      lastError = new Error(`La ruta ${pathname} respondio ${response.status}.`);
    } catch (error) {
      lastError = error;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw lastError || new Error(`La ruta ${pathname} no inicio a tiempo.`);
}

function stopServer(server) {
  if (!server.pid || server.killed) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    try { process.kill(-server.pid, "SIGTERM"); } catch { server.kill("SIGTERM"); }
  }
}

function makeStatic(html, route) {
  const relativePrefix = route.depth === 0 ? "./" : "../".repeat(route.depth);
  const canonicalUrl = route.pathname === "/" ? `${pagesUrl}/` : `${pagesUrl}${route.pathname}/`;
  let result = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\sdata-precedence=["'][^"']*["']/gi, "")
    .replace(/\sdata-rsc-head=["'][^"']*["']/gi, "")
    .replaceAll(`https://127.0.0.1:${port}`, pagesUrl)
    .replaceAll(`http://127.0.0.1:${port}`, pagesUrl)
    .replace(/\b(href|src)="\//g, `$1="${relativePrefix}`);

  if (!/<link\s+rel="canonical"/i.test(result)) {
    result = result.replace("</head>", `<link rel="canonical" href="${canonicalUrl}"/></head>`);
  }
  result = result.replace("</head>", '<meta name="theme-color" content="#0c1d17"/></head>');
  if (result.includes("contact-form")) {
    const contactScript = `<script>
document.addEventListener("submit",async function(event){
  var form=event.target.closest(".contact-form");
  if(!form)return;
  event.preventDefault();
  var button=form.querySelector('button[type="submit"]');
  var status=form.querySelector(".form-status");
  var original=button?button.innerHTML:"Enviar consulta";
  if(button){button.disabled=true;button.textContent="Enviando…";}
  if(status)status.textContent="Enviando tu consulta…";
  try{
    var response=await fetch("https://formsubmit.co/ajax/hola@ideamos.com.ar",{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
    if(!response.ok)throw new Error("send");
    form.reset();
    if(status)status.textContent="Consulta enviada. Te vamos a responder a la brevedad.";
  }catch(error){
    if(status)status.textContent="No pudimos enviarla. Escribinos a hola@ideamos.com.ar.";
  }finally{
    if(button){button.disabled=false;button.innerHTML=original;}
  }
});
var requestedPlan=new URLSearchParams(location.search).get("plan");
if(requestedPlan){var select=document.querySelector('select[name="plan"]');if(select)select.value=requestedPlan;}
<\/script>`;
    result = result.replace("</body>", contactScript + "</body>");
  }
  return `<!doctype html>\n${result}`;
}

const server = spawn(serverCommand, serverArgs, {
  cwd: projectRoot,
  env: { ...process.env, PORT: port },
  stdio: ["ignore", "pipe", "pipe"],
  detached: process.platform !== "win32",
});

let serverOutput = "";
server.stdout.on("data", chunk => { serverOutput += chunk.toString(); });
server.stderr.on("data", chunk => { serverOutput += chunk.toString(); });

try {
  const renderedRoutes = [];
  for (const route of routes) {
    const html = await fetchPage(route.pathname);
    renderedRoutes.push({ route, html: makeStatic(html, route) });
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(clientDir, outputDir, { recursive: true });

  for (const { route, html } of renderedRoutes) {
    const destination = path.join(outputDir, route.output);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html, "utf8");
  }

  await writeFile(path.join(outputDir, "404.html"), renderedRoutes[0].html, "utf8");
  await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

  for (const route of routes) {
    const written = await readFile(path.join(outputDir, route.output), "utf8");
    const assetPrefix = route.depth === 0 ? "./assets/" : "../assets/";
    if (!written.includes(route.marker) || !written.includes(assetPrefix) || !written.includes(`${pagesUrl}/og-v2.png`)) {
      throw new Error(`La salida estatica de ${route.pathname} no contiene el contenido o los enlaces esperados.`);
    }
  }

  console.log(`GitHub Pages preparado en ${outputDir} con ${routes.length} rutas.`);
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  stopServer(server);
}
