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
    image: "/work-rov1.jpg",
    summary: "Inspecciones visuales y dimensionales con trazabilidad digital para activos criticos submarinos.",
    detail:
      "Operaciones con ROV industrial para inspeccion estructural, apoyo a mantencion, verificacion de integridad y captura de evidencia tecnica lista para auditoria."
  },
  {
    slug: "hull-inspection",
    title: "Hull Inspection",
    icon: ShipWheel,
    image: "/Inspeccion-de-cascos.jpg",
    summary: "Evaluacion de cascos, appendages, timones y helices con criterio naval y foco operacional.",
    detail:
      "Inspeccion detallada de casco para armadores, puertos y astilleros, orientada a detectar fouling, danos, corrosion y condiciones de clase."
  },
  {
    slug: "hull-cleaning",
    title: "Hull Cleaning",
    icon: Sparkles,
    image: "/Limpieza-de-fondo-marino.jpg",
    summary: "Limpieza controlada de casco con metodologia segura para mejorar eficiencia y performance.",
    detail:
      "Servicio de remocion de incrustaciones y biofouling con control de riesgo, registro visual y enfoque en continuidad operativa."
  },
  {
    slug: "cavitation-cleaning",
    title: "Cavitation Cleaning",
    icon: Waves,
    image: "/Limpieza-mediante-cavitacion.jpg",
    summary: "Limpieza por cavitacion para intervenciones tecnicas de alta precision en superficies submarinas.",
    detail:
      "Tecnologia de cavitacion para limpieza no invasiva, ideal para operaciones donde la integridad del sustrato y la eficiencia del proceso son criticas."
  },
  {
    slug: "subsea-survey",
    title: "Subsea Survey",
    icon: Map,
    image: "/Batimetria.jpg",
    summary: "Levantamientos y estudios batimetricos para infraestructura, lineas y zonas operacionales.",
    detail:
      "Ejecucion de campanas de survey con integracion de posicionamiento, sensores y reportabilidad tecnica para proyectos submarinos."
  },
  {
    slug: "usbl-positioning",
    title: "USBL Positioning",
    icon: Waypoints,
    image: "/georeferenciacion.jpg",
    summary: "Posicionamiento submarino de alta confiabilidad para maniobras, inspeccion y seguimiento.",
    detail:
      "Soluciones USBL para localizacion precisa de ROV, objetivos y elementos sumergidos en ambientes portuarios y offshore."
  },
  {
    slug: "pipeline-inspection",
    title: "Pipeline Inspection",
    icon: Cable,
    image: "/Inspeccion-de-oleoductos.jpg",
    summary: "Inspeccion de oleoductos y lineas sumergidas con evidencia georreferenciada y evaluacion tecnica.",
    detail:
      "Monitoreo de integridad, apoyos, cruces y condiciones de recubrimiento para ductos y tendidos submarinos."
  },
  {
    slug: "outfall-inspection",
    title: "Outfall Inspection",
    icon: Anchor,
    image: "/Inspeccion-de-muelles.jpg",
    summary: "Control de emisarios submarinos y estructuras asociadas con criterio ambiental e ingenieril.",
    detail:
      "Inspeccion de difusores, emisarios y zonas de descarga para detectar obstrucciones, danos y condiciones de operacion."
  },
  {
    slug: "environmental-monitoring",
    title: "Environmental Monitoring",
    icon: Activity,
    image: "/generated/port-structure-inspection.png",
    summary: "Monitoreo ambiental submarino con instrumentacion y reportes para cumplimiento y decision.",
    detail:
      "Programas de monitoreo de columna de agua y entorno bentonico con soporte instrumental y evidencia integrada."
  },
  {
    slug: "aquaculture",
    title: "Aquaculture",
    icon: Fish,
    image: "/work-rov2.jpg",
    summary: "Servicios especializados para centros de cultivo, fondeos, redes, emisarios y contingencias.",
    detail:
      "Soporte tecnico para acuicultura con foco en continuidad operacional, seguridad, medio ambiente y trazabilidad."
  },
  {
    slug: "pre-infa",
    title: "Pre-INFA",
    icon: ScanSearch,
    image: "/generated/team-deck-operations.png",
    summary: "Levantamientos y apoyo tecnico para campanas Pre-INFA con criterios de calidad y cumplimiento.",
    detail:
      "Preparacion, adquisicion de datos y respaldo tecnico para estudios previos y requerimientos del sector acuicola."
  },
  {
    slug: "technical-reports",
    title: "Technical Reports",
    icon: FileText,
    image: "/generated/hull-inspection-real.png",
    summary: "Informes tecnicos ejecutivos con hallazgos, trazabilidad visual y recomendaciones accionables.",
    detail:
      "Entregables listos para cliente, aseguradora, auditoria o gerencia tecnica, con estructura clara y evidencia robusta."
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
