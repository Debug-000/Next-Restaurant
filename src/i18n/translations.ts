export type Lang = "en" | "sq" | "it";

export const languageLabels: Record<Lang, string> = {
  en: "EN",
  sq: "SQ",
  it: "IT",
};

export const translations = {
  en: {
    header: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      location: "Location",
      viewMenu: "View Menu",
    },
    common: {
      backHome: "Back Home",
      allMenus: "All Menus",
      openMenu: "Open Menu",
      viewMenu: "View Menu",
      viewMenus: "View Menus",
      restaurantMenu: "Restaurant Menu",
      barMenu: "Bar Menu",
      callNow: "Call Now",
      privateEventsOnly: "Private Events Only",
      featured: "Featured",
      signature: "Signature",
      popular: "Popular",
      recommended: "Recommended",
    },
    home: {
      heroKicker: "Premium Beach Venue | Zvernec",
      heroTitle: "A refined seaside destination for dining, cocktails, sunbeds and slow Mediterranean days.",
      heroDesc:
        "Teo Narte combines beach lifestyle and elevated hospitality in one destination. Discover the restaurant, relax on premium sunbeds, enjoy the bar at sunset, and walk in anytime by the sea.",
      facts: [
        { value: "4.8", label: "Average Rating" },
        { value: "45+", label: "Menu Choices" },
        { value: "Jun-Sep", label: "Season" },
        { value: "All Day", label: "Beach Service" },
      ],
      venueKicker: "The Venue",
      venueTitle: "From lunch by the water to golden-hour cocktails.",
      venueDesc:
        "Built for guests who value quality and atmosphere, Teo Narte offers an all-day beach flow: breakfast coffee, elegant lunch, afternoon sunbed service, and evening drinks with the sea in front of you.",
      amenities: [
        "Premium beachfront sunbeds",
        "Fast table-to-beach service",
        "Cocktail and wine selection",
        "Family-friendly beach area",
        "Restaurant and bar in one venue",
        "Easy parking nearby",
      ],
      experiencesKicker: "Signature Experiences",
      experiencesTitle: "One destination, four premium moments.",
      experiences: [
        {
          title: "Restaurant",
          description:
            "Mediterranean-inspired plates and Albanian classics served with refined presentation and sea-facing comfort.",
        },
        {
          title: "Beach Bar",
          description:
            "Signature cocktails, chilled wines, and sunset playlists curated for long afternoons by the water.",
        },
        {
          title: "Sunbed Service",
          description:
            "Comfortable beachfront sunbeds with attentive all-day service and relaxed seaside space.",
        },
        {
          title: "Seaside Relax",
          description:
            "A calm atmosphere designed for families, couples, and guests seeking elegant beachside downtime.",
        },
      ],
      menuPreview: [
        {
          category: "Kitchen Signature",
          items: ["Tave Ngjale", "Fresh Catch Grill", "Seafood Risotto", "Wood-Fired Pizza"],
        },
        {
          category: "Bar Signature",
          items: ["Fredo Cappuccino", "House White Wine", "Sunset Spritz", "Fresh Citrus Coolers"],
        },
      ],
      sunbedsKicker: "Beach & Sunbeds",
      sunbedsTitle: "Premium beach setup with dedicated service.",
      sunbedsDesc: "Choose your preferred beach setup and enjoy direct access to bar and restaurant service while you relax.",
      packages: [
        {
          name: "Sunset Pair",
          details: "2 premium sunbeds + umbrella + welcome water + priority bar service",
          tag: "Most Popular",
        },
        {
          name: "Family Comfort",
          details: "4 sunbeds + 2 umbrellas + snack platter option + shaded service zone",
          tag: "Family Pick",
        },
        {
          name: "Private Cabana",
          details: "Semi-private lounge setup + dedicated service + flexible afternoon dining",
          tag: "Luxury",
        },
      ],
      exploreBeachOptions: "Explore Beach Options",
      galleryKicker: "Visual Story",
      galleryTitle: "Feel the atmosphere before you arrive.",
      openFullGallery: "Open Full Gallery",
      socialKicker: "Social Proof",
      socialTitle: "Trusted by guests who return every season.",
      walkinKicker: "Walk-In Policy",
      walkinTitle: "No reservations. Walk in and we welcome you.",
      walkinDesc: "We do not keep reservations or live availability. Contact us only if you want to host a private event.",
      phone: "Phone: +355 67 295 7798",
      location: "Location: Zvernec, Vlore, Albania",
      season: "Open season: June 1 - September 15",
    },
    menu: {
      heroKicker: "Food & Drinks",
      heroTitle: "Choose a menu",
      heroDesc: "Each menu has its own dedicated link, ideal for separate QR codes on-site.",
      restaurantDesc: "Main dishes, seafood, pasta, salads and traditional kitchen specialties.",
      barDesc: "Coffee, soft drinks, beers, cocktails and beach refreshers.",
      restaurantHeroTitle: "Kitchen specialties and signature plates.",
      restaurantHeroDesc: "This link is dedicated to the restaurant menu and can be used directly in QR code print.",
      barHeroTitle: "Cocktails, coffee and beach refreshers.",
      barHeroDesc: "This link is dedicated to the bar menu and can be used directly in QR code print.",
      curatedRestaurant: "Curated Kitchen Selection",
      curatedBar: "Curated Bar Selection",
      categoryIntroRestaurant: "Seasonal choices prepared with premium ingredients and coastal flair.",
      categoryIntroBar: "Refreshing selections designed for warm afternoons by the sea.",
      categoryNoteRestaurant: "Ask staff for today’s recommendations",
      categoryNoteBar: "Served fresh all day",
    },
    footer: {
      kicker: "Teo Narte",
      title: "Beachside Dining Club",
      desc: "A premium seaside venue combining restaurant, bar, and curated beach relaxation in one destination.",
      visitInfo: "Visit Info",
      openSeason: "Open season: June 1 - September 15",
      dailyService: "Daily service: beach, bar and restaurant",
      location: "Location: Zvernec, Vlore, Albania",
      wifi: "Wifi: 11111111",
      rights: "All rights reserved.",
    },
    gallery: {
      kicker: "Gallery",
      title: "A visual taste of the venue.",
      desc: "Explore food, beach atmosphere, sunset moments and the premium vibe of Teo Narte.",
      close: "Close",
    },
  },
  sq: {
    header: {
      home: "Kryefaqja",
      menu: "Menu",
      gallery: "Galeri",
      location: "Vendndodhja",
      viewMenu: "Shiko Menune",
    },
    common: {
      backHome: "Kthehu Home",
      allMenus: "Te Gjitha Menute",
      openMenu: "Hap Menune",
      viewMenu: "Shiko Menune",
      viewMenus: "Shiko Menute",
      restaurantMenu: "Menu Restoranti",
      barMenu: "Menu Bari",
      callNow: "Telefono",
      privateEventsOnly: "Vetem Evente Private",
      featured: "E Vecuar",
      signature: "Signature",
      popular: "Popullore",
      recommended: "E Sugjeruar",
    },
    home: {
      heroKicker: "Venue Premium Bregdetare | Zvernec",
      heroTitle: "Destinacion bregdetar i rafinuar per ushqim, kokteje, shezllone dhe dite mesdhetare me qetesi.",
      heroDesc:
        "Teo Narte bashkon stilin e plazhit me mikpritjen premium ne nje vend te vetem. Zbuloni restorantin, relaksohuni ne shezllone premium, shijoni barin ne perendim dhe hyni kur te doni.",
      facts: [
        { value: "4.8", label: "Vleresimi Mesatar" },
        { value: "45+", label: "Zgjedhje ne Menu" },
        { value: "Qer-Sht", label: "Sezoni" },
        { value: "Gjithe Diten", label: "Sherbim Plazhi" },
      ],
      venueKicker: "Ambienti",
      venueTitle: "Nga dreka ne breg te detit deri tek koktejet ne perendim.",
      venueDesc:
        "I krijuar per miq qe kerkojne cilesi dhe atmosfere, Teo Narte ofron nje ritem plazhi gjate gjithe dites: kafe ne mengjes, dreke elegante, sherbim shezllonesh pasdite dhe pije ne mbremje.",
      amenities: [
        "Shezllone premium ne breg",
        "Sherbim i shpejte nga tavolina ne plazh",
        "Perzgjedhje koktejlesh dhe vererash",
        "Plazh i pershtatshem per familje",
        "Restorant dhe bar ne nje venue",
        "Parkim i lehte afer",
      ],
      experiencesKicker: "Eksperienca Signature",
      experiencesTitle: "Nje destinacion, kater momente premium.",
      experiences: [
        {
          title: "Restoranti",
          description:
            "Pjata me fryme mesdhetare dhe klasike shqiptare te servuara me prezantim elegant dhe rehati perballe detit.",
        },
        {
          title: "Beach Bar",
          description:
            "Kokteje signature, vere te ftohta dhe muzike perendimi per pasdite te gjata buze ujit.",
        },
        {
          title: "Sherbim Shezllonesh",
          description:
            "Shezllone komode ne breg me sherbim gjate gjithe dites dhe atmosfere relaksuese.",
        },
        {
          title: "Relaks Bregdetar",
          description:
            "Atmosfere e qete per familje, cifte dhe miq qe kerkojne kohe cilesore buze detit.",
        },
      ],
      menuPreview: [
        {
          category: "Signature Kuzhine",
          items: ["Tave Ngjale", "Fresh Catch Grill", "Seafood Risotto", "Wood-Fired Pizza"],
        },
        {
          category: "Signature Bari",
          items: ["Fredo Cappuccino", "House White Wine", "Sunset Spritz", "Fresh Citrus Coolers"],
        },
      ],
      sunbedsKicker: "Plazh & Shezllone",
      sunbedsTitle: "Vendosje premium ne plazh me sherbim te dedikuar.",
      sunbedsDesc: "Zgjidhni setup-in tuaj ne plazh dhe shijoni akses direkt ne sherbim bari dhe restoranti.",
      packages: [
        {
          name: "Sunset Pair",
          details: "2 shezllone premium + cader + uje mireseardhjeje + sherbim prioritar bari",
          tag: "Me e Kerkuara",
        },
        {
          name: "Family Comfort",
          details: "4 shezllone + 2 cadra + opsion snack platter + zone me hije",
          tag: "Per Familje",
        },
        {
          name: "Private Cabana",
          details: "Zone gjysem-private + sherbim i dedikuar + drekim fleksibel pasdite",
          tag: "Luksoze",
        },
      ],
      exploreBeachOptions: "Shiko Opsionet e Plazhit",
      galleryKicker: "Histori Vizuale",
      galleryTitle: "Ndjeni atmosferen para se te vini.",
      openFullGallery: "Hap Galerine",
      socialKicker: "Vleresime",
      socialTitle: "Te besuar nga miq qe kthehen cdo sezon.",
      walkinKicker: "Politika Walk-In",
      walkinTitle: "Nuk mbajme rezervime. Ejani dhe jeni mirepritur.",
      walkinDesc: "Nuk kemi rezervime dhe as disponibilitet live. Na kontaktoni vetem per evente private.",
      phone: "Telefon: +355 67 295 7798",
      location: "Vendndodhja: Zvernec, Vlore, Shqiperi",
      season: "Sezoni i hapur: 1 Qershor - 15 Shtator",
    },
    menu: {
      heroKicker: "Ushqim & Pije",
      heroTitle: "Zgjidh nje menu",
      heroDesc: "Cdo menu ka linkun e vet, ideale per kode QR te ndare.",
      restaurantDesc: "Pjata kryesore, peshk, pasta, sallata dhe specialitete tradicionale.",
      barDesc: "Kafe, pije freskuese, birra, kokteje dhe pije plazhi.",
      restaurantHeroTitle: "Specialitetet e kuzhines dhe pjatat signature.",
      restaurantHeroDesc: "Ky link eshte i dedikuar vetem per menune e restorantit dhe mund te perdoret per QR.",
      barHeroTitle: "Kokteje, kafe dhe pije freskuese plazhi.",
      barHeroDesc: "Ky link eshte i dedikuar vetem per menune e barit dhe mund te perdoret per QR.",
      curatedRestaurant: "Perzgjedhje Kuzhine",
      curatedBar: "Perzgjedhje Bari",
      categoryIntroRestaurant: "Zgjedhje sezonale te pergatitura me perberes premium dhe fryme bregdetare.",
      categoryIntroBar: "Perzgjedhje freskuese te menduara per pasdite te ngrohta ne bregdet.",
      categoryNoteRestaurant: "Pyet stafin per sugjerimet e dites",
      categoryNoteBar: "Sherbehet fresket gjate gjithe dites",
    },
    footer: {
      kicker: "Teo Narte",
      title: "Beachside Dining Club",
      desc: "Venue premium bregdetare qe bashkon restorantin, barin dhe relaksin ne plazh ne nje destinacion.",
      visitInfo: "Informacion",
      openSeason: "Sezoni i hapur: 1 Qershor - 15 Shtator",
      dailyService: "Sherbim i perditshem: plazh, bar dhe restorant",
      location: "Vendndodhja: Zvernec, Vlore, Shqiperi",
      wifi: "Wifi: 11111111",
      rights: "Te gjitha te drejtat e rezervuara.",
    },
    gallery: {
      kicker: "Galeri",
      title: "Nje shije vizuale e venue.",
      desc: "Shikoni ushqimin, atmosferen e plazhit, momentet e perendimit dhe stilin premium te Teo Narte.",
      close: "Mbyll",
    },
  },
  it: {
    header: {
      home: "Home",
      menu: "Menu",
      gallery: "Galleria",
      location: "Posizione",
      viewMenu: "Vedi Menu",
    },
    common: {
      backHome: "Torna Home",
      allMenus: "Tutti i Menu",
      openMenu: "Apri Menu",
      viewMenu: "Vedi Menu",
      viewMenus: "Vedi i Menu",
      restaurantMenu: "Menu Ristorante",
      barMenu: "Menu Bar",
      callNow: "Chiama Ora",
      privateEventsOnly: "Solo Eventi Privati",
      featured: "In Evidenza",
      signature: "Signature",
      popular: "Popolare",
      recommended: "Consigliato",
    },
    home: {
      heroKicker: "Venue Premium sul Mare | Zvernec",
      heroTitle: "Una destinazione elegante sul mare per cucina, cocktail, lettini e giornate mediterranee rilassate.",
      heroDesc:
        "Teo Narte unisce lifestyle da spiaggia e ospitalita premium in un'unica destinazione. Scopri il ristorante, rilassati sui lettini premium, goditi il bar al tramonto e passa quando vuoi.",
      facts: [
        { value: "4.8", label: "Valutazione Media" },
        { value: "45+", label: "Scelte in Menu" },
        { value: "Giu-Set", label: "Stagione" },
        { value: "Tutto il Giorno", label: "Servizio Spiaggia" },
      ],
      venueKicker: "La Venue",
      venueTitle: "Dal pranzo sul mare ai cocktail dell'ora d'oro.",
      venueDesc:
        "Pensato per ospiti che cercano qualita e atmosfera, Teo Narte offre un ritmo completo: caffe al mattino, pranzo elegante, servizio lettini nel pomeriggio e drink serali fronte mare.",
      amenities: [
        "Lettini premium fronte mare",
        "Servizio rapido tavolo-spiaggia",
        "Selezione cocktail e vini",
        "Area spiaggia per famiglie",
        "Ristorante e bar in un'unica venue",
        "Parcheggio comodo nelle vicinanze",
      ],
      experiencesKicker: "Esperienze Signature",
      experiencesTitle: "Una destinazione, quattro momenti premium.",
      experiences: [
        {
          title: "Ristorante",
          description:
            "Piatti ispirati al Mediterraneo e classici albanesi serviti con presentazione raffinata e comfort vista mare.",
        },
        {
          title: "Beach Bar",
          description:
            "Cocktail signature, vini freschi e playlist al tramonto per lunghi pomeriggi sul mare.",
        },
        {
          title: "Servizio Lettini",
          description:
            "Lettini fronte mare comodi con servizio attento per tutta la giornata e atmosfera rilassante.",
        },
        {
          title: "Relax sul Mare",
          description:
            "Atmosfera tranquilla pensata per famiglie, coppie e ospiti che cercano benessere in riva al mare.",
        },
      ],
      menuPreview: [
        {
          category: "Signature Cucina",
          items: ["Tave Ngjale", "Fresh Catch Grill", "Seafood Risotto", "Wood-Fired Pizza"],
        },
        {
          category: "Signature Bar",
          items: ["Fredo Cappuccino", "House White Wine", "Sunset Spritz", "Fresh Citrus Coolers"],
        },
      ],
      sunbedsKicker: "Spiaggia & Lettini",
      sunbedsTitle: "Setup premium in spiaggia con servizio dedicato.",
      sunbedsDesc: "Scegli il tuo setup preferito e goditi accesso diretto al servizio bar e ristorante.",
      packages: [
        {
          name: "Sunset Pair",
          details: "2 lettini premium + ombrellone + acqua di benvenuto + servizio bar prioritario",
          tag: "Più Richiesto",
        },
        {
          name: "Family Comfort",
          details: "4 lettini + 2 ombrelloni + opzione snack platter + area ombreggiata",
          tag: "Family Pick",
        },
        {
          name: "Private Cabana",
          details: "Area semi-privata + servizio dedicato + pranzo flessibile nel pomeriggio",
          tag: "Luxury",
        },
      ],
      exploreBeachOptions: "Scopri Opzioni Spiaggia",
      galleryKicker: "Storia Visiva",
      galleryTitle: "Respira l'atmosfera prima di arrivare.",
      openFullGallery: "Apri Galleria",
      socialKicker: "Recensioni",
      socialTitle: "Scelto da ospiti che tornano ogni stagione.",
      walkinKicker: "Politica Walk-In",
      walkinTitle: "Nessuna prenotazione. Entra e sei il benvenuto.",
      walkinDesc: "Non gestiamo prenotazioni o disponibilita live. Contattaci solo per eventi privati.",
      phone: "Telefono: +355 67 295 7798",
      location: "Posizione: Zvernec, Vlore, Albania",
      season: "Stagione aperta: 1 Giugno - 15 Settembre",
    },
    menu: {
      heroKicker: "Cibo & Drink",
      heroTitle: "Scegli un menu",
      heroDesc: "Ogni menu ha il suo link dedicato, ideale per QR separati in location.",
      restaurantDesc: "Piatti principali, pesce, pasta, insalate e specialita tradizionali.",
      barDesc: "Caffe, soft drink, birre, cocktail e refresh beach drinks.",
      restaurantHeroTitle: "Specialita di cucina e piatti signature.",
      restaurantHeroDesc: "Questo link e dedicato al menu ristorante e puo essere usato direttamente per QR.",
      barHeroTitle: "Cocktail, caffe e drink rinfrescanti da spiaggia.",
      barHeroDesc: "Questo link e dedicato al menu bar e puo essere usato direttamente per QR.",
      curatedRestaurant: "Selezione Cucina",
      curatedBar: "Selezione Bar",
      categoryIntroRestaurant: "Scelte stagionali preparate con ingredienti premium e stile costiero.",
      categoryIntroBar: "Selezioni rinfrescanti pensate per i pomeriggi caldi sul mare.",
      categoryNoteRestaurant: "Chiedi allo staff i consigli del giorno",
      categoryNoteBar: "Servito fresco tutto il giorno",
    },
    footer: {
      kicker: "Teo Narte",
      title: "Beachside Dining Club",
      desc: "Una venue premium sul mare che unisce ristorante, bar e relax in spiaggia in un'unica destinazione.",
      visitInfo: "Info Visita",
      openSeason: "Stagione aperta: 1 Giugno - 15 Settembre",
      dailyService: "Servizio giornaliero: spiaggia, bar e ristorante",
      location: "Posizione: Zvernec, Vlore, Albania",
      wifi: "Wifi: 11111111",
      rights: "Tutti i diritti riservati.",
    },
    gallery: {
      kicker: "Galleria",
      title: "Un assaggio visivo della venue.",
      desc: "Scopri cibo, atmosfera beach, momenti al tramonto e il mood premium di Teo Narte.",
      close: "Chiudi",
    },
  },
} as const;

export function getByPath(obj: unknown, path: string) {
  if (!path) return obj;
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}
