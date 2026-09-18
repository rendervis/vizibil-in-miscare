import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { MediaFrame } from "@/components/landing/media-frame";
import { SiteFooter } from "@/components/landing/site-footer";
import { getSeoPage, seoPages } from "@/lib/seo-pages";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
      languages: { "ro-RO": `/${page.slug}` },
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}/${page.slug}`,
      images: [{ url: page.heroImage, alt: page.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.heroImage],
    },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const pageUrl = `${siteConfig.url}/${page.slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: page.eyebrow, item: pageUrl },
    ],
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    inLanguage: "ro-RO",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: page.keywords,
  };

  const primaryHref = page.audience === "driver" ? "/#driver" : "/#pentru-afaceri";
  const primaryLabel = page.audience === "driver" ? "Înscrie mașina" : "Vreau o campanie";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <header className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="Vizibil în Mișcare — acasă"><Logo /></Link>
          <Button asChild size="sm"><Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-3.5" /></Link></Button>
        </div>
      </header>

      <main>
        <section className="paper-grid bg-[var(--paper)] py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">{page.eyebrow}</div>
              <h1 className="font-display mt-5 max-w-4xl text-5xl font-extrabold leading-[.92] tracking-[-.055em] md:text-7xl">{page.h1}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink)]/72">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-4" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link href="/#cum-functioneaza">Cum funcționează <ArrowRight className="cta-arrow size-4" /></Link></Button>
              </div>
            </div>
            <MediaFrame src={page.heroImage} alt={page.heroAlt} label={page.eyebrow} className="aspect-[4/3] rounded-[2.2rem] border border-[var(--border)] shadow-[0_30px_100px_rgba(31,24,48,.14)] lg:aspect-[5/4]" />
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <MediaFrame src={page.supportImage} alt={page.supportAlt} className="aspect-[4/3] rounded-[2rem] border border-[var(--border)]" />
              <div className="mt-5 rounded-[1.5rem] bg-[var(--paper)] p-5">
                <div className="flex gap-3 text-sm font-bold"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--route)]" /> Traseele private nu sunt expuse advertiserului.</div>
                <div className="mt-3 flex gap-3 text-sm font-bold"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--route)]" /> Disponibilitatea se confirmă înainte de plată.</div>
              </div>
            </div>
            <div className="grid gap-0">
              {page.sections.map((section, index) => (
                <article key={section.heading} className="grid gap-4 border-t border-[var(--ink)]/10 py-8 md:grid-cols-[72px_1fr]">
                  <div className="text-xs font-black tracking-[.16em] text-[var(--route)]">0{index + 1}</div>
                  <div><h2 className="text-2xl font-black tracking-[-.03em] md:text-3xl">{section.heading}</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[var(--ink)]/70">{section.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-2)] py-14">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Continuă explorarea</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.related.map((item) => <Link key={item.href} href={item.href} className="rounded-full border border-[var(--ink)]/12 bg-white/65 px-4 py-2 text-sm font-bold hover:border-[var(--route)]/40">{item.label}</Link>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--ink)] py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="text-xs font-black uppercase tracking-[.16em] text-[var(--signal)]">FAQ</div>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-.045em] md:text-5xl">Întrebări despre {page.eyebrow.toLowerCase()}</h2>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {page.faq.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black marker:hidden">{q}<span className="text-xl font-normal text-[var(--signal)] transition group-open:rotate-45">+</span></summary>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)] py-16 md:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
            <div><div className="text-xs font-black uppercase tracking-[.16em] text-[var(--route)]">Vizibil în Mișcare</div><h2 className="mt-2 text-3xl font-black tracking-[-.035em]">{page.audience === "driver" ? "Ai mașină și circuli prin București?" : "Ai o afacere locală în București?"}</h2></div>
            <Button asChild size="lg"><Link href={primaryHref}>{primaryLabel} <ArrowRight className="cta-arrow size-4" /></Link></Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
