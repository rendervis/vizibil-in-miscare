export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Vizibil în Mișcare",
  shortName: "Vizibil",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vizibilinmiscare.ro",
  locale: "ro_RO",
  language: "ro",
  domain: "vizibilinmiscare.ro",
  tagline: "Publicitate locală pe trasee reale.",
  businessClaim: "Fă-ți afacerea vizibilă pe traseele pe care clienții tăi le parcurg deja.",
  driverClaim: "Fă bani din drumurile pe care le faci deja.",
  proofLine: "Trasee reale. Preț clar. Campanii verificate.",
  description:
    "Promovează-ți afacerea pe mașini care circulă deja prin zonele unde sunt clienții tăi. Șoferii câștigă din drumurile pe care le fac deja.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@vizibilinmiscare.ro",
  brandStatus: "validation" as const,
  nav: [
    { href: "/#market", label: "Pentru afaceri" },
    { href: "/#driver", label: "Pentru șoferi" },
    { href: "/#cum-functioneaza", label: "Cum funcționează" },
    { href: "/#faq", label: "Întrebări" },
  ],
};
