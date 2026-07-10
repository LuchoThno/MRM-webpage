# MRM Webpage

Sitio corporativo de **Magallanes ROV Marine**, construido con **Next.js 16**, **React 19** y **TypeScript**.

El proyecto presenta la oferta de servicios submarinos de MRM, su flota tecnológica, capacidades operacionales, cobertura geográfica y puntos de contacto comerciales.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP
- Three.js + React Three Fiber + Drei
- Vercel

## Estructura principal

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    robots.ts
    sitemap.ts
    services/[slug]/page.tsx
    technology/[slug]/page.tsx
  components/
    magallanes-landing.tsx
    hero-canvas.tsx
    nav.tsx
    footer.tsx
    logo.tsx
  data/
    site.ts

public/
  generated/
  mrm-logo.png
```

## Contenido del sitio

La página principal renderiza `MagallanesLanding` desde [src/app/page.tsx](/Users/mac/Documents/WebMagRovMarine/src/app/page.tsx:1).

Los datos de navegación, servicios, tecnologías, métricas, clientes y links sociales están centralizados en [src/data/site.ts](/Users/mac/Documents/WebMagRovMarine/src/data/site.ts:1).

Incluye:

- Landing principal con navegación por secciones
- Páginas dinámicas de servicios
- Páginas dinámicas de tecnología
- `sitemap.xml` y `robots.txt`
- Assets visuales en `public/generated`

## Desarrollo local

Instala dependencias:

```bash
npm install
```

Levanta el proyecto:

```bash
npm run dev
```

Abre:

```text
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Despliegue en Vercel

El proyecto ya está preparado para Vercel y contiene una configuración mínima en [vercel.json](/Users/mac/Documents/WebMagRovMarine/vercel.json:1).

Flujo recomendado:

1. Conectar el repositorio en Vercel.
2. Usar `main` como rama de producción.
3. Verificar variables de entorno si se agregan integraciones futuras.
4. Desplegar con el preset de `Next.js`.

## Convenciones del repositorio

- No versionar `node_modules`, `.next`, `.vercel` ni archivos `.env*`.
- Mantener la data editable en `src/data/site.ts`.
- Usar `npm run lint` y `npm run build` antes de subir cambios.

## Estado actual

- Build de producción operativo
- Lint operativo
- Repo listo para despliegue desde GitHub hacia Vercel

