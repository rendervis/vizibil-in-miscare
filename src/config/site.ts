
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const publicSiteName = process.env.NEXT_PUBLIC_SITE_NAME?.trim();
const publicContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

export const siteConfig = {
  name: publicSiteName || "Vizibil în Mișcare",
  shortName: "Vizibil",
  url: publicSiteUrl || "https://www.vizibilinmiscare.ro",
  locale: "ro_RO",
  language: "ro",
  domain: "vizibilinmiscare.ro",
  tagline: "Publicitate locală pe trasee reale.",
  businessClaim:
    "Pune-ți afacerea pe mașini care circulă deja prin zonele unde sunt clienții tăi.",
  driverClaim: "Fă bani din drumurile pe care le faci deja.",
  proofLine: "Trasee reale. Preț clar. Campanii verificate.",
  description:
    "Vizibil în Mișcare conectează afaceri locale cu șoferi care circulă deja prin zone relevante. Publicitate pe mașini, trasee reale și campanii verificabile.",
  email: publicContactEmail || "contact@vizibilinmiscare.ro",
  instagram: "https://www.instagram.com/vizibilinmiscare/",
  launchCity: "București",
  nav: [
    { href: "/#pentru-afaceri", label: "Pentru afaceri" },
    { href: "/#driver", label: "Pentru șoferi" },
    { href: "/#cum-functioneaza", label: "Cum funcționează" },
    { href: "/#faq", label: "Întrebări" },
  ],
};