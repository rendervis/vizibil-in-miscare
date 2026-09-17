"use client";

import Link from "next/link";
import { ArrowDownRight, Route, ShieldCheck, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RouteMap } from "@/components/landing/route-map";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="paper-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
        <div>
          <Badge className="border-[color:rgb(124_114_242_/_0.22)] bg-[color:rgb(124_114_242_/_0.08)] text-[var(--route)]">Pilot București · în validare</Badge>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(3.05rem,7vw,6.5rem)] font-extrabold leading-[.91] tracking-[-.065em] text-balance">
            Publicitate locală<br /><span className="text-[var(--route)]">care se mișcă odată cu orașul.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] md:text-xl">
            Pune-ți afacerea pe mașini care circulă deja prin zonele unde sunt clienții tăi. Șoferii câștigă din drumurile pe care le fac deja.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild onClick={() => trackEvent("hero_business_clicked")}>
              <Link href="#market">Vreau să-mi promovez afacerea <ArrowDownRight className="size-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild onClick={() => trackEvent("hero_driver_clicked")}>
              <Link href="#driver">Vreau să câștig cu mașina mea</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm font-semibold text-[var(--ink)]/55">{siteConfig.proofLine}</p>
          <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              [Route, "Traseu învățat", "înainte de ofertă"],
              [WalletCards, "Preț clar", "înainte de accept"],
              [ShieldCheck, "Campanie verificată", "după pornire"],
            ].map(([Icon, title, subtitle]) => {
              const I = Icon as typeof Route;
              return (
                <div key={String(title)} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[color:rgb(245_242_234_/_0.72)] p-4 backdrop-blur">
                  <I className="mt-0.5 size-5 shrink-0 text-[var(--route)]" />
                  <div><div className="text-sm font-extrabold">{String(title)}</div><div className="mt-0.5 text-xs text-[var(--muted-foreground)]">{String(subtitle)}</div></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[510px]">
          <div className="absolute -inset-8 rounded-[3rem] bg-[var(--route)] opacity-[.08] blur-3xl" />
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
