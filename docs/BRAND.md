# Vizibil în Mișcare — Brand v0.3

## Role

Romania-first brand for a marketplace that connects local businesses with private cars already moving through relevant urban areas.

## Domain

`vizibilinmiscare.ro`

## Positioning

**Descriptor:** Publicitate locală pe trasee reale.

**Business promise:** Pune-ți afacerea pe mașini care circulă deja prin zonele unde sunt clienții tăi.

**Driver promise:** Fă bani din drumurile pe care le faci deja.

**Proof line:** Trasee reale. Preț clar. Campanii verificate.

## One-sentence explanation

Vizibil în Mișcare conectează afaceri locale cu șoferi ale căror trasee normale trec prin zone relevante: afacerea rezervă campania, șoferul vede recompensa înainte să accepte, iar livrarea este verificată.

## Brand architecture

Cars are the first inventory type, not necessarily the final category. The brand must therefore not depend visually on a car silhouette.

Do not describe Vizibil în Mișcare as a traditional advertising agency. The product is a marketplace / booking-and-verification layer.

## Visual system

- Deep Ink: `#1F1830`
- Signal Lime: `#C7F36B`
- Bone: `#F5F2EA`
- Slate: `#2D3138`
- Route Violet: `#7C72F2`

Typography:
- Manrope — brand/headings
- Inter — body/UI

No orange.
No generic SaaS blue gradient.

## Logo

Primary lockup = compact route mark + `Vizibil în Mișcare` wordmark.

The route mark is intentionally abstract: two endpoints connected by a moving path. It should read as movement/route before it reads as any specific vehicle.

The favicon/app mark uses the route mark alone on Deep Ink.

Do not add:
- car silhouette;
- steering wheel;
- map pin;
- megaphone;
- speedometer;
- fake 3D chrome effects.

## Photography direction

Photography should make the model understandable before the viewer reads the copy.

Use:
- real-looking ordinary urban cars, not race/luxury cars;
- removable door magnets / simple campaign panels;
- Romanian/European city context;
- people interacting naturally with the car or campaign;
- women and men, with women intentionally represented in the launch visuals;
- business-owner context, driver context and road context;
- daylight or believable city evening light;
- documentary/commercial photography, not glossy automotive advertising.

Avoid:
- giant fake wraps unless a page specifically explains wrapping;
- impossible magnet placement;
- text-heavy AI-generated signage;
- logos generated inside photography;
- American-looking plates/city context;
- taxi/rideshare visual language unless relevant.

## Homepage communication rule

A new visitor should understand the product in under 10 seconds:

1. Business chooses where it wants visibility.
2. A matching car receives removable advertising.
3. The driver continues normal journeys.
4. The campaign is verified.

The homepage is for comprehension + conversion, not a product whitepaper. Keep implementation detail out of the main flow.

## Tone

Direct, practical, local and measurable.

Prefer:
- `Alege zona.`
- `Alege mașina.`
- `Începe campania.`
- `Fă bani din drumurile pe care le faci deja.`

Avoid:
- `validăm ipoteza` in prominent customer-facing copy;
- startup jargon;
- agency jargon;
- fake urgency;
- performance guarantees;
- language that makes the service sound imaginary.

## Launch-stage transparency

The site must feel like the real service it is becoming, not like an internal experiment. Do not repeat `pilot`, `smoke test`, `validation` or similar startup language in public-facing UI.

Be transparent only where the distinction materially matters:
- label synthetic marketplace profiles as examples / demonstrative;
- confirm real availability before payment;
- do not invent customer counts, testimonials, campaign results or live inventory;
- keep launch-stage wording to discreet places when legally or operationally necessary.

## Interaction system

All clickable buttons must use the hand cursor and the same motion language:
- subtle 2px lift on hover;
- slightly stronger shadow / surface response;
- return to baseline on active press;
- visible focus ring for keyboard use;
- text CTAs use a right-arrow that moves a few pixels on hover;
- utility controls may keep their semantic icon (search, close, clear) but use the same cursor and hover motion.

Never ship a clickable control that keeps the default arrow cursor.

## Readability

Body copy is not decoration. Avoid low-opacity text that becomes difficult to read, especially on dark sections. Supporting copy should generally remain around 70%+ visual opacity on solid backgrounds, with muted colors chosen to maintain comfortable contrast.

## Media fallback

Missing campaign photography must never leave a blank white/grey rectangle. Until final media exists, frames use the branded dark route fallback. Final photography fades in over that fallback when the asset loads.

## Social identity

Instagram: `@vizibilinmiscare`

Avatar: route mark only, Deep Ink background, Signal Lime route, Bone endpoints. No wordmark at avatar size.
