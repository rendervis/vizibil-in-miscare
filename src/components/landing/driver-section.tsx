"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Gauge, Map, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadDialog } from "@/components/landing/lead-dialog";
import { trackEvent } from "@/lib/analytics";

export function DriverSection() {
  const [open, setOpen] = useState(false);
  return (
    <section id="driver" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <div>
          <Badge className="border-[color:rgb(197_240_107_/_0.35)] bg-[color:rgb(197_240_107_/_0.12)] text-[#4f6819]">Pentru șoferi</Badge>
          <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] md:text-6xl">Fă bani din drumurile pe care le faci deja.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
            Nu te trimitem pe trasee speciale. Înainte să apari în marketplace, platforma învață zonele prin care circuli normal. Când o afacere caută vizibilitate pe traseul tău, primești o ofertă fixă și decizi dacă o accepți.
          </p>
          <div className="mt-7 grid gap-3">
            {[
              [Map, "Traseul tău, nu al nostru", "Învățăm rutina înainte ca mașina să apară în piață."],
              [Wallet, "Știi suma dinainte", "Fără «până la». Vezi recompensa campaniei înainte să accepți."],
              [Gauge, "Fără kilometri inutili", "Plata nu crește dacă te învârți fără rost prin oraș."],
            ].map(([Icon, title, body]) => {
              const I = Icon as typeof Map;
              return <div key={String(title)} className="flex gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5"><div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--surface-strong)]"><I className="size-5 text-[var(--route)]" /></div><div><div className="font-black">{String(title)}</div><p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">{String(body)}</p></div></div>;
            })}
          </div>
          <Button size="lg" className="mt-7" onClick={() => { void trackEvent("driver_qualify_clicked"); setOpen(true); }}>Vezi dacă traseul meu se potrivește <ChevronRight className="size-4" /></Button>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[3rem] bg-[var(--route)] opacity-[.07] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[var(--ink)] p-5 text-white shadow-[0_35px_100px_rgba(33,23,37,.17)] md:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[.18em] text-white/35">Exemplu de ofertă</div>
                <div className="mt-2 text-2xl font-black">Clinică dentară · Nord</div>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white/40">Demo</span>
            </div>
            <div className="my-7 h-px bg-white/10" />
            <div className="grid gap-5 sm:grid-cols-2">
              <OfferMetric label="Durată" value="28 zile" />
              <OfferMetric label="Potrivire rută" value="Puternică" accent />
              <OfferMetric label="Verificări" value="4 check-uri" />
              <OfferMetric label="Recompensă fixă" value="300 RON" accent />
            </div>
            <div className="mt-7 rounded-3xl bg-white/[.045] p-5">
              <div className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="size-4 text-[var(--signal)]" /> Cum se finalizează</div>
              <div className="mt-4 grid gap-3 text-sm text-white/55">
                <ProgressRow label="Campanie activă" value="28 / 28 zile" progress={100} />
                <ProgressRow label="Rută în intervalul așteptat" value="OK" progress={92} />
                <ProgressRow label="Verificări vizuale" value="4 / 4" progress={100} />
              </div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-5 rounded-3xl bg-[var(--signal)] p-5 text-[var(--signal-foreground)]">
              <div><div className="text-[10px] font-black uppercase tracking-[.15em] opacity-55">Primești la final</div><div className="mt-1 text-3xl font-black tracking-[-.04em]">300 RON</div></div>
              <div className="text-right text-xs font-semibold opacity-60">suma este cunoscută<br />înainte să accepți</div>
            </div>
          </div>
        </div>
      </div>
      <LeadDialog open={open} onClose={() => setOpen(false)} role="driver" context={{ sampleReward: 300, sampleDurationDays: 28 }} />
    </section>
  );
}

function OfferMetric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div><div className="text-[10px] font-bold uppercase tracking-[.14em] text-white/30">{label}</div><div className={`mt-1 text-lg font-black ${accent ? "text-[var(--signal)]" : "text-white"}`}>{value}</div></div>;
}

function ProgressRow({ label, value, progress }: { label: string; value: string; progress: number }) {
  return <div><div className="flex justify-between gap-4"><span>{label}</span><span className="font-bold text-white/75">{value}</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[var(--route)]" style={{ width: `${progress}%` }} /></div></div>;
}
