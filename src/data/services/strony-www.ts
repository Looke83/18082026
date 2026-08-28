import type { Service } from "./types";

export const stronyWWWService: Service =
{
    slug: "strony-www",
    order: 1,
    title: "Projektowanie stron WWW",
    shortDescription: "Strony firmowe zaprojektowane pod cel biznesowy.",
    description:
      "Projektujemy i budujemy nowoczesne, unikalne strony internetowe dla firm, które łączą bezkompromisowy design z najwyższą wydajnością technologiczną. Tworzymy serwisy, które nie tylko świetnie wyglądają na każdym urządzeniu, ale przede wszystkim realnie wspierają Twoje cele biznesowe – budują wizerunek eksperta, przyciągają klientów i skutecznie generują zapytania ofertowe. Stawiamy na czysty kod, błyskawiczne ładowanie i pełną optymalizację pod kątem wyszukiwarki Google.",
    category: "web",
    icon: "code",
    features: [
      "Strategia, UX/UI i projekt graficzny: Indywidualny projekt wizualny dopasowany do identyfikacji wizualnej Twojej marki, uwzględniający zasady użyteczności (UX) oraz ścieżkę klienta (CRO) prowadzącą do konwersji.",
      "Wydajne i responsywne wdrożenie (Mobile First): Kodowanie strony w oparciu o najnowsze technologie webowe (np. Astro, nowoczesne szablony WordPress), gwarantujące perfekcyjne działanie na smartfonach, tabletach i komputerach.",
      "Optymalizacja pod SEO od pierwszego dnia: Dbanie o strukturę nagłówków (H1-H3), poprawność semantyczną kodu, optymalizację grafik i szybkość ładowania, co zapewnia doskonały start w wynikach wyszukiwania.",
      "Intuicyjny panel do samodzielnej edycji treści (CMS): Wdrożenie wygodnego i prostego w obsłudze systemu zarządzania treścią, dzięki któremu bez problemu zmienisz teksty, dodasz wpis na bloga czy nową realizację.",
      "Zabezpieczenia, SSL i wdrożenie na serwer: Konfiguracja bezpiecznego protokołu szyfrowania danych (SSL), podpięcie domeny, integracja z narzędziami analitycznymi (Google Analytics) oraz uruchomienie strony na stabilnym hostingu.",
    ],
    // DEDYKOWANY CENNIK DLA TEJ USŁUGI
    pricing: {
      title: "Pakiety wdrożeniowe stron WWW",
      subtitle: "Przejrzyste warunki, bez ukrytych kosztów i powracających abonamentów.",
      plans: [
        {
          name: "Start",
          beforePriceText: "od",
          price: "2000",
          description: "Idealna wizytówka dla małych firm i freelancerów.",
          features: [
            "Strona typu One-Page",
            "Szybki czas wdrożenia",
            "Formularz kontaktowy + mapa",
            "Wersja RWD (Różne ekrany)",
            "System Wordpress do edycji",
          ],
        },
        {
          name: "Biznes",
          badge: "Polecany",
          highlighted: true,
          beforePriceText: "od",
          price: "3500",
          description: "Rozbudowana strona firmowa nakierowana na zdobywanie klientów.",
          includesPreviousText: "Wszystko co w pakiecie Start, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Do 8 podstron (O nas, Oferta, Kontakt itp.)",
            "Dedykowany projekt graficzny",
            "System CMS WordPress + Bricks Builder",
            "Astro Framework - jeżeli nie potrzeba CMS",
            "Optymalizacja szybkości (Core Web Vitals)",
            "Podstawowa analityka GA4",
          ],
        },
        {
          name: "Pro",
          price: "Wycena",
          period: "indywidualna",
          description: "Dedykowane portale i zaawansowane serwisy sieciowe.",
          includesPreviousText: "Wszystko co w pakiecie Pro, plus:", // <--- OTO NAGŁÓWEK
          features: [
            "Nielimitowana liczba podstron",
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