"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MapEmbed from "@/components/shared/MapEmbed";
import testimonials from "@/constants/testimonials";
import { galleryImages } from "@/data/site";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function HomePage() {
  const { t } = useI18n();
  const quickFacts = t<Array<{ value: string; label: string }>>("home.facts");
  const amenities = t<string[]>("home.amenities");
  const experiences =
    t<Array<{ title: string; description: string }>>("home.experiences");
  const featuredMenu =
    t<Array<{ category: string; items: string[] }>>("home.menuPreview");
  const beachPackages =
    t<Array<{ name: string; details: string; tag: string }>>("home.packages");

  return (
    <main>
      <Header />

      <section className="hero-image min-h-screen pt-32 text-[#f8efde]">
        <div className="site-shell pb-18 pt-10 md:pt-20">
          <p className="eyebrow fade-up text-[#e3bf7a] before:bg-[#e3bf7a]">
            {t("home.heroKicker")}
          </p>
          <h1 className="fade-up fade-1 mt-6 max-w-5xl font-serif text-[clamp(2.25rem,6vw,5.3rem)] leading-[0.97] text-[#fff7e9]">
            {t("home.heroTitle")}
          </h1>
          <p className="fade-up fade-2 mt-8 max-w-2xl text-[1.05rem] leading-8 text-[#ede2cd]">
            {t("home.heroDesc")}
          </p>

          <div className="fade-up fade-3 mt-12 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="btn-solid bg-[var(--sun-500)] text-[#1f282b]"
            >
              {t("common.viewMenus")}
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-[#e7dbc6] bg-[#f8f1e3]/95 px-5 py-4 shadow-[0_10px_24px_rgba(8,31,42,0.2)]"
              >
                <p className="font-serif text-3xl text-[var(--ocean-900)]">
                  {fact.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--ink-700)]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="venue">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="eyebrow">{t("home.venueKicker")}</p>
            <h2 className="headline mt-4">{t("home.venueTitle")}</h2>
            <p className="subline">{t("home.venueDesc")}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {amenities.map((item) => (
                <div
                  key={item}
                  className="panel px-4 py-3 text-sm text-[var(--ink-700)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-[var(--sand-200)]" />
            <Image
              src="/restaurant-2.jpg"
              alt="Teo Narte venue"
              width={1100}
              height={1100}
              className="relative h-[26rem] w-full rounded-[2rem] object-cover shadow-2xl md:h-[36rem]"
            />
          </div>
        </div>
      </section>

      <section className="section pt-2" id="experience">
        <div className="site-shell">
          <p className="eyebrow">{t("home.experiencesKicker")}</p>
          <h2 className="headline mt-4">{t("home.experiencesTitle")}</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className="panel overflow-hidden"
              >
                <Image
                  src={galleryImages[idx % galleryImages.length]}
                  alt={item.title}
                  width={800}
                  height={700}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-serif text-3xl text-[var(--ocean-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-700)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-2" id="menu-preview">
        <div className="site-shell grid gap-8 lg:grid-cols-2">
          {featuredMenu.map((group) => (
            <article key={group.category} className="panel p-6 md:p-8">
              <p className="eyebrow">{group.category}</p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--ink-700)]">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-[var(--line)] pb-3"
                  >
                    <span>{item}</span>
                    <span className="text-xs uppercase tracking-[0.1em] text-[var(--ocean-800)]">
                      {t("common.featured")}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="site-shell mt-12 flex justify-center pt-20">
          <Link href="/menu" className="btn-solid">
            {t("common.viewMenu")}
          </Link>
        </div>
      </section>

      <section className="section pt-2" id="sunbeds">
        <div className="site-shell">
          <div className="panel overflow-hidden p-6 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="eyebrow">{t("home.sunbedsKicker")}</p>
                <h2 className="headline mt-4 text-[clamp(2rem,4.4vw,4rem)]">
                  {t("home.sunbedsTitle")}
                </h2>
                <p className="subline">{t("home.sunbedsDesc")}</p>
                <div className="mt-6 space-y-3 text-sm text-[var(--ink-700)]">
                  {beachPackages.map((pack) => (
                    <div
                      key={pack.name}
                      className="rounded-xl border border-[var(--line)] bg-white/55 px-4 py-3"
                    >
                      <p className="font-semibold text-[var(--ocean-900)]">
                        {pack.name}{" "}
                        <span className="ml-2 text-xs uppercase tracking-[0.1em] text-[var(--teal-600)]">
                          {pack.tag}
                        </span>
                      </p>
                      <p className="mt-1 text-xs leading-6">{pack.details}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/#sunbeds"
                  className="btn-solid mt-7 inline-block bg-[var(--teal-600)]"
                >
                  {t("home.exploreBeachOptions")}
                </Link>
              </div>
              <Image
                src="/fixed3.jpg"
                alt="Sunbed area"
                width={1200}
                height={900}
                className="h-[22rem] w-full rounded-2xl object-cover md:h-[30rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-2" id="gallery-preview">
        <div className="site-shell">
          <p className="eyebrow">{t("home.galleryKicker")}</p>
          <h2 className="headline mt-4">{t("home.galleryTitle")}</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <Image
                key={`${image}-${index}`}
                src={image}
                alt={`gallery-${index}`}
                width={700}
                height={700}
                className="h-40 w-full rounded-xl object-cover md:h-56"
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/gallery" className="btn-solid">
              {t("home.openFullGallery")}
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-2" id="testimonials">
        <div className="site-shell">
          <p className="eyebrow">{t("home.socialKicker")}</p>
          <h2 className="headline mt-4">{t("home.socialTitle")}</h2>

          <div className="custom-scroll mt-8 grid gap-4 overflow-x-auto pb-2 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <article key={`${item.name}-${index}`} className="panel p-5">
                <p className="text-sm leading-7 text-[var(--ink-700)]">
                  {item.testimonial}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ocean-800)]">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-2" id="location">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-6 md:p-8">
            <p className="eyebrow">{t("home.walkinKicker")}</p>
            <h2 className="headline mt-4 text-[clamp(2rem,4.4vw,4rem)]">
              {t("home.walkinTitle")}
            </h2>
            <p className="subline">{t("home.walkinDesc")}</p>
            <div className="mt-6 space-y-2 text-sm text-[var(--ink-700)]">
              <p>{t("home.phone")}</p>
              <p>{t("home.location")}</p>
              <p>{t("home.season")}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="tel:+355672957798" className="btn-solid">
                {t("common.callNow")}
              </Link>
              <Link
                href="tel:+355672957798"
                className="btn-solid bg-[var(--sun-500)] text-[#1f282b]"
              >
                {t("common.privateEventsOnly")}
              </Link>
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      <Footer />
    </main>
  );
}
