# PROMPT: Landing Page — way-IT Łukasz Kufel

> Ten dokument to gotowy, szczegółowy prompt/specyfikacja do wygenerowania strony firmowej (landing page) w Astro + Tailwind CSS 4. Skopiuj całość i użyj jako instrukcję dla narzędzia generującego kod (np. Claude Code, Cursor, v0, itp.).

---

## 1. Cel i kontekst

Zbuduj nowoczesną, responsywną stronę firmową (landing page) dla firmy **way-IT Łukasz Kufel** — firmy IT świadczącej usługi z zakresu: obsługi informatycznej, infrastruktury IT, stron i sklepów internetowych, bezpieczeństwa (CCTV, alarmy) oraz urządzeń i systemów fiskalnych (POS, kasy fiskalne).

Strona ma sprawiać wrażenie profesjonalnej, solidnej i technologicznej — łączącej kompetencje "twardego IT" (serwery, sieci, bezpieczeństwo) z nowoczesnym web designem.

---

## 2. Stack technologiczny

- **Framework:** Astro (najnowsza stabilna wersja, Astro 5.x), z podejściem *islands architecture* — statyczny HTML domyślnie, interaktywność (np. mega menu, hamburger) jako lekki komponent client-side (`client:load` / `client:idle`).
- **Stylowanie:** Tailwind CSS 4 (nowa architektura CSS-first, konfiguracja przez `@theme` w pliku CSS zamiast `tailwind.config.js`).
- **Język:** TypeScript wszędzie tam, gdzie to możliwe (komponenty `.astro` z `---` frontmatter typowanym, ewentualne komponenty interaktywne w TS).
- **Struktura komponentów:** w pełni komponentowa, reużywalna (patrz sekcja 6).
- **Ikony:** biblioteka SVG ikon (np. `astro-icon` lub lokalny zestaw `lucide` jako SVG) — bez zewnętrznych fontów ikon.
- **Obrazy:** komponent `astro:assets` (`<Image />`) do optymalizacji, lazy-loading, `srcset`/`sizes`.
- **Fonty:** self-hosted (np. przez `@fontsource` lub pliki `.woff2` lokalnie) — bez zależności od Google Fonts CDN (RODO / wydajność).
- **Dostępność:** semantyczny HTML5, atrybuty ARIA na menu/hamburgerze, focus states, kontrast WCAG AA minimum.
- **SEO:** meta tagi, Open Graph, `sitemap.xml`, `robots.txt`, dane strukturalne JSON-LD (`Organization`, `LocalBusiness`).

---

## 3. Layout ogólny

- **Max szerokość treści (content container):** `1440px`, wyśrodkowana (`mx-auto`), z paddingiem bocznym responsywnym (`clamp` lub Tailwind `px-4 md:px-8 lg:px-12`).
- **Breakpointy (Tailwind 4 defaults, ewentualnie rozszerzone):**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px (próg przełączenia hamburger → pełne menu)
  - `xl`: 1280px
  - `2xl`: 1440px (traktowany jako "desktop max")
- **Grid/Flexbox:** CSS Grid dla sekcji z kartami usług (np. `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`), Flexbox dla nawigacji i elementów liniowych.
- **Spacing system:** oparty o skalę Tailwind (4px base), spójny rytm pionowy między sekcjami (`py-16 md:py-24 lg:py-32`).

---

## 4. Typografia (fluid typography przez `clamp()`)

W Tailwind 4 zdefiniuj własne rozmiary fontów w `@theme` przy użyciu `clamp()`, aby tekst skalował się płynnie między mobile a desktop bez "skoków" na breakpointach.

Przykładowa definicja w `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter Variable", "Inter", system-ui, sans-serif;
  --font-heading: "Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif;

  /* Fluid type scale: clamp(min, preferred, max) */
  --text-xs:   clamp(0.75rem, 0.72rem + 0.15vw, 0.8rem);
  --text-sm:   clamp(0.875rem, 0.83rem + 0.2vw, 0.95rem);
  --text-base: clamp(1rem, 0.94rem + 0.3vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem);
  --text-xl:   clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-2xl:  clamp(1.5rem, 1.3rem + 0.9vw, 1.875rem);
  --text-3xl:  clamp(1.875rem, 1.6rem + 1.3vw, 2.375rem);
  --text-4xl:  clamp(2.25rem, 1.8rem + 2vw, 3rem);
  --text-5xl:  clamp(2.75rem, 2.1rem + 2.8vw, 3.75rem);
  --text-6xl:  clamp(3.25rem, 2.4rem + 3.8vw, 4.5rem);
}
```

