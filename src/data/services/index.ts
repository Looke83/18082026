// src/data/services/index.ts
import type { ServiceCategory, IconName, Service } from "./types";

// Exportujesz typy i stałe pomocnicze
export * from "./types";

export const categoryLabels: Record<ServiceCategory, string> = {
  it: "Obsługa i Infrastruktura IT",
  web: "Strony i Sklepy WWW",
  security: "Bezpieczeństwo",
  fiscal: "Urządzenia i Systemy Fiskalne",
};

export const categoryDescriptions: Record<ServiceCategory, string> = {
  it: "Kompleksowa opieka informatyczna i sprzętowa, na której można polegać.",
  web: "Strony i sklepy internetowe zaprojektowane pod konwersję i wygodne zarządzanie.",
  security: "Monitoring i systemy alarmowe chroniące ludzi i majątek firmy.",
  fiscal: "Urządzenia fiskalne i systemy POS z pełnym serwisem i wsparciem.",
};

export const categoryIcons: Record<ServiceCategory, IconName> = {
  it: "server",
  web: "code",
  security: "cctv",
  fiscal: "pos",
};

// AUTOMATYZACJA IMPORTÓW
// Importuje wszystkie pliki .ts z bieżącego folderu w trybie natychmiastowym (eager)
const modules = import.meta.glob<{ [key: string]: Service }>('./*.ts', { eager: true });

// Tworzy tablicę `services`, ignorując pliki `index.ts` oraz `types.ts`
export const services: Service[] = Object.entries(modules)
  .filter(([filepath]) => !filepath.includes('index.ts') && !filepath.includes('types.ts'))
  .flatMap(([_, mod]) => Object.values(mod));

// Funkcje pomocnicze
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export const serviceCategories: ServiceCategory[] = ["it", "web", "security", "fiscal"];