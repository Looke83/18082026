// Single source of truth for all services offered by way-IT.
// Header, MegaMenu, MobileMenu, Footer, ServicesGrid and /uslugi/[slug]
// all read from this file — no hardcoded links anywhere else.

export type ServiceCategory =
  | "it"
  | "web"
  | "security"
  | "fiscal";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  icon: IconName;
  features: string[];
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
  | "shield-check";

export const categoryLabels: Record<ServiceCategory, string> = {
  it: "Obsługa i Infrastruktura IT",
  web: "Strony i Sklepy WWW",
  security: "Bezpieczeństwo",
  fiscal: "Urządzenia i Systemy Fiskalne",
};

export const categoryDescriptions: Record<ServiceCategory, string> = {
  it: "Kompleksowa opieka informatyczna i solidna infrastruktura, na której można polegać.",
  web: "Strony i sklepy internetowe zaprojektowane pod konwersję i wygodne zarządzanie.",
  security: "Monitoring i systemy alarmowe chroniące ludzi i majątek firmy.",
  fiscal: "Urządzenia i systemy fiskalne z pełnym serwisem i wsparciem.",
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
  },

  // --- Kolumna 3: Bezpieczeństwo ---
  {
    slug: "monitoring-cctv",
    title: "Monitoring CCTV",
    shortDescription: "Projektowanie i montaż systemów kamer.",
    description:
      "Projektujemy i montujemy systemy monitoringu wizyjnego CCTV dostosowane do obiektów firmowych i przemysłowych — z podglądem zdalnym i archiwizacją nagrań.",
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
    shortDescription: "Sygnalizacja włamania i napadu dla firm.",
    description:
      "Wdrażamy systemy sygnalizacji włamania i napadu (SSWiN) chroniące obiekty firmowe — z powiadomieniami w czasie rzeczywistym i integracją z monitoringiem grupy interwencyjnej.",
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
