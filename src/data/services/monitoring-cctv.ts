import type { Service } from "./types";
import type { ProcessStep } from "@/components/sections/ProcessTimeLine.astro";

export const monitoringSteps: ProcessStep[] = [
{
    number: "01",
    title: "Audyt i projekt",
    description: "Analizujemy układ budynku, ryzyko włamania i naruszenia przestrzeni chronionej i dobieramy optymalny zestaw kamer i rejestratorów.",
  },
  {
    number: "02",
    title: "Montaż instalacji",
    description: "Profesjonalnie układamy okablowanie lub montujemy system bezprzewodowy, dbając o estetykę wnętrz.",
  },
  {
    number: "03",
    title: "Konfiguracja i testy",
    description: "Programujemy rejestratory, testujemy kamery, uruchamiamy aplikację w telefonie i powiadomienia SMS.",
  },
  {
    number: "04",
    title: "Integracja i ochrona",
    description: "Podłączamy system do agencji ochrony (jeśli jest taka potrzeba), szkolimy Cię i przekazujemy gotowy obiekt.",
  },
    {
    number: "05",
    title: "Opieka i serwis",
    description: "Zapewniamy przeglądy okresowe, konserwację i szybką reakcję serwisową w razie awarii.",
  },
];


export const monitoringCCTVService: Service =

{
    slug: "monitoring-cctv",
    title: "Monitoring CCTV",
    shortDescription: "Projektowanie i montaż systemów kamer.",
    description:
      "Projektujemy, wdrażamy i serwisujemy profesjonalne systemy telewizji przemysłowej (CCTV / IP), które zapewniają krystalicznie czysty obraz i pełną kontrolę nad obiektem 24/7. Dostarczamy nowoczesne rozwiązania dopasowane do specyfiki obiektów firmowych, przemysłowych, magazynów, a także domów jedno- i wielorodzinnych. Stawiamy na zaawansowaną optykę, wysoką rozdzielczość obrazu, bezpieczne przechowywanie archiwum nagrań oraz niezawodny, zdalny podgląd z dowolnego miejsca na świecie.",
    category: "security",
    icon: "cctv",
    features: [
      "Projekt rozmieszczenia kamer i analiza stref: Precyzyjny dobór optyki, kątów widzenia oraz parametrów kamer (rozdzielczość HD/4K i wyższe, tryby nocne IR/ColorVu) pod kątem eliminacji martwych stref i specyfiki oświetleniowej obiektu.",
      "Montaż, okablowanie i konfiguracja rejestratorów: Profesjonalna instalacja infrastruktury kablowej, montaż urządzeń rejestrujących (NVR) z dedykowanymi dyskami do pracy ciągłej oraz konfiguracja bezpiecznej sieci zasilania PoE.",
      "Zdalny podgląd z telefonu i komputera: Konfiguracja aplikacji mobilnych oraz oprogramowania komputerowego, umożliwiająca płynny, szyfrowany podgląd obrazu na żywo oraz wygodne przeglądanie archiwum z poziomu smartfona.",
      "Inteligentna analityka obrazu i detekcja: Wdrażanie nowoczesnych funkcji AI, takich jak wykrywanie ruchu, detekcja osób i pojazdów, przekroczenie wirtualnej linii czy natychmiastowe powiadomienia o zagrożeniu.",
      "Automatyczna kontrola wjazdu (ANPR / Tablice rejestracyjne): Integracja kamer z systemami odczytu tablic rejestracyjnych, automatyczne sterowanie szlabanami i bramami oraz tworzenie białych/czarnych list pojazdów.",
      "Serwis, konserwacja i przeglądy okresowe: Regularna opieka techniczna obejmująca czyszczenie obiektywów, testy nośników danych, aktualizacje oprogramowania oraz szybką pomoc w przypadku awarii.",
    ],
    layoutVariant: "monitoring",
  }