import type { Service } from "./types";

export const opiekaWWWService: Service =

{
    slug: "opieka-www",
    title: "Opieka i utrzymanie WWW / E-commerce",
    shortDescription: "Aktualizacje, monitoring i wsparcie dla stron i sklepów.",
    description:
      "Zapewniamy kompleksową, stałą opiekę techniczną nad stronami internetowymi oraz sklepami e-commerce, dając Ci pełny spokój i pewność, że Twój biznes w sieci działa bez przerw. Przejmujemy na siebie całe zaplecze techniczne – od regularnych aktualizacji systemów i wtyczek, przez dbanie o najwyższy poziom bezpieczeństwa i kopie zapasowe, aż po szybkie reagowanie w sytuacjach awaryjnych oraz bieżące wsparcie programistyczne. Dzięki temu możesz skupić się w 100% na rozwoju swojej firmy, wiedząc, że Twoja strona jest w bezpiecznych rękach.",
    category: "web",
    icon: "wrench",
    features: [
      "Regularne aktualizacje systemów i wtyczek: Bieżące, bezpieczne aktualizacje silników stron (np. WordPress), modułów, szablonów oraz komponentów, eliminujące luki w zabezpieczeniach.",
      "Monitoring dostępności i bezpieczeństwa (Uptime & Malware): Stałe czuwanie nad tym, czy strona działa, skanowanie w poszukiwaniu złośliwego oprogramowania oraz ochrona przed atakami (np. brute-force, boty).",
      "Bezpieczne kopie zapasowe (Backupy): Regularne tworzenie kopii zapasowych całego serwisu oraz bazy danych i przechowywanie ich na zewnętrznych serwerach, z gwarancją szybkiego przywrócenia danych w razie potrzeby.",
      "Bieżące wsparcie programistyczne i zmiany: Pakiet roboczogodzin w miesiącu przeznaczony na drobne modyfikacje treści, układu podstron, dodawanie nowych funkcji czy pomoc techniczną.",
      "Priorytetowy czas reakcji w razie awarii: Szybka diagnoza i natychmiastowe usuwanie nagłych błędów technicznych, przerw w działaniu serwisu czy problemów z pocztą lub sklepem.",
    ],
    pricing: {
      title: "Opieka Wordpress",
      subtitle: "Przejrzyste warunki, bez ukrytych kosztów.",
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
          features: [
            "Dopasowany pakiet usług i oprogramowania na podstawie indywidualnych ustaleń i potrzeb klienta",
          ],
        },
      ],
    },
  }