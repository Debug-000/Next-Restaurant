"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { LanguageSwitcher, useI18n } from "@/components/i18n/LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const navLinks = [
    { label: t<string>("header.home"), href: "/" },
    { label: t<string>("header.menu"), href: "/menu" },
    { label: t<string>("header.gallery"), href: "/gallery" },
    { label: t<string>("header.location"), href: "/#location" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d2f3f]/75 text-[#f6f0e3] backdrop-blur-xl">
      <nav className="site-shell flex h-[5.15rem] items-center justify-between">
        <Link href="/" className="font-serif text-[1.95rem] leading-none tracking-[0.08em]">
          TEO NARTE
        </Link>

        <ul className="hidden items-center gap-6 text-[0.79rem] font-semibold uppercase tracking-[0.11em] lg:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-white ${pathname === item.href ? "text-white" : "text-[#d9c6a0]"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <button className="text-[2rem] lg:hidden" aria-label="Toggle menu" onClick={() => setOpen((prev) => !prev)}>
          {open ? <CgClose /> : <CgMenuRight />}
        </button>
      </nav>

      <div className={`lg:hidden ${open ? "max-h-[28rem]" : "max-h-0 overflow-hidden"} border-t border-white/10 bg-[#0c2b39] transition-all duration-300`}>
        <div className="site-shell flex flex-col gap-2 py-5 text-sm">
          <div className="mb-2">
            <LanguageSwitcher />
          </div>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-[#dccba9]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
