/**
 * Thin wrapper around the GTM dataLayer.
 *
 * Every meaningful interaction pushes a named event here rather than relying on
 * GTM's built-in click triggers, which break whenever markup or CSS classes
 * change and can't distinguish a successful form submit from a failed one.
 *
 * Each event name below needs a matching Custom Event trigger in GTM — see the
 * table in README.md.
 */

export type TrackEvent =
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_error"
  | "whatsapp_click"
  | "email_click"
  | "linkedin_click"
  | "cta_click";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
