// Single source of truth for all services offered by way-IT.
// Header, MegaMenu, MobileMenu, Footer, ServicesGrid and /uslugi/[slug]
// all read from this file — no hardcoded links anywhere else.

export type ServiceCategory =
  | "it"
  | "web"
  | "security"
  | "fiscal";

export interface ServicePricingPlan {
  name: string;
  badge?: string;
  description?: string;
  price: string;
  period?: string;
  includesPreviousText?: string;
  features: ({ text: string; included: boolean } | string)[];
  highlighted?: boolean;
}

export interface ServicePricing {
  title?: string;
  subtitle?: string;
  plans: ServicePricingPlan[];
}
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  icon: IconName;
  features: string[];
  pricing?: ServicePricing;
}

export type IconName =
  | "server"
  | "network"
  | "integration"
  | "erp"
  | "code"
  | "cart"
  | "wrench"
  | "cctv"
  | "alarm"
  | "pos"
  | "printer"
  | "shield-check"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-right"
  | "arrow-right"
  | "check"
  | "phone"
  | "mail"
  | "mapPin"
  | "quote"
  | "star"
  | "shield2-lock"
  | "clock-4"
  | "map"
  | "stack"
  | "linkedin"
  | "facebook";

export const categoryLabels: Record<ServiceCategory, string> = {
  it: "Obsługa i Infrastruktura IT",
  web: "Strony i Sklepy WWW",
  security: "Bezpieczeństwo",
  fiscal: "Urządzenia i Systemy Fiskalne",
};

export const categoryDescriptions: Record<ServiceCategory, string> = {
  it: "Kompleksowa opieka informatyczna i sprzętowa, na której można polegać.",
  web: "Strony i sklepy internetowe zaprojektowane pod konwersję i wygodne zarządzanie.",
  security: "Monitoring i systemy alarmowe chroniące ludzi i majątek firmy.",
  fiscal: "Urządzenia fiskalne i systemy POS z pełnym serwisem i wsparciem.",
};

export const categoryIcons: Record<ServiceCategory, IconName> = {
  it: "server",
  web: "code",
  security: "cctv",
  fiscal: "pos",
};

