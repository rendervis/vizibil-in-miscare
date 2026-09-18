import { media } from "@/config/media";

export type SeoAudience = "business" | "driver";

export type SeoPage = {
  slug: keyof typeof media.seo;
  audience: SeoAudience;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  supportImage: string;
  supportAlt: string;
  sections: Array<{ heading: string; body: string }>;
  faq: Array<[string, string]>;
  related: Array<{ href: string; label: string }>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "publicitate-pe-masini",
    audience: "business",
    title: "Publicitate pe mașini pentru afaceri locale",
    description: "Publicitate pe mașini în București, pe trasee locale relevante. Vezi cum alegi zona, mașinile și o campanie verificabilă cu Vizibil în Mișcare.",
    keywords: ["publicitate pe masini", "publicitate pe mașini București", "reclama pe masini", "reclama auto locală"],
    eyebrow: "Publicitate pe mașini",
    h1: "Publicitate pe mașini care circulă deja prin zonele unde sunt clienții tăi.",
    intro: "Vizibil în Mișcare transformă traseele obișnuite ale unor mașini în plasamente publicitare locale. Alegi zona, compari profilurile potrivite și construiești campania fără să cumperi un panou fix.",
    heroImage: media.seo["publicitate-pe-masini"].hero,
    heroAlt: "Mașină cu reclamă detașabilă pentru o afacere locală, fotografiată pe o stradă din București",
    supportImage: media.seo["publicitate-pe-masini"].support,
    supportAlt: "Detaliu cu magnet publicitar montat pe portiera unei mașini",
    sections: [
      { heading: "Alegi zona înainte să alegi mașina", body: "O campanie locală are sens atunci când mașina circulă în zonele potrivite. De aceea, selecția pornește de la traseu și acoperire, nu doar de la marca sau modelul vehiculului." },
      { heading: "Materialul publicitar rămâne simplu și detașabil", body: "Folosim un format ușor de montat, verificat și îndepărtat. Scopul este vizibilitate locală pe durata campaniei, nu transformarea permanentă a mașinii." },
      { heading: "Costul campaniei este clar înainte de lansare", body: "Business-ul vede costul plasamentului, durata și mașinile selectate. Șoferul vede separat recompensa lui înainte să accepte. Nu este nevoie de abonament." },
      { heading: "Livrarea trebuie să poată fi verificată", body: "Campania pornește după confirmarea mașinii și a materialului montat. Verificările urmăresc desfășurarea campaniei, fără promisiuni artificiale despre vânzări sau număr de impresii." },
    ],
    faq: [
      ["Cât costă publicitatea pe o mașină?", "Costul depinde de campanie, durată și profilul mașinii. Pe site afișăm exemple de preț pentru 28 de zile, iar disponibilitatea reală se confirmă înainte de lansare."],
      ["Pot alege mai multe mașini?", "Da. O campanie poate include una sau mai multe mașini, fiecare fiind un plasament separat în aceeași campanie."],
      ["Este nevoie de colantare completă?", "Nu. Direcția este publicitate detașabilă, compatibilă cu vehiculul și ușor de verificat."],
    ],
    related: [
      { href: "/publicitate-locala-bucuresti", label: "Publicitate locală în București" },
      { href: "/publicitate-mobila", label: "Publicitate mobilă" },
      { href: "/alternative-panouri-publicitare", label: "Alternative la panouri" },
    ],
  },
  {
    slug: "reclama-pe-masina",
    audience: "business",
    title: "Reclamă pe mașină: cum funcționează pentru afaceri și șoferi",
    description: "Reclamă pe mașină cu material detașabil, trasee locale și recompensă fixă pentru șofer. Vezi modelul Vizibil în Mișcare pentru București.",
    keywords: ["reclama pe masina", "reclamă pe mașină", "reclame pe masini", "reclama auto"],
    eyebrow: "Reclamă pe mașină",
    h1: "Reclamă pe mașină, fără drumuri făcute doar pentru reclamă.",
    intro: "Afacerea cumpără vizibilitate locală. Șoferul primește o recompensă fixă pentru o campanie care se potrivește cu drumurile lui normale. Platforma face legătura dintre cele două părți și verifică desfășurarea.",
    heroImage: media.seo["reclama-pe-masina"].hero,
    heroAlt: "Femeie lângă o mașină cu reclamă magnetică detașabilă pentru un business local",
    supportImage: media.seo["reclama-pe-masina"].support,
    supportAlt: "Prim-plan cu o reclamă detașabilă montată pe o mașină urbană",
    sections: [
      { heading: "Pentru afacere: alegi unde vrei să fii văzut", body: "Zona și traseul sunt mai importante decât simpla prezență a unei mașini. Marketplace-ul este gândit să arate profiluri relevante pentru aria în care se află clienții tăi." },
      { heading: "Pentru șofer: vezi suma înainte să accepți", body: "Oferta indică durata și recompensa fixă. Șoferul poate accepta sau refuza fără să fie obligat să schimbe rutina zilnică pentru a genera kilometri suplimentari." },
      { heading: "Pentru campanie: folosim dovadă, nu presupuneri", body: "Montarea materialului și desfășurarea campaniei sunt verificabile. Nu confundăm traseul parcurs cu vânzările generate și nu prezentăm estimări ca rezultate garantate." },
    ],
    faq: [
      ["Pot câștiga bani cu reclama pe mașina personală?", "Da, dacă mașina și traseul se potrivesc unei campanii disponibile. Recompensa este prezentată înainte de acceptare."],
      ["Trebuie să conduc pe un traseu impus?", "Nu. Modelul Vizibil în Mișcare pornește de la drumurile pe care le faci deja."],
      ["Reclama este permanentă?", "Nu. Materialul este gândit să fie detașabil la finalul campaniei."],
    ],
    related: [
      { href: "/castiga-bani-cu-masina", label: "Câștigă bani cu mașina" },
      { href: "/publicitate-pe-masini", label: "Publicitate pe mașini" },
      { href: "/publicitate-mobila", label: "Publicitate mobilă" },
    ],
  },
  {
    slug: "castiga-bani-cu-masina",
    audience: "driver",
    title: "Câștigă bani cu mașina din drumurile pe care le faci deja",
    description: "Vrei să câștigi bani cu mașina personală? Înscrie mașina în Vizibil în Mișcare și primește oferte de reclamă potrivite traseului tău.",
    keywords: ["castiga bani cu masina", "câștigă bani cu mașina", "reclama pe masina bani", "venit suplimentar cu masina"],
    eyebrow: "Pentru șoferi",
    h1: "Câștigă bani cu mașina fără să-ți inventezi drumuri în plus.",
    intro: "Îți folosești mașina ca de obicei. Dacă traseul tău se potrivește unei campanii locale, primești o ofertă cu sumă și durată clare. Tu decizi dacă o accepți.",
    heroImage: media.seo["castiga-bani-cu-masina"].hero,
    heroAlt: "Șoferiță din București lângă mașina personală cu reclamă detașabilă",
    supportImage: media.seo["castiga-bani-cu-masina"].support,
    supportAlt: "Șoferiță verificând pe telefon detaliile unei campanii de reclamă auto",
    sections: [
      { heading: "Înscrii mașina și zonele prin care circuli", body: "La început ne interesează orașul, mașina și rutina generală de deplasare. Adresele private nu trebuie expuse advertiserului." },
      { heading: "Primești oferte doar când există o potrivire", body: "O clinică, un showroom sau un alt business poate căuta vizibilitate exact în zonele prin care treci. Atunci primești oferta relevantă pentru mașina ta." },
      { heading: "Vezi suma înainte să accepți", body: "Nu lucrăm cu promisiuni de tip «până la». Oferta de campanie trebuie să aibă o recompensă fixă și o durată clară înainte să spui da." },
      { heading: "Conduci normal pe durata campaniei", body: "Nu vrem să te plimbi fără motiv pentru a acumula kilometri. Ideea este să fii plătit pentru expunerea pe traseele pe care le ai deja." },
    ],
    faq: [
      ["Cât pot câștiga?", "Suma diferă de la o campanie la alta. Pe site folosim un exemplu de 300 RON pentru 28 de zile; oferta reală este afișată înainte de acceptare."],
      ["Ce mașini sunt acceptate?", "Evaluăm starea mașinii, compatibilitatea cu materialul publicitar și relevanța traseului. Nu promitem acceptarea automată a oricărui vehicul."],
      ["Trebuie să plătesc ceva ca șofer?", "Nu există abonament pentru șofer. Condițiile concrete ale campaniei sunt comunicate înainte de acceptare."],
    ],
    related: [
      { href: "/reclama-pe-masina", label: "Cum funcționează reclama pe mașină" },
      { href: "/publicitate-pe-masini", label: "Publicitate pe mașini" },
    ],
  },
  {
    slug: "publicitate-locala-bucuresti",
    audience: "business",
    title: "Publicitate locală în București pe mașini și trasee reale",
    description: "Publicitate locală în București pentru afaceri care vor vizibilitate în zone precise. Campanii pe mașini care circulă deja prin cartiere relevante.",
    keywords: ["publicitate locala Bucuresti", "publicitate locală București", "reclama locala Bucuresti", "promovare locala Bucuresti"],
    eyebrow: "Publicitate locală București",
    h1: "Fii văzut în zonele din București care contează pentru afacerea ta.",
    intro: "Dacă afacerea ta depinde de clienți locali, nu ai nevoie neapărat de expunere în tot orașul. Vizibil în Mișcare este construit pentru selecție pe zone și trasee relevante.",
    heroImage: media.seo["publicitate-locala-bucuresti"].hero,
    heroAlt: "Mașină cu reclamă locală circulând prin București într-o zonă urbană aglomerată",
    supportImage: media.seo["publicitate-locala-bucuresti"].support,
    supportAlt: "Hartă simplificată a Bucureștiului cu zone locale și traseu de campanie",
    sections: [
      { heading: "Începi cu zona, nu cu formatul", body: "Pipera, Floreasca, Aviatorilor, Militari sau altă zonă: întrebarea inițială este unde vrei să fii văzut. Apoi cauți mașinile care au sens pentru acea arie." },
      { heading: "Potrivit pentru business-uri cu rază locală", body: "Clinici, săli, service-uri, showroom-uri, agenții imobiliare, restaurante, servicii pentru casă sau deschideri de locații pot avea nevoie de prezență repetată într-o zonă limitată." },
      { heading: "Poți începe cu o singură mașină", body: "Poți începe cu un singur plasament local, apoi să extinzi numărul de mașini dacă formatul are sens pentru afacerea ta." },
      { heading: "Nu confundăm mișcarea cu performanța comercială", body: "Putem verifica desfășurarea campaniei și traseele relevante. Vânzările, lead-urile sau vizitele în locație trebuie măsurate separat de business." },
    ],
    faq: [
      ["În ce zone din București va fi disponibil?", "Disponibilitatea din București se construiește în funcție de șoferii înscriși. Zonele disponibile vor depinde de traseele reale ale acestora."],
      ["Pot cere o anumită zonă?", "Da. Cererea business-ului pornește de la zona dorită; apoi verificăm dacă există mașini cu traseu relevant."],
      ["Pot promova o singură locație?", "Da. Conceptul este potrivit inclusiv pentru o clinică, sală, showroom sau altă locație care vrea vizibilitate în jurul unei arii clare."],
    ],
    related: [
      { href: "/publicitate-pe-masini", label: "Publicitate pe mașini" },
      { href: "/alternative-panouri-publicitare", label: "Alternative la panouri" },
      { href: "/publicitate-mobila", label: "Publicitate mobilă" },
    ],
  },
  {
    slug: "publicitate-mobila",
    audience: "business",
    title: "Publicitate mobilă pentru afaceri locale",
    description: "Publicitate mobilă pe mașini care circulă deja prin oraș. Alege zone relevante, mașini potrivite și o campanie locală verificabilă.",
    keywords: ["publicitate mobila", "publicitate mobilă", "reclama mobila", "publicitate auto"],
    eyebrow: "Publicitate mobilă",
    h1: "Publicitate mobilă care urmează viața reală a orașului.",
    intro: "În loc să rămână într-un singur punct, mesajul tău se deplasează odată cu mașina. Diferența importantă este să alegi trasee relevante, nu să cumperi kilometri fără context.",
    heroImage: media.seo["publicitate-mobila"].hero,
    heroAlt: "Mașină cu reclamă mobilă circulând printr-o zonă comercială din București",
    supportImage: media.seo["publicitate-mobila"].support,
    supportAlt: "Mai multe mașini cu reclame detașabile într-o campanie de publicitate mobilă",
    sections: [
      { heading: "Mesajul se deplasează între zone", body: "O mașină poate trece în mod repetat prin zone rezidențiale, de birouri și comerciale. Profilul de traseu ajută business-ul să aleagă mișcarea care are sens pentru campanie." },
      { heading: "Campaniile pot folosi una sau mai multe mașini", body: "Poți începe cu un singur plasament sau poți combina mai multe mașini pentru acoperire mai largă. Fiecare mașină rămâne un plasament separat în cadrul campaniei." },
      { heading: "Formatul rămâne fizic, selecția devine digitală", body: "Reclama este pe vehicul, dar căutarea, selecția, confirmarea și verificarea campaniei sunt gândite ca un flux de marketplace." },
    ],
    faq: [
      ["Ce înseamnă publicitate mobilă?", "În acest context, este publicitate fizică afișată pe vehicule care circulă prin oraș, în locul unui suport fix."],
      ["Este același lucru cu un camion publicitar?", "Nu. Vizibil în Mișcare pornește de la mașini care fac deja deplasări normale, nu de la vehicule trimise special să circule cu reclamă."],
      ["Pot folosi mai multe mașini în aceeași campanie?", "Da. O campanie poate grupa mai multe plasamente, fiecare cu mașina și traseul său."],
    ],
    related: [
      { href: "/publicitate-pe-masini", label: "Publicitate pe mașini" },
      { href: "/publicitate-locala-bucuresti", label: "Publicitate locală București" },
      { href: "/alternative-panouri-publicitare", label: "Alternative la panouri" },
    ],
  },
  {
    slug: "alternative-panouri-publicitare",
    audience: "business",
    title: "Alternative la panouri publicitare pentru promovare locală",
    description: "Cauți alternative la panouri publicitare? Compară publicitatea fixă cu o campanie mobilă pe mașini care circulă deja prin zone relevante.",
    keywords: ["alternative panouri publicitare", "alternative billboard", "publicitate stradala alternativa", "promovare locala"],
    eyebrow: "Alternative la panouri publicitare",
    h1: "O alternativă la panoul fix: vizibilitate care se mișcă prin zona ta.",
    intro: "Panoul publicitar cumpără un punct. O campanie pe mașini cumpără prezență mobilă pe trasee care există deja. Nu sunt produse identice — iar diferența poate fi utilă pentru un business local.",
    heroImage: media.seo["alternative-panouri-publicitare"].hero,
    heroAlt: "Mașină cu reclamă locală trecând pe lângă un panou publicitar fix în București",
    supportImage: media.seo["alternative-panouri-publicitare"].support,
    supportAlt: "Comparație vizuală între panou publicitar fix și reclamă mobilă pe mașină",
    sections: [
      { heading: "Panou fix: prezență într-un singur loc", body: "Un panou poate fi foarte bun când intersecția, artera sau locația sunt exact cele potrivite. Avantajul este stabilitatea punctului; dezavantajul este că mesajul nu se deplasează." },
      { heading: "Mașină: prezență pe un traseu", body: "O mașină poate trece prin mai multe zone într-o săptămână. Asta nu o face automat mai bună decât un panou; o face un alt tip de inventar, potrivit pentru alte obiective locale." },
      { heading: "Marketplace-ul face selecția mai concretă", body: "În loc să ceri o ofertă generică, direcția Vizibil în Mișcare este să alegi zona, să vezi profilurile disponibile și să construiești campania cu cost clar." },
      { heading: "Poți testa înainte să scalezi", body: "Pentru o afacere locală, o campanie cu una sau câteva mașini poate fi o modalitate de a testa formatul înainte de o campanie mai mare." },
    ],
    faq: [
      ["Este publicitatea pe mașini mai bună decât un panou?", "Nu există un răspuns universal. Panoul cumpără un punct fix; mașina oferă prezență mobilă. Alegerea depinde de zonă, obiectiv, buget și felul în care vrei să fii văzut."],
      ["Pot combina panouri și mașini?", "Da. Sunt canale diferite și pot face parte din același mix local dacă fiecare are un rol clar."],
      ["Cum măsor dacă funcționează?", "Platforma poate verifica livrarea campaniei. Pentru rezultate comerciale, business-ul poate folosi coduri, landing pages, numere dedicate sau comparații de trafic și lead-uri."],
    ],
    related: [
      { href: "/publicitate-mobila", label: "Publicitate mobilă" },
      { href: "/publicitate-locala-bucuresti", label: "Publicitate locală București" },
      { href: "/publicitate-pe-masini", label: "Publicitate pe mașini" },
    ],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
