import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr] md:px-8">
        <div>
          <Logo className="text-white" />
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
            {siteConfig.tagline} Pilotul testează cererea reală înainte de construirea marketplace-ului complet. Inventarul demo este marcat explicit.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="grid content-start gap-3">
            <span className="font-bold text-white/90">Explorează</span>
            <Link href="/#market" className="text-white/55 hover:text-white">Pentru afaceri</Link>
            <Link href="/#driver" className="text-white/55 hover:text-white">Pentru șoferi</Link>
            <Link href="/publicitate-pe-masini" className="text-white/55 hover:text-white">Publicitate pe mașini</Link>
            <Link href="/confidentialitate" className="text-white/55 hover:text-white">Confidențialitate</Link>
          </div>
          <div className="grid content-start gap-3">
            <span className="font-bold text-white/90">Contact</span>
            <a href={`mailto:${siteConfig.email}`} className="text-white/55 hover:text-white">{siteConfig.email}</a>
            <span className="text-white/35">București · pilot</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs text-white/35 md:flex-row md:justify-between md:px-8">
        <span>© {new Date().getFullYear()} {siteConfig.name}.</span>
        <span>Fără abonament. Fără promisiuni de vânzări. Doar livrare verificabilă.</span>
      </div>
    </footer>
  );
}
