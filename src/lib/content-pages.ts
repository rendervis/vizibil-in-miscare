/** Ghiduri pentru intențiile de căutare de dinaintea alegerii unui format publicitar. */
export type ContentPage = {
  slug: string;
  audience: "business" | "driver";
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  related: Array<{ href: string; label: string }>;
  references?: Array<{ href: string; label: string }>;
};

export const contentPages: ContentPage[] = [
  {
    slug: "alternative-bolt-uber",
    audience: "driver",
    eyebrow: "Venit suplimentar cu mașina",
    title: "Alternative la Bolt și Uber: bani cu mașina personală",
    description: "Cauți alternative la Bolt și Uber? Compară ridesharingul, livrările, închirierea și reclama pe mașina personală: timp, drumuri și tipuri de venit.",
    h1: "Alternative la Bolt și Uber: cum poți face bani cu mașina personală",
    intro: "Dacă ai deja o mașină și cauți un venit suplimentar, nu toate opțiunile presupun să transporți pasageri. Compară ce ai de făcut, când conduci și ce costuri trebuie să iei în calcul înainte să alegi.",
    sections: [
      {
        heading: "Ce vrei de fapt: un al doilea job sau venit din drumurile existente?",
        paragraphs: [
          "Înainte să alegi o platformă, notează câte ore ai disponibile pe săptămână, cât te costă folosirea mașinii și dacă vrei să lucrezi în intervale dedicate. Ridesharingul și livrările sunt activități în care accepți comenzi. Publicitatea pe mașină este un alt mecanism: mesajul este afișat în timpul deplasărilor pe care le faci deja.",
          "Niciuna dintre variante nu garantează venit. În toate cazurile contează disponibilitatea activității în orașul tău și condițiile acceptate înainte de a începe.",
        ],
      },
      {
        heading: "Bolt și Uber: transport de pasageri în timpul pe care îl aloci curselor",
        paragraphs: [
          "În ridesharing primești cereri de transport și ești plătit pentru cursele efectuate, conform condițiilor platformei și modului de colaborare. Mașina, documentele, condițiile de eligibilitate și cheltuielile de operare trebuie verificate separat. Nu este același lucru cu a fi remunerat pentru un traseu pe care îl făceai oricum.",
          "Dacă ai căutat «cum intru la Bolt», răspunsul corect este să verifici înscrierea, cerințele și documentele direct la Bolt. Pentru Uber, consultă pagina sa oficială dedicată șoferilor. Vizibil în Mișcare nu înscrie șoferi în aceste servicii și nu oferă transport alternativ.",
        ],
        bullets: [
          "Clarifică dacă te înscrii individual sau printr-un partener/flotă și ce acte se cer în situația ta.",
          "Calculează combustibilul, întreținerea, uzura, comisioanele și timpul de așteptare, nu doar încasarea brută.",
          "Verifică cerințele oficiale actuale înainte de a investi în documente sau modificări ale mașinii.",
        ],
      },
      {
        heading: "Livrările: flexibilitate, dar și deplasări pentru comenzi",
        paragraphs: [
          "Livrările pot fi o alternativă dacă nu vrei să transporți pasageri. Totuși, accepți comenzi și te deplasezi la punctele de preluare și predare; timpul, costurile și disponibilitatea pot varia. Dacă folosești mașina în oraș, estimează și costul parcării sau al deplasărilor fără comandă.",
          "Verifică în platforma de livrări aleasă ce vehicule acceptă și care sunt condițiile de colaborare. Nu presupune că fiecare serviciu sau oraș are aceleași reguli.",
        ],
      },
      {
        heading: "Închirierea mașinii: alt model, alte responsabilități",
        paragraphs: [
          "Poți analiza închirierea dacă mașina stă mult timp nefolosită. Aici nu ești plătit pentru condus, ci pentru cedarea temporară a folosirii vehiculului. Contractul, asigurarea, uzura, predarea și riscul de indisponibilitate au o importanță diferită față de ridesharing.",
          "Nu compara un tarif de închiriere cu o recompensă de publicitate fără să verifici și riscurile, costurile și utilizarea efectivă a mașinii.",
        ],
      },
      {
        heading: "Reclamă pe mașina personală: bani din drumurile pe care le faci deja",
        paragraphs: [
          "Prin Vizibil în Mișcare, îți înscrii mașina și zonele prin care circuli în mod obișnuit. Dacă există o campanie locală potrivită, primești o ofertă cu recompensă fixă și durată clară. Poți decide dacă accepți și nu trebuie să conduci special pentru a acumula kilometri publicitari.",
          "Materialul publicitar este magnetic și detașabil, iar o mașină participă la campania unui singur advertiser în V1. Înscrierea nu garantează o ofertă: potrivirea depinde de cerere, de mașină și de traseele relevante. Advertiserul nu primește adresele tale private.",
        ],
      },
      {
        heading: "Cum alegi între variante",
        paragraphs: [
          "Dacă vrei să conduci în ore suplimentare și să preiei comenzi, investighează ridesharingul sau livrările. Dacă vrei să monetizezi o mașină nefolosită, verifică închirierea. Dacă deja circuli constant prin București și nu vrei ture suplimentare, vezi dacă mașina ta se potrivește unor campanii publicitare locale.",
          "Nu numi venitul din publicitate «pasiv» în sens strict: trebuie să accepți condițiile, să montezi și să menții materialul și să permiți verificarea campaniei. Dar mecanismul nu îți cere să transformi fiecare deplasare într-o cursă comercială.",
        ],
      },
    ],
    references: [
      { href: "https://bolt.eu/ro-ro/driver/", label: "Bolt — înscriere oficială pentru șoferi în România" },
      { href: "https://bolt.eu/ro-ro/driver/guide/", label: "Bolt — ghiduri și cerințe oficiale" },
      { href: "https://www.uber.com/ro/ro/drive/", label: "Uber — pagina oficială pentru șoferi" },
    ],
    related: [
      { href: "/castiga-bani-cu-masina", label: "Cum faci bani cu mașina prin Vizibil în Mișcare" },
      { href: "/reclama-pe-masina", label: "Cum funcționează reclama pe mașină" },
    ],
  },
  {
    slug: "promovare-afacere-locala",
    audience: "business",
    eyebrow: "Ghid pentru afaceri locale",
    title: "Cum îți promovezi afacerea locală și atragi clienți din zonă",
    description: "Idei practice de promovare a unei afaceri locale: Google, social media, recomandări, parteneriate, publicitate outdoor și reclamă pe mașini în București.",
    h1: "Cum îți promovezi afacerea locală și ajungi la clienții din zona ta",
    intro: "Un salon, un restaurant, o clinică și un showroom nu au nevoie de aceeași promovare. Înainte să alegi reclama, stabilește cine trebuie să te vadă, unde se află și ce acțiune vrei să facă.",
    sections: [
      {
        heading: "Începe cu clientul și aria în care îți desfășori activitatea",
        paragraphs: [
          "Definește aria din care vin clienții sau în care livrezi serviciul. O afacere de cartier poate avea nevoie de vizibilitate pe câteva străzi sau trasee, în timp ce un showroom poate atrage vizitatori din mai multe zone ale orașului. Nu este obligatoriu să plătești pentru expunere în tot Bucureștiul.",
          "Notează separat obiectivul: notorietate locală, vizite în locație, programări, solicitări de ofertă sau vânzări. Canalele de mai jos pot contribui diferit la fiecare dintre ele.",
        ],
      },
      {
        heading: "Fii ușor de găsit când oamenii caută deja ceea ce vinzi",
        paragraphs: [
          "Actualizează informațiile despre afacere: adresă, program, telefon, servicii și fotografii. Dacă ai o locație eligibilă, completează și menține profilul Google Business. Pe site, oferă o pagină clară pentru fiecare serviciu important, cu modalitatea de contact vizibilă pe mobil.",
          "Folosește limbajul clienților, nu doar terminologia internă. O persoană poate căuta «service auto în Militari» sau «salon în Floreasca», nu denumirea exactă a pachetului tău comercial.",
        ],
      },
      {
        heading: "Folosește social media pentru dovadă și contact, nu doar pentru postări",
        paragraphs: [
          "Arată produsul, spațiul, echipa, procesul și răspunsurile la întrebările repetitive. Pentru o afacere locală, informațiile practice și exemplele reale pot ajuta mai mult decât un calendar plin de postări generice.",
          "Dacă testezi reclame pe Meta sau Google, definește de la început publicul, raza geografică și acțiunea urmărită. Nu compara doar vizualizările cu numărul de clienți noi.",
        ],
      },
      {
        heading: "Recomandările și parteneriatele pot conecta afaceri din aceeași zonă",
        paragraphs: [
          "Un cabinet poate colabora cu o sală de sport, un showroom cu un specialist de amenajări, iar un restaurant cu alte afaceri care deservesc același public. Alege parteneriate relevante și oferă o recomandare utilă, nu doar un schimb de logouri.",
          "Cere feedback real clienților și fă ușoară distribuirea adresei sau a paginii tale. Nu cumpăra recenzii și nu inventa rezultate comerciale.",
        ],
      },
      {
        heading: "Publicitatea fizică ajută când contează prezența în spațiul local",
        paragraphs: [
          "Flyerele, semnalistica, materialele din vitrină și panourile pot avea roluri diferite. Un panou este prezent într-un punct fix; o reclamă mobilă se deplasează odată cu vehiculul. Alege formatul după locurile relevante pentru clienți, nu doar după suprafața materialului publicitar.",
          "În București, Vizibil în Mișcare conectează afaceri cu mașini private care circulă deja prin zonele dorite. Alegi aria și mașinile potrivite, vezi costul campaniei și poți verifica desfășurarea ei. Modelul nu promite automat vizite sau vânzări.",
        ],
      },
      {
        heading: "Cum verifici dacă promovarea își face treaba",
        paragraphs: [
          "Folosește o pagină de destinație, un cod dedicat, întrebarea «de unde ai aflat de noi?» și un mod consecvent de a număra solicitările. Compară perioade și zone similare, păstrând în minte sezonalitatea și celelalte campanii active.",
          "Separă livrarea reclamei de rezultatul comercial. O campanie pe mașini poate fi verificată ca prezență și desfășurare; numărul de programări sau cumpărări trebuie urmărit și de afacerea ta.",
        ],
      },
    ],
    related: [
      { href: "/publicitate-locala-bucuresti", label: "Publicitate locală în București" },
      { href: "/publicitate-pe-masini", label: "Campanii de publicitate pe mașini" },
      { href: "/idei-promovare-afacere-mica", label: "Idei de promovare cu buget limitat" },
      { href: "/alternative-panouri-publicitare", label: "Alternative la panourile fixe" },
    ],
  },
  {
    slug: "idei-promovare-afacere-mica",
    audience: "business",
    eyebrow: "Buget și promovare locală",
    title: "Idei de promovare pentru afaceri mici cu buget limitat",
    description: "Cum alegi idei de promovare pentru o afacere mică: priorități, canale locale, costuri de urmărit, experimente și măsurarea solicitărilor reale.",
    h1: "Idei de promovare pentru afaceri mici, fără să împrăștii bugetul",
    intro: "Când resursele sunt limitate, problema nu este lipsa canalelor de marketing, ci alegerea câtorva acțiuni pe care le poți susține și măsura. Iată cum construiești un plan local fără să cumperi vizibilitate la întâmplare.",
    sections: [
      {
        heading: "Rezolvă mai întâi lucrurile pentru care nu ai nevoie de buget media",
        paragraphs: [
          "Verifică dacă un client care te descoperă poate înțelege imediat ce vinzi, unde te găsește, cât de simplu este să te contacteze și cum poate face o programare. Corectează programul, adresa, meniul sau lista de servicii de pe site și din profilurile publice.",
          "Un anunț plătit care trimite oamenii la un site greu de folosit poate irosi bugetul. Începe cu formularul, telefonul, direcțiile și timpul de răspuns.",
        ],
      },
      {
        heading: "Alege o singură problemă și un public dintr-o zonă clară",
        paragraphs: [
          "«Vreau mai mult marketing» nu este un obiectiv măsurabil. În schimb, «vreau solicitări pentru serviciul X în zona Y» îți spune ce mesaj, canal și pagină trebuie să pregătești. O clinică și un restaurant au comportamente de cumpărare diferite chiar dacă sunt pe aceeași stradă.",
          "Dacă te adresezi întregului oraș, verifică dacă poți livra efectiv în acea arie. Dacă depinzi de trafic pietonal sau de programări în sediu, începe aproape de locația ta.",
        ],
      },
      {
        heading: "Combină un canal pentru cererea existentă cu unul pentru descoperire",
        paragraphs: [
          "Căutările locale și o pagină bună de servicii răspund oamenilor care știu deja ce le trebuie. O recomandare, o colaborare în cartier, o vitrină vizibilă sau o reclamă pe mașină pot expune afacerea celor care încă nu s-au gândit să o caute.",
          "Nu încerca să fii simultan pe toate platformele. Un canal întreținut consecvent și o metodă clară de contact sunt mai utile decât cinci conturi abandonate.",
        ],
      },
      {
        heading: "Dacă testezi publicitatea fizică, cumpără relevanță, nu doar suprafață",
        paragraphs: [
          "Întreabă unde va fi văzut mesajul, cât durează campania, ce materiale sunt incluse și cum se confirmă livrarea. Un panou fix are avantajul unui punct stabil. O mașină cu reclamă se poate deplasa pe traseele sale normale prin mai multe zone, dar nu îți garantează că fiecare trecător îți va deveni client.",
          "Prin Vizibil în Mișcare poți solicita o campanie locală și verifica disponibilitatea vehiculelor relevante înainte de plată. Nu este nevoie de un abonament pentru a evalua un plasament.",
        ],
      },
      {
        heading: "Ține o evidență simplă a costului și rezultatului",
        paragraphs: [
          "Pentru fiecare acțiune, notează suma investită, perioada, zona, mesajul și solicitările primite. Folosește, unde are sens, linkuri cu parametri de campanie, coduri ori întrebarea «cum ai aflat de noi?». Nu confunda numărul de afișări cu încasările.",
          "Nu atribui toate vânzările unui singur canal când rulezi simultan mai multe activități. Uită-te la semnale și repetă ce poate fi justificat cu date, nu doar cu impresii.",
        ],
      },
      {
        heading: "Extinde doar după ce ai înțeles ce funcționează pentru afacerea ta",
        paragraphs: [
          "Odată ce ai mesaje clare, contact funcțional și un mod de evaluare, poți adăuga un nou cartier, un canal sau un format publicitar. Creșterea bugetului înainte să clarifici aceste lucruri nu repară un proces de vânzare nefuncțional.",
          "Dacă urmărești vizibilitatea în București, compară opțiunile locale: profilul de căutare, social media, parteneriatele, panourile și mașinile cu publicitate. Alege în funcție de aria și clientul tău, nu de o promisiune universală de rezultate.",
        ],
      },
    ],
    related: [
      { href: "/promovare-afacere-locala", label: "Ghid complet de promovare locală" },
      { href: "/publicitate-locala-bucuresti", label: "Publicitate locală în București" },
      { href: "/publicitate-pe-masini", label: "Cum funcționează publicitatea pe mașini" },
    ],
  },
];

export function getContentPage(slug: string) {
  return contentPages.find((page) => page.slug === slug);
}
