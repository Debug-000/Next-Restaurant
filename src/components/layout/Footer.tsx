"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="mt-14 border-t border-[var(--line)] bg-[#e8decc] py-14 text-[var(--ink-900)]">
      <div className="site-shell grid gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">{t("footer.kicker")}</p>
          <h3 className="mt-4 font-serif text-5xl">{t("footer.title")}</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--ink-700)]">
            {t("footer.desc")}
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <Link href="https://www.facebook.com/teo.narte.7" target="_blank" className="flex items-center gap-3">
              <BsFacebook /> Facebook
            </Link>
            <Link href="https://www.instagram.com/teo_narte/" target="_blank" className="flex items-center gap-3">
              <BsInstagram /> Instagram
            </Link>
            <Link href="tel:+355672957798" className="flex items-center gap-3">
              <BsFillTelephoneFill /> +355 67 295 7798
            </Link>
          </div>
        </div>

        <div className="panel p-6">
          <h4 className="font-serif text-4xl text-[var(--ocean-900)]">{t("footer.visitInfo")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-700)]">
            <li>{t("footer.openSeason")}</li>
            <li>{t("footer.dailyService")}</li>
            <li>{t("footer.location")}</li>
            <li>{t("footer.wifi")}</li>
          </ul>
          <p className="mt-8 text-xs uppercase tracking-[0.11em] text-[var(--ink-700)]">© {year} Teo Narte. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
