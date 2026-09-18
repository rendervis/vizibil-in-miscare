import posthog from "posthog-js";

type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export const analyticsEvents = {
  businessCtaClicked: "business_cta_clicked",
  driverCtaClicked: "driver_cta_clicked",

  marketSearchStarted: "market_search_started",
  targetAreaSelected: "target_area_selected",

  vehicleCardViewed: "vehicle_card_viewed",
  vehicleAdded: "vehicle_added",
  vehicleRemoved: "vehicle_removed",

  campaignSummaryOpened: "campaign_summary_opened",

  businessLeadStarted: "business_lead_started",
  businessLeadSubmitted: "business_lead_submitted",

  driverLeadStarted: "driver_lead_started",
  driverLeadSubmitted: "driver_lead_submitted",

  seoCtaClicked: "seo_cta_clicked",
} as const;

export type AnalyticsEvent =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function trackEvent(
  event: AnalyticsEvent,
  properties: AnalyticsProperties = {},
) {
  if (typeof window === "undefined") return;

  const projectToken =
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN?.trim();

  if (!projectToken) return;

  posthog.capture(event, properties);
}