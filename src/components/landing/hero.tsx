"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  Route,
  WalletCards,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/landing/media-frame";
import { media } from "@/config/media";
import { siteConfig } from "@/config/site";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="paper-grid absolute inset-0 opacity-55" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 max-[430px]:gap-10 max-[430px]:px-4 max-[430px]:py-10 md:px-8 md:py-20 lg:grid-cols-[.96fr_1.04fr] lg:items-center">
        <div>
          <Badge className="border-[color:rgb(124_114_242_/_0.22)] bg-[color:rgb(124_114_242_/_0.08)] text-[var(--route)]">
            București · înscrieri deschise
          </Badge>

          <h1 className="font-display mt-6 max-w-3xl text-[clamp(3rem,6.6vw,6.25rem)] font-extrabold leading-[.91] tracking-[-.065em] text-balance max-sm:text-[clamp(2.65rem,13vw,3.35rem)] max-sm:tracking-[-.055em]">
            Reclama ta.{" "}
            <span className="text-[var(--route)]">
              Pe mașini care circulă deja
            </span>{" "}
            prin oraș.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] max-sm:text-base max-sm:leading-7 md:text-xl">
            {siteConfig.name} conectează afaceri locale cu șoferi ale căror
            trasee normale trec prin zone relevante. Alegi unde vrei
            vizibilitate, selectezi mașinile potrivite și urmărești o campanie
            verificabilă.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              onClick={() =>
                trackEvent(analyticsEvents.businessCtaClicked, {
                  source: "hero",
                })
              }
            >
              <Link href="#pentru-afaceri">
                Vreau vizibilitate locală
                <ArrowRight className="cta-arrow size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              onClick={() =>
                trackEvent(analyticsEvents.driverCtaClicked, {
                  source: "hero",
                })
              }
            >
              <Link href="#driver">
                Vreau să câștig cu mașina
                <ArrowRight className="cta-arrow size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 min-[390px]:grid-cols-3 sm:grid-cols-3">
            {[
              [Route, "Trasee reale"],
              [WalletCards, "Preț clar"],
              [BadgeCheck, "Campanii verificate"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Route;

              return (
                <div
                  key={String(label)}
                  className="flex items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-white/55 px-3 py-3 text-sm font-extrabold backdrop-blur sm:gap-3 sm:px-4"
                >
                  <I className="size-5 shrink-0 text-[var(--route)] sm:size-6" />
                  {String(label)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-[var(--route)] opacity-[.08] blur-3xl" />

          <MediaFrame
            src={media.home.hero}
            alt="Mașină urbană cu reclamă magnetică detașabilă pentru o afacere locală"
            label="Publicitate mobilă · București"
            className="relative aspect-[4/5] min-h-[500px] rounded-[2.4rem] border border-[var(--border)] shadow-[0_35px_120px_rgba(31,24,48,.18)] max-sm:min-h-0 md:aspect-[5/4] lg:aspect-[4/5]"
          />

          <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-[auto_1fr] items-center gap-4 rounded-3xl border border-white/20 bg-[color:rgb(31_24_48_/_0.92)] p-4 text-white shadow-2xl backdrop-blur max-[360px]:gap-3 max-[360px]:p-3 md:left-6 md:right-6">
            <div className="grid size-12 place-items-center rounded-2xl bg-[var(--signal)] text-[var(--signal-foreground)] max-[360px]:size-10">
              <CarFront className="size-5" />
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-[.14em] text-white/55">
                Pe scurt
              </div>
              <div className="mt-1 text-sm font-bold text-white/92">
                Alegi zona → alegi mașina → pornește campania
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}