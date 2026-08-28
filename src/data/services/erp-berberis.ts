import type { Service } from "./types";
import type { ProcessStep } from "@/components/sections/ProcessTimeLine.astro";

export const berberisSteps: ProcessStep[] = [
  {
    number: "01",
    badge: "Etap 1",
    title: "Analiza potrzeb i procesów",
    description: "Mapujemy obieg dokumentów i dobieramy moduły systemu Berberis."
  },
  {
    number: "02",
    badge: "Etap 2",
    title: "Instalacja i konfiguracja",
    description: "Przygotowujemy środowisko bazodanowe PostgreSQL i konfigurujemy uprawnienia."
  },
  {
    number: "03",
    badge: "Etap 3",
    title: "Migracja danych i integracje",
    description: "Przenosimy bazy kontrahentów oraz konfigurujemy połączenia z KSeF."
  },
  {
    number: "04",
    badge: "Etap 4",
    title: "Dopasowanie procesów i szablonów",
    description: "Konfigurujemy procesy sprzedażowe, magazynowe i księgowe oraz szablony dokumentów."
  },
  {
    number: "05",
    badge: "Etap 5",
    title: "Szkolenia stanowiskowe",
    description: "Przeprowadzamy warsztaty dla pracowników z obsługi modułów."
  },
  {
    number: "06",
    badge: "Etap 6",
    title: "Start i opieka serwisowa",
    description: "Uruchamiamy system produkcyjnie i zapewniamy stałe wsparcie techniczne."
  }
];

export const erpBerberisService: Service = {
  slug: "erp-berberis",
  order: 3,
  title: "System ERP Berberis",
  shortDescription: "Zintegrowane zarządzanie sprzedażą, magazynem, CRM i finansami w jednym systemie ERP.",
  description:
    "Wdrażamy i konfigurujemy zaawansowany system ERP Berberis, który centralizuje i optymalizuje zarządzanie całą firmą w jednym miejscu. Łączymy gospodarkę magazynową (WMS), sprzedaż, finanse, logistykę oraz produkcję w jeden spójny ekosystem dopasowany do specyfiki Twojej branży. Pomagamy wyeliminować \"wąskie gardła\", automatyzujemy codzienne procesy i dajemy zarządowi rzetelne dane analityczne w czasie rzeczywistym.",
  category: "it",
  icon: "erp",
  features: [
    "Analiza przedwdrożeniowa i dobór modułów: Dokładny audyt procesów biznesowych w firmie, identyfikacja potrzeb i dobór optymalnego zestawu modułów systemowych (sprzedaż, magazyn, finanse, serwis, produkcja).",
    "Instalacja, konfiguracja i migracja danych: Bezpieczne wdrożenie systemu na serwerach (lokalnych lub w chmurze), konfiguracja polityk dostępu, struktury firmy oraz profesjonalne przeniesienie bazy danych ze starych programów.",
    "Integracja z KSeF, bankowością i e-commerce: Pełna integracja z Krajowym Systemem e-Faktur (KSeF), automatyczna wymiana danych z systemami bankowymi oraz dwukierunkowa synchronizacja ze sklepami internetowymi i platformami B2B.",
    "Szkolenia stanowiskowe dla pracowników: Praktyczne warsztaty i szkolenia z obsługi systemu dopasowane do konkretnych ról w firmie (magazynierzy, handlowcy, księgowość, kadra zarządzająca).",
    "Stałe wsparcie techniczne i obsługa serwisowa: Opieka powdrożeniowa, szybka pomoc helpdesku, aktualizacje systemu zgodnie z polskimi przepisami prawa oraz rozwój oprogramowania wraz z rosnącymi potrzebami biznesu.",
  ],
  layoutVariant: "Berberis",
};