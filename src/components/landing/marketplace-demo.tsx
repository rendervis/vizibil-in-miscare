"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MapPinned, Route, Search, ShoppingBag, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RouteMap } from "@/components/landing/route-map";
import { LeadDialog } from "@/components/landing/lead-dialog";
import { demoVehicles } from "@/data/demo-market";
import { formatRon } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function MarketplaceDemo() {
  const [query, setQuery] = useState("Pipera, București");
  const [selected, setSelected] = useState<string[]>([]);
  const [leadOpen, setLeadOpen] = useState(false);
  const [searched, setSearched] = useState(true);

  const chosen = useMemo(() => demoVehicles.filter((vehicle) => selected.includes(vehicle.id)), [selected]);
  const total = chosen.reduce((sum, vehicle) => sum + vehicle.price, 0);
  const minCoverage = chosen.reduce((sum, vehicle) => sum + vehicle.weeklyCoverageMin, 0) * 4;
  const maxCoverage = chosen.reduce((sum, vehicle) => sum + vehicle.weeklyCoverageMax, 0) * 4;

  function toggleVehicle(id: string) {
    setSelected((current) => {
      const exists = current.includes(id);
      void trackEvent(exists ? "vehicle_removed" : "vehicle_added", { vehicle_id: id, selected_count: exists ? current.length - 1 : current.length + 1 });
      return exists ? current.filter((value) => value !== id) : [...current, id];
    });
  }

  function searchMarket() {
    setSearched(true);
    void trackEvent("market_search_started", { query });
  }

  return (
    <section id="market" className="scroll-mt-20 bg-[var(--ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <Badge className="border-white/10 bg-white/5 text-white/55">Marketplace demo · inventar sintetic</Badge>
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[.98] tracking-[-.045em] md:text-6xl">Unde vrei să fii văzut?</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
            Alege o zonă și testează cum ar funcționa piața. Vehiculele de mai jos sunt exemple reprezentative pentru validare, nu mașini reale disponibile astăzi.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#19151d] shadow-[0_35px_120px_rgba(0,0,0,.24)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="border-b border-white/10 p-4 md:p-6 lg:border-b-0 lg:border-r">
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="relative flex-1">
                <MapPinned className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/35" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} className="border-0 bg-transparent pl-11 text-white placeholder:text-white/25 focus:ring-0" aria-label="Zona campaniei" />
              </div>
              <Button onClick={searchMarket} size="icon" aria-label="Caută în piață"><Search className="size-4" /></Button>
            </div>
            <div className="mt-4">
              <RouteMap />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Metric label="Mașini demo" value={searched ? String(demoVehicles.length) : "—"} />
              <Metric label="Campanie" value="28 zile" />
              <Metric label="Zonă" value="Nord" />
            </div>
          </div>

          <div className="flex min-h-[620px] flex-col">
            <div className="border-b border-white/10 p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-white/35">Inventar reprezentativ</div>
                  <div className="mt-1 text-lg font-black">Mașini care ar potrivi zona</div>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/45">preț pilot</div>
              </div>
            </div>
            <div className="grid max-h-[620px] flex-1 gap-3 overflow-y-auto p-4 md:p-5">
              {demoVehicles.map((vehicle) => {
                const isSelected = selected.includes(vehicle.id);
                return (
                  <button
                    key={vehicle.id}
                    onClick={() => toggleVehicle(vehicle.id)}
                    className={`group w-full rounded-[1.5rem] border p-4 text-left transition ${isSelected ? "border-[var(--signal)] bg-[color:rgb(197_240_107_/_0.08)]" : "border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.055]"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-black">{vehicle.make} {vehicle.model}</span>
                          <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] font-black uppercase tracking-[.14em] text-white/40">Demo</span>
                        </div>
                        <div className="mt-1 text-xs text-white/35">{vehicle.year} · {vehicle.body}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black">{formatRon(vehicle.price)}</div>
                        <div className="text-[10px] uppercase tracking-[.12em] text-white/35">28 zile</div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {vehicle.areas.map((area) => <span key={area} className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/55">{area}</span>)}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/8 pt-4 text-xs">
                      <div><div className="text-white/30">Acoperire</div><div className="mt-1 font-bold text-white/75">{vehicle.weeklyCoverageMin}–{vehicle.weeklyCoverageMax} km/săpt.</div></div>
                      <div><div className="text-white/30">Rută</div><div className="mt-1 font-bold text-white/75">{vehicle.routeConfidence}% conf.</div></div>
                      <div><div className="text-white/30">Activ</div><div className="mt-1 line-clamp-1 font-bold text-white/75">{vehicle.activeWindow.split(" · ")[0]}</div></div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-white/42"><Route className="size-3.5" /> Rută învățată înainte de listare</span>
                      <span className={`grid size-6 place-items-center rounded-full border ${isSelected ? "border-[var(--signal)] bg-[var(--signal)] text-[var(--signal-foreground)]" : "border-white/15 text-transparent"}`}><Check className="size-3.5" /></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sticky bottom-4 z-20 mx-auto mt-4 max-w-4xl">
          <div className="rounded-[1.6rem] border border-white/10 bg-[color:rgb(25_21_29_/_0.94)] p-4 shadow-2xl backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
            <div className="flex items-center gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--route)] text-white"><ShoppingBag className="size-5" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[.14em] text-white/35">Campania ta demo</div>
                <div className="mt-1 font-black">{selected.length ? `${selected.length} ${selected.length === 1 ? "mașină" : "mașini"} · ${formatRon(total)}` : "Alege una sau mai multe mașini"}</div>
                {selected.length > 0 && <div className="mt-1 text-xs text-white/40">~{minCoverage.toLocaleString("ro-RO")}–{maxCoverage.toLocaleString("ro-RO")} km țintă / 28 zile, estimare demo</div>}
              </div>
            </div>
            <div className="mt-4 flex gap-2 md:mt-0">
              {selected.length > 0 && <Button variant="ghost" size="sm" onClick={() => setSelected([])} className="text-white hover:bg-white/5"><X className="size-3.5" /> Golește</Button>}
              <Button disabled={!selected.length} onClick={() => { void trackEvent("reserve_clicked", { placements: selected.length, total }); setLeadOpen(true); }}>
                Rezervă interesul <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LeadDialog open={leadOpen} onClose={() => setLeadOpen(false)} role="business" context={{ selectedVehicleIds: selected, total, targetArea: query }} />
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.035] p-3">
      <div className="text-[9px] font-bold uppercase tracking-[.15em] text-white/28">{label}</div>
      <div className="mt-1 text-sm font-black text-white/80">{value}</div>
    </div>
  );
}
