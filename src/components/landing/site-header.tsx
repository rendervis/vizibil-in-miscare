import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:rgb(245_242_234_/_0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-5 md:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          aria-label={`${siteConfig.name} — pagina principală`}
        >
          <span className="sm:hidden">
            <Logo compact priority   className="w-[150px] sm:w-[185px] md:w-[205px]" />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Navigație principală"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md text-sm font-semibold text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 items-center gap-2">
          <Button asChild size="sm" className="max-sm:px-3">
            <Link href="/#pentru-afaceri">
              <span className="sm:hidden">Campanie</span>
              <span className="hidden sm:inline">Începe o campanie</span>
              <ArrowRight className="cta-arrow size-3.5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <Link href="/#driver">
              Sunt șofer
              <ArrowRight className="cta-arrow size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}