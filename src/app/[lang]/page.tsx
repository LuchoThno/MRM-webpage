import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { HomePage } from "@/components/home-page";
import { Nav } from "@/components/nav";
import { getServiceCards } from "@/data/content";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <Nav locale={lang} />
      <HomePage locale={lang} dict={getDictionary(lang)} services={getServiceCards(lang)} />
      <Footer locale={lang} />
    </>
  );
}
