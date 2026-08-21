export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export const webProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Odkrycie i Strategia",
    description: "Analizujemy Twoje cele biznesowe, grupę docelową oraz konkurencję. Ustalamy strukturę podstron i kluczowe funkcjonalności serwisu.",
    badge: "Krok 1",
  },
  {
    number: "02",
    title: "Makietowanie & UX",
    description: "Tworzymy makiety funkcjonalne (wireframes), aby rozplanować układ treści i ścieżkę klienta do złożenia zapytania lub zakupu.",
    badge: "Krok 2",
  },
  {
    number: "03",
    title: "Projekt Graficzny (UI)",
    description: "Projektujemy unikalny interfejs zgodny z identyfikacją wizualną Twojej marki. Otrzymujesz interaktywny prototyp do akceptacji.",
    badge: "Krok 3",
  },
  {
    number: "04",
    title: "Kodowanie & Integracje",
    description: "Programujemy szybką i responsywną stronę w Astro lub WordPressie. Wdrażamy systemy płatności, analitykę i integracje API.",
    badge: "Krok 4",
  },
  {
    number: "05",
    title: "Testy & Wdrożenie",
    description: "Przeprowadzamy audyt wydajności, testujemy formularze na urządzeniach mobilnych, podpinamy domenę i uruchamiamy stronę produkcyjnie.",
    badge: "Krok 5",
  },
];