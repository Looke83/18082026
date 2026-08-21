export interface BerberisModule {
  title: string;
  icon: string;
  description: string;
}

export const berberisModules: BerberisModule[] = [
  {
    title: "Handel i Magazyn (WMS)",
    icon: "box",
    description: "Pełny cykl sprzedażowy, obsługa wielu magazynów, partii towaru, inwentaryzacji oraz dokumentów WZ/PZ.",
  },
  {
    title: "CRM i Relacje z Klientami",
    icon: "users",
    description: "Historia kontaktów, lejek sprzedażowy, automatyczne oferty, przypomnienia i integracja z e-mail/SMS.",
  },
  {
    title: "Finanse i Księgowość",
    icon: "credit-card",
    description: "Pełna integracja z KSeF, automatyczne rozliczenia bankowe, kontrola płatności oraz obsługa plików JPK.",
  },
  {
    title: "Obieg Dokumentów (DMS)",
    icon: "file-text",
    description: "Cyfryzacja archiwum firmowego, ścieżki akceptacji faktur kosztowych i błyskawiczne wyszukiwanie pism.",
  },
  {
    title: "Serwis i Reklamacje",
    icon: "wrench",
    description: "Ewidencja zgłoszeń, harmonogramowanie napraw, historia urządzeń klienta oraz rozliczanie części.",
  },
  {
    title: "Planowanie Produkcji",
    icon: "factory",
    description: "Planowanie zapotrzebowania materiałowego (MRP), ewidencja struktur (BOM) oraz rozliczanie kosztów.",
  },
];

