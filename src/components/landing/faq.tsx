const faqs = [
  ["Mașinile afișate acum sunt reale?", "Nu. În etapa de validare, piața folosește inventar demonstrativ marcat clar. Vrem să măsurăm ce aleg afacerile înainte să construim produsul complet. Mașinile reale vor apărea doar după calificarea traseului."],
  ["Șoferul trebuie să conducă mai mult?", "Nu. Ideea este exact invers: primește oferte care se potrivesc cu drumurile pe care le face deja. Kilometrii suplimentari făcuți doar pentru bani nu sunt obiectivul produsului."],
  ["Cum știe o afacere unde circulă mașina?", "În produsul final, profilul de rută va fi construit din mișcarea normală observată în timp și afișat agregat. Adresa de acasă sau locul de muncă al șoferului nu vor fi expuse."],
  ["Pot rezerva mai multe mașini?", "Da. O campanie poate conține mai multe plasamente. Fiecare șofer primește separat o recompensă fixă pentru plasamentul său."],
  ["Trebuie colantată permanent mașina?", "Nu pentru pilot. Direcția de produs este material publicitar detașabil și compatibil cu vehiculul, furnizat de business sau de un partener de print."],
  ["Când plătesc?", "În marketplace-ul real, plata va fi cerută după ce plasamentul este confirmat de șofer. Această pagină de validare nu încasează campanii și nu pretinde că are inventar real."],
];

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section id="faq" className="bg-[var(--paper)] py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Întrebări directe</div>
          <h2 className="font-display mt-4 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-6xl">Fără promisiuni inventate.</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-[var(--ink)]/55">Este un test de piață. Explicăm ce este demo acum și ce ar face produsul real.</p>
        </div>
        <div className="divide-y divide-[var(--ink)]/10 border-y border-[var(--ink)]/10">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black tracking-[-.015em] marker:hidden">
                {q}<span className="text-xl font-normal text-[var(--route)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-6 text-[var(--ink)]/58">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
