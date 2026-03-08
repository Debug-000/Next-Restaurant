"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { galleryImages } from "@/data/site";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <main>
      <Header />

      <section className="section pt-36">
        <div className="site-shell">
          <p className="eyebrow">{t("gallery.kicker")}</p>
          <h1 className="headline mt-4">{t("gallery.title")}</h1>
          <p className="subline">{t("gallery.desc")}</p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button key={`${image}-${index}`} onClick={() => setActive(index)} className="overflow-hidden rounded-2xl">
                <Image src={image} alt={`gallery-${index}`} width={900} height={900} className="h-40 w-full object-cover transition duration-300 hover:scale-105 md:h-60" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm" onClick={() => setActive(null)}>
              {t("gallery.close")}
            </button>
            <Image src={galleryImages[active]} alt="Selected gallery" width={1600} height={1000} className="max-h-[88vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
}
