import type { Service } from "./types";

export const sklepyInternetoweService: Service =

{
    slug: "sklepy-internetowe",
    order: 2,
    title: "Sklepy internetowe",
    shortDescription: "E-commerce zaprojektowany pod konwersję i skalę.",
    description:
      "Tworzymy nowoczesne i wydajne sklepy internetowe, które nie tylko estetycznie prezentują ofertę, ale przede wszystkim są zaprojektowane tak, aby maksymalnie zwiększać sprzedaż. Budujemy stabilne platformy e-commerce z intuicyjną ścieżką zakupową (Checkout UX), bezproblemowo integrujemy systemy płatności elektronicznych, firmy kurierskie oraz hurtownie czy systemy ERP. Otrzymujesz rozwiązanie skrojone pod Twój biznes, które łatwo się skaluje i pozwala na wygodne zarządzanie produktami, zamówieniami i marketingiem.",
    category: "web",
    icon: "cart",
    features: [
      "Strategia e-commerce i UX/UI: Projektowanie unikalnego wyglądu sklepu skupionego na konwersji, wygodnej nawigacji po kategoriach oraz czytelnych kartach produktów, które budują zaufanie klientów.",
      "Integracje z płatnościami i kurierami: Podpięcie najpopularniejszych i najwygodniejszych metod płatności (Blik, szybkie przelewy, karty, odroczone płatności) oraz automatycznych modułów wysyłek i paczkomatów (InPost, DPD, DHL itp.).",
      "Zarządzanie katalogiem i magazynem: Konfiguracja struktury produktów (w tym wariantowych i cyfrowych), stanów magazynowych oraz narzędzi ułatwiających masową edycję asortymentu i cen.",
      "Optymalizacja pod konwersję i SEO: Dbanie o szybki czas ładowania sklepu, optymalizację techniczną pod kątem wyszukiwarek (SEO) oraz eliminowanie punktów zapalnych w koszyku, które mogłyby prowadzić do porzucania zakupów.",
      "Wdrożenie, testy i opieka powdrożeniowa: Kompleksowa konfiguracja platformy, testy ścieżek zakupowych, podpięcie analityki (Google Analytics / e-commerce tracking) oraz stabilne wsparcie techniczne po starcie sklepu.",
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