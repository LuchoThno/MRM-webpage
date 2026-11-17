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
  proxy.ts                    # español en "/", inglés en "/en"
  app/
    [lang]/
      layout.tsx              # <html lang>, metadatos y hreflang por idioma
      page.tsx
      services/[slug]/page.tsx
      technology/[slug]/page.tsx
    api/contact/route.ts
    globals.css
    robots.ts
    sitemap.ts                # incluye ambas versiones con alternates
  components/
    home-page.tsx
    nav.tsx / nav-client.tsx  # navegación + selector ES / EN
    footer.tsx
    logo.tsx
  data/
    site.ts                   # datos que no dependen del idioma (slugs, imágenes, íconos)
    content.ts                # combina datos + textos del idioma
  i18n/
    config.ts                 # idiomas y helper localizePath()
    dictionaries/es.ts        # todos los textos en español
    dictionaries/en.ts        # todos los textos en inglés

public/
  assets/
  favicon/
  generated/
  mrm-logo.png

vercel.json
```

## Idiomas

El sitio es bilingüe:

- Español (idioma por defecto): `/`, `/services/<slug>`, `/technology/<slug>`
- Inglés: `/en`, `/en/services/<slug>`, `/en/technology/<slug>`

`src/proxy.ts` reescribe internamente las rutas sin prefijo al segmento `/es` y redirige `/es/...` a la URL limpia.

Para editar textos, cambia `src/i18n/dictionaries/es.ts` y `src/i18n/dictionaries/en.ts`. El archivo en inglés está tipado contra el español, así que TypeScript avisa si falta una traducción.

Para agregar un servicio: suma el `slug` en `serviceSlugs` y su imagen/ícono en `serviceMedia` (`src/data/site.ts`), y agrega sus textos en ambos diccionarios.

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