export const services: Service[] = [
  // --- Kolumna 1: Obsługa i Infrastruktura IT ---
  {
    slug: "obsluga-it",
    title: "Obsługa informatyczna",
    shortDescription: "Bieżące wsparcie IT dla firm — zdalnie i na miejscu.",
    description:
      "Zapewniamy stałą opiekę informatyczną dla firm każdej wielkości — od pojedynczych stanowisk po całe biura. Reagujemy szybko, diagnozujemy problemy zanim staną się przestojem, i dbamy o to, by Twoje systemy działały bez zakłóceń każdego dnia.",
    category: "it",
    icon: "server",
    features: [
      "Zdalne i stacjonarne wsparcie techniczne",
      "Monitoring stanu sprzętu i sieci 24/7",
      "Umowy SLA z gwarantowanym czasem reakcji",
      "Zarządzanie licencjami i aktualizacjami",
    ],
  },
  {
    slug: "infrastruktura-it",
    title: "Infrastruktura IT",
    shortDescription: "Projektowanie i wdrażanie sieci, serwerów i backupu.",
    description:
      "Projektujemy, wdrażamy i modernizujemy infrastrukturę IT — sieci lokalne, serwery, wirtualizację i systemy backupu. Budujemy fundament, na którym Twoja firma może bezpiecznie rosnąć.",
    category: "it",
    icon: "network",
    features: [
      "Projektowanie i okablowanie sieci LAN/WAN",
      "Serwery fizyczne i wirtualizacja",
      "Strategie backupu i odzyskiwania danych",
      "Audyty bezpieczeństwa infrastruktury",
    ],
  },
  {
    slug: "programy-sprzedazowe-integracje",
    title: "Programy sprzedażowe i integracje",
    shortDescription: "Wdrożenia systemów sprzedażowych i integracje API.",
    description:
      "Wdrażamy i integrujemy systemy sprzedażowe z innymi narzędziami wykorzystywanymi w firmie — magazynem, księgowością, e-commerce. Automatyzujemy przepływ danych, żeby ograniczyć błędy i przyspieszyć pracę zespołu.",
    category: "it",
    icon: "integration",
    features: [
      "Wdrożenia systemów sprzedażowo-magazynowych",
      "Integracje API między systemami",
      "Automatyzacja procesów sprzedaży",
      "Szkolenia i wsparcie po wdrożeniu",
    ],
  },
  {
    slug: "erp-berbreis",
    title: "System ERP Berbreis",
    shortDescription: "Wdrożenie i wsparcie autorskiego systemu ERP.",
    description:
      "Wdrażamy system ERP Berbreis dostosowany do specyfiki Twojej branży — od zarządzania magazynem po pełną kontrolę procesów sprzedażowych i księgowych w jednym miejscu.",
    category: "it",
    icon: "erp",
    features: [
      "Wdrożenie dopasowane do branży klienta",
      "Zarządzanie magazynem i zamówieniami",
      "Raportowanie i analiza danych sprzedażowych",
      "Stałe wsparcie techniczne i rozwój systemu",
    ],
  },

  // --- Kolumna 2: Strony i Sklepy WWW ---
  {
    slug: "strony-www",
    title: "Projektowanie stron WWW",
    shortDescription: "Strony firmowe zaprojektowane pod cel biznesowy.",
    description:
      "Projektujemy i budujemy strony internetowe, które nie tylko wyglądają profesjonalnie, ale realnie wspierają cele biznesowe — generują zapytania, budują wiarygodność i działają szybko na każdym urządzeniu.",
    category: "web",
    icon: "code",
    features: [
      "Projekt UX/UI dopasowany do marki",
      "Strony błyskawiczne i responsywne",
      "Optymalizacja pod SEO od pierwszego dnia",
      "Panel do samodzielnej edycji treści",
    ],
    // DEDYKOWANY CENNIK DLA TEJ USŁUGI
    pricing: {
      title: "Pakiety wdrożeniowe stron WWW",
      subtitle: "Przejrzyste warunki, bez ukrytych kosztów i powracających abonamentów.",
      plans: [
        {
          name: "Start",
          price: "2000",
          description: "Idealna wizytówka dla małych firm i freelancerów.",
          features: [
            "Strona typu One-Page",
            "Szybki czas wdrożenia",
            "Formularz kontaktowy + mapa",
            "Wersja RWD (Różne ekrany)",
            "System Wordpress do edycji",
          ],
        },
        {
          name: "Biznes",
          badge: "Polecany",
          highlighted: true,
          price: "3500",
          description: "Rozbudowana strona firmowa nakierowana na zdobywanie klientów.",
          includesPreviousText: "Wszystko co w pakiecie Start, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Do 8 podstron (O nas, Oferta, Kontakt itp.)",
            "Dedykowany projekt graficzny",
            "System CMS WordPress + Bricks Builder",
            "Astro Framework - jeżeli nie potrzeba CMS",
            "Optymalizacja szybkości (Core Web Vitals)",
            "Podstawowa analityka GA4",
          ],
        },
        {
          name: "Pro",
          price: "Wycena",
          period: "indywidualna",
          description: "Dedykowane portale i zaawansowane serwisy sieciowe.",
          includesPreviousText: "Wszystko co w pakiecie Pro, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Nielimitowana liczba podstron",
            "Integracje API / CRM",
            "Wielojęzyczność (i18n)",
            "Zaawansowana animacja i efekty Canvas",
            "Szkolenie zespołu z obsługi",
          ],
          
        },
      ],
    },
  },
  {
    slug: "sklepy-internetowe",
    title: "Sklepy internetowe",
    shortDescription: "E-commerce zaprojektowany pod konwersję i skalę.",
    description:
      "Budujemy sklepy internetowe gotowe do sprzedaży — z przemyślaną ścieżką zakupową, integracją płatności i wysyłek oraz architekturą, która skaluje się razem z Twoim biznesem.",
    category: "web",
    icon: "cart",
    features: [
      "Integracje z płatnościami i kurierami",
      "Zarządzanie katalogiem produktów",
      "Optymalizacja ścieżki zakupowej",
      "Wsparcie techniczne po uruchomieniu",
    ],
    pricing: {
      title: "Pakiety wdrożeniowe e-commerce",
      subtitle: "Przejrzyste warunki, bez ukrytych kosztów i powracających abonamentów.",
      plans: [
        {
          name: "Start e-commerce",
          price: "3000",
          description: "Podstawowy sklep internetowy.",
          features: [
            "System Woocommerce",
            "Szybki czas wdrożenia",
            "Formularz kontaktowy",
            "Wersja RWD (Różne ekrany)",
            "Oparty na szablonie graficznym",
            "Integracja z płatnościami i kurierami",
            "Do 4 kategorii produktów / 30 produktów - z możliwością rozbudowy",
          ],
        },
        {
          name: "Biznes e-commerce",
          badge: "Polecany",
          highlighted: true,
          price: "6000",
          description: "Rozbudowany sklep internetowy przygotowany do sprzedaży.",
          includesPreviousText: "Wszystko co w pakiecie Start e-commerce, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Do 10 kategorii produktów / 100 produktów - z możliwością rozbudowy",
            "Dedykowany projekt graficzny",
            "Podłączenie GA4 i Consent Mode",
            "Optymalizacja szybkości (Core Web Vitals)",
          ],
        },
        {
          name: "Pro",
          price: "Wycena",
          period: "indywidualna",
          description: "Dedykowane sklepy internetowe dostosowane do Twoich potrzeb.",
          includesPreviousText: "Wszystko co w pakiecie Pro e-commerce, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Nielimitowana liczba kategorii i produktów",
            "Integracje API / CRM",
            "Wielojęzyczność (i18n)",
            "Zaawansowana animacja i efekty Canvas",
            "Szkolenie zespołu z obsługi",
          ],
          
        },
      ],
    },
  },
  {
    slug: "opieka-www",
    title: "Opieka i utrzymanie WWW / E-commerce",
    shortDescription: "Aktualizacje, monitoring i wsparcie dla stron i sklepów.",
    description:
      "Zapewniamy stałą opiekę nad stronami i sklepami internetowymi — aktualizacje, monitoring bezpieczeństwa, backupy i szybkie wsparcie w razie problemów technicznych.",
    category: "web",
    icon: "wrench",
    features: [
      "Regularne aktualizacje i backupy",
      "Monitoring dostępności i bezpieczeństwa",
      "Drobne zmiany treści i funkcjonalności",
      "Szybki kontakt w razie awarii",
    ],
    pricing: {
      title: "Obsługa Wordpress",
      subtitle: "Przejrzyste warunki, bez ukrytych kosztów i powracających abonamentów.",
      plans: [
        {
          name: "Start",
          price: "150",
          period: "zł netto / mies.",
          description: "Podstawowa opieka nad stroną.",
          features: [
            "Aktualizacja Wordpress 2x w miesiącu",
            "Backup 1x w miesiącu",
            "Skan antywirusowy 1x w miesiącu",         
          ],
        },
        {
          name: "Biznes",
          badge: "Polecany",
          highlighted: true,
          price: "450",
          description: "Rozbudowana opieka nad stroną.",
          //includesPreviousText: "Wszystko co w pakiecie Start, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Aktualizacja Wordpress 4x w miesiącu",
            "Backup 4x w miesiącu",
            "Skan antywirusowy 4x w miesiącu",
            "Monitoring dostępności strony 24/7",
            "1h prac rozwojowych na stronie",
            "Konfigracja i monitorowanie Litespeed Cache - jeżeli serwer obsługuje",
          ],
        },
        {
          name: "Pro",
          price: "Wycena",
          period: "indywidualna",
          description: "Dedykowane portale i zaawansowane serwisy sieciowe.",
          //includesPreviousText: "Wszystko co w pakiecie Pro e-commerce, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Dopasowany pakiet usług i oprogramowania na podstawie indywidualnych ustaleń i potrzeb klienta",
          ],
          
        },
      ],
    },
  },

  // --- Kolumna 3: Bezpieczeństwo ---
  {
    slug: "monitoring-cctv",
    title: "Monitoring CCTV",
    shortDescription: "Projektowanie i montaż systemów kamer.",
    description:
      "Projektujemy i montujemy systemy monitoringu wizyjnego CCTV dostosowane do obiektów firmowych, przemysłowych, a także domów jedno i wielorodzinnych — z podglądem zdalnym i archiwizacją nagrań.",
    category: "security",
    icon: "cctv",
    features: [
      "Projekt rozmieszczenia kamer",
      "Montaż i konfiguracja rejestratorów",
      "Zdalny podgląd z telefonu i komputera",
      "Serwis i przeglądy okresowe",
    ],
  },
  {
    slug: "systemy-alarmowe",
    title: "Systemy alarmowe SSWiN",
    shortDescription: "Sygnalizacja włamania i napadu dla firm i osób prywatnych.",
    description:
      "Wdrażamy systemy sygnalizacji włamania i napadu (SSWiN) chroniące obiekty firmowe i prywatne — z powiadomieniami w czasie rzeczywistym i integracją z monitoringiem grupy interwencyjnej.",
    category: "security",
    icon: "alarm",
    features: [
      "Projekt i montaż czujników",
      "Integracja z centrum monitorowania",
      "Powiadomienia push i SMS",
      "Serwis gwarancyjny i pogwarancyjny",
    ],
  },

  // --- Kolumna 4: Urządzenia i Systemy Fiskalne ---
  {
    slug: "systemy-pos",
    title: "Systemy kasowe POS",
    shortDescription: "Wdrożenia stanowisk kasowych dla handlu i gastronomii.",
    description:
      "Dostarczamy i wdrażamy systemy kasowe POS dla handlu detalicznego i gastronomii — od doboru sprzętu po konfigurację oprogramowania i integrację z magazynem.",
    category: "fiscal",
    icon: "pos",
    features: [
      "Dobór sprzętu POS pod branżę",
      "Konfiguracja i integracja z magazynem",
      "Szkolenie personelu",
      "Serwis gwarancyjny i pogwarancyjny",
    ],
  },
  {
    slug: "urzadzenia-fiskalne",
    title: "Kasy i drukarki fiskalne",
    shortDescription: "Sprzedaż i fiskalizacja urządzeń.",
    description:
      "Prowadzimy sprzedaż, fiskalizację i konfigurację kas oraz drukarek fiskalnych zgodnie z aktualnymi wymogami prawnymi — z pełnym wsparciem formalnym i technicznym.",
    category: "fiscal",
    icon: "printer",
    features: [
      "Sprzedaż kas i drukarek fiskalnych",
      "Fiskalizacja i zgłoszenia do urzędu skarbowego",
      "Konfiguracja stawek i towarów",
      "Wsparcie przy zmianach przepisów",
    ],
  },
  {
    slug: "opieka-serwisowa-fiskalna",
    title: "Opieka serwisowa i przeglądy",
    shortDescription: "Obowiązkowe przeglądy techniczne urządzeń fiskalnych.",
    description:
      "Realizujemy obowiązkowe przeglądy techniczne kas i drukarek fiskalnych oraz zapewniamy szybki serwis w razie awarii, tak by Twoja sprzedaż nigdy nie stała w miejscu.",
    category: "fiscal",
    icon: "shield-check",
    features: [
      "Przeglądy zgodne z wymogami ustawowymi",
      "Szybka reakcja serwisowa",
      "Naprawy i wymiana podzespołów",
      "Przypomnienia o terminach przeglądów",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export const serviceCategories: ServiceCategory[] = ["it", "web", "security", "fiscal"];
