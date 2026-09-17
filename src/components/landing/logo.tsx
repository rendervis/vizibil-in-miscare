import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className={cn("grid size-9 place-items-center rounded-xl bg-[var(--ink)]", className)} aria-label={siteConfig.name}>
        <svg viewBox="0 0 36 36" className="size-7" aria-hidden="true">
          <path d="M7 23.5C11.5 23.5 12.5 12 18 12C23 12 24.5 23 29 23" fill="none" stroke="var(--signal)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="7" cy="23.5" r="2.6" fill="var(--paper)" />
          <circle cx="29" cy="23" r="2.6" fill="var(--paper)" />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex flex-col leading-none", className)} aria-label={siteConfig.name}>
      <span className="font-display text-[1.05rem] font-extrabold tracking-[-.035em]">Vizibil <span className="font-medium">în Mișcare</span></span>
      <span className="mt-1 block h-[3px] w-16 rounded-full bg-[var(--signal)]" aria-hidden="true" />
    </div>
  );
}
