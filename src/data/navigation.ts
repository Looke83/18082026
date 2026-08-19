// Single source of truth for the primary navigation structure.
// Header, MegaMenu, MobileMenu and Footer all consume this data —
// no hardcoded nav links anywhere else in the codebase.

import { categoryLabels, getServicesByCategory, serviceCategories, type ServiceCategory } from "./services";

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  category: ServiceCategory;
  title: string;
  links: NavLink[];
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Oferta", href: "/#oferta" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export const megaMenuColumns: MegaMenuColumn[] = serviceCategories.map((category) => ({
  category,
  title: categoryLabels[category],
  links: getServicesByCategory(category).map((service) => ({
    label: service.title,
    href: `/uslugi/${service.slug}`,
  })),
}));

export const headerCta: NavLink = {
  label: "Bezpłatna wycena",
  href: "/kontakt",
};

export const footerColumns = {
  company: {
    title: "way-IT",
    description:
      "Kompleksowa obsługa informatyczna, infrastruktura, strony i sklepy internetowe, bezpieczeństwo oraz systemy fiskalne — jeden partner technologiczny dla Twojej firmy.",
  },
  navigation: {
    title: "Nawigacja",
    links: primaryNav,
  },
  offer: {
    title: "Oferta",
    links: megaMenuColumns.flatMap((col) => col.links),
  },
  contact: {
    title: "Kontakt",
    address: "ul. Jana Ludygi-Laskowskiego 26, 61-407 Poznań",
    phone: "+48 501 259 140",
    email: "biuro@way-it.pl",
  },
  legal: {
    nip: "NIP: 7831557335",
    regon: "REGON: 301465789",
    links: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "RODO", href: "/rodo" },
    ] as NavLink[],
  },
};

export const socialLinks: NavLink[] = [
 // { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://www.facebook.com/wayit.poznan/" },
];
