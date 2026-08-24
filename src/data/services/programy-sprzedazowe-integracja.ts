import type { Service } from "./types";
import type { ProcessStep } from "@/components/sections/ProcessTimeLine.astro";

export const programySprzedazoweIntegracjaSteps: ProcessStep[] = [
  {
    number: "01",
    badge: "Etap 1",
    title: "Analiza potrzeb i procesów",
    description: "Badamy Twój obecny obieg dokumentów, używane programy i wąskie gardła. Dobieramy optymalne rozwiązanie do skali biznesu."
  },
  {
    number: "02",
    badge: "Etap 2",
    title: "projekt i konfiguracja",
    description: "Przygotowujemy środowisko testowe, mapujemy kartoteki towarowe, konfigurujemy magazyny oraz połączenia API ze sklepem czy hurtowniami."
  },
  {
    number: "03",
    badge: "Etap 3",
    title: "Migracja danych i integracje",
    description: "Przenosimy bazy kontrahentów i dane magazynowe oraz konfigurujemy połączenia z KSeF."
  },
  {
    number: "04",
    badge: "Etap 4",
    title: "Wdrożenie i testy",
    description: "Uruchamiamy system produkcyjny, podłączamy urządzenia fiskalne i przeprowadzamy rzetelne testy synchronizacji danych oraz zamówień."
  },
  {
    number: "05",
    badge: "Etap 5",
    title: "Szkolenia stanowiskowe",
    description: "Przeprowadzamy warsztaty dla pracowników z obsługi oprogramowania."
  },
  {
    number: "06",
    badge: "Etap 6",
    title: "Opieka serwisowa",
    description: "Zapewniamy stałe wsparcie techniczne i serwis."
  }
];

export const programySprzedazoweIntegracjaService: Service =

{
    slug: "programy-sprzedazowe-integracje",
    title: "Programy sprzedażowe i integracje",
    shortDescription: "Wdrożenia systemów sprzedażowych i integracje API.",
    description:
      "Wdrażamy i integrujemy systemy sprzedażowe z innymi narzędziami wykorzystywanymi w firmie — magazynem, księgowością, e-commerce. Automatyzujemy przepływ danych, żeby ograniczyć błędy i przyspieszyć pracę zespołu.",
    category: "it",
    icon: "integration",
    features: [
    "Wdrożenia i konfiguracja systemów (ERP / Magazyn / POS): Instalacja i dostosowanie oprogramowania sprzedażowo-magazynowego do specyfiki i potrzeb branżowych Twojej firmy.",
    "Integracje e-commerce i marketplace: Łączenie sklepu internetowego (WooCommerce, PrestaShop, Shopify) oraz platform typu Allegro bezpośrednio z magazynem.",
    "Automatyzacja procesów i integracje API: Synchronizacja stanów magazynowych, automatyczne przesyłanie zamówień oraz obsługa plików XML od zewnętrznych hurtowni.",
    "Wsparcie dla urządzeń fiskalnych: Podłączanie i konfiguracja kas, drukarek fiskalnych oraz terminali płatniczych sprawnie współpracujących z systemem.",
    "Szkolenia zespołu i opieka powdrożeniowa: Praktyczne szkolenia z obsługi programu dla pracowników oraz stałe, niezawodne wsparcie techniczne po uruchomieniu."
    ],
    layoutVariant: "programy",
  }