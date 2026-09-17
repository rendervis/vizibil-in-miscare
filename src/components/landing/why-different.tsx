import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const yes = [
  "Traseu observat înainte ca mașina să devină inventar",
  "Costul campaniei cunoscut înainte de confirmare",
  "Recompensă fixă pentru șofer înainte de acceptare",
  "Un advertiser per mașină în pilot",
  "Material detașabil, fără colantare profesională obligatorie",
  "Verificarea campaniei inclusă în produs",
];

const no = [
  "Nu funcționăm ca o agenție care cere brief și trimite ofertă",
  "Nu plătim șoferul să genereze kilometri inutili",
  "Nu obligăm afacerea sau șoferul la abonament",
  "Nu cerem hardware OBD în prima versiune",
  "Nu promitem clienți sau impresii pe care nu le putem demonstra",
  "Nu prezentăm inventarul demonstrativ drept inventar real",
];

export function WhyDifferent() {
  return (
    <section className="bg-[var(--paper-2)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-[var(--ink)]/10 bg-white/70 text-[var(--ink)]/55">De ce e diferit</Badge>
          <h2 className="font-display mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-7xl">Mai puțină agenție. Mai mult marketplace.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--ink)]/58">Cauți zona, vezi inventarul potrivit, alegi plasamentele, confirmi campania și urmărești livrarea.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[var(--ink)] p-7 text-white md:p-9">
            <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--signal)]">Ce construim</div>
            <div className="mt-6 grid gap-4">
              {yes.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-white/70"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--signal)] text-[var(--signal-foreground)]"><Check className="size-3" /></span>{item}</div>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--ink)]/10 bg-white/70 p-7 md:p-9">
            <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Ce evităm</div>
            <div className="mt-6 grid gap-4">
              {no.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-[var(--ink)]/62"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--ink)]/6 text-[var(--ink)]/45"><X className="size-3" /></span>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
