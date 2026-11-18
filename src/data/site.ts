import {
  Activity,
  Anchor,
  Cable,
  FileText,
  Fish,
  Map,
  Package,
  Radar,
  ScanSearch,
  ShipWheel,
  Ship,
  Sparkles,
  Users,
  Waves,
  Waypoints,
  Wrench,
  type LucideIcon
} from "lucide-react";

export const siteUrl = "https://www.magallanesrovmarine.cl";

/** Section anchors shared by both languages. */
export const navigationAnchors = [
  { key: "home", href: "/#inicio" },
  { key: "company", href: "/#empresa" },
  { key: "services", href: "/#servicios" },
  { key: "logistics", href: "/#logistica" },
  { key: "quote", href: "/#contacto" }
] as const;

export const contactInfo = {
  email: "contacto@magallanesrovmarine.cl",
  mailtoHref: "mailto:contacto@magallanesrovmarine.cl"
} as const;

export const locations = [
  { city: "Valparaíso", top: "34.7%", left: "52.6%", labelClass: "left-7 top-[-0.35rem]" },
  { city: "Concepción", top: "47.7%", left: "50.1%", labelClass: "left-7 top-[-0.35rem]" },
  { city: "Talcahuano", top: "45.8%", left: "48.1%", labelClass: "right-7 top-[-0.35rem] text-right" },
  { city: "Puerto Montt", top: "56.9%", left: "47.2%", labelClass: "left-7 top-[-0.35rem]" },
  { city: "Punta Arenas", top: "87.2%", left: "47.7%", labelClass: "left-7 top-[-0.35rem]" }
];

export const subseaSlugs = [
  "rov-inspection",
  "hull-inspection",
  "hull-cleaning",
  "cavitation-cleaning",
  "subsea-survey",
  "usbl-positioning",
  "pipeline-inspection",
  "outfall-inspection",
  "environmental-monitoring",
  "aquaculture",
  "pre-infa",
  "technical-reports"
] as const;

/** Logistics services for vessels and cruise ships calling at Magallanes ports. */
export const logisticsSlugs = [
  "cruise-support",
  "crew-logistics",
  "ship-supply",
  "afloat-technical-support"
] as const;

export const serviceSlugs = [...subseaSlugs, ...logisticsSlugs] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type LogisticsSlug = (typeof logisticsSlugs)[number];

export function isLogisticsSlug(slug: string): slug is LogisticsSlug {
  return (logisticsSlugs as readonly string[]).includes(slug);
}

export const serviceMedia: Record<ServiceSlug, { icon: LucideIcon; image: string }> = {
  "rov-inspection": { icon: Radar, image: "/assets/piloto_operando_rov.jpg" },
  "hull-inspection": { icon: ShipWheel, image: "/assets/casco/inspeccion-bulbo-proa.jpg" },
  "hull-cleaning": { icon: Sparkles, image: "/assets/casco/helice-con-fouling.jpg" },
  "cavitation-cleaning": { icon: Waves, image: "/assets/casco/pala-helice-algas.jpg" },
  "subsea-survey": { icon: Map, image: "/assets/diagrama_inspeccion_tensores.jpg" },
  "usbl-positioning": { icon: Waypoints, image: "/assets/usbl_seatrac_subsea.jpg" },
  "pipeline-inspection": { icon: Cable, image: "/assets/inspeccion_oleoducto_submarino.jpg" },
  "outfall-inspection": { icon: Anchor, image: "/assets/inspeccion_cadena_submarina.jpg" },
  "environmental-monitoring": { icon: Activity, image: "/assets/equipo_multiparametrico_terreno.jpg" },
  aquaculture: { icon: Fish, image: "/assets/inspeccion_malla_cultivo.jpg" },
  "pre-infa": { icon: ScanSearch, image: "/assets/tecnico_boya_costa.jpg" },
  "technical-reports": { icon: FileText, image: "/assets/casco/corrosion-bulbo.jpg" },
  "cruise-support": { icon: Ship, image: "/assets/logistica/cruise.jpg" },
  "crew-logistics": { icon: Users, image: "/assets/logistica/crew.jpg" },
  "ship-supply": { icon: Package, image: "/assets/logistica/supply.jpg" },
  "afloat-technical-support": { icon: Wrench, image: "/assets/logistica/tech.jpg" }
};

export function getServiceIcon(slug: ServiceSlug) {
  return serviceMedia[slug].icon;
}

export const technologySlugs = ["kirke", "skyring", "patagonia-m8"] as const;

export type TechnologySlug = (typeof technologySlugs)[number];

export const technologySpecs: Record<TechnologySlug, { title: string; depth: string; speed: string }> = {
  kirke: { title: "Kirke", depth: "250 m", speed: "3.2 kn" },
  skyring: { title: "Skyring", depth: "200 m", speed: "2.8 kn" },
  "patagonia-m8": { title: "Patagonia M8", depth: "150 m", speed: "3.0 kn" }
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com" }
];
