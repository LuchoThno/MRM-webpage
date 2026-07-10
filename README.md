# Magallanes ROV Marine

Sitio corporativo de **MRM** para presentar servicios submarinos, capacidades operacionales, flota ROV y cobertura técnica en Chile.

## Resumen

**Stack**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GSAP
- Three.js + React Three Fiber + Drei

**Estado**

- Producción lista para Vercel
- `lint` operativo
- `build` operativo

**Deploy**

- Rama principal: `main`
- Framework: `nextjs`

## Qué incluye

- Landing principal con narrativa corporativa
- Navegación por secciones
- Páginas dinámicas de servicios
- Páginas dinámicas de tecnología
- `robots.txt` y `sitemap.xml`
- Assets visuales en `public/generated`

## Arquitectura

```text
src/
  app/
    layout.tsx
    page.tsx
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

vercel.json
```

## Punto de entrada

La home renderiza `MagallanesLanding` desde [src/app/page.tsx](/Users/mac/Documents/WebMagRovMarine/src/app/page.tsx:1).

La configuración editorial del sitio vive principalmente en [src/data/site.ts](/Users/mac/Documents/WebMagRovMarine/src/data/site.ts:1), donde están centralizados:

- navegación
- métricas
- servicios
- tecnologías
- clientes
- links sociales

## Secciones del sitio

- `Inicio`: hero principal, propuesta de valor y señal visual de marca
- `Empresa`: contexto operativo y posicionamiento
- `Servicios`: catálogo técnico con rutas dinámicas por `slug`
- `Tecnologia`: flota y equipamiento complementario
- `Proyectos`: galería y evidencia visual
- `Clientes`: industrias atendidas
- `Contacto`: CTA comercial y punto de conversión

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Levantar entorno local:

```bash
npm run dev
```

Abrir en navegador:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Despliegue

El proyecto está preparado para desplegar en Vercel y usa una configuración mínima en [vercel.json](/Users/mac/Documents/WebMagRovMarine/vercel.json:1).

Flujo recomendado:

1. Conectar el repositorio en Vercel.
2. Seleccionar `main` como rama de producción.
3. Mantener variables de entorno en Vercel si se agregan integraciones futuras.
4. Desplegar con el preset de `Next.js`.

## Convenciones del proyecto

- No versionar `node_modules`, `.next`, `.vercel` ni `.env*`.
- Mantener contenido editable y catálogos en `src/data/site.ts`.
- Validar con `npm run lint` y `npm run build` antes de publicar cambios.
- Tratar `public/generated` como carpeta de assets finales del sitio.

## Notas útiles

- El sitio usa rutas dinámicas para servicios y tecnologías.
- La capa visual mezcla animación DOM y escenas ligeras con canvas.
- La base actual está pensada para seguir iterando branding, contenido y conversión comercial sin cambiar la arquitectura principal.

