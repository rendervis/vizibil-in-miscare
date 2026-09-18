"use client";

import { useState } from "react";
import { ArrowRight, Building2, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadDialog } from "@/components/landing/lead-dialog";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import type { UserRole } from "@/types";

export function FinalCta() {
  const [role, setRole] = useState<UserRole | null>(null);

  return (
    <section className="bg-[var(--ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--signal)]">
            București · înscrieri deschise
          </div>

          <h2 className="font-display mt-5 text-5xl font-extrabold leading-[.94] tracking-[-.055em] md:text-7xl">
            Două moduri de a intra în mișcare.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72">
            Promovezi o afacere sau pui mașina ta în rețea. Alegi varianta
            potrivită și continui de acolo.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/12 bg-white/[.065] p-7 md:p-8">
            <div className="grid size-12 place-items-center rounded-2xl bg-[var(--signal)] text-[var(--signal-foreground)]">
              <Building2 className="size-5" />
            </div>

            <h3 className="mt-6 text-2xl font-black">Am o afacere</h3>

            <p className="mt-3 text-sm leading-6 text-white/72">
              Spune-ne zona și ce vrei să promovezi. Îți confirmăm opțiunile
              disponibile înainte de plată.
            </p>

            <Button
              className="mt-6"
              onClick={() => {
                void trackEvent(analyticsEvents.businessCtaClicked, {
                  source: "final_cta",
                });

                setRole("business");
              }}
            >
              Vreau vizibilitate locală
              <ArrowRight className="cta-arrow size-4" />
            </Button>
          </article>

          <article className="rounded-[2rem] border border-white/12 bg-white/[.065] p-7 md:p-8">
            <div className="grid size-12 place-items-center rounded-2xl bg-[var(--route)] text-white">
              <CarFront className="size-5" />
            </div>

            <h3 className="mt-6 text-2xl font-black">Am o mașină</h3>

            <p className="mt-3 text-sm leading-6 text-white/72">
              Înscrie mașina și zonele prin care circuli. Primești oferte doar
              când traseul tău se potrivește.
            </p>

            <Button
              className="mt-6"
              onClick={() => {
                void trackEvent(analyticsEvents.driverCtaClicked, {
                  source: "final_cta",
                });

                setRole("driver");
              }}
            >
              Înscrie mașina
              <ArrowRight className="cta-arrow size-4" />
            </Button>
          </article>
        </div>
      </div>

      {role ? (
        <LeadDialog
          open
          onClose={() => setRole(null)}
          role={role}
          context={{ source: "final_cta" }}
        />
      ) : null}
    </section>
  );
}