"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function MenuLandingPage() {
  const { t } = useI18n();

  const links = [
    {
      title: t<string>("common.restaurantMenu"),
      href: "/menu/restaurant",
      description: t<string>("menu.restaurantDesc"),
    },
    {
      title: t<string>("common.barMenu"),
      href: "/menu/bar",
      description: t<string>("menu.barDesc"),
    },
  ];

  return (
    <main>
      <Header />

      <section className="hero-image pt-36 text-[#f8efde]">
        <div className="site-shell pb-14">
          <Link href="/" className="inline-block rounded-full border border-[#d9c29a] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#f0e2c5]">
            {t("common.backHome")}
          </Link>
          <p className="eyebrow mt-6 text-[#e3bf7a] before:bg-[#e3bf7a]">{t("menu.heroKicker")}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.02]">{t("menu.heroTitle")}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#eee3cd]">{t("menu.heroDesc")}</p>
        </div>
      </section>

      <section className="section pt-10">
        <div className="site-shell grid gap-5 md:grid-cols-2">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="panel rounded-2xl p-6 transition hover:-translate-y-1">
              <h2 className="font-serif text-5xl text-[var(--ocean-900)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">{item.description}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.1em] text-[var(--teal-600)]">{t("common.openMenu")}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
