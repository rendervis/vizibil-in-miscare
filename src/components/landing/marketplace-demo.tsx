"use client";

import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  MapPinned,
  Route,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RouteMap } from "@/components/landing/route-map";
import { LeadDialog } from "@/components/landing/lead-dialog";
import { demoVehicles } from "@/data/demo-market";
import { formatRon } from "@/lib/utils";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export function MarketplaceDemo() {
  const [query, setQuery] = useState("Pipera, București");
  const [selected, setSelected] = useState<string[]>([]);
  const [leadOpen, setLeadOpen] = useState(false);
  const [searched, setSearched] = useState(true);

  const viewedVehicleIds = useRef(new Set<string>());

  const chosen = useMemo(
    () => demoVehicles.filter((vehicle) => selected.includes(vehicle.id)),
    [selected],
  );

  const total = chosen.reduce((sum, vehicle) => sum + vehicle.price, 0);

  const minCoverage =
    chosen.reduce((sum, vehicle) => sum + vehicle.weeklyCoverageMin, 0) * 4;

  const maxCoverage =
    chosen.reduce((sum, vehicle) => sum + vehicle.weeklyCoverageMax, 0) * 4;

  function markVehicleViewed(id: string) {
    if (viewedVehicleIds.current.has(id)) return;

    viewedVehicleIds.current.add(id);

    void trackEvent(analyticsEvents.vehicleCardViewed, {
      vehicle_id: id,
    });
  }

  function toggleVehicle(id: string) {
    markVehicleViewed(id);

    setSelected((current) => {
      const exists = current.includes(id);
      const nextCount = exists ? current.length - 1 : current.length + 1;

      void trackEvent(
        exists ? analyticsEvents.vehicleRemoved : analyticsEvents.vehicleAdded,
        {
          vehicle_id: id,
          selected_count: nextCount,
        },
      );

      if (!exists && current.length === 0) {
        void trackEvent(analyticsEvents.campaignSummaryOpened, {
          source: "first_vehicle_selected",
        });
      }

      return exists
        ? current.filter((value) => value !== id)
        : [...current, id];
    });
  }

  function searchMarket() {
    const hasArea = query.trim().length > 0;

    if (!hasArea) return;

    setSearched(true);

    void trackEvent(analyticsEvents.marketSearchStarted, {
      source: "marketplace_demo",
      has_area: true,
    });

    void trackEvent(analyticsEvents.targetAreaSelected, {
      source: "marketplace_demo",
      selection_method: "typed_search",
    });
  }

  function clearSelection() {
    setSelected([]);
  }

  function openLead() {
    if (!selected.length) return;

    void trackEvent(analyticsEvents.businessCtaClicked, {
      source: "marketplace_summary",
      placement_count: selected.length,
      campaign_total: total,
    });

    setLeadOpen(true);
  }

  return (
    <section
      id="pentru-afaceri"
      className="scroll-mt-20 bg-[var(--ink)] py-16 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <Badge className="border-white/10 bg-white/5 text-white/70">
              Pentru afaceri · exemplu de marketplace
            </Badge>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl md:text-6xl">
              Alege unde vrei să fii văzut.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/72 lg:justify-self-end">
            Caută zona în care sunt clienții tăi, compară profiluri de traseu și
            construiește o campanie cu una sau mai multe mașini. Profilurile de
            mai jos sunt exemple demonstrative; disponibilitatea reală se
            confirmă înainte de campanie.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#19151d] shadow-[0_35px_120px_rgba(0,0,0,.24)] sm:rounded-[2.2rem] lg:grid-cols-[1.05fr_.95fr]">
          <div className="border-b border-white/10 p-3 sm:p-4 md:p-6 lg:border-b-0 lg:border-r">
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="relative min-w-0 flex-1">
                <MapPinned className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/65 sm:left-4" />

                <Input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSearched(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") searchMarket();
                  }}
                  className="border-0 bg-transparent pl-9 pr-2 text-white placeholder:text-white/55 focus:ring-0 sm:pl-11"
                  aria-label="Zona campaniei"
                />
              </div>

              <Button
                onClick={searchMarket}
                size="icon"
                disabled={!query.trim()}
                aria-label="Caută în piață"
              >
                <Search className="size-4" />
              </Button>
            </div>

            <div className="mt-4">
              <RouteMap />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Metric
                label="Mașini demo"
                value={searched ? String(demoVehicles.length) : "—"}
              />
              <Metric label="Campanie" value="28 zile" />
              <Metric label="Zonă" value={searched ? "Nord" : "—"} />
            </div>
          </div>

          <div className="flex min-h-0 flex-col lg:min-h-[620px]">
            <div className="border-b border-white/10 p-4 sm:p-5 md:p-6">
              <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-white/55">
                    Exemple de mașini potrivite
                  </div>

                  <div className="mt-1 text-base font-black sm:text-lg">
                    Mașini care circulă prin zona aleasă
                  </div>
                </div>

                <div className="shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/65">
                  28 zile
                </div>
              </div>
            </div>

            <div className="grid gap-3 p-3 sm:p-4 md:max-h-[620px] md:flex-1 md:overflow-y-auto md:p-5">
              {demoVehicles.map((vehicle) => {
                const isSelected = selected.includes(vehicle.id);

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => toggleVehicle(vehicle.id)}
                    aria-pressed={isSelected}
                    className={`group w-full cursor-pointer rounded-[1.35rem] border p-4 text-left transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:rounded-[1.5rem] ${
                      isSelected
                        ? "border-[var(--signal)] bg-[color:rgb(197_240_107_/_0.08)]"
                        : "border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.055]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base font-black">
                            {vehicle.make} {vehicle.model}
                          </span>

                          <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] font-black uppercase tracking-[.14em] text-white/58">
                            Demo
                          </span>
                        </div>

                        <div className="mt-1 text-xs text-white/55">
                          {vehicle.year} · {vehicle.body}
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <div className="text-lg font-black sm:text-xl">
                          {formatRon(vehicle.price)}
                        </div>

                        <div className="text-[10px] uppercase tracking-[.12em] text-white/55">
                          28 zile
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {vehicle.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/55"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/8 pt-4 text-xs sm:grid-cols-3 sm:gap-2">
                      <div>
                        <div className="text-white/50">Acoperire</div>
                        <div className="mt-1 font-bold text-white/75">
                          {vehicle.weeklyCoverageMin}–
                          {vehicle.weeklyCoverageMax} km/săpt.
                        </div>
                      </div>

                      <div>
                        <div className="text-white/50">Rută</div>
                        <div className="mt-1 font-bold text-white/75">
                          {vehicle.routeConfidence}% conf.
                        </div>
                      </div>

                      <div>
                        <div className="text-white/50">Activ</div>
                        <div className="mt-1 font-bold text-white/75">
                          {vehicle.activeWindow.split(" · ")[0]}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                      <span className="flex min-w-0 items-center gap-1.5 text-white/62">
                        <Route className="size-3.5 shrink-0" />

                        <span className="leading-5">
                          Rută învățată înainte de listare
                        </span>
                      </span>

                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-full border ${
                          isSelected
                            ? "border-[var(--signal)] bg-[var(--signal)] text-[var(--signal-foreground)]"
                            : "border-white/15 text-transparent"
                        }`}
                      >
                        <Check className="size-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sticky bottom-2 z-20 mx-auto mt-4 max-w-4xl sm:bottom-4">
          <div className="rounded-[1.45rem] border border-white/10 bg-[color:rgb(25_21_29_/_0.96)] p-3 shadow-2xl backdrop-blur-xl sm:rounded-[1.6rem] sm:p-4 md:flex md:items-center md:justify-between md:gap-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--route)] text-white sm:size-12">
                <ShoppingBag className="size-5" />
              </div>

              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-[.14em] text-white/55 sm:text-xs">
                  Campania ta
                </div>

                <div className="mt-1 text-sm font-black leading-5 sm:text-base">
                  {selected.length
                    ? `${selected.length} ${
                        selected.length === 1 ? "mașină" : "mașini"
                      } · ${formatRon(total)}`
                    : "Alege una sau mai multe mașini"}
                </div>

                {selected.length > 0 ? (
                  <div className="mt-1 text-[11px] leading-4 text-white/58 sm:text-xs">
                    ~{minCoverage.toLocaleString("ro-RO")}–
                    {maxCoverage.toLocaleString("ro-RO")} km de traseu estimat
                    / 28 zile
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 flex w-full gap-2 md:mt-0 md:w-auto">
              {selected.length > 0 ? (
                <Button
                  variant="darkGhost"
                  size="sm"
                  className="shrink-0"
                  onClick={clearSelection}
                >
                  <X className="size-3.5" />
                  Golește
                </Button>
              ) : null}

              <Button
                disabled={!selected.length}
                className="min-w-0 flex-1 md:flex-none"
                onClick={openLead}
              >
                <span className="truncate">Vreau o campanie</span>
                <ArrowRight className="cta-arrow size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LeadDialog
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        role="business"
        context={{
          source: "marketplace_summary",
          selectedVehicleIds: selected,
          total,
          targetArea: query,
        }}
      />
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[.035] p-3">
      <div className="text-[9px] font-bold uppercase tracking-[.15em] text-white/55">
        {label}
      </div>

      <div className="mt-1 truncate text-sm font-black text-white/80">
        {value}
      </div>
    </div>
  );
}