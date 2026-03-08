"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { getByPath, type Lang, languageLabels, translations } from "@/i18n/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T = string>(path: string) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sq");

  useEffect(() => {
    const saved = localStorage.getItem("site_lang") as Lang | null;
    if (saved && ["en", "sq", "it"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("site_lang", next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: <T = string,>(path: string) => {
        const direct = getByPath(translations[lang], path);
        if (direct !== undefined) return direct as T;
        return getByPath(translations.en, path) as T;
      },
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#f6f0e3] transition hover:bg-white/20"
        aria-label="Open language menu"
      >
        Language: {languageLabels[lang]}
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.45rem)] min-w-[8.5rem] overflow-hidden rounded-xl border border-white/20 bg-[#103243]/95 p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-md">
          {Object.entries(languageLabels).map(([key, label]) => {
            const code = key as Lang;
            const active = lang === code;

            return (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
                  active ? "bg-white text-[#103243]" : "text-[#f6f0e3] hover:bg-white/20"
                }`}
                aria-label={`Set language ${label}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
