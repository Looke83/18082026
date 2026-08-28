import type { Service } from "./types";

export const urzadzeniaFiskalneService: Service =

{
    slug: "urzadzenia-fiskalne",
    order: 1,
    title: "Kasy i drukarki fiskalne",
    shortDescription: "Sprzedaż i fiskalizacja urządzeń.",
    description:
      "Zapewniamy kompleksową obsługę urządzeń fiskalnych dla firm – od doradztwa przy wyborze odpowiedniego sprzętu, przez profesjonalną fiskalizację i zgłoszenia formalne, aż po konfigurację, bieżący serwis oraz okresowe przeglądy techniczne. Wdrażamy nowoczesne kasy i drukarki fiskalne (online) zgodne z aktualnymi przepisami Ministerstva Finansów, które bezproblemowo współpracują z programami sprzedażowymi, terminalami płatniczymi oraz systemami magazynowymi.",
    category: "fiscal",
    icon: "printer",
    features: [
      "Sprzedaż i doradztwo w doborze urządzeń: Dobór optymalnych kas lub drukarek fiskalnych (w tym urządzeń mobilnych dla handlowców oraz stacjonarnych dla handlu i gastronomii) dopasowanych do profilu działalności i skali sprzedaży.",
      "Fiskalizacja i pełne wsparcie formalne: Przeprowadzenie procedury fiskalizacji urządzenia, wprowadzenie NIP podatnika oraz dopełnienie wszelkich niezbędnych zgłoszeń i dokumentacji powiązanych z Urzędem Skarbowym.",
      "Konfiguracja stawек VAT, towarów i podpięcie peryferiów: Wgrywanie bazy towarowej (PLU), programowanie stawek podatkowych, konfiguracja nagłówka paragonu oraz integracja z terminalami płatniczymi, szufladami i czytnikami kodów.",
      "Okresowe przeglądy techniczne i konserwacja: Wykonywanie obowiązkowych, corocznych przeglądów technicznych urządzeń fiskalnych przez uprawnionego serwisanta z wpisem do książki kasy.",
      "Wsparcie przy zmianach przepisów i pomoc serwisowa: Doradztwo i aktualizacje oprogramowania w przypadku zmian w prawie podatkowym oraz szybka pomoc techniczna i serwis awaryjny w razie problemów ze sprzętem.",
    ],
  }