import Link from "next/link";
import { Instagram } from "lucide-react";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.15fr_.85fr] md:px-8">
        <div>
          <Logo variant="light" />

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/70">
            {siteConfig.tagline} Conectăm afaceri locale cu mașini care circulă
            deja prin zone relevante.
          </p>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-md text-sm font-bold text-white/75 transition hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
          >
            <Instagram className="size-4" />
            @vizibilinmiscare
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 sm:gap-6">
          <div className="grid content-start gap-3">
            <span className="font-bold text-white/90">Explorează</span>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/#pentru-afaceri"
            >
              Pentru afaceri
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/#driver"
            >
              Pentru șoferi
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/publicitate-pe-masini"
            >
              Publicitate pe mașini
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/castiga-bani-cu-masina"
            >
              Câștigă cu mașina
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/alternative-bolt-uber"
            >
              Alternative la Bolt și Uber
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/promovare-afacere-locala"
            >
              Promovare afacere locală
            </Link>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/idei-promovare-afacere-mica"
            >
              Idei de promovare
            </Link>
          </div>

          <div className="grid content-start gap-3">
            <span className="font-bold text-white/90">Contact</span>

            <a
              href={`mailto:${siteConfig.email}`}
              className="break-all rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
            >
              {siteConfig.email}
            </a>

            <Link
              className="rounded-sm text-white/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
              href="/confidentialitate"
            >
              Confidențialitate
            </Link>

            <span className="text-white/50">
              București · înscrieri deschise
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
        <span>© 2026 {siteConfig.name}.</span>
        <span>{siteConfig.proofLine}</span>
      </div>
    </footer>
  );
}