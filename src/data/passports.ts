import type { Country } from "./types";

export type Access = "visa-free" | "e-visa" | "conditional" | "visa-required";

export type Zone =
  | "schengen"
  | "uk"
  | "ireland"
  | "cyprus"
  | "turkiye"
  | "balkans"
  | "georgia"
  | "moldova";

export interface Passport {
  id: string;
  label: string;
  flag: string;
  rules: Record<Zone, Access>;
}

const visaFreeEverywhere: Record<Zone, Access> = {
  schengen: "visa-free",
  uk: "visa-free",
  ireland: "visa-free",
  cyprus: "visa-free",
  turkiye: "visa-free",
  balkans: "visa-free",
  georgia: "visa-free",
  moldova: "visa-free",
};

const requiredEverywhere: Record<Zone, Access> = {
  schengen: "visa-required",
  uk: "visa-required",
  ireland: "visa-required",
  cyprus: "conditional",
  turkiye: "e-visa",
  balkans: "conditional",
  georgia: "conditional",
  moldova: "visa-required",
};

export const passports: Passport[] = [
  {
    id: "india",
    label: "India",
    flag: "🇮🇳",
    rules: { ...requiredEverywhere },
  },
  {
    id: "pakistan",
    label: "Pakistan",
    flag: "🇵🇰",
    rules: { ...requiredEverywhere, turkiye: "e-visa", georgia: "visa-required" },
  },
  {
    id: "bangladesh",
    label: "Bangladesh",
    flag: "🇧🇩",
    rules: { ...requiredEverywhere, georgia: "visa-required" },
  },
  {
    id: "china",
    label: "China",
    flag: "🇨🇳",
    rules: { ...requiredEverywhere },
  },
  {
    id: "nigeria",
    label: "Nigeria",
    flag: "🇳🇬",
    rules: { ...requiredEverywhere, turkiye: "visa-required", georgia: "visa-required" },
  },
  {
    id: "saudi-arabia",
    label: "Saudi Arabia",
    flag: "🇸🇦",
    rules: {
      ...requiredEverywhere,
      uk: "e-visa",
      turkiye: "visa-free",
      georgia: "visa-free",
      balkans: "visa-free",
    },
  },
  {
    id: "canada",
    label: "Canada",
    flag: "🇨🇦",
    rules: { ...visaFreeEverywhere, turkiye: "e-visa" },
  },
  {
    id: "united-states",
    label: "United States",
    flag: "🇺🇸",
    rules: { ...visaFreeEverywhere, uk: "e-visa" },
  },
  {
    id: "united-kingdom",
    label: "United Kingdom",
    flag: "🇬🇧",
    rules: { ...visaFreeEverywhere },
  },
  {
    id: "eu-eea",
    label: "Any EU / EEA country",
    flag: "🇪🇺",
    rules: { ...visaFreeEverywhere },
  },
  {
    id: "brazil",
    label: "Brazil",
    flag: "🇧🇷",
    rules: { ...visaFreeEverywhere, uk: "e-visa", turkiye: "e-visa" },
  },
  {
    id: "mexico",
    label: "Mexico",
    flag: "🇲🇽",
    rules: { ...visaFreeEverywhere, uk: "e-visa", turkiye: "e-visa" },
  },
  {
    id: "nepal",
    label: "Nepal",
    flag: "🇳🇵",
    rules: { ...requiredEverywhere },
  },
  {
    id: "sri-lanka",
    label: "Sri Lanka",
    flag: "🇱🇰",
    rules: { ...requiredEverywhere },
  },
  {
    id: "vietnam",
    label: "Vietnam",
    flag: "🇻🇳",
    rules: { ...requiredEverywhere, turkiye: "visa-required" },
  },
  {
    id: "philippines",
    label: "Philippines",
    flag: "🇵🇭",
    rules: { ...requiredEverywhere, turkiye: "visa-required" },
  },
  {
    id: "indonesia",
    label: "Indonesia",
    flag: "🇮🇩",
    rules: { ...requiredEverywhere, turkiye: "visa-required" },
  },
  {
    id: "russia",
    label: "Russia",
    flag: "🇷🇺",
    rules: {
      schengen: "visa-required",
      uk: "visa-required",
      ireland: "visa-required",
      cyprus: "visa-required",
      turkiye: "visa-free",
      balkans: "visa-free",
      georgia: "visa-free",
      moldova: "visa-required",
    },
  },
  {
    id: "iran",
    label: "Iran",
    flag: "🇮🇷",
    rules: {
      schengen: "visa-required",
      uk: "visa-required",
      ireland: "visa-required",
      cyprus: "visa-required",
      turkiye: "visa-free",
      balkans: "visa-free",
      georgia: "visa-free",
      moldova: "visa-required",
    },
  },
  {
    id: "egypt",
    label: "Egypt",
    flag: "🇪🇬",
    rules: { ...requiredEverywhere },
  },
  {
    id: "kenya",
    label: "Kenya",
    flag: "🇰🇪",
    rules: { ...requiredEverywhere, turkiye: "visa-required" },
  },
  {
    id: "ghana",
    label: "Ghana",
    flag: "🇬🇭",
    rules: { ...requiredEverywhere, turkiye: "visa-required" },
  },
  {
    id: "kazakhstan",
    label: "Kazakhstan",
    flag: "🇰🇿",
    rules: {
      schengen: "visa-required",
      uk: "visa-required",
      ireland: "visa-required",
      cyprus: "conditional",
      turkiye: "visa-free",
      balkans: "visa-free",
      georgia: "visa-free",
      moldova: "visa-required",
    },
  },
  {
    id: "jordan",
    label: "Jordan",
    flag: "🇯🇴",
    rules: { ...requiredEverywhere },
  },
  {
    id: "morocco",
    label: "Morocco",
    flag: "🇲🇦",
    rules: { ...requiredEverywhere, turkiye: "visa-free" },
  },
  {
    id: "ukraine",
    label: "Ukraine",
    flag: "🇺🇦",
    rules: { ...visaFreeEverywhere },
  },
  {
    id: "turkiye-passport",
    label: "Türkiye",
    flag: "🇹🇷",
    rules: {
      schengen: "visa-required",
      uk: "visa-required",
      ireland: "visa-required",
      cyprus: "visa-required",
      turkiye: "visa-free",
      balkans: "visa-free",
      georgia: "visa-free",
      moldova: "visa-free",
    },
  },
  {
    id: "other-visa-required",
    label: "Other — my passport normally needs a visa for Europe",
    flag: "🛂",
    rules: { ...requiredEverywhere },
  },
  {
    id: "other-visa-free",
    label: "Other — my passport is visa-free for Europe",
    flag: "🛫",
    rules: { ...visaFreeEverywhere, uk: "e-visa", turkiye: "e-visa" },
  },
];

export const passportById = (id: string) => passports.find((p) => p.id === id);

export function zoneFor(country: Country): Zone {
  if (country.bloc === "schengen") return "schengen";
  switch (country.slug) {
    case "united-kingdom":
      return "uk";
    case "ireland":
      return "ireland";
    case "cyprus":
      return "cyprus";
    case "turkiye":
      return "turkiye";
    case "georgia":
      return "georgia";
    case "moldova":
      return "moldova";
    default:
      return "balkans";
  }
}

export const accessLabel: Record<Access, string> = {
  "visa-free": "No visa needed",
  "e-visa": "Quick online permit",
  conditional: "Open if you hold the right visa",
  "visa-required": "Full visa application",
};
