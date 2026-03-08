"use client";

import Image from "next/image";
import { useI18n } from "@/components/i18n/LanguageProvider";

type MenuItem = {
  name: string;
  price: string;
  ingredients?: string;
};

export type MenuCategory = {
  Name: string;
  items: MenuItem[];
};

type CatalogMode = "restaurant" | "bar";

type CategoryMeta = {
  image: string;
};

const restaurantMeta: Record<string, CategoryMeta> = {
  Vera: {
    image: "/whine.jpg",
  },
  Birra: {
    image: "/restaurant-3.jpg",
  },
  Sallata: {
    image: "/restaurant-2.jpg",
  },
  Antipasta: {
    image: "/fixed3.jpg",
  },
  Brumerat: {
    image: "/restaurant-2.jpg",
  },
  Mishi: {
    image: "/restaurant-3.jpg",
  },
  Supa: {
    image: "/whine.jpg",
  },
  Peshku: {
    image: "/fixed3.jpg",
  },
  Pizza: {
    image: "/restaurant-2.jpg",
  },
};

const barMeta: Record<string, CategoryMeta> = {
  Kafeteria: {
    image: "/whine.jpg",
  },
  Freskuese: {
    image: "/restaurant-3.jpg",
  },
  Birra: {
    image: "/fixed3.jpg",
  },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function cleanIngredients(raw?: string) {
  if (!raw) return "";
  const cleaned = raw.replace(/[{}]/g, "").trim();
  if (!cleaned) return "";
  if (cleaned.includes("spagetti,domatina,fruta deti") || cleaned.includes("peshk ne zgare")) return "";
  return cleaned;
}

function createDescription(item: MenuItem, categoryName: string, mode: CatalogMode, lang: string) {
  const text = {
    en: {
      prepared: "Prepared with",
      finished: "and finished in our house style.",
      coldBalanced: "Served cold and balanced for warm beach afternoons.",
      coffee: "Freshly prepared coffee profile with smooth body and aroma.",
      energy: "A bold energy option for active summer moments.",
      classicBar: "A classic bar choice served chilled and ready for the seaside.",
      houseSignature: "One of our house signatures, layered with rich coastal flavor.",
      seaInspired: "Sea-inspired preparation with clean seasoning and balanced finish.",
      kitchenClassic: "A comforting kitchen classic prepared fresh to order.",
      freshOpener: "A fresh, elegant opener designed for relaxed sharing.",
      crafted: "Crafted in our kitchen with seasonal ingredients and refined presentation.",
    },
    sq: {
      prepared: "Pergatitur me",
      finished: "dhe perfunduar me stilin tone te kuzhines.",
      coldBalanced: "Sherbehet e ftohte dhe e balancuar per pasdite te ngrohta ne plazh.",
      coffee: "Profil kafeje i pergatitur fresket me trup dhe arome te plote.",
      energy: "Zgjedhje energjike per momente aktive verore.",
      classicBar: "Zgjedhje klasike bari, e ftohte dhe perfekte per bregdetin.",
      houseSignature: "Nje nga signature tone, me shije bregdetare te pasur.",
      seaInspired: "Pergatitje me fryme deti dhe balancim te paster shijesh.",
      kitchenClassic: "Klasike kuzhine e pergatitur fresket sipas porosise.",
      freshOpener: "Hyrje e fresket dhe elegante, ideale per ta ndare.",
      crafted: "Pergatitur ne kuzhinen tone me perberes sezonal dhe prezantim premium.",
    },
    it: {
      prepared: "Preparato con",
      finished: "e rifinito con lo stile della nostra cucina.",
      coldBalanced: "Servito freddo e bilanciato per i caldi pomeriggi in spiaggia.",
      coffee: "Profilo caffe preparato fresco con aroma e corpo equilibrato.",
      energy: "Una scelta energica per momenti estivi dinamici.",
      classicBar: "Scelta classica da bar, servita fredda e perfetta sul mare.",
      houseSignature: "Una delle nostre signature, con carattere costiero intenso.",
      seaInspired: "Preparazione ispirata al mare con condimento pulito e bilanciato.",
      kitchenClassic: "Classico di cucina preparato fresco al momento.",
      freshOpener: "Un antipasto fresco ed elegante, ideale da condividere.",
      crafted: "Creato nella nostra cucina con ingredienti stagionali e presentazione raffinata.",
    },
  }[lang === "sq" || lang === "it" ? lang : "en"];

  const ing = cleanIngredients(item.ingredients);
  if (ing) return `${text.prepared} ${ing.replace(/,/g, ", ")} ${text.finished}`;

  if (mode === "bar") {
    if (/fredo|frape|ftohte/i.test(item.name)) return text.coldBalanced;
    if (/express|makiato|kapucino/i.test(item.name)) return text.coffee;
    if (/redbull|b52/i.test(item.name)) return text.energy;
    return text.classicBar;
  }

  if (/tave|teo|speciale/i.test(item.name)) return text.houseSignature;
  if (/peshku|fruta deti|kallamar|ngjale|koce|lavrak/i.test(item.name)) return text.seaInspired;
  if (/pizza|spageti|rizoto/i.test(item.name)) return text.kitchenClassic;
  if (/sallat|antipast|supa/i.test(categoryName.toLowerCase())) return text.freshOpener;
  return text.crafted;
}

function badgeFor(item: MenuItem, index: number, mode: CatalogMode) {
  void index;
  void mode;
  if (/tave|teo|speciale|frutti/i.test(item.name.toLowerCase())) return "Signature";
  if (/fredo|frape|kapucino|redbull|corona/i.test(item.name.toLowerCase())) return "Popular";
  return null;
}

function pickFeatured(items: MenuItem[]) {
  const signatureIndex = items.findIndex((item) => /tave|teo|speciale|frutti|fredo|kapucino/i.test(item.name.toLowerCase()));
  return signatureIndex >= 0 ? signatureIndex : 0;
}

export default function MenuCatalog({
  categories,
  mode,
}: {
  categories: MenuCategory[];
  mode: CatalogMode;
}) {
  const { t, lang } = useI18n();
  const metaMap = mode === "restaurant" ? restaurantMeta : barMeta;
  const badgeClassName = mode === "restaurant" ? "bg-[var(--ocean-900)]" : "bg-[var(--teal-600)]";
  const filtered = categories;

  return (
    <section className="mt-8 pb-16">
      <div className="panel rounded-2xl p-4 md:p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-[var(--ink-700)]">
          {mode === "restaurant" ? t("menu.curatedRestaurant") : t("menu.curatedBar")}
        </p>
      </div>

      <div className="custom-scroll sticky top-[5.6rem] z-30 mt-4 overflow-x-auto rounded-full border border-[var(--line)] bg-[#fff8eb]/90 px-2 py-2 backdrop-blur">
        <div className="flex min-w-max gap-2">
          {filtered.map((category) => (
            <a
              key={category.Name}
              href={`#cat-${slugify(category.Name)}`}
              className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.11em] text-[var(--ink-700)] transition hover:bg-[var(--ocean-900)] hover:text-[#f7efdf]"
            >
              {category.Name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-7 space-y-8">
        {filtered.map((category, sectionIndex) => {
          const meta = metaMap[category.Name] ?? {
            image: "/fixed3.jpg",
          };

          const featuredIndex = pickFeatured(category.items);
          const featuredItem = category.items[featuredIndex];
          const otherItems = category.items.filter((_, index) => index !== featuredIndex);

          return (
            <section
              key={category.Name}
              id={`cat-${slugify(category.Name)}`}
              className="panel menu-reveal rounded-[1.6rem] p-5 md:p-8"
              style={{ animationDelay: `${sectionIndex * 80}ms` }}
            >
              <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--teal-600)]">{category.Name}</p>
                  <h3 className="mt-2 font-serif text-[clamp(2rem,3.7vw,3.35rem)] leading-[1.03] text-[var(--ocean-900)]">{category.Name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-8 text-[var(--ink-700)]">
                    {mode === "restaurant" ? t("menu.categoryIntroRestaurant") : t("menu.categoryIntroBar")}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[#7a8b93]">
                    {mode === "restaurant" ? t("menu.categoryNoteRestaurant") : t("menu.categoryNoteBar")}
                  </p>
                </div>

                <article className="relative overflow-hidden rounded-2xl">
                  <Image src={meta.image} alt={category.Name} width={900} height={650} className="h-full min-h-[16rem] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091f2ab8] via-[#091f2a69] to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/30 bg-black/20 p-4 text-[#f7efdf] backdrop-blur-md">
                    {badgeFor(featuredItem, featuredIndex, mode) ? (
                      <p className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#f5ecda] ${badgeClassName}`}>
                        {badgeFor(featuredItem, featuredIndex, mode) === "Signature" ? t("common.signature") : t("common.popular")}
                      </p>
                    ) : null}
                    <h4 className="mt-2 font-serif text-3xl">{featuredItem.name}</h4>
                    <p className="mt-1 text-sm text-[#ecddbf]">{createDescription(featuredItem, category.Name, mode, lang)}</p>
                    <p className="mt-2 text-sm font-semibold">{featuredItem.price}</p>
                  </div>
                </article>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {otherItems.map((item, itemIndex) => (
                  <article
                    key={`${category.Name}-${item.name}-${item.price}-${itemIndex}`}
                    className="group rounded-xl border border-[var(--line)] bg-[#fffdf7] px-4 py-4 shadow-[0_8px_18px_rgba(9,31,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(9,31,42,0.12)]"
                  >
                    <div className="flex items-end gap-2">
                      <h5 className="font-medium text-[var(--ocean-900)]">{item.name}</h5>
                      <span className="mb-[6px] h-px flex-1 bg-[var(--line)]" />
                      <p className="text-sm font-semibold text-[var(--ocean-800)]">{item.price}</p>
                    </div>

                    <p className="mt-2 text-xs leading-6 text-[#647781]">{createDescription(item, category.Name, mode, lang)}</p>

                    {badgeFor(item, itemIndex + 1, mode) ? (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-[var(--ink-700)]">
                          {badgeFor(item, itemIndex + 1, mode) === "Signature" ? t("common.signature") : t("common.popular")}
                        </span>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
