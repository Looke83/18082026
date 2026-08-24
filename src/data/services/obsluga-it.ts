import type { Service } from "./types";

export const obslugaITService: Service =

{
    slug: "obsluga-it",
    order: 1,
    title: "Opieka IT dla firm",
    shortDescription: "Bieżące wsparcie IT dla firm — zdalnie i na miejscu.",
    description:
      "Zapewniamy stabilne, bezpieczne i nieprzerwane działanie infrastruktury IT w Twojej firmie. Przejmujemy pełną odpowiedzialność za technologiczne zaplecze – od pojedynczych stanowisk roboczych i sieci lokalnych, po serwery, bezpieczeństwo danych i systemy chmurowe. Dzięki proaktywnemu monitororowaniu reagujemy na potencjalne anomalie, zanim doprowadzą one do kosztownych przestojów w pracy.",
    category: "it",
    icon: "server",
    features: [
      "Wsparcie techniczne (Helpdesk): Pomoc zdalna oraz wizyty serwisowe na stanowisku pracy klienta, rozwiązywanie bieżących problemów użytkowników sprzętu i oprogramowania.",
      "Proaktywny monitoring 24/7: Stały nadzór nad krytycznymi elementami infrastruktury (serwery, łącza internetowe, urządzenia sieciowe, stacje robocze).",
      "Gwarantowane umowy SLA: Precyzyjnie określone czasy reakcji i przystąpienia do naprawy w przypadku awarii (odpowiednio do wybranego pakietu).",
      "Zarządzanie bezpieczeństwem i kopiami zapasowymi: Wdrażanie systemów backupu (lokalnego i chmurowego), testowanie procedur odzyskiwania danych oraz dbałość o aktualne zabezpieczenia antywirusowe i firewalle.",
      "Inwentaryzacja i doradztwo technologiczne: Nadzór nad licencjami oprogramowania, planowanie rozwoju sieci oraz doradztwo przy zakupie nowego sprzętu."
    ],
pricing: {
      title: "Stała obsługa informatyczna dla firm",
      subtitle: "Stabilność, bezpieczeństwo i szybki czas reakcji bez niespodzianek.",
      addinfo: "Każda kolejna roboczogodzina poza pakietem : 150zł netto.",
      plans: [
        {
          name: "Standard",
          beforePriceText: "od",
          price: "500",
          period: "zł / miesięcznie",
          description: "Idealny wybór dla małych biur i jednoosobowych działalności.",
          features: [
            "Wsparcie w godzinach roboczych (8:00–16:00)",
            "Czas reakcji do 6 godzin",
            "Zdalne rozwiązywanie problemów",
            "Podstawowy monitoring aktualizacji",
            "Nadzór nad kopiami zapasowymi (backup)",
            "W cenie abonamentu 2 roboczogodziny wsparcia technicznego online miesięcznie",
          ],
        },
        {
          name: "Professional",
          badge: "Polecany",
          highlighted: true,
          beforePriceText: "od",
          price: "1500",
          period: "zł / miesięcznie",
          description: "Dla rozwijających się firm, gdzie przestój generuje straty.",
          includesPreviousText: "Wszystko co w pakiecie Standard, plus:",
          features: [
            "Priorytetowe wsparcie techniczne w godzinach roboczych (7:00–19:00)",
            "Gwarantowany czas reakcji do 3 godzin",
            "Regularne aktualizacje systemów i oprogramowania",
            "Regularne testy przywracania danych z backupu",
            "Kompleksowe zarządzanie bezpieczeństwem",
            "W cenie abonamentu 6 roboczogodzin wsparcia technicznego online miesięcznie",
          ],
        },
        {
          name: "Enterprise",
          price: "Wycena",
          period: "indywidualna",
          description: "Dla wymagających środowisk o podwyższonym rygorze bezpieczeństwa.",
          includesPreviousText: "Wszystko co w pakiecie Professional, plus:",
          features: [
            "Dedykowany opiekun techniczny",
            "Najwyższy priorytet SLA (reakcja do 60 min)",
            "Pełne utrzymanie infrastruktury sieciowej (VPN/UTM)",
            "Zaawansowana ochrona i zarządzanie podatnościami",
            "Indywidalnie ustalony pakiet roboczogodzin w cenie abonamentu",
          ],
        },
      ],
    },


    layoutVariant: "obslugait",
  }