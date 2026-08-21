// src/data/services/types.ts

export type ServiceCategory = "it" | "web" | "security" | "fiscal";

export type LayoutVariant = "stronysklepywww" | "standard" | "Berberis";

export interface ServicePricingPlan {
  name: string;
  badge?: string;
  description?: string;
  beforePriceText?: string;
  price: string;
  period?: string;
  includesPreviousText?: string;
  features: ({ text: string; included: boolean } | string)[];
  highlighted?: boolean;
}

export interface ServicePricing {
  title?: string;
  subtitle?: string;
  plans: ServicePricingPlan[];
}

export type IconName =
  | "server"
  | "network"
  | "integration"
  | "erp"
  | "code"
  | "cart"
  | "wrench"
  | "cctv"
  | "alarm"
  | "pos"
  | "printer"
  | "shield-check"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-right"
  | "arrow-right"
  | "check"
  | "phone"
  | "mail"
  | "mapPin"
  | "quote"
  | "star"
  | "shield2-lock"
  | "clock-4"
  | "map"
  | "stack"
  | "linkedin"
  | "facebook";

export interface Service {
  slug: string;
  order?: number;
  title: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  icon: IconName;
  features: string[];
  pricing?: ServicePricing;
  layoutVariant?: LayoutVariant;
}