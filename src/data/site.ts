import {
  Activity,
  Anchor,
  BadgeCheck,
  Binoculars,
  Cable,
  FileText,
  Fish,
  Map,
  Radar,
  ScanSearch,
  ShipWheel,
  Sparkles,
  Waves,
  Waypoints
} from "lucide-react";

export const siteUrl = "https://www.magallanesrovmarine.cl";

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Empresa", href: "/#empresa" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cotizar", href: "/#contacto" }
];

export const contactInfo = {
  email: "contacto@magallanesrovmarine.cl",
  location: "Punta Arenas / Cobertura Nacional",
  mailtoHref: "mailto:contacto@magallanesrovmarine.cl"
} as const;

export const serviceCategories = ["Puertos", "Salmoneras", "Navieras", "Industria"];

export const locations = [
  {
    city: "Valparaiso",
    region: "Valparaiso",
    top: "34.7%",
    left: "50.3%",
    labelClass: "left-7 top-[-0.35rem]"
  },
  {
    city: "Concepcion",
    region: "Biobio",
    top: "46.1%",
    left: "48.4%",
    labelClass: "left-7 top-[-0.35rem]"
  },
  {
    city: "Talcahuano",
    region: "Biobio",
    top: "44.4%",
    left: "46.9%",
    labelClass: "right-7 top-[-0.35rem] text-right"
  },
  {
    city: "Puerto Montt",
    region: "Los Lagos",
    top: "54.1%",
    left: "46.2%",
    labelClass: "left-7 top-[-0.35rem]"
  },
  {
    city: "Punta Arenas",
    region: "Magallanes",
    top: "80.7%",
    left: "46.6%",
    labelClass: "left-7 top-[-0.35rem]"
  }
];

export const metrics = [
  { value: "250 m", label: "Profundidad operacional" },
  { value: "3", label: "ROV industriales" },
  { value: "100%", label: "Inspecciones digitales" },
  { value: "24/7", label: "Disponibilidad" }
];

export const processSteps = [
  "Planificacion",
  "Movilizacion",
  "Inspeccion",
  "Procesamiento",
  "Informe Tecnico",
  "Entrega Cliente"
];

