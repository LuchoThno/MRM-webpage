# Magallanes ROV Marine

Sitio corporativo de **MRM** para presentar servicios submarinos, capacidades operacionales, flota ROV y cobertura técnica en Chile.

## Resumen

**Stack**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Nodemailer

**Estado**

- Producción desplegada en Vercel
- Rutas dinámicas de servicios y tecnología operativas
- `lint` y `typecheck` operativos

**Package manager**

- `pnpm`

## Qué incluye

- Landing principal con narrativa corporativa
- Navegación por secciones
- Páginas dinámicas de servicios
- Páginas dinámicas de tecnología
- Formulario de contacto conectado a `/api/contact`
- `robots.txt` y `sitemap.xml`
- Favicons y apple touch icon en `public/favicon`
- Assets visuales en `public/assets` y `public/generated`

## Arquitectura

```text
src/
  app/
    api/contact/route.ts
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    services/[slug]/page.tsx
    technology/[slug]/page.tsx
  components/
    home-page.tsx
    nav.tsx
    footer.tsx
    logo.tsx
  data/
    site.ts

public/
  assets/
  favicon/
  generated/
  mrm-logo.png

vercel.json
```

## Punto de entrada

La home renderiza `HomePage` desde [src/app/page.tsx](/Users/mac/Documents/WebMagRovMarine/src/app/page.tsx:1).

La configuración editorial del sitio vive principalmente en [src/data/site.ts](/Users/mac/Documents/WebMagRovMarine/src/data/site.ts:1), donde están centralizados:

- navegación
- métricas
- servicios
- tecnologías
- clientes
- links sociales

## Secciones del sitio

- `Inicio`: hero principal y propuesta de valor
- `Empresa`: contexto operativo y posicionamiento
- `Servicios`: catálogo técnico con rutas dinámicas por `slug`
- `Cobertura`: presencia operacional en Chile
- `Proceso`: flujo de trabajo comercial y operativo
- `Contacto`: CTA comercial y formulario

## Desarrollo local

Instalar dependencias:

```bash
pnpm install
```

Levantar entorno local:

```bash
pnpm dev
```

Abrir en navegador:

```text
http://localhost:3000
```

## Variables de entorno

El formulario de contacto usa SMTP y espera estas variables:

```env
SMTP_HOST=mail.magallanesrovmarine.cl
SMTP_PORT=465
SMTP_USER=contacto@magallanesrovmarine.cl
SMTP_PASS=your-email-password
CONTACT_FORM_TO=contacto@magallanesrovmarine.cl
```

Referencia: [.env.example](/Users/mac/Documents/WebMagRovMarine/.env.example:1)

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
```

## Despliegue

El proyecto está preparado para Vercel y usa una configuración mínima en [vercel.json](/Users/mac/Documents/WebMagRovMarine/vercel.json:1).

Flujo recomendado:

1. Conectar el repositorio en Vercel.
2. Seleccionar `main` como rama de producción.
3. Cargar las variables `SMTP_*` y `CONTACT_FORM_TO` en Vercel.
4. Desplegar con el preset de `Next.js`.

## Convenciones del proyecto

- No versionar `node_modules`, `.next`, `.vercel`, `.env*` ni `package-lock.json`.
- Mantener contenido editable y catálogos en `src/data/site.ts`.
- Validar con `pnpm lint` y `pnpm typecheck` antes de publicar cambios.
- Tratar `public/assets`, `public/generated` y `public/favicon` como assets finales del sitio.

## Notas útiles

- El formulario está implementado en [src/app/api/contact/route.ts](/Users/mac/Documents/WebMagRovMarine/src/app/api/contact/route.ts:1).
- Los favicons se configuran desde [src/app/layout.tsx](/Users/mac/Documents/WebMagRovMarine/src/app/layout.tsx:1).
- Las rutas dinámicas se prerenderizan con `generateStaticParams`.
