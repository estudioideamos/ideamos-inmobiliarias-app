import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";
import path from "node:path";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "docs");
const clientDir = path.join(projectRoot, "dist", "client");
const port = process.env.PAGES_PORT || "4399";
const localUrl = `http://127.0.0.1:${port}/`;
const pagesUrl = (process.env.PAGES_URL || "https://estudioideamos.github.io/ideamos-inmobiliarias-app").replace(/\/$/, "");
const isWindows = process.platform === "win32";
const serverCommand = isWindows ? (process.env.ComSpec || "cmd.exe") : "npm";
const serverArgs = isWindows
  ? ["/d", "/s", "/c", `npm.cmd run start -- --port ${port}`]
  : ["run", "start", "--", "--port", port];

async function waitForPage(timeoutMs = 60000) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(localUrl);
      if (response.ok) return response.text();
      lastError = new Error(`El servidor respondiÃ³ ${response.status}.`);
    } catch (error) {
      lastError = error;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw lastError || new Error("La versiÃ³n final no iniciÃ³ a tiempo.");
}

function stopServer(server) {
  if (!server.pid || server.killed) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    try { process.kill(-server.pid, "SIGTERM"); } catch { server.kill("SIGTERM"); }
  }
}

function makeStatic(html) {
  let result = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\sdata-precedence=["'][^"']*["']/gi, "")
    .replace(/\sdata-rsc-head=["'][^"']*["']/gi, "")
    .replaceAll(`https://127.0.0.1:${port}`, pagesUrl)
    .replaceAll(`http://127.0.0.1:${port}`, pagesUrl)
    .replace(/\b(href|src)="\//g, '$1="./');

  if (!/<link\s+rel="canonical"/i.test(result)) {
    result = result.replace("</head>", `<link rel="canonical" href="${pagesUrl}/"/></head>`);
  }
  result = result.replace("</head>", '<meta name="theme-color" content="#0c1d17"/></head>');
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
  const html = await waitForPage();
  const staticHtml = makeStatic(html);
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(clientDir, outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), staticHtml, "utf8");
  await writeFile(path.join(outputDir, "404.html"), staticHtml, "utf8");
  await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

  const written = await readFile(path.join(outputDir, "index.html"), "utf8");
  if (!written.includes("Una web para mostrar mejor.") || !written.includes("./assets/") || !written.includes(`${pagesUrl}/og-v2.png`)) {
    throw new Error("La salida estÃ¡tica no contiene el contenido o los enlaces esperados.");
  }
  console.log(`GitHub Pages preparado en ${outputDir}`);
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  stopServer(server);
}