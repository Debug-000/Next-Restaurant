"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuCatalog, { type MenuCategory } from "@/components/menu/MenuCatalog";
import barMenu from "@/app/constmenu/Barmenu";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function BarMenuPage() {
  const { t } = useI18n();

  return (
    <main>
      <Header />

      <section className="hero-image pt-36 text-[#f8efde]">
        <div className="site-shell pb-14">
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="rounded-full border border-[#d9c29a] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#f0e2c5]">
              {t("common.backHome")}
            </Link>
            <Link href="/menu" className="rounded-full border border-[#d9c29a] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#f0e2c5]">
              {t("common.allMenus")}
            </Link>
          </div>
          <p className="eyebrow mt-6 text-[#e3bf7a] before:bg-[#e3bf7a]">{t("common.barMenu")}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2rem,5vw,4.4rem)] leading-[1.02]">{t("menu.barHeroTitle")}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#eee3cd]">{t("menu.barHeroDesc")}</p>
        </div>
      </section>

      <section className="section pt-10">
        <div className="site-shell">
          <MenuCatalog categories={barMenu as MenuCategory[]} mode="bar" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
