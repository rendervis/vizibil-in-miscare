import { BadgeCheck, Route, WalletCards } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const points = [
  {
    icon: Route,
    title: "Traseul contează înainte de rezervare",
    body: "Nu listăm doar o mașină. Ideea este să știm în ce zone circulă în mod obișnuit înainte ca un business să o aleagă.",
  },
  {
    icon: WalletCards,
    title: "Fiecare parte vede suma relevantă",
    body: "Afacerea vede costul campaniei. Șoferul vede recompensa fixă înainte să accepte. Fără abonamente și fără kilometri artificiali.",
  },
  {
    icon: BadgeCheck,
    title: "Campania trebuie să poată fi verificată",
    body: "Montarea, perioada și desfășurarea campaniei trebuie să lase dovezi clare. Nu promitem vânzări sau impresii pe care nu le putem demonstra.",
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-[var(--paper-2)] py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <Badge className="border-[var(--ink)]/10 bg-white/70 text-[var(--ink)]/55">De ce e diferit</Badge>
            <h2 className="font-display mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.055em] max-sm:text-[2.65rem] max-sm:tracking-[-.045em] md:text-6xl">Nu e doar un magnet pus pe o mașină.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--ink)]/70 sm:text-[var(--ink)]/58 lg:justify-self-end">Valoarea vine din potrivirea dintre zonă, traseu și campanie — apoi din faptul că livrarea poate fi verificată.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-[2rem] border border-[var(--ink)]/10 bg-white/72 p-6 sm:p-7">
              <div className="grid size-12 place-items-center rounded-2xl bg-[var(--ink)] text-[var(--signal)]"><Icon className="size-5" /></div>
              <h3 className="mt-6 text-xl font-black tracking-[-.025em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink)]/68 sm:text-[var(--ink)]/48">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