export const services = [
  {
    slug: "rov-inspection",
    title: "ROV Inspection",
    icon: Radar,
    image: "/assets/piloto_operando_rov.jpg",
    summary: "Inspecciones visuales y dimensionales con trazabilidad digital para activos criticos submarinos.",
    detail:
      "Ejecutamos inspecciones ROV sobre estructuras, fondeos, cascos y activos sumergidos con registro continuo de video, captura de hallazgos y control de posicion durante la faena. El servicio se orienta a diagnosticar condicion real, apoyar mantencion y reducir incertidumbre antes de intervenir.",
    sectors: ["Puertos", "Navieras", "Salmoneras", "Industria"],
    application:
      "Inspeccion de estructuras portuarias, cascos, lineas sumergidas, fondeos, rejas de admision y activos criticos con acceso limitado o alto riesgo para buceo.",
    deliverable:
      "Video georreferenciado o referenciado por estructura, registro fotografico, listado de hallazgos y reporte tecnico con observaciones priorizadas.",
    availability: "Despliegue programado o respuesta operacional para ventanas criticas a nivel nacional.",
    highlights: [
      "Inspeccion visual en tiempo real con apoyo a decision en terreno.",
      "Registro de corrosion, deformaciones, incrustacion, solturas y danos localizados.",
      "Cobertura en zonas donde se requiere reducir tiempos de detencion.",
      "Trazabilidad util para mantencion, auditoria o respaldo frente a terceros."
    ]
  },
  {
    slug: "hull-inspection",
    title: "Hull Inspection",
    icon: ShipWheel,
    image: "/assets/inspeccion_casco_buque.jpg",
    summary: "Evaluacion de cascos, appendages, timones y helices con criterio naval y foco operacional.",
    detail:
      "Inspeccionamos casco, timon, helice, caja de mar y appendages para identificar fouling, abolladuras, desprendimientos de pintura, corrosion y danos operacionales. La revision se enfoca en entregar evidencia clara para armadores, operadores portuarios y equipos de mantencion.",
    sectors: ["Navieras", "Puertos", "Industria"],
    application:
      "Evaluacion submarina de embarcaciones, remolcadores, barcazas y naves de apoyo que requieren verificar estado antes de zarpe, mantencion o inspeccion de terceros.",
    deliverable:
      "Informe de casco con evidencia visual por zona inspeccionada, registro de hallazgos y recomendacion de limpieza, reparacion o seguimiento.",
    availability: "Coordinacion con ventana de puerto, astillero o fondeo segun condicion operacional de la nave.",
    highlights: [
      "Revision focalizada de casco, helice, timon y puntos sensibles.",
      "Deteccion de biofouling, impactos, corrosion y elementos sueltos.",
      "Soporte para decisiones de mantencion y continuidad operacional.",
      "Formato de entrega util para armador, aseguradora o clase."
    ]
  },
  {
    slug: "hull-cleaning",
    title: "Hull Cleaning",
    icon: Sparkles,
    image: "/assets/inspeccion_fondo_marino_restos.jpg",
    summary: "Limpieza controlada de casco con metodologia segura para mejorar eficiencia y performance.",
    detail:
      "Realizamos limpieza de casco orientada a remover biofouling e incrustaciones que afectan consumo, velocidad y maniobrabilidad. La intervencion se planifica segun estado del casco, tipo de adherencia y restricciones operacionales de la embarcacion.",
    sectors: ["Navieras", "Puertos"],
    application:
      "Limpieza de cascos de naves de trabajo, embarcaciones de apoyo y unidades que requieren recuperar desempeno sin extender tiempos fuera de servicio.",
    deliverable:
      "Registro antes y despues, cobertura de zonas intervenidas y reporte tecnico con condicion del casco y observaciones relevantes.",
    availability: "Ejecucion sujeta a ventana de nave, condicion del puerto y evaluacion previa del grado de incrustacion.",
    highlights: [
      "Remocion controlada de incrustaciones y biofouling adherido.",
      "Intervencion enfocada en eficiencia hidrodinamica y operativa.",
      "Registro visual del estado previo y resultado obtenido.",
      "Apoyo para definir frecuencia de mantenimiento submarino."
    ]
  },
  {
    slug: "cavitation-cleaning",
    title: "Cavitation Cleaning",
    icon: Waves,
    image: "/assets/vista_camara_cavitacion.jpg",
    summary: "Limpieza por cavitacion para intervenciones tecnicas de alta precision en superficies submarinas.",
    detail:
      "Aplicamos limpieza por cavitacion en superficies submarinas donde se requiere una remocion precisa con menor agresividad mecanica sobre el sustrato. Es una solucion adecuada para zonas sensibles, componentes especificos o contextos donde la integridad superficial es prioritaria.",
    sectors: ["Navieras", "Puertos", "Industria"],
    application:
      "Intervenciones sobre superficies metalicas y componentes sumergidos que requieren limpieza tecnica con mayor control sobre acabado y contacto.",
    deliverable:
      "Evidencia visual de la intervencion, registro de sectores tratados y reporte con condiciones observadas y recomendaciones de seguimiento.",
    availability: "Disponible para trabajos programados que requieren evaluacion previa del material, adherencia y objetivo de limpieza.",
    highlights: [
      "Tecnologia orientada a limpieza precisa en zonas sensibles.",
      "Menor agresividad sobre superficies respecto de metodos invasivos.",
      "Util para componentes donde importa conservar condicion superficial.",
      "Integrable a programas de mantencion y verificacion posterior."
    ]
  },
  {
    slug: "subsea-survey",
    title: "Subsea Survey",
    icon: Map,
    image: "/assets/diagrama_inspeccion_tensores.jpg",
    summary: "Levantamientos y estudios batimetricos para infraestructura, lineas y zonas operacionales.",
    detail:
      "Desarrollamos levantamientos submarinos para caracterizar infraestructura, lineas, fondos y areas de trabajo mediante integracion de sensores, referencias y lectura tecnica del entorno. El servicio apoya ingenieria, planificacion de faenas y validacion de condiciones en terreno.",
    sectors: ["Puertos", "Industria", "Salmoneras"],
    application:
      "Survey de lineas, anclajes, tensores, sectores de instalacion, trazados submarinos y areas donde se necesita una base tecnica previa a intervenir.",
    deliverable:
      "Registro de levantamiento, planos o esquemas de apoyo, evidencia visual y conclusiones tecnicas para ingenieria o planificacion operacional.",
    availability: "Campanas coordinadas segun alcance, sensores requeridos y condiciones meteo-marinas del sitio.",
    highlights: [
      "Levantamiento enfocado en soporte a ingenieria y ejecucion.",
      "Integracion de posicionamiento, referencias y evidencia visual.",
      "Lectura tecnica de estructuras, lineas y condicion del fondo.",
      "Base util para planificar intervencion, mantenimiento o expansion."
    ]
  },
  {
    slug: "usbl-positioning",
    title: "USBL Positioning",
    icon: Waypoints,
    image: "/assets/usbl_seatrac_subsea.jpg",
    summary: "Posicionamiento submarino de alta confiabilidad para maniobras, inspeccion y seguimiento.",
    detail:
      "Entregamos posicionamiento USBL para seguimiento de ROV, localizacion de objetivos y control espacial de maniobras submarinas. Este servicio permite trabajar con mayor certeza sobre ubicacion, distancia y referencia durante inspecciones y busquedas.",
    sectors: ["Puertos", "Industria", "Salmoneras"],
    application:
      "Seguimiento de ROV, referencia de puntos sumergidos, localizacion de elementos de fondeo y apoyo a maniobras que requieren precision de ubicacion.",
    deliverable:
      "Registro de posiciones, trazas de trabajo, referencias espaciales y respaldo tecnico para integracion en informe o planimetria.",
    availability: "Movilizacion segun requerimiento de precision, entorno del sitio y compatibilidad con la operacion desplegada.",
    highlights: [
      "Ubicacion confiable de ROV y blancos sumergidos durante la faena.",
      "Mejora control operativo en inspeccion, busqueda y verificacion.",
      "Apoyo a trazabilidad espacial de hallazgos y recorridos.",
      "Util para operaciones donde la referencia visual no es suficiente."
    ]
  },
  {
    slug: "pipeline-inspection",
    title: "Pipeline Inspection",
    icon: Cable,
    image: "/assets/inspeccion_oleoducto_submarino.jpg",
    summary: "Inspeccion de oleoductos y lineas sumergidas con evidencia georreferenciada y evaluacion tecnica.",
    detail:
      "Inspeccionamos ductos y lineas sumergidas para revisar continuidad, apoyos, puntos de cruce, exposicion, recubrimiento y condicion general de integridad. El enfoque apunta a anticipar riesgos operacionales y respaldar programas de mantenimiento o cumplimiento.",
    sectors: ["Industria", "Puertos"],
    application:
      "Control de lineas de proceso, ductos submarinos, tendidos asociados a terminales y trazados criticos expuestos a movimiento, desgaste o socavacion.",
    deliverable:
      "Informe con hallazgos por tramo o punto critico, evidencia visual, referencias de ubicacion y observaciones para mantenimiento o seguimiento.",
    availability: "Servicio programable por tramo, sector critico o campaña de integridad segun necesidad del activo.",
    highlights: [
      "Revision de recubrimiento, apoyos, separaciones y cruces.",
      "Deteccion de exposiciones, asentamientos o zonas de riesgo.",
      "Evidencia util para integridad de activos y cumplimiento operativo.",
      "Enfoque adaptable a terminales, emisarios y lineas industriales."
    ]
  },
  {
    slug: "outfall-inspection",
    title: "Outfall Inspection",
    icon: Anchor,
    image: "/assets/inspeccion_cadena_submarina.jpg",
    summary: "Control de emisarios submarinos y estructuras asociadas con criterio ambiental e ingenieril.",
    detail:
      "Revisamos emisarios, difusores y estructuras asociadas para verificar estado fisico, obstrucciones, desplazamientos y condicion de descarga. El servicio ayuda a validar operacion, detectar anomalias y respaldar decisiones de mantencion o cumplimiento.",
    sectors: ["Industria", "Salmoneras", "Puertos"],
    application:
      "Inspeccion de emisarios submarinos, difusores, lineas de descarga y puntos asociados a plantas, instalaciones costeras o centros productivos.",
    deliverable:
      "Registro visual del emisario y sus componentes, hallazgos tecnicos y reporte con condicion operativa observada.",
    availability: "Coordinacion de faena segun acceso, condicion del sector y objetivos de inspeccion o verificacion ambiental.",
    highlights: [
      "Control de obstrucciones, danos, desplazamientos y estado general.",
      "Revision de componentes asociados a descarga o difusion.",
      "Apoyo a mantenimiento y verificacion de continuidad operativa.",
      "Lectura util para exigencias internas, regulatorias o de ingenieria."
    ]
  },
  {
    slug: "environmental-monitoring",
    title: "Environmental Monitoring",
    icon: Activity,
    image: "/assets/equipo_multiparametrico_terreno.jpg",
    summary: "Monitoreo ambiental submarino con instrumentacion y reportes para cumplimiento y decision.",
    detail:
      "Ejecutamos monitoreo ambiental con instrumentacion para caracterizar columna de agua, variables fisicoquimicas y condiciones del entorno submarino. El servicio entrega informacion tecnica para seguimiento ambiental, cumplimiento y toma de decisiones operativas.",
    sectors: ["Salmoneras", "Industria", "Puertos"],
    application:
      "Campañas de monitoreo en centros de cultivo, instalaciones costeras, sectores de descarga y zonas donde se requiere respaldo instrumental de condicion ambiental.",
    deliverable:
      "Datos de terreno, respaldo instrumental, evidencia de muestreo y reporte tecnico con interpretacion operativa del monitoreo realizado.",
    availability: "Programas puntuales o periodicos segun exigencia del cliente, campaña ambiental o control interno.",
    highlights: [
      "Monitoreo de variables ambientales con equipos especializados.",
      "Apoyo a seguimiento de condiciones de agua y entorno submarino.",
      "Informacion util para cumplimiento, control y gestion operativa.",
      "Integracion de datos de terreno con evidencia tecnica ordenada."
    ]
  },
  {
    slug: "aquaculture",
    title: "Aquaculture",
    icon: Fish,
    image: "/assets/inspeccion_malla_cultivo.jpg",
    summary: "Servicios especializados para centros de cultivo, fondeos, redes, emisarios y contingencias.",
    detail:
      "Prestamos soporte submarino para centros de cultivo en inspeccion de redes, fondeos, cadenas, muertos, emisarios y contingencias operacionales. El servicio se adapta a la necesidad del centro, priorizando continuidad, seguridad y evidencia clara para decision rapida.",
    sectors: ["Salmoneras"],
    application:
      "Inspeccion y verificacion de sistemas de cultivo, lineas de fondeo, mallas, jaulas, uniones, cadenas y elementos criticos de centros acuicolas.",
    deliverable:
      "Video por frente inspeccionado, registro de hallazgos, observaciones tecnicas y reporte para jefe de centro, area tecnica o mantencion.",
    availability: "Respuesta programada o contingente para centros de cultivo y operaciones de apoyo acuicola.",
    highlights: [
      "Cobertura de redes, fondeos, cadenas, muertos y emisarios.",
      "Soporte a contingencias, verificacion y control preventivo.",
      "Lectura operativa pensada para continuidad del centro.",
      "Entrega directa para equipos tecnicos y de terreno."
    ]
  },
  {
    slug: "pre-infa",
    title: "Pre-INFA",
    icon: ScanSearch,
    image: "/assets/tecnico_boya_costa.jpg",
    summary: "Levantamientos y apoyo tecnico para campanas Pre-INFA con criterios de calidad y cumplimiento.",
    detail:
      "Apoyamos campañas Pre-INFA con preparacion de faena, levantamiento en terreno y respaldo tecnico de informacion requerida para el sector acuicola. El servicio se enfoca en orden metodologico, calidad de captura y soporte documental para el cliente.",
    sectors: ["Salmoneras"],
    application:
      "Levantamientos previos, apoyo a campañas ambientales y adquisicion de informacion de terreno asociada a requerimientos Pre-INFA.",
    deliverable:
      "Respaldo de terreno, registros de campaña, evidencia visual y soporte tecnico para consolidacion del estudio o entrega final.",
    availability: "Planificacion segun calendario de campaña, ventana climatica y requerimientos del centro o consultora.",
    highlights: [
      "Apoyo en terreno para campañas previas del sector acuicola.",
      "Orden de faena y captura tecnica con foco en cumplimiento.",
      "Soporte util para consultoras, operadores y equipos ambientales.",
      "Trazabilidad documental desde la ejecucion hasta la entrega."
    ]
  },
  {
    slug: "technical-reports",
    title: "Technical Reports",
    icon: FileText,
    image: "/assets/diagrama_inspeccion_malla.jpg",
    summary: "Informes tecnicos ejecutivos con hallazgos, trazabilidad visual y recomendaciones accionables.",
    detail:
      "Convertimos inspecciones, survey y monitoreos en informes tecnicos claros, ordenados y utilizables por operaciones, mantencion, gerencia o terceros. La entrega prioriza hallazgos verificables, contexto suficiente y una lectura ejecutiva que facilite decision y seguimiento.",
    sectors: ["Puertos", "Navieras", "Salmoneras", "Industria"],
    application:
      "Consolidacion de evidencia de terreno para clientes que necesitan informes utilizables en gestion interna, auditoria, aseguramiento o respaldo tecnico frente a terceros.",
    deliverable:
      "Informe estructurado con evidencia visual, resumen ejecutivo, hallazgos priorizados, observaciones tecnicas y recomendaciones de accion o seguimiento.",
    availability: "Emision posterior a faena o como soporte documental de campañas e inspecciones ya ejecutadas.",
    highlights: [
      "Redaccion tecnica orientada a lectura ejecutiva y accion.",
      "Ordenamiento de evidencia para auditoria, cliente o gerencia.",
      "Conclusiones claras sin sobrecargar el informe con relleno.",
      "Formato adaptable al tipo de activo, faena o requerimiento."
    ]
  }
] as const;

