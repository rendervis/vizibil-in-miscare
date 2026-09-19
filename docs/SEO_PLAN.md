# SEO Plan — Vizibil în Mișcare v0.4

## Canonical host

Use the host that Vercel actually serves as canonical. The chosen production canonical host is:

`https://www.vizibilinmiscare.ro`

Set `NEXT_PUBLIC_SITE_URL=https://www.vizibilinmiscare.ro` in Vercel Production and the local `.env.local` when needed. The fallback in `src/config/site.ts` and `.env.example` must match. Keep `https://vizibilinmiscare.ro` on a permanent redirect to `www`; verify the redirect status and canonical URLs after deploy. Do not overwrite secret-bearing environment files with `.env.example`.

## Goal

Capture real Romanian search intent while the homepage converts two audiences:

- local businesses looking for advertising options;
- drivers looking to earn money with their car.

The homepage stays concise. Search-depth lives on dedicated SEO pages. Capture problem-led queries **before** people know the product category, not only searches for "reclamă pe mașină". Site visitors should be able to understand each route and reach a relevant business or driver CTA.

## Routes

- `/publicitate-pe-masini`
- `/reclama-pe-masina`
- `/castiga-bani-cu-masina`
- `/publicitate-locala-bucuresti`
- `/publicitate-mobila`
- `/alternative-panouri-publicitare`

Discovery guides added in the SEO expansion:

- `/alternative-bolt-uber` — alternatives for someone searching for income with a personal car, not an enrollment page for either platform;
- `/promovare-afacere-locala` — channel selection and local customer acquisition for business owners;
- `/idei-promovare-afacere-mica` — concrete promotion tactics for limited budgets, distinct from the general local promotion guide.

The six commercial SEO pages and three discovery guides use the existing `[slug]` route; guides are rendered by `EditorialArticle`. All nine belong in the sitemap.

## Intent map

### Business

- publicitate pe masini
- reclama pe masina
- publicitate mobila
- publicitate locala Bucuresti
- reclama locala Bucuresti
- alternative panouri publicitare
- cum îmi promovez afacerea / cum atrag clienți locali
- promovare afacere locală / idei promovare afacere mică
- marketing local / reclamă pentru afacere / soluții de promovare
- publicitate outdoor / publicitate de proximitate
- promovare magazin, salon, restaurant, clinică sau service (start as examples in broader guides, not near-duplicate pages)

### Driver

- castiga bani cu masina
- reclama pe masina bani
- castiga bani cu reclame pe masina
- venit suplimentar cu masina
- cum fac bani cu mașina / bani cu mașina personală
- job part-time cu mașina / cum fac bani conducând
- alternative Bolt și Uber / cum intru la Bolt (informational comparison and official links, not a misleading Bolt signup page)
- firme care plătesc pentru reclamă pe mașină

Map spelling/diacritic variants to the same useful page where intent is shared; do not create one URL per phrase. No unverified search-volume claims until GSC or keyword-tool evidence exists.

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
- no fake inventory or customer claims;
- `Article` schema and distinct title/description for the three editorial guides;
- FAQ markup only for FAQ content visible on the commercial pages; do not assume it creates Google rich results;
- `src/components/ui/button.tsx`: default lime CTA uses explicit dark text color `--signal-foreground`, including when its parent section sets white text.

## Content rule

Do not create pages by changing only the keyword in the H1. Each route must answer a distinct search intent and link naturally to the relevant conversion path.

Do not mass-generate Romanian city pages until there is a credible launch/supply plan for those cities.

Keep these distinctions truthful: not ridesharing; no guarantee of driver income, campaign availability, impressions or sales; private routes are not exposed to advertisers. Campaign and vehicle examples are illustrative until real inventory exists.

Internal links should connect problem-led guides → commercial explanations → relevant driver/business lead CTA. Keep a direct route to both audiences from the homepage. No redesign or unnecessary asset regeneration for SEO.

## Batch 2 media paths

Homepage:
- `/media/home/hero-car-magnet.webp`
- `/media/home/business-selects-car.png`
- `/media/home/magnet-installed.png`
- `/media/home/driver-on-route.png`
- `/media/home/driver-earn.png`

SEO pages use two files per route under `public/media/seo/` (public URL prefix `/media/seo/`) and are centrally mapped in `src/config/media.ts`. The missing `castiga-bani-cu-masina-hero.png` requires an approved asset; do not silently deploy the discarded generated hero. New editorial guides use the existing social image unless dedicated assets are intentionally produced later.

## Launch checklist

1. **Canonical chosen:** `https://www.vizibilinmiscare.ro`. Confirm the Vercel Production env value, fallback, canonical tags and permanent redirect after deploy.
2. Verify `/robots.txt` and `/sitemap.xml` publicly.
3. **GSC already activated on 2026-09-18**; do not repeat onboarding. Confirm the existing property scope and verified ownership in GSC rather than assuming its property type.
4. Confirm the current `https://www.vizibilinmiscare.ro/sitemap.xml` is submitted and discoverable.
5. **Indexing already requested for the previously existing pages on 2026-09-18**; after deployment, request the three new guide URLs once. Do not repeatedly resubmit unchanged URLs.
6. PostHog is implemented: verify driver and business lead conversions, and exclude internal testing traffic before interpreting audience metrics.
7. Verify nine SEO URLs, CTA destinations and mobile 320/390px usability without changing the approved desktop design.
8. Run `npm run typecheck`, `npm run lint`, `npm run build` on a complete install before pushing.
9. Review GSC queries, impressions and landing pages when data becomes available; rewrite from evidence, not guesses.

## Discoverability and distribution

- Publish practical, truthful information for two real search journeys: (1) "Cum fac bani cu mașina?" → driver guide / registration; (2) "Cum îmi promovez afacerea locală?" → business guide / campaign inquiry.
- Instagram/Reels should present the problem and the product mechanism, not vague "startup" awareness. Use a distinct CTA for each audience.
- Encourage relevant editorial mentions and community discussions without spam or fabricated results. Do not claim SEO rankings, campaign outcomes or live inventory that have not been measured.
- Primary conversion measures: qualified driver registrations and business campaign inquiries; intermediate signals: SEO page entrances, CTA clicks and form starts.
- Website/GSC visibility and social/Instagram content should share the same product language: "Fă bani din drumurile pe care le faci deja" and "Fă-ți afacerea vizibilă pe traseele pe care clienții tăi le parcurg deja."
