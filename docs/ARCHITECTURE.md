# Architecture Notes

## Current purpose

This repository is a smoke-test website, but its structure is intentionally compatible with expansion into the advertiser web dashboard.

## Current layers

- `src/app` — routing, metadata, API endpoints
- `src/components/ui` — shadcn-style primitives
- `src/components/landing` — validation UI
- `src/config` — brand/site configuration
- `src/data` — synthetic demo market only
- `src/lib` — analytics, SEO content, shared helpers
- `src/types` — domain-facing TypeScript types

## Expansion path

When validation passes, add without rewriting the public site:

```text
src/app/(dashboard)/business/*
src/app/(dashboard)/driver/*
src/app/(admin)/*
src/server/*
src/features/auth/*
src/features/campaigns/*
src/features/placements/*
src/features/vehicles/*
src/features/routes/*
src/features/payments/*
src/features/verification/*
```

## Core domain objects

- User
- Business
- Driver
- Vehicle
- RouteSession
- RouteProfile
- Campaign
- Placement
- Verification
- Payment / LedgerEntry / Transfer
- Dispute
- CountryConfig
- CityConfig

### Critical distinction

`Campaign` belongs to the advertiser and may contain many `Placement` records.

`Placement` is the one-car contract and contains its own fixed driver reward, dates, verification requirements and status.

## Route architecture later

Store raw route samples separately from the aggregate profile.

- mobile collects GPS locally in batches;
- backend validates accuracy and movement;
- PostGIS builds zone overlap and density;
- advertiser sees aggregated route corridors, not home/work pins;
- retention policy should delete or aggressively reduce raw data when no longer needed.

## Payments later

Use a provider such as Stripe Connect only after legal/accounting structure is confirmed. Keep an internal ledger independent of provider objects.

Never derive financial truth only from Stripe status fields.

## Multi-country

No Romanian logic should be embedded in core campaign entities. Country/city config should hold:

- locale/currency;
- payment availability;
- legal terms version;
- allowed advertising formats;
- KYC/tax fields;
- map/zone rules;
- campaign restrictions;
- launch switch.

## API contract

When backend APIs expand, introduce one shared response envelope and typed clients rather than duplicating fetch logic across web/mobile.