### Pary fontów (do wyboru — wskaż jedną w prompcie do generatora):

1. **Nowoczesna/techniczna:** nagłówki `Space Grotesk` (geometryczny, techniczny charakter) + treść `Inter` (bardzo czytelny, neutralny, zoptymalizowany pod ekrany).
2. **Alternatywa cieplejsza:** nagłówki `Sora` + treść `IBM Plex Sans` (kojarzy się z inżynierią/technologią, ale bardziej "ludzka").

Zasady:
- Nagłówki: `font-heading`, `font-semibold`/`font-bold`, `tracking-tight`.
- Treść: `font-sans`, `font-normal`/`font-medium`, `leading-relaxed` dla akapitów.
- Line-height nagłówków: `1.1–1.2`; treści: `1.5–1.7`.

---

## 5. Nawigacja / Header

### Struktura menu (na podstawie załącznika):

```
1. Home                    → /
2. Oferta (Mega Menu)      → 4 kolumny
3. O nas                   → /o-nas
4. Kontakt                 → /kontakt
```

### Kolumny Mega Menu "Oferta":

**Kolumna 1 — Obsługa i Infrastruktura IT**
- Obsługa informatyczna → `/uslugi/obsluga-it`
- Infrastruktura IT → `/uslugi/infrastruktura-it`
- Programy sprzedażowe i integracje → `/uslugi/programy-sprzedazowe-integracje`
- System ERP Berbreis → `/uslugi/erp-berbreis`

**Kolumna 2 — Strony i Sklepy WWW**
- Projektowanie stron WWW → `/uslugi/strony-www`
- Sklepy internetowe → `/uslugi/sklepy-internetowe`
- Opieka i utrzymanie WWW/E-commerce → `/uslugi/opieka-www`

**Kolumna 3 — Bezpieczeństwo**
- Monitoring CCTV → `/uslugi/monitoring-cctv`
- Systemy alarmowe SSWiN → `/uslugi/systemy-alarmowe`

**Kolumna 4 — Urządzenia i Systemy Fiskalne**
- Systemy kasowe POS → `/uslugi/systemy-pos`
- Kasy i drukarki fiskalne → `/uslugi/urzadzenia-fiskalne`
- Opieka serwisowa i przeglądy → `/uslugi/opieka-serwisowa-fiskalna`

> Uwaga: linki w załączniku miały polskie znaki (np. `/uslugi/obsługa-it`) — w implementacji **zawsze używaj slugów bez polskich znaków** (`obsluga-it`), zgodnie z dobrymi praktykami URL/SEO.

### Zachowanie desktop (≥ `lg`):
- Header sticky (przyklejony do góry, `backdrop-blur` + półprzezroczyste tło po scrollu).
- "Oferta" — hover/focus otwiera pełnoszerokościowy (do `max-w-[1440px]`) panel mega menu z 4 kolumnami w gridzie (`grid-cols-4 gap-8`).
- Każda kolumna: nagłówek kategorii (bold, mały caps) + lista linków z ikoną (opcjonalnie) i krótkim hover-underline.
- Płynna animacja pojawiania się (fade + slight translate-y, `transition` ~150–200ms), zamykanie po `mouseleave` z małym opóźnieniem oraz po `Escape` / kliknięciu poza obszarem.
- CTA button w headerze (np. "Bezpłatna wycena" / "Umów konsultację") wyróżniony kolorystycznie, zawsze widoczny.

### Zachowanie mobile (< `lg`):
- Logo po lewej, przycisk **hamburger** (ikona 3 linii → X po otwarciu, animowana) po prawej.
- Po kliknięciu: pełnoekranowe lub boczne (`slide-in` z prawej, `max-w-sm`) menu overlay, z:
  - Listą głównych pozycji (Home, Oferta, O nas, Kontakt).
  - "Oferta" jako **accordion** — kliknięcie rozwija 4 sekcje kategorii (każda też jako mini-accordion lub prosta lista pod nagłówkiem kategorii).
  - CTA button na dole menu.
