# Ideamos Inmobiliarias

Landing comercial de la plataforma web y de gestión para inmobiliarias desarrollada por Estudio Ideamos.

**Sitio público:** [estudioideamos.github.io/ideamos-inmobiliarias-app](https://estudioideamos.github.io/ideamos-inmobiliarias-app/)

## Alcance

Presenta la plataforma, funcionalidades, integración informativa con Tokko Broker, beneficios, precios, preguntas frecuentes y contacto. Las rutas públicas incluyen `/la-plataforma/`, `/funcionalidades/`, `/tokko-broker/`, `/beneficios/`, `/precios/` y `/contacto/`.

## Tecnología

Next.js 16, React 19, TypeScript y Vinext/Vite, con exportación estática para GitHub Pages y pruebas mediante el runner nativo de Node.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
npm run build:pages
```

`build:pages` adapta rutas y recursos mediante `scripts/prepare-github-pages.mjs`.

## Estructura

- `app/`: páginas, componentes y estilos.
- `public/`: imágenes y recursos.
- `scripts/`: preparación para Pages.
- `tests/`: verificaciones del HTML generado.
- `.github/`: automatización de publicación.

## Publicación

Los archivos exportados se publican desde `main` mediante GitHub Actions y GitHub Pages.

## Créditos

Producto, diseño y desarrollo por [Estudio Ideamos](https://ideamos.com.ar/).
