"use client";

import { useState } from "react";
import { ArrowRight, Map, ShieldCheck, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadDialog } from "@/components/landing/lead-dialog";
import { MediaFrame } from "@/components/landing/media-frame";
import { media } from "@/config/media";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export function DriverSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="driver" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[3rem] bg-[var(--signal)] opacity-[.08] blur-3xl" />

          <MediaFrame
            src={media.home.driver}
            alt="Șoferiță lângă mașina personală cu magnet publicitar detașabil pentru o afacere locală"
            label="Pentru șoferi"
            className="relative aspect-[4/5] rounded-[2.4rem] border border-[var(--border)] shadow-[0_30px_100px_rgba(31,24,48,.14)] md:aspect-[5/4] lg:aspect-[4/5]"
          />

          <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-[color:rgb(31_24_48_/_0.94)] p-5 text-white shadow-2xl backdrop-blur md:left-8 md:right-8">
            <div className="text-[10px] font-black uppercase tracking-[.16em] text-white/55">
              Exemplu de recompensă
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <div className="text-2xl font-black">300 RON</div>
                <div className="mt-1 text-xs text-white/65">
                  28 zile · recompensă fixă
                </div>
              </div>

              <span className="rounded-full bg-[var(--signal)] px-3 py-1.5 text-xs font-black text-[var(--signal-foreground)]">
                Tu decizi
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Badge className="border-[color:rgb(197_243_107_/_0.35)] bg-[color:rgb(197_243_107_/_0.12)] text-[#4f6819]">
            Pentru șoferi
          </Badge>

          <h2 className="font-display mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-7xl">
            Fă bani din drumurile pe care le faci deja.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
            Îți înscrii mașina și zonele prin care circuli. Când apare o campanie
            potrivită, vezi suma și perioada înainte să accepți. Nu te trimitem
            să faci drumuri speciale pentru reclamă.
          </p>

          <div className="mt-7 grid gap-3">
            {[
              [
                Map,
                "Rutina ta rămâne rutina ta",
                "Campania trebuie să se potrivească traseului pe care îl ai deja.",
              ],
              [
                Wallet,
                "Știi recompensa înainte",
                "Vezi suma fixă și durata înainte să spui da.",
              ],
              [
                ShieldCheck,
                "Verificări simple",
                "Confirmăm montarea și desfășurarea campaniei fără să-ți complicăm rutina.",
              ],
            ].map(([Icon, title, body]) => {
              const I = Icon as typeof Map;

              return (
                <div
                  key={String(title)}
                  className="flex gap-4 rounded-3xl border border-[var(--border)] bg-[var(--paper)] p-5"
                >
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--ink)] text-[var(--signal)]">
                    <I className="size-5" />
                  </div>

                  <div>
                    <div className="font-black">{String(title)}</div>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                      {String(body)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            size="lg"
            className="mt-7"
            onClick={() => {
              void trackEvent(analyticsEvents.driverCtaClicked, {
                source: "driver_section",
              });

              setOpen(true);
            }}
          >
            Înscrie mașina
            <ArrowRight className="cta-arrow size-4" />
          </Button>

          <p className="mt-3 text-xs leading-5 text-[var(--muted-foreground)]">
            Înscrierea nu te obligă să accepți nicio campanie.
          </p>
        </div>
      </div>

      <LeadDialog
        open={open}
        onClose={() => setOpen(false)}
        role="driver"
        context={{
          source: "driver_section",
          sampleReward: 300,
          sampleDurationDays: 28,
        }}
      />
    </section>
  );
}