import posthog from "posthog-js";

const projectToken =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN?.trim();

const apiHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() ||
  "https://eu.i.posthog.com";

if (projectToken) {
  posthog.init(projectToken, {
    api_host: apiHost,

    defaults: "2026-05-30",

    autocapture: false,

    capture_pageview: "history_change",
    capture_pageleave: false,

    disable_session_recording: true,
    capture_heatmaps: false,

    person_profiles: "identified_only",
  });
}