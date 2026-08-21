import type { Service } from "./types";

export const stronyWWWService: Service =
{
    slug: "strony-www",
    title: "Projektowanie stron WWW",
    shortDescription: "Strony firmowe zaprojektowane pod cel biznesowy.",
    description:
      "Projektujemy i budujemy strony internetowe, które nie tylko wyglądają profesjonalnie, ale realnie wspierają cele biznesowe — generują zapytania, budują wiarygodność i działają szybko na każdym urządzeniu.",
    category: "web",
    icon: "code",
    features: [
      "Projekt UX/UI dopasowany do marki",
      "Strony błyskawiczne i responsywne",
      "Optymalizacja pod SEO od pierwszego dnia",
      "Panel do samodzielnej edycji treści",
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
  }