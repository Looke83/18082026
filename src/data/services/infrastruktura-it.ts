import type { Service } from "./types";

export const infrastrukturaITService: Service =

{
    slug: "infrastruktura-it",
    order: 2,
    title: "Kompleksowa Infrastruktura IT dla Firm",
    shortDescription: "Projektowanie i wdrażanie sieci, serwerów i backupu.",
    description:
      "Projektujemy, wdrażamy i modernizujemy technologiczny kręgosłup Twojego przedsiębiorstwa. Tworzymy stabilne, wydajne i bezpieczne środowisko IT – od okablowania strukturalnego i sieci LAN/WAN, przez serwery i wirtualizację, aż po zaawansowane systemy kopii zapasowych. Budujemy solidny fundament, na którym Twoja firma może bez przeszkód rosnąć.",
    category: "it",
    icon: "network",
    features: [
      "Projektowanie i okablowanie sieci LAN/WAN: Budowa wydajnych sieci przewodowych i bezprzewodowych (Wi-Fi), konfiguracja przełączników (switchy), routerów, bezpiecznych tuneli VPN oraz segmentacja sieci (VLAN) dla ochrony danych.",
      "Serwery fizyczne i wirtualizacja: Wdrażanie i zarządzanie serwerami lokalnymi oraz chmurowymi. Optymalizacja zasobów za pomocą technologii wirtualizacji (np. Proxmox, Hyper-V, VMware), co zwiększa elastyczność i obniża koszty sprzętowe.",
      "Strategie backupu i odzyskiwania danych (Disaster Recovery): Tworzenie niezależnych planów tworzenia kopii zapasowych (zgodnie z zasadą 3-2-1), backupy hybrydowe (lokalne + chmura) oraz regularne testy przywracania danych, aby zagwarantować ciągłość biznesu.",
      "Audyty bezpieczeństwa infrastruktury: Kompleksowa analiza podatności sieci, konfiguracja zapór ogniowych (Firewall/UTM), ochrona przed atakami z zewnątrz oraz polityki kontroli dostępu.",
    ],
    pricing: {
    title: "Pakiety wdrożeniowe i modernizacyjne",
    subtitle: "Elastyczne rozwiązania dopasowane do skali i potrzeb Twojej organizacji.",
    addinfo: "* Wycena indywidualna na podstawie audytu technicznego i skali projektu.",
    plans: [
      {
        name: "Audyt i Optymalizacja",
        description: "Idealne rozwiązanie dla istniejących sieci, które zwalniają lub wymagają poprawy bezpieczeństwa.",
        beforePriceText: "od",
          price: "500",
        features: [
          "Inwentaryzacja sprzętu i urządzeń sieciowych",
          "Analiza wąskich gardeł i wydajności",
          "Przegląd reguł bezpieczeństwa (Firewall/Router)",
          "Raport z rekomendacjami usprawnień",
          "Czas realizacji: do 3 dni roboczych",
        ],
      },
      {
        name: "Nowoczesne Biuro",
        badge: "Polecany",
        highlighted: true,
        description: "Kompleksowe przygotowanie środowiska IT dla firm zmieniających lokal lub budujących biuro od podstaw.",
        beforePriceText: "od",
        price: "Wycena",
        period: "indywidualna",
        features: [
          "Projekt okablowania i struktury sieciowej",
          "Montaż i organizacja szaf RACK",
          "Konfiguracja profesjonalnego Wi-Fi (VLAN)",
          "Wdrożenie centralnego serwera lub NAS",
          "Konfiguracja podstawowego backupu",
        ],
      },
      {
        name: "Infrastruktura HA",
        beforePriceText: "od",
          price: "Wycena",
        period: "indywidualna",
        description: "Dla firm wymagających pełnej redundancji, wysokiej dostępności i bezkompromisowego bezpieczeństwa.",
        features: [
          "Wdrożenie klastrów serwerowych i wirtualizacji",
          "Polityki UTM klasy korporacyjnej",
          "Redundancja łączy internetowych",
          "Automatyczny system Disaster Recovery",
          "Dedykowany projekt i nadzór wdrożeniowy",
        ],
      },
    ],
  },
  layoutVariant: "obslugait",
  }