import type { Service } from "./types";

export const opiekaSerwisowaFiskalnaService: Service =

{
    slug: "opieka-serwisowa-fiskalna",
    order: 3,
    title: "Opieka serwisowa i przeglądy",
    shortDescription: "Obowiązkowe przeglądy techniczne urządzeń fiskalnych.",
    description:
      "Zapewniamy kompleksową i niezawodną opiekę serwisową, która gwarantuje pełną ciągłość pracy Twojej firmy. Realizujemy ustawowe, okresowe przeglądy techniczne urządzeń fiskalnych, dbając o ich stuprocentową sprawność i zgodność z przepisami prawa podatkowego. W sytuacji awarii oferujemy natychmiastową reakcję, profesjonalną diagnostykę oraz szybkie naprawy, eliminując przestoje w sprzedaży i dbając o to, by Twój biznes nigdy nie zwalniał tempa.",
    category: "fiscal",
    icon: "shield-check",
    features: [
      "Obowiązkowe przeglądy techniczne urządzeń fiskalnych: Wykonywanie corocznych, wymaganych przez przepisy przeglądów kas i drukarek fiskalnych przez uprawnionego serwisanta wraz z wymaganymi wpisami i testami pamięci.",
      "Priorytetowa i szybka reakcja serwisowa: Gwarantowany, skrócony czas reakcji na zgłoszenie awarii – telefonicznie, zdalnie lub z dojazdem bezpośrednio do punktu sprzedaży czy firmy klienta.",
      "Diagnostyka, naprawy i wymiana podzespołów: Profesjonalne usuwanie usterek sprzętowych i programowych, wymiana zużytych elementów (np. mechanizmów drukujących, akumulatorów) oraz konfiguracja sprzętu zastępczego w razie poważniejszych awarii.",
      "Monitorowanie terminów i przypomnienia o przeglądach: Prowadzenie harmonogramu przeglądów technicznych i automatyczne wysyłanie przypomnień przed upływem ostatecznego terminu nałożonego przez urzędy.",
      "Bieżące wsparcie techniczne i doradztwo: Pomoc w codziennej eksploatacji urządzeń, rozwiązywanie problemów z komunikacją z programem sprzedażowym oraz fachowe doradztwo techniczne.",
    ],
  }