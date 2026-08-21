import type { Service } from "./types";

export const sklepyInternetoweService: Service =

{
    slug: "sklepy-internetowe",
    order: 2,
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
          beforePriceText: "od",
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
          beforePriceText: "od",
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
    layoutVariant: "stronysklepywww",
  }