- Blokada scrolla `body` gdy menu otwarte (`overflow: hidden`).
- Focus trap w otwartym menu (dostępność), zamykanie na `Escape`.
- Komponent hamburgera jako "wyspa" Astro (`client:load`) — cała logika otwierania/zamykania w lekkim skrypcie (np. Alpine.js, lub czysty TS + `data-state`, bez ciężkich frameworków, chyba że projekt i tak używa Reacta/Vue).

---

## 6. Architektura komponentów (reużywalne)

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── MegaMenu.astro
│   │   ├── MobileMenu.astro
│   │   ├── Footer.astro
│   │   └── Container.astro        # wrapper max-w-[1440px] mx-auto px-*
│   ├── ui/
│   │   ├── Button.astro           # warianty: primary, secondary, outline, ghost
│   │   ├── Badge.astro
│   │   ├── Card.astro
│   │   ├── SectionHeading.astro   # eyebrow + tytuł + opis
│   │   ├── Icon.astro
│   │   └── Accordion.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ServicesGrid.astro     # karty 4 kategorii usług
│   │   ├── ServiceCard.astro
│   │   ├── AboutSummary.astro
│   │   ├── WhyUs.astro            # atuty / USP
│   │   ├── ProcessSteps.astro     # jak wygląda współpraca
│   │   ├── Testimonials.astro
│   │   ├── LogosStrip.astro       # klienci / partnerzy
│   │   ├── CTASection.astro
│   │   ├── ContactForm.astro
│   │   └── FAQ.astro
│   └── seo/
│       └── SEOHead.astro
├── layouts/
│   └── BaseLayout.astro
├── data/
│   ├── navigation.ts               # struktura menu jako typowany obiekt/tablica
│   └── services.ts                 # dane usług (tytuł, opis, ikona, slug)
├── pages/
│   ├── index.astro
│   ├── o-nas.astro
│   ├── kontakt.astro
│   └── uslugi/
│       └── [slug].astro            # generowane z data/services.ts
└── styles/
    └── global.css
```

**Zasady reużywalności:**
- `navigation.ts` i `services.ts` jako pojedyncze źródło prawdy — `Header`, `MegaMenu`, `MobileMenu`, `Footer` i `ServicesGrid` czerpią dane z tych plików (żadnych zahardkodowanych linków w kilku miejscach).
- `Button.astro` przyjmuje propsy: `variant`, `size`, `href` (renderuje `<a>`) lub brak `href` (renderuje `<button>`).
- `Card.astro` jako bazowy komponent wizualny (border/shadow/radius), rozszerzany przez `ServiceCard.astro`.
- `Container.astro` — jedyne miejsce definiujące `max-w-[1440px]`, używane we wszystkich sekcjach.

---

## 7. Sekcje landing page (`index.astro`)

1. **Header** (opisany wyżej).
2. **Hero** — nagłówek H1 (fluid, `text-5xl`–`text-6xl`), podtytuł, 2 CTA (primary: "Bezpłatna wycena", secondary: "Zobacz ofertę"), grafika/ilustracja po prawej (desktop) lub pod tekstem (mobile). Opcjonalnie pasek zaufania ("10+ lat doświadczenia", "200+ obsłużonych firm" itp. — placeholder liczby).
3. **Usługi (ServicesGrid)** — 4 karty odpowiadające 4 kolumnom mega menu, każda z ikoną, tytułem kategorii, krótkim opisem, linkiem "Dowiedz się więcej →".
4. **Dlaczego my (WhyUs)** — 3–4 atuty w gridzie (np. szybki czas reakcji, lokalna obecność, kompleksowość usług, doświadczenie).
5. **Jak wygląda współpraca (ProcessSteps)** — 3–4 kroki (np. Kontakt → Audyt/wycena → Wdrożenie → Wsparcie), poziomy stepper na desktop, pionowy na mobile.
6. **O nas (AboutSummary)** — krótkie streszczenie + link do pełnej podstrony `/o-nas`.
7. **Opinie klientów (Testimonials)** — karuzela lub grid 2–3 opinii (placeholder).
8. **Pasek klientów/partnerów (LogosStrip)** — opcjonalny, logotypy w skali szarości.
9. **FAQ** — accordion z częstymi pytaniami.
10. **CTA Section** — wyróżniony blok przed stopką z mocnym wezwaniem do kontaktu.
11. **Kontakt (ContactForm)** — formularz (imię, e-mail, telefon, temat/usługa z select, wiadomość) + dane firmy (adres, telefon, e-mail, mapa Google Maps embed) — layout dwukolumnowy na desktop.
12. **Footer** — logo + krótki opis, kolumna nawigacji (linki z mega menu), kolumna kontaktowa, social media, informacja o NIP/REGON, linki do polityki prywatności/RODO, copyright.

---

## 8. Kolorystyka — WERSJA JASNA (Light)

Styl: czysty, techniczny, dużo białej przestrzeni, akcent w jednym mocnym kolorze (np. niebieski/indygo — kojarzący się z IT i zaufaniem) + kolor akcentowy drugorzędny.

```css
@theme {
  --color-background: #ffffff;
  --color-surface: #f6f7fb;          /* tło sekcji naprzemiennych */
  --color-surface-alt: #eef1f8;

  --color-text-primary: #0f1729;     /* niemal czarny, ciepły granat */
  --color-text-secondary: #4b5568;
  --color-text-muted: #8a93a6;

  --color-primary: #2451ff;          /* mocny niebieski/indygo — CTA, linki */
  --color-primary-hover: #1c3fd6;
  --color-primary-light: #e8edff;

  --color-accent: #00c2a8;           /* akcent techniczny (teal/mięta) */
  --color-accent-light: #e3faf5;

  --color-border: #e2e5ee;
  --color-success: #17a34a;
  --color-warning: #f59e0b;
  --color-danger: #dc2626;
}
```

- Cienie: delikatne (`shadow-sm`/`shadow-md`), rozproszone, nigdy zbyt mocne.
- Karty: białe tło na `--color-surface`, `border` `1px solid --color-border`, `rounded-2xl`.
- Kontrast tekstu: minimum WCAG AA (sprawdzone dla `--color-text-primary` na `--color-background`).

---

## 9. Kolorystyka — WERSJA CIEMNA (Dark)

Styl: głęboka granatowo-czarna baza (nie czysta czerń — łagodniejsza dla oka), świecące akcenty neonowo-techniczne, subtelne gradienty i poświaty (glow) przy CTA.

```css
@theme {
  --color-background: #0b0f1a;
  --color-surface: #10162a;
  --color-surface-alt: #161d35;

  --color-text-primary: #f4f6fb;
  --color-text-secondary: #b7bfd4;
  --color-text-muted: #7b8399;

  --color-primary: #5b7fff;          /* jaśniejszy niebieski dla kontrastu na ciemnym tle */
  --color-primary-hover: #7c98ff;
  --color-primary-light: #1c2650;

  --color-accent: #22e5c8;           /* teal / neon mint */
  --color-accent-light: #103832;

  --color-border: #232b45;
  --color-success: #34d399;
  --color-warning: #fbbf24;
  --color-danger: #f87171;
}
```

- Efekty: subtelny `radial-gradient` glow za sekcją Hero i wokół głównego CTA (np. `background: radial-gradient(circle at top, var(--color-primary-light), transparent 60%)`).
- Karty: tło `--color-surface`, delikatny `border` w `--color-border`, cień prawie niewidoczny (na ciemnym tle cienie nie działają jak na jasnym — zamiast tego lekkie rozjaśnienie/`ring`).
- Obrazy/ilustracje: rozważyć wersje z odwróconymi kolorami lub delikatną poświatą, by nie "wypalały" się na ciemnym tle.

**Przełącznik motywu:** zaimplementować toggle jasny/ciemny w headerze (ikona słońce/księżyc), zapamiętywany w `localStorage`, z respektowaniem `prefers-color-scheme` jako wartości domyślnej. Realizacja przez klasę `.dark` na `<html>` + zmienne CSS nadpisywane w `@theme` / selektorze `.dark { ... }`.

---

## 10. Komponent `Button.astro` — warianty (przykład)

- `primary` — pełne tło `--color-primary`, biały tekst, hover: `--color-primary-hover`, lekki `scale-[1.02]` na hover, `rounded-xl`.
- `secondary` — tło `--color-surface`/`--color-primary-light`, tekst `--color-primary`, border.
- `outline` — przezroczyste tło, `border` w `--color-primary`, tekst `--color-primary`.
- `ghost` — brak tła/border, tylko tekst + underline on hover.
- Rozmiary: `sm` / `md` / `lg`, padding i font-size w `clamp()` lub skali Tailwind.
- Wszystkie warianty: focus-visible ring (dostępność), `transition-all duration-200`.

---

## 11. Responsywność — kluczowe zasady

- **Mobile-first:** pisz klasy bazowe dla mobile, nadpisuj przez `md:`/`lg:`/`xl:`.
- **Obrazy:** `w-full h-auto`, `aspect-ratio` zdefiniowane, `loading="lazy"` poza Hero (tam `loading="eager"`/`fetchpriority="high"`).
- **Grid usług:** `grid-cols-1` (mobile) → `sm:grid-cols-2` → `lg:grid-cols-4`.
- **Formularz kontaktowy:** `grid-cols-1` (mobile) → `md:grid-cols-2` dla pól, pełna szerokość dla `textarea` i przycisku submit.
- **Touch targets:** minimum `44×44px` dla wszystkich klikalnych elementów na mobile (przyciski, linki menu).
- **Testy:** zaprojektuj i zweryfikuj wizualnie w szerokościach: `375px`, `768px`, `1024px`, `1440px`, `1920px` (na 1920px treść nadal ograniczona do `1440px`, tło może być pełnej szerokości).

---

## 12. Dodatkowe wymagania techniczne

- **Performance:** cel Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO) — Astro domyślnie wysyła zero JS poza "wyspami" (hamburger, mega menu interakcje, ewentualny theme toggle).
- **Animacje:** subtelne, oparte na `transition`/`@starting-style` lub lekkiej bibliotece (np. `astro:transitions` dla przejść między stronami), bez przesady — nic co utrudnia czytelność.
- **Formularz kontaktowy:** walidacja client-side (HTML5 + ewentualnie mały skrypt), przygotowany pod integrację z backendem (np. endpoint API route w Astro `src/pages/api/contact.ts` lub zewnętrzny serwis mailowy).
- **i18n-ready (opcjonalnie):** struktura treści w plikach danych (`data/*.ts`) ułatwiająca ewentualne tłumaczenie w przyszłości, nawet jeśli na start strona jest tylko po polsku.
- **Favicon, manifest, OG image:** przygotować pełny zestaw (favicon.svg, apple-touch-icon, `og-image.png` 1200×630).

---

## 13. Ton komunikacji / treści (wskazówka dla copy)

- Język: polski, profesjonalny, ale bezpośredni — bez nadmiernego żargonu korporacyjnego.
- Nagłówki: konkretne i korzyściowe (np. "Twoja infrastruktura IT w dobrych rękach", nie "Jesteśmy liderem innowacyjnych rozwiązań").
- CTA: akcyjne, jasne ("Umów bezpłatną konsultację", "Sprawdź ofertę", "Zadzwoń teraz").

---

## 14. Podsumowanie — co ma dostarczyć wygenerowany kod

- [ ] Projekt Astro + Tailwind 4 gotowy do `npm run dev`.
- [ ] W pełni responsywny header z mega menu (desktop) i hamburger menu z accordionem (mobile).
- [ ] Wszystkie sekcje landing page wymienione w pkt. 7.
- [ ] Reużywalne komponenty zgodnie ze strukturą z pkt. 6.
- [ ] Fluid typography przez `clamp()` zgodnie z pkt. 4.
- [ ] Dwa kompletne motywy kolorystyczne (jasny/ciemny) z przełącznikiem, zgodnie z pkt. 8–9.
- [ ] Max szerokość treści `1440px` konsekwentnie stosowana przez `Container.astro`.
- [ ] Strony podrzędne: `/o-nas`, `/kontakt`, dynamiczne `/uslugi/[slug]` dla każdej usługi z menu.
- [ ] Podstawowe SEO (meta, OG, JSON-LD, sitemap).
