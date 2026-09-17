# Vizibil în Mișcare — Smoke Test

Senior-structured Next.js smoke-test for `vizibilinmiscare.ro`.

The goal is to validate both sides of the marketplace before building the production mobile application:

- business demand for local moving visibility;
- driver willingness to accept fixed-reward campaigns that match their normal routes.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn-style UI primitives
- Zod validation
- Nodemailer / Zoho SMTP lead delivery
- Optional PostHog analytics

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Before production:

```bash
npm run typecheck
npm run lint
npm run build
```

## Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import into Vercel as a Next.js project.
3. Add environment variables from `.env.example`.
4. Keep `NEXT_PUBLIC_SITE_URL=https://vizibilinmiscare.ro`.
5. Deploy.
6. Point `vizibilinmiscare.ro` to Vercel and make HTTPS canonical.

## Zoho Mail

Recommended addresses:

- `contact@vizibilinmiscare.ro`
- `pilot@vizibilinmiscare.ro`
- `business@vizibilinmiscare.ro`
- `drivers@vizibilinmiscare.ro`

The `/api/leads` route delivers via Zoho SMTP when configured and returns an explicit error in production if delivery is not configured.

## Analytics

Set `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` to capture the smoke-test funnel.

Important events include market search, vehicle-card interaction, placement selection, reservation intent and driver registration intent.

## SEO

See `docs/SEO_PLAN.md`.

Included:

- semantic homepage;
- six useful Romanian SEO pages;
- metadata/canonicals;
- sitemap/robots;
- Organization, FAQ and Breadcrumb structured data;
- internal links into the actual marketplace/driver funnels.

The SEO pages are useful pages, not thin redirect/doorway pages.

## Brand

See `docs/BRAND.md`.

Brand identity is centralized in:

- `src/config/site.ts`
- `src/components/landing/logo.tsx`
- `public/logo.svg`
- `public/icon.svg`
- CSS variables in `src/app/globals.css`

## Demo data

`src/data/demo-market.ts` contains synthetic marketplace inventory. It is explicitly labelled as demo inventory in the UI.

Do not convert it into fake live inventory.

## Future dashboard

See `docs/ARCHITECTURE.md`. The public site can remain intact while authenticated business/driver/admin surfaces are added in route groups.
