import type { Service } from "./types";

export const opiekaWWWService: Service =

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