# SEO Plan — Vizibil în Mișcare

## Goal

Canonical domain: `https://vizibilinmiscare.ro`


Capture **existing search intent** while the homepage tests the marketplace interaction.

The project deliberately does **not** create thin redirect/doorway pages. Each SEO URL has unique content, metadata, FAQ structured data, breadcrumbs and a strong CTA back into the demo marketplace.

## Romanian intent clusters

### Business
- publicitate pe masini
- reclama pe masina
- publicitate mobila
- publicitate locala Bucuresti
- reclama stradala Bucuresti
- alternative panouri publicitare

### Driver
- castiga bani cu masina
- reclama pe masina bani
- castiga bani cu reclame pe masina
- venit suplimentar cu masina

## Routes included

- `/publicitate-pe-masini`
- `/reclama-pe-masina`
- `/castiga-bani-cu-masina`
- `/publicitate-locala-bucuresti`
- `/publicitate-mobila`
- `/alternative-panouri-publicitare`

## Technical SEO included

- Next.js metadata API
- canonical URLs
- Open Graph/Twitter metadata
- `robots.ts`
- `sitemap.ts`
- semantic headings
- FAQPage schema where FAQ exists
- BreadcrumbList schema on SEO pages
- Organization schema on homepage
- lightweight SVG visuals instead of image-heavy hero
- internal links into marketplace/driver funnels
- no fake review/rating schema
- no fake inventory claims

## After domain launch

1. Set `NEXT_PUBLIC_SITE_URL` to the canonical production domain.
2. Add domain to Google Search Console.
3. Submit `/sitemap.xml`.
4. Verify all canonical URLs resolve only on HTTPS and preferred host.
5. Connect PostHog or analytics and track search → vehicle → reserve funnel.
6. Use real Search Console query data to rewrite pages after 4–8 weeks.
7. Use Google Keyword Planner for paid-search volume/CPC before extrapolating search demand.
8. Add city pages only when there is real supply/demand or a legitimate launch plan; do not mass-generate doorway city pages.
