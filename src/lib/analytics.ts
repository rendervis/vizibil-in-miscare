"use client";

type Properties = Record<string, string | number | boolean | null | undefined>;

let posthogPromise: Promise<typeof import("posthog-js")> | null = null;

async function getPosthog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key || typeof window === "undefined") return null;

  if (!posthogPromise) posthogPromise = import("posthog-js");

  const module = await posthogPromise;
  const posthog = module.default;
  const win = window as Window & { __vizibilPosthog?: boolean };

  if (!win.__vizibilPosthog) {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      autocapture: false,
    });
    win.__vizibilPosthog = true;
  }

  return posthog;
}

export async function trackEvent(name: string, properties: Properties = {}) {
  try {
    const posthog = await getPosthog();
    posthog?.capture(name, properties);
  } catch {
    // Analytics must never block the smoke-test funnel.
  }
}
