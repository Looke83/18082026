import type { Service } from "./types";

export const urzadzeniaFiskalneService: Service =

{
    slug: "urzadzenia-fiskalne",
    order: 1,
    title: "Kasy i drukarki fiskalne",
    shortDescription: "Sprzedaż i fiskalizacja urządzeń.",
    description:
      "Prowadzimy sprzedaż, fiskalizację i konfigurację kas oraz drukarek fiskalnych zgodnie z aktualnymi wymogami prawnymi — z pełnym wsparciem formalnym i technicznym.",
    category: "fiscal",
    icon: "printer",
    features: [
      "Sprzedaż kas i drukarek fiskalnych",
      "Fiskalizacja i zgłoszenia do urzędu skarbowego",
      "Konfiguracja stawek i towarów",
      "Wsparcie przy zmianach przepisów",
    ],
  }