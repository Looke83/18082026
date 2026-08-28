import type { Service } from "./types";
import type { ProcessStep } from "@/components/sections/ProcessTimeLine.astro";

export const sswinSteps: ProcessStep[] = [
{
    number: "01",
    title: "Audyt i projekt",
    description: "Analizujemy układ budynku, ryzyko włamania i dobieramy optymalną centralę oraz rozmieszczenie czujników.",
  },
  {
    number: "02",
    title: "Montaż instalacji",
    description: "Profesjonalnie układamy okablowanie lub montujemy system bezprzewodowy, dbając o estetykę wnętrz.",
  },
  {
    number: "03",
    title: "Konfiguracja i testy",
    description: "Programujemy centrale, testujemy czujki, uruchamiamy aplikację w telefonie i powiadomienia SMS.",
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

export const systemyAlarmoweService: Service =

{
    slug: "systemy-alarmowe",
    order: 1,
    title: "Systemy alarmowe SSWiN",
    shortDescription: "Sygnalizacja włamania i napadu dla firm i osób prywatnych.",
    description:
      "Projektujemy, wdrażamy i serwisujemy profesjonalne systemy sygnalizacji włamania i napadu (SSWiN), które skutecznie chronią obiekty firmowe, magazyny oraz nieruchomości prywatne. Budujemy niezawodne linie obrony – od precyzyjnego rozmieszczenia czujników ruchu i otwarcia, przez nowoczesne centrale alarmowe z modułami powiadamiania GSM, aż po stałą integrację z agencjami ochrony i grupami interwencyjnymi. Zapewniamy pełne poczucie bezpieczeństwa i kontrolę nad obiektem 24/7.",
    category: "security",
    icon: "alarm",
features: [
    "Projekt i profesjonalny montaż czujników: Dobór optymalnego sprzętu oraz instalacja czujników ruchu, kontaktronów, detektorów wibracyjnych, dymu czy zalania dopasowana do specyfiki obiektu.",
    "Integracja z centrum monitorowania i grupami interwencyjnymi: Podłączenie systemu SSWiN do stacji monitorowania Agencji Ochrony z zachowaniem pełnej procedury wezwania patrolu.",
    "Powiadomienia push, SMS i zdalne sterowanie: Konfiguracja nowoczesnych aplikacji mobilnych, które natychmiast informują o zagrożeniu i pozwalają na zdalne zarządzanie systemem.",
    "Projektowanie systemów hybrydowych i bezprzewodowych: Wdrażanie stabilnych instalacji opartych na okablowaniu lub zaawansowanych systemach radiowych tam, gdzie układ budynku tego wymaga.",
    "Serwis gwarancyjny, okresowe przeglądy i pomoc pogwarancyjna: Regularne testy sprawności sprzętu, konserwacja systemów oraz szybka reakcja serwisowa w razie awarii."
  ],
    layoutVariant: "sswin",
  }