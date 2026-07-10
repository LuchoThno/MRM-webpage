# MRM Webpage — Información de la página

> Fuente: `src/components/magallanes-landing.tsx` (Landing principal mostrada en `src/app/page.tsx`).

## Estructura / Secciones

1. **Header / Navegación**
   - Marca: **MAGALLANES ROV — MARINE ROBOTICS**
   - Links de navegación (anclas):
     - `#servicios` → **Servicios**
     - `#operacion` → **Operación**
     - `#contacto` → **Contacto**
   - CTA (botón tipo link):
     - `#contacto` → **Solicitar faena**

2. **Hero (Inicio) — `#inicio`**
   - Eyebrow: **Base operativa — Punta Arenas, Chile**
   - Título principal:
     - **Ojos y manos bajo el agua del extremo sur**
   - Subtítulo / descripción:
     - Inspección, mantención y levantamiento submarino con vehículos operados a distancia (ROV).
     - Enfoque en aguas frías y correntosas del **Estrecho de Magallanes** y fiordos patagónicos.
   - Acciones:
     - Botón primario: `#contacto` → **Cotizar faena**
     - Botón ghost: link `#servicios` → **Ver capacidades →**
   - “Panel HUD” (telemetría visual):
     - Posición: **53°09'S 70°55'W**
     - Profundidad operativa: **0 – 300 m**
     - Temp. agua promedio: **6.2 °C**
     - Corriente máx. tolerada: **2.5 nudos**
     - Estado flota: **Operativa**
     - Gráfico SVG animado (línea en movimiento).

3. **Strip / Carrusel (marquee) — sin ancla**
   - Mensajes (repetidos) con desplazamiento:
     - Inspección de casco
     - Acuicultura y balsas jaula
     - Obras portuarias
     - Levantamiento batimétrico
     - Búsqueda y rescate
     - Investigación científica

4. **Servicios — `#servicios`**
   - Tag: **Capacidades**
   - Título:
     - **Cuatro formas de trabajar bajo el agua sin mandar un buzo**
   - Descripción:
     - Cada faena se planifica según profundidad, corriente y visibilidad.
   - Grid de 4 cards:
     1. **01 — Inspección portuaria y de casco**
        - Revisión de muelles, pilotes, líneas de fondeo y cascos sin detener operación.
        - Rango típico: **5–80 m**
     2. **02 — Acuicultura y balsas jaula**
        - Monitoreo de redes, líneas de fondeo y mortalidad.
        - Reportes en video georreferenciado.
        - Rango típico: **10–40 m**
     3. **03 — Levantamiento y batimetría**
        - Mapeo de fondo marino y estructuras sumergidas.
        - Datos exportables a formatos del cliente.
        - Rango típico: **0–200 m**
     4. **04 — Búsqueda, rescate e investigación**
        - Apoyo a búsqueda submarina y campañas científicas.
        - Rango típico: **hasta 300 m**

5. **Operación / Sobre MRM — `#operacion`**
   - Bloque coordenadas (tagline):
     - **53.1638° S, 70.9171° W**
   - Título:
     - **Por qué operar desde Magallanes**
   - Descripción:
     - Entorno submarino exigente: corrientes fuertes, agua fría, ventanas de buen tiempo breves.
   - Estadísticas:
     - **300 m** Profundidad máx.
     - **6°C** Temp. promedio
     - **24/7** Disponibilidad
   - Copy (equipo y capacidades):
     - Equipo de robótica submarina con base en Punta Arenas.
     - ROV con cámara HD, sonar y brazo manipulador.
     - Transmisión en tiempo real a la superficie.
     - Trabajo con terminales portuarios, centros de cultivo, ingeniería marítima e investigación.
   - “Motto”:
     - **“Mare extremum, oculi nostri.” — El mar extremo, nuestros ojos.**

6. **Contacto — `#contacto`**
   - Tag: **Contacto**
   - Título: **Hablemos de tu faena submarina**
   - Descripción:
     - Cuéntanos sitio, profundidad estimada y ventana de tiempo.
     - Respuesta con propuesta técnica en **menos de 48 horas**.
   - Detalle de contacto (4 ítems):
     - **Base:** Punta Arenas, Región de Magallanes, Chile
     - **Correo:** operaciones@magallanesrov.cl
     - **Teléfono:** +56 9 xxxx xxxx (placeholder)
     - **Cobertura:** Estrecho de Magallanes, canales y fiordos patagónicos

   - Formulario (submit simulado):
     - `onSubmit` hace `preventDefault()`.
     - Muestra toast/estado local: **"Solicitud enviada ✓"**.
     - Reinicia estado a `null` después de **2500 ms**.

   - Campos del formulario:
     - **Nombre / Empresa** (input text, required)
     - **Tipo de faena** (select)
       - Inspección portuaria o de casco
       - Acuicultura / balsas jaula
       - Levantamiento y batimetría
       - Búsqueda, rescate o investigación
       - Otro
     - **Detalle del sitio y profundidad estimada** (textarea)
     - Botón: **Enviar solicitud** (o toast cuando se envía)

7. **Footer**
   - Texto legal:
     - **© 2026 Magallanes ROV Marine — Punta Arenas, Chile**
   - Links:
     - #servicios → Servicios
     - #operacion → Operación
     - #contacto → Contacto

## Recursos / Estilos
- Estilos principales definidos en: `src/app/globals.css` usando clases `mrm-*`.
- La página usa componente `MagallanesLanding` (sin integración a backend en el formulario; respuesta es local). 