export const technologies = [
  {
    slug: "kirke",
    title: "Kirke",
    imageLabel: "ROV deep inspection platform",
    depth: "250 m",
    thrusters: "8 vectored motors",
    camera: "4K low-light camera",
    speed: "3.2 kn",
    lights: "12,000 lumens",
    description:
      "Plataforma para inspeccion profunda, operaciones en puertos expuestos y soporte a activos industriales complejos."
  },
  {
    slug: "skyring",
    title: "Skyring",
    imageLabel: "ROV precision hull and structure platform",
    depth: "200 m",
    thrusters: "6 high-torque motors",
    camera: "4K stabilized payload",
    speed: "2.8 kn",
    lights: "10,000 lumens",
    description:
      "Unidad optimizada para inspeccion de cascos, estructuras portuarias y operaciones de alta maniobrabilidad."
  },
  {
    slug: "patagonia-m8",
    title: "Patagonia M8",
    imageLabel: "ROV survey and environmental response platform",
    depth: "150 m",
    thrusters: "8 adaptive motors",
    camera: "Dual 4K survey optics",
    speed: "3.0 kn",
    lights: "9,000 lumens",
    description:
      "Equipo versatil para survey, monitoreo ambiental, fondeos, emisarios y apoyo a contingencias submarinas."
  }
] as const;

export const complementaryTechnology = [
  { label: "USBL", icon: Waypoints },
  { label: "Multiparametrico", icon: Binoculars },
  { label: "Turbidimetro", icon: Activity },
  { label: "pH", icon: BadgeCheck }
];

export const galleryItems = [
  { title: "Hull diagnostics", type: "Foto" },
  { title: "ROV launch sequence", type: "Video" },
  { title: "Port structure survey", type: "Foto" },
  { title: "Pipeline corridor review", type: "Video" },
  { title: "Outfall verification", type: "Foto" },
  { title: "Environmental station", type: "Foto" }
];

export const clients = [
  "Terminales Portuarios",
  "Salmonicultura",
  "Armadores",
  "Industria Naval",
  "Energia",
  "Infraestructura Costera"
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com" }
];
