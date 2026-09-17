import { Badge } from "@/components/ui/badge";
import { ArrowDown, Banknote, Map, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Map,
    n: "01",
    title: "Învățăm traseul real",
    body: "Șoferul conduce normal câteva zile. Platforma construiește un profil agregat al zonelor în care circulă deja, înainte ca mașina să devină inventar disponibil.",
  },
  {
    icon: Banknote,
    n: "02",
    title: "Afacerea rezervă vizibilitatea",
    body: "Alege zona, vede profiluri compatibile și costul total. Fiecare șofer vede separat recompensa fixă înainte să accepte.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Campania este verificată",
    body: "Dovadă la montare, traseu în timpul campaniei și verificări vizuale. Raportăm ce putem demonstra, fără promisiuni inventate despre vânzări sau impresii.",
  },
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="paper-grid bg-[var(--paper)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Badge className="border-[var(--ink)]/10 bg-white/60 text-[var(--ink)]/55">Cum funcționează</Badge>
        <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display max-w-xl text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-7xl">Nu vindem kilometri. Vindem vizibilitate pe trasee care există deja.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--ink)]/60">Asta este diferența de produs: mișcarea normală este observată înainte de listare, iar livrarea este verificată după lansarea campaniei.</p>
          </div>
          <div className="grid gap-3">
            {steps.map(({ icon: Icon, n, title, body }, index) => (
              <article key={n} className="relative grid gap-5 rounded-[1.75rem] border border-[var(--ink)]/10 bg-white/65 p-6 shadow-[0_18px_70px_rgba(31,24,48,.06)] md:grid-cols-[64px_1fr]">
                <div className="grid size-14 place-items-center rounded-2xl bg-[var(--ink)] text-[var(--signal)]"><Icon className="size-5" /></div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--route)]">Pasul {n}</div>
                  <h3 className="mt-2 text-xl font-extrabold tracking-[-.025em]">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink)]/55">{body}</p>
                </div>
                {index < steps.length - 1 ? <ArrowDown className="absolute -bottom-3 left-[34px] z-10 size-6 rounded-full bg-[var(--signal)] p-1 text-[var(--signal-foreground)]" /> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
