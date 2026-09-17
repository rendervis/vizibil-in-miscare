export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  faq: Array<[string, string]>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "publicitate-pe-masini",
    title: "Publicitate pe mașini pentru afaceri locale",
    description: "Cum poate funcționa publicitatea locală pe mașini care circulă deja în zone relevante și ce validăm prin pilotul nostru din București.",
    eyebrow: "Publicitate pe mașini",
    h1: "Publicitate pe mașini, gândită pentru trasee locale reale.",
    intro: "Testăm un marketplace în care o afacere poate alege plasamente pe mașini ale căror trasee obișnuite acoperă zonele în care se află clienții săi.",
    sections: [
      { heading: "De ce nu este doar colantare auto", body: "Produsul urmărește să transforme mișcarea normală a unei mașini într-un inventar local care poate fi rezervat. Mașina trebuie să fie relevantă prin traseu, nu doar prin faptul că există." },
      { heading: "Ce ar vedea advertiserul", body: "Zone agregate, intervale uzuale, acoperire estimată pe baza istoricului și costul plasamentului înainte de rezervare. Adresele private ale șoferului nu fac parte din produs." },
      { heading: "Ce validăm acum", body: "Interesul real al firmelor, nivelul de preț acceptabil și ce tipuri de traseu sau vehicul sunt selectate înainte să construim infrastructura completă." },
    ],
    faq: [["Mașinile sunt deja disponibile?", "Inventarul din demo este sintetic și marcat ca atare. Pilotul colectează cerere și șoferi interesați înainte de lansarea marketplace-ului real."], ["Este o agenție de publicitate?", "Direcția este un marketplace self-service, nu o agenție care cere brief și construiește manual fiecare campanie."]],
  },
  {
    slug: "reclama-pe-masina",
    title: "Reclamă pe mașină: model local cu traseu verificabil",
    description: "Reclamă detașabilă pe mașini: cum poate fi aleasă o mașină după zonele în care circulă și cum ar fi verificată o campanie.",
    eyebrow: "Reclamă pe mașină",
    h1: "Reclama pe mașină poate deveni inventar local, nu doar un sticker.",
    intro: "Conceptul pilot conectează firme locale cu șoferi ale căror drumuri obișnuite se potrivesc geografic cu publicul afacerii.",
    sections: [
      { heading: "Traseul înaintea mașinii", body: "În produsul propus, o mașină nu devine disponibilă doar pentru că proprietarul s-a înscris. Traseul normal este mai întâi observat și transformat într-un profil agregat." },
      { heading: "Material detașabil", body: "Pilotul este gândit în jurul materialelor detașabile compatibile cu vehiculul, fără ca platforma să devină atelier de colantare." },
      { heading: "Livrare verificată", body: "Pornirea campaniei, mișcarea în timpul perioadei și verificările vizuale oferă dovezi despre livrare fără să pretindă că putem măsura câți oameni s-au uitat efectiv la reclamă." },
    ],
    faq: [["Șoferul primește bani per kilometru?", "Direcția este o recompensă fixă pentru un plasament care se potrivește traseului normal, nu stimularea kilometrilor inutili."], ["Pot fi mai multe reclame pe aceeași mașină?", "Pentru pilot, modelul este un advertiser activ per mașină pentru simplitate și claritate."]],
  },
  {
    slug: "castiga-bani-cu-masina",
    title: "Câștigă bani cu mașina din drumurile pe care le faci deja",
    description: "Înscrie-te în pilot ca șofer: traseul tău obișnuit poate primi oferte fixe pentru reclame locale detașabile, fără trasee speciale.",
    eyebrow: "Pentru șoferi",
    h1: "Fă bani din drumurile pe care le faci deja.",
    intro: "Nu vrem să plătim oameni să conducă fără rost. Ideea este ca traseele pe care le faci deja să poată primi oferte de la afaceri care vor vizibilitate în acele zone.",
    sections: [
      { heading: "Cum intră o mașină în piață", body: "După înscriere, produsul final va învăța mișcarea normală timp de mai multe zile. Abia apoi traseul poate deveni inventar disponibil." },
      { heading: "Știi recompensa înainte", body: "Fiecare ofertă arată suma fixă, perioada, cerințele și reclama înainte să accepți. Nu există obligația de a accepta campanii care nu îți plac." },
      { heading: "Fără trasee speciale", body: "O campanie trebuie să se potrivească rutinei existente. Obiectivul nu este să creeze trafic suplimentar sau să transforme șoferul într-un curier de publicitate." },
    ],
    faq: [["Cât pot câștiga?", "Pilotul testează încă nivelul real de recompensă. Pagina principală prezintă oferte demonstrative, nu venit garantat."], ["Trebuie să țin aplicația deschisă?", "În produsul mobil final, route learning ar fi proiectat pentru localizare în fundal cu permisiunile explicite ale utilizatorului."]],
  },
  {
    slug: "publicitate-locala-bucuresti",
    title: "Publicitate locală în București bazată pe trasee reale",
    description: "Pilot pentru publicitate locală în București: selectează zone și testează mașini care ar circula deja prin cartierele relevante pentru afacerea ta.",
    eyebrow: "București",
    h1: "Publicitate locală în București, construită în jurul zonelor care contează.",
    intro: "Pentru o clinică, sală sau afacere locală contează mai mult unde este văzută decât câte mașini există în total. De aceea demo-ul pornește de la zonă.",
    sections: [
      { heading: "Selectezi zona, nu un pachet generic", body: "Pipera, Floreasca, Aviatorilor sau alte zone pot fi căutate separat. Marketplace-ul ar returna doar inventarul cu istoric relevant pentru țintă." },
      { heading: "Campanii mici, testabile", body: "Direcția comercială este să permită unei firme locale să înceapă cu una sau câteva mașini fără contract de agenție și fără abonament." },
      { heading: "Pilot înainte de aplicație", body: "În această etapă măsurăm ce caută firmele, ce inventar selectează și dacă există intenție de rezervare la prețuri realiste." },
    ],
    faq: [["Este disponibil doar în București?", "București este piața pilot pentru validare. Arhitectura propusă este multi-city și multi-country."], ["Pot căuta după cartier?", "Demo-ul pornește exact de la această idee: business-ul caută zona și compară inventarul compatibil."]],
  },
  {
    slug: "publicitate-mobila",
    title: "Publicitate mobilă pentru afaceri locale",
    description: "Un model de publicitate mobilă cu mașini obișnuite, rute învățate înainte de rezervare și campanii verificate după lansare.",
    eyebrow: "Publicitate mobilă",
    h1: "Publicitate mobilă fără camion publicitar și fără agenție grea.",
    intro: "Testăm o variantă mai simplă: mașini obișnuite, deplasări care existau deja, material detașabil și un marketplace unde business-ul poate vedea și rezerva inventarul.",
    sections: [
      { heading: "Ce cumpără de fapt business-ul", body: "Nu cumpără kilometri fără context. Cumpără un plasament temporar pe un vehicul cu un profil de mișcare relevant pentru zona selectată." },
      { heading: "De ce fixed reward pentru șofer", body: "Recompensa fixă păstrează incentivația aliniată cu ideea de traseu normal și evită transformarea produsului într-o cursă după kilometri." },
      { heading: "Ce putem dovedi", body: "Putem raporta zile active, distanță verificată în zone, profil de acoperire și verificări vizuale. Nu prezentăm estimări de impresii drept certitudini." },
    ],
    faq: [["Este DOOH?", "Nu în sensul clasic al ecranelor digitale mobile. Pilotul este axat pe suport fizic detașabil și inventar de rută."], ["Este pentru branduri mari?", "Poate servi și campanii mai mari, dar primul caz de utilizare este business-ul local care vrea o campanie mică și controlabilă."]],
  },
  {
    slug: "alternative-panouri-publicitare",
    title: "Alternative la panouri publicitare pentru promovare locală",
    description: "Compară ideea unui plasament mobil local cu panourile clasice: rută, flexibilitate, campanii mici și verificare fără abonament.",
    eyebrow: "Alternative OOH",
    h1: "O alternativă flexibilă la un panou fix: inventar care se mișcă deja.",
    intro: "Un panou are un punct fix. O mașină are un traseu. Pilotul testează dacă acel traseu poate fi cumpărat simplu de afaceri locale ca plasament publicitar temporar.",
    sections: [
      { heading: "Nu este un substitut universal", body: "Un panou bun are avantajele lui. Marketplace-ul propus este mai potrivit atunci când business-ul vrea să testeze mai multe coridoare locale cu buget mai mic și inventar flexibil." },
      { heading: "Mai multe plasamente într-o campanie", body: "Un buget poate fi împărțit între mai multe mașini, fiecare cu propriul traseu și propriul plasament confirmat." },
      { heading: "Date înainte și după", body: "Istoricul agregat ajută la alegere înainte de rezervare, iar verificarea de campanie arată ce s-a livrat după lansare." },
    ],
    faq: [["Este mai bun decât un billboard?", "Nu există un câștigător universal. Sunt canale diferite. Pilotul testează dacă flexibilitatea și relevanța locală justifică alegerea pentru anumite afaceri."], ["Trebuie să rezerv mai multe mașini?", "Nu. Modelul permite un singur plasament, dar campaniile multi-car pot acoperi mai multe coridoare."]],
  },
];

export function getSeoPage(slug: string) { return seoPages.find((page) => page.slug === slug); }
