import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { SiteFooter } from "@/components/landing/site-footer";
import { siteConfig } from "@/config/site";
import type { ContentPage } from "@/lib/content-pages";

export function EditorialArticle({ page }: { page: ContentPage }) {
  const pageUrl = `${siteConfig.url}/${page.slug}`;
  const primaryHref = page.audience === "driver" ? "/#driver" : "/#pentru-afaceri";
  const primaryLabel = page.audience === "driver" ? "Înscrie mașina" : "Vreau o campanie";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: page.eyebrow, item: pageUrl },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    inLanguage: "ro-RO",
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <header className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5 md:px-8">
          <Link href="/" aria-label="Vizibil în Mișcare — acasă" className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2">
            <span className="sm:hidden"><Logo compact /></span>
            <span className="hidden sm:inline-flex"><Logo /></span>
          </Link>
          <Button asChild size="sm" className="max-sm:h-11 max-sm:px-3">
            <Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-3.5" /></Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="paper-grid border-b border-[var(--border)] bg-[var(--paper)] py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <nav aria-label="Fir de navigare" className="mb-7 text-sm font-semibold text-[var(--ink)]/65">
              <Link href="/" className="underline-offset-4 hover:underline">Acasă</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page">{page.eyebrow}</span>
            </nav>
            <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">{page.eyebrow}</div>
            <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.25rem,8.7vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-.055em] sm:text-6xl md:text-[4rem]">{page.h1}</h1>
            <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--ink)]/75 sm:text-lg sm:leading-8">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="max-sm:w-full"><Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="max-sm:w-full"><Link href="#ghid">Citește ghidul <ArrowRight className="cta-arrow size-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section id="ghid" className="bg-white py-12 sm:py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-9 px-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-14 md:px-8">
            <aside aria-label="Cuprins" className="md:sticky md:top-8 md:self-start">
              <div className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">În acest ghid</div>
              <ol className="grid gap-3 text-sm leading-5 text-[var(--ink)]/70">
                {page.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a className="rounded-sm underline-offset-4 hover:text-[var(--ink)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]" href={`#sectiunea-${index + 1}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="min-w-0">
              {page.sections.map((section, index) => (
                <section id={`sectiunea-${index + 1}`} key={section.heading} className="scroll-mt-8 border-t border-[var(--ink)]/10 py-8 first:pt-2">
                  <div className="mb-3 text-xs font-black tracking-[.16em] text-[var(--route)]">{String(index + 1).padStart(2, "0")}</div>
                  <h2 className="font-display text-[1.55rem] font-extrabold leading-tight tracking-[-.04em] sm:text-[1.85rem]">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-[var(--ink)]/75">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-[var(--ink)]/75">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              ))}
              {page.references && <section className="border-t border-[var(--ink)]/10 py-8">
                <h2 className="font-display text-xl font-extrabold">Resurse oficiale pentru înscrierea în ridesharing</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--ink)]/70">Cerințele se pot schimba. Verifică documentele și condițiile direct la platforma aleasă.</p>
                <ul className="mt-4 grid gap-3">
                  {page.references.map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 font-semibold text-[var(--route)] underline underline-offset-4">{reference.label} <ExternalLink className="mt-1 size-4 shrink-0" aria-hidden="true" /></a></li>)}
                </ul>
              </section>}
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-2)] py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Continuă explorarea</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.related.map((item) => <Link key={item.href} href={item.href} className="rounded-full border border-[var(--ink)]/12 bg-white/80 px-4 py-2 text-sm font-bold hover:border-[var(--route)]/40">{item.label}</Link>)}
            </div>
          </div>
        </section>
        <section className="bg-[var(--ink)] py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center md:px-8">
            <div><div className="text-xs font-black uppercase tracking-[.16em] text-[var(--signal)]">Vizibil în Mișcare</div><h2 className="font-display mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-[-.04em]">{page.audience === "driver" ? "Faci deja drumuri prin București?" : "Vrei să fii văzut acolo unde sunt clienții tăi?"}</h2><p className="mt-3 max-w-lg text-base leading-7 text-white/75">{page.audience === "driver" ? "Înscrie mașina și vezi dacă traseele tale se potrivesc unei campanii. Recompensa este clară înainte să accepți." : "Alege zone relevante, verifică mașinile disponibile și construiește o campanie cu preț clar."}</p></div>
            <Button asChild size="lg" className="max-sm:w-full sm:shrink-0"><Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-4" /></Link></Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
