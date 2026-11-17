import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { siteUrl } from "@/data/site";
import { isLocale, localeLabels, localizePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-loaded", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-loaded", display: "swap" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: "%s | MRM"
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      url: localizePath(lang, "/"),
      siteName: "MRM",
      locale: localeLabels[lang].ogLocale,
      alternateLocale: locales.filter((locale) => locale !== lang).map((locale) => localeLabels[locale].ogLocale),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.twitterDescription
    },
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" }
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon/favicon.ico"]
    },
    alternates: {
      canonical: localizePath(lang, "/"),
      languages: {
        es: localizePath("es", "/"),
        en: localizePath("en", "/"),
        "x-default": localizePath("es", "/")
      }
    }
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={localeLabels[lang].htmlLang} className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#020914] font-[family-name:var(--font-inter)] text-white antialiased">{children}</body>
    </html>
  );
}
