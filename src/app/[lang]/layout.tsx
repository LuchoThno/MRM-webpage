import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { siteUrl } from "@/data/site";
import { isLocale, localeLabels, localizePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildAlternates, ogImage, siteName } from "@/lib/seo";

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
      template: `%s | ${siteName}`
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "business",
    formatDetection: { telephone: false },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      url: localizePath(lang, "/"),
      siteName,
      locale: localeLabels[lang].ogLocale,
      alternateLocale: locales.filter((locale) => locale !== lang).map((locale) => localeLabels[locale].ogLocale),
      type: "website",
      images: [ogImage(lang)]
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.twitterDescription,
      images: [ogImage(lang).url]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
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
    manifest: "/favicon/site.webmanifest",
    verification: {
      // Google Search Console ownership token (public by design). Can be overridden from Vercel env vars.
      google: process.env.GOOGLE_SITE_VERIFICATION || "wpuciDUIjgIom9O_HleXFoszt2QLes7I-T2c874gdLY",
      other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined
    },
    alternates: buildAlternates(lang, "/")
  };
}

export const viewport: Viewport = {
  themeColor: "#020914",
  colorScheme: "dark"
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={localeLabels[lang].htmlLang} className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#020914] font-[family-name:var(--font-inter)] text-white antialiased">{children}</body>
    </html>
  );
}
