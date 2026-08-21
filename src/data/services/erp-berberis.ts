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
    "Wdrażamy system ERP Berberis dostosowany do specyfiki Twojej branży — od zarządzania magazynem po pełną kontrolę procesów sprzedażowych i księgowych w jednym miejscu.",
  category: "it",
  icon: "erp",
  features: [
    "Analiza przedwdrożeniowa i dobór modułów",
    "Instalacja, konfiguracja i migracja danych",
    "Integracja z KSeF, bankowością i e-commerce",
    "Szkolenia stanowiskowe dla pracowników",
    "Stałe wsparcie techniczne i obsługa serwisowa",
  ],
  layoutVariant: "Berberis",
};