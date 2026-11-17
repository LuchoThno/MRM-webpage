import { NavClient } from "@/components/nav-client";
import { navigationAnchors } from "@/data/site";
import { localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function Nav({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const items = navigationAnchors.map((item) => ({ label: t[item.key], href: localizePath(locale, item.href) }));

  return (
    <NavClient
      locale={locale}
      items={items}
      homeHref={localizePath(locale, "/#inicio")}
      labels={{ openMenu: t.openMenu, closeMenu: t.closeMenu, switchLanguage: t.switchLanguage }}
    />
  );
}
