import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:rgb(245_242_234_/_0.86)] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label={`${siteConfig.name} — pagina principală`}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigație principală">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#market">Vezi marketplace-ul demo</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="md:hidden">
            <Link href="/#driver">Sunt șofer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
