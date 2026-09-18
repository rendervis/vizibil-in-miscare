const faqs = [
  ["Cum funcționează pentru o afacere?", "Alegi zona în care vrei vizibilitate, selectezi una sau mai multe mașini cu trasee relevante și trimiți cererea de campanie. Confirmăm disponibilitatea înainte de orice plată."],
  ["Șoferul trebuie să conducă mai mult?", "Nu. Modelul este construit în jurul drumurilor pe care șoferul le face deja. Nu vrem kilometri suplimentari făcuți doar pentru reclamă."],
  ["Ce fel de reclamă se pune pe mașină?", "Lucrăm cu materiale publicitare detașabile și compatibile cu vehiculul, nu cu o colantare permanentă obligatorie."],
  ["Mașinile din marketplace sunt disponibile acum?", "Profilurile afișate pe site sunt exemple reprezentative. Pentru o campanie reală, disponibilitatea și traseul mașinii se confirmă înainte de lansare."],
  ["Ce vede business-ul despre traseul șoferului?", "Doar informații agregate utile campaniei: zone, intervale și profil de acoperire. Adresele private ale șoferului nu sunt parte din produs."],
  ["Cât câștigă un șofer?", "Recompensa depinde de campanie. Șoferul vede suma fixă și durata înainte să accepte. Exemplul de pe site este orientativ, nu o promisiune universală."],
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
          <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Întrebări frecvente</div>
          <h2 className="font-display mt-4 text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-6xl">Ce trebuie să știi înainte să te înscrii.</h2>
        </div>
        <div className="divide-y divide-[var(--ink)]/12 border-y border-[var(--ink)]/12">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black tracking-[-.015em] marker:hidden">
                {q}<span className="text-xl font-normal text-[var(--route)] transition duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-6 text-[var(--ink)]/72">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
