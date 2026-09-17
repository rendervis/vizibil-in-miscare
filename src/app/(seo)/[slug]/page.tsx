import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/logo";
import { SiteFooter } from "@/components/landing/site-footer";
import { getSeoPage, seoPages } from "@/lib/seo-pages";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return seoPages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${siteConfig.url}/${page.slug}` },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

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
      { "@type": "ListItem", position: 2, name: page.eyebrow, item: `${siteConfig.url}/${page.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8"><Link href="/"><Logo /></Link><Button asChild size="sm"><Link href="/#market">Vezi marketplace demo</Link></Button></div>
      </header>
      <main>
        <section className="paper-grid bg-[var(--paper)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="text-xs font-black uppercase tracking-[.18em] text-[var(--route)]">{page.eyebrow}</div>
            <h1 className="font-display mt-5 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.055em] md:text-8xl">{page.h1}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink)]/60">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link href="/#market">Testează piața <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline"><Link href="/#driver">Sunt șofer</Link></Button></div>
          </div>
        </section>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-5 px-5 md:px-8">
            {page.sections.map((section, index) => <article key={section.heading} className="grid gap-4 border-t border-[var(--ink)]/10 py-8 md:grid-cols-[120px_1fr]"><div className="text-xs font-black tracking-[.16em] text-[var(--route)]">0{index + 1}</div><div><h2 className="text-2xl font-black tracking-[-.03em] md:text-3xl">{section.heading}</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[var(--ink)]/58">{section.body}</p></div></article>)}
          </div>
        </section>
        <section className="bg-[var(--ink)] py-16 text-white">
          <div className="mx-auto max-w-5xl px-5 md:px-8"><h2 className="font-display text-4xl font-black tracking-[-.045em] md:text-5xl">Întrebări despre {page.eyebrow.toLowerCase()}</h2><div className="mt-8 grid gap-3">{page.faq.map(([q,a]) => <details key={q} className="rounded-2xl border border-white/10 bg-white/5 p-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">{a}</p></details>)}</div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
