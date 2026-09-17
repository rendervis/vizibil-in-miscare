import { cn } from "@/lib/utils";

const accentMap = {
  lime: "var(--signal)",
  violet: "var(--route)",
  mint: "var(--mint)",
  rose: "var(--rose)",
};

export function RouteMap({ accent = "lime", compact = false }: { accent?: keyof typeof accentMap; compact?: boolean }) {
  const color = accentMap[accent];
  return (
    <div className={cn("relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--map)]", compact ? "h-40" : "h-[410px]") }>
      <svg viewBox="0 0 700 440" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-label="Hartă demo cu trasee anonimizate">
        <rect width="700" height="440" fill="var(--map)" />
        <g fill="none" stroke="var(--map-road)" strokeWidth="2">
          <path d="M-20 86 C160 80 235 105 390 80 S610 45 740 70" />
          <path d="M-20 180 C90 150 190 172 300 190 S515 230 740 182" />
          <path d="M-20 315 C130 280 238 320 370 305 S580 270 740 330" />
          <path d="M90 -20 C120 96 105 204 160 310 S190 410 205 470" />
          <path d="M280 -20 C320 90 300 190 350 275 S420 370 440 470" />
          <path d="M535 -20 C505 92 555 195 520 292 S545 400 600 470" />
          <path d="M35 420 C175 370 210 250 350 210 S530 130 680 15" />
        </g>
        <g fill="none" stroke="var(--map-minor)" strokeWidth="1" opacity=".9">
          <path d="M20 130 C170 115 340 145 650 120" />
          <path d="M40 245 C170 225 315 260 675 230" />
          <path d="M50 365 C220 350 405 370 650 360" />
          <path d="M215 15 C210 130 250 260 265 430" />
          <path d="M450 20 C455 145 470 260 500 430" />
        </g>
        <path
          d="M95 342 C130 300 182 292 220 260 C272 218 290 142 350 135 C420 126 442 214 498 216 C550 218 575 155 628 104"
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          opacity=".12"
        />
        <path
          d="M95 342 C130 300 182 292 220 260 C272 218 290 142 350 135 C420 126 442 214 498 216 C550 218 575 155 628 104"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="3 9"
        />
        {[ [95,342], [220,260], [350,135], [498,216], [628,104] ].map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill={color} opacity=".15" />
            <circle cx={cx} cy={cy} r="4" fill={color} />
          </g>
        ))}
      </svg>
      {!compact && (
        <>
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[color:rgb(33_23_37_/_0.82)] px-3 py-2 text-xs font-bold text-white backdrop-blur">Pipera · Floreasca · Aviatorilor</div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[color:rgb(33_23_37_/_0.88)] p-3 text-white backdrop-blur">
            <div><div className="text-[10px] uppercase tracking-[.12em] text-white/45">Profil</div><div className="mt-1 text-sm font-bold">Rută normală</div></div>
            <div><div className="text-[10px] uppercase tracking-[.12em] text-white/45">Fereastră</div><div className="mt-1 text-sm font-bold">L–V · AM/PM</div></div>
            <div><div className="text-[10px] uppercase tracking-[.12em] text-white/45">Confidență</div><div className="mt-1 text-sm font-bold">91%</div></div>
          </div>
        </>
      )}
    </div>
  );
}
