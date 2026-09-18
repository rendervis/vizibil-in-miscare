# SEO Plan — Vizibil în Mișcare v0.3

## Canonical host

Use the host that Vercel actually serves as canonical. At the time of this batch that is expected to be:

`https://www.vizibilinmiscare.ro`

Set the same value in `NEXT_PUBLIC_SITE_URL` and keep the other host on a permanent redirect.

## Goal

Capture real Romanian search intent while the homepage converts two audiences:

- local businesses looking for advertising options;
- drivers looking to earn money with their car.

The homepage stays concise. Search-depth lives on dedicated SEO pages.

## Routes

- `/publicitate-pe-masini`
- `/reclama-pe-masina`
- `/castiga-bani-cu-masina`
- `/publicitate-locala-bucuresti`
- `/publicitate-mobila`
- `/alternative-panouri-publicitare`

## Intent map

### Business

- publicitate pe masini
- reclama pe masina
- publicitate mobila
- publicitate locala Bucuresti
- reclama locala Bucuresti
- alternative panouri publicitare

### Driver

- castiga bani cu masina
- reclama pe masina bani
- castiga bani cu reclame pe masina
- venit suplimentar cu masina

## Technical SEO included

- unique title + description per SEO page;
- canonical URLs;
- `ro-RO` language alternates;
- Open Graph + Twitter metadata;
- page-specific social images mapped to Batch 2 assets;
- `robots.ts`;
- `sitemap.ts`;
- semantic heading hierarchy;
- FAQPage schema;
- BreadcrumbList schema;
- WebPage schema on SEO pages;
- Organization + WebSite schema on homepage;
- internal links between related intent pages;
- indexable privacy page;
- no fake rating/review schema;
- no fake inventory or customer claims.

## Content rule

Do not create pages by changing only the keyword in the H1. Each route must answer a distinct search intent and link naturally to the relevant conversion path.

Do not mass-generate Romanian city pages until there is a credible launch/supply plan for those cities.

## Batch 2 media paths

Homepage:
- `/media/home/hero-car-magnet.webp`
- `/media/home/business-selects-car.png`
- `/media/home/magnet-installed.png`
- `/media/home/driver-on-route.png`
- `/media/home/driver-earn.png`

SEO pages use two files per route under `/public/media/seo/` and are centrally mapped in `src/config/media.ts`.

## Launch checklist

1. Confirm one canonical host and `NEXT_PUBLIC_SITE_URL` match.
2. Verify `/robots.txt` and `/sitemap.xml` publicly.
3. Create Google Search Console **Domain property** for `vizibilinmiscare.ro`.
4. Verify ownership by DNS TXT.
5. Submit `/sitemap.xml`.
6. Request indexing for homepage and the six SEO routes after final visuals are live.
7. Add PostHog and confirm conversion events.
8. Review Search Console queries after enough impressions accumulate; rewrite from evidence, not guesses.
