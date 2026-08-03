# GTM Setup Guide — safijamil.com

Container **GTM-N8RCXCCG** · GA4 **G-BEZK2MSB9E** · Clarity **xw96qvpavg**

The site now pushes a named event to the dataLayer for every meaningful action.
This guide turns those into GTM triggers, GA4 events, and Google Ads conversions.

> **Before you start — the one rule that matters.** GA4 is already loaded on the page
> directly via gtag.js. **Do not create a "GA4 Configuration" tag in GTM for
> `G-BEZK2MSB9E`.** Pageviews would be counted twice. The GA4 *Event* tags below set
> the Measurement ID on the tag itself, which is safe.

---

## 1. What the website sends

| dataLayer event | Fires when | Treat as |
|---|---|---|
| `contact_form_start` | visitor focuses any form field (once per page) | engagement |
| `contact_form_submit` | form submitted **successfully** | 🎯 **conversion** |
| `contact_form_error` | submission failed | diagnostic |
| `whatsapp_click` | any WhatsApp link clicked | 🎯 **conversion** |
| `email_click` | any mailto link clicked | 🎯 **conversion** |
| `linkedin_click` | LinkedIn profile link clicked | engagement |
| `cta_click` | any call-to-action button clicked | engagement |

Every click event also carries three parameters:

- `link_label` — which button, e.g. `hero_see_my_work`, `contact_whatsapp`
- `link_location` — where it sat, e.g. `hero`, `contact_section`, `city_lahore`
- `link_url` — the destination

`contact_form_submit` / `_start` / `_error` carry `form_name: "contact"`;
errors also carry `error_status`.

---

## 2. Create the Variables (do this first)

**Built-in** — Variables → Configure → tick at least:
Click URL, Click Text, Page URL, Page Path, Page Title, Referrer, Scroll Depth Threshold.

**User-Defined** — Variables → New → *Data Layer Variable* for each:

| Variable name | Data Layer Variable Name |
|---|---|
| `dlv - link_label` | `link_label` |
| `dlv - link_location` | `link_location` |
| `dlv - link_url` | `link_url` |
| `dlv - form_name` | `form_name` |
| `dlv - error_status` | `error_status` |

Also create a **Constant** named `GA4 Measurement ID` with value `G-BEZK2MSB9E`.
Every GA4 tag below references it, so you only ever change it in one place.

---

## 3. Create the Triggers

Triggers → New → *Custom Event*. The **Event name** must match exactly.

| Trigger name | Event name | Fires on |
|---|---|---|
| CE - Form Start | `contact_form_start` | All Custom Events |
| CE - Form Submit | `contact_form_submit` | All Custom Events |
| CE - Form Error | `contact_form_error` | All Custom Events |
| CE - WhatsApp Click | `whatsapp_click` | All Custom Events |
| CE - Email Click | `email_click` | All Custom Events |
| CE - LinkedIn Click | `linkedin_click` | All Custom Events |
| CE - CTA Click | `cta_click` | All Custom Events |

**Two extra triggers that need no code:**

- **Scroll Depth** → New → Scroll Depth → Vertical, percentages `25,50,75,90`, All Pages.
- **Outbound Link Click** → New → Click - Just Links → *Wait for Tags* on,
  fire when `Click URL` **does not contain** `safijamil.com` and `Click URL` matches
  RegEx `^https?://`.

---

## 4. Create the GA4 Event Tags

Tags → New → **Google Analytics: GA4 Event** for each row. Set
**Measurement ID** = `{{GA4 Measurement ID}}` on every one.

| Tag name | Event Name | Event Parameters | Trigger |
|---|---|---|---|
| GA4 - Form Start | `form_start` | `form_name` = `{{dlv - form_name}}` | CE - Form Start |
| GA4 - Generate Lead | `generate_lead` | `form_name` = `{{dlv - form_name}}` | CE - Form Submit |
| GA4 - Form Error | `form_error` | `error_status` = `{{dlv - error_status}}` | CE - Form Error |
| GA4 - WhatsApp Click | `whatsapp_click` | `link_label` = `{{dlv - link_label}}`, `link_location` = `{{dlv - link_location}}` | CE - WhatsApp Click |
| GA4 - Email Click | `email_click` | `link_label` = `{{dlv - link_label}}`, `link_location` = `{{dlv - link_location}}` | CE - Email Click |
| GA4 - LinkedIn Click | `linkedin_click` | `link_location` = `{{dlv - link_location}}` | CE - LinkedIn Click |
| GA4 - CTA Click | `cta_click` | `link_label` = `{{dlv - link_label}}`, `link_location` = `{{dlv - link_location}}` | CE - CTA Click |
| GA4 - Scroll | `scroll_depth` | `percent` = `{{Scroll Depth Threshold}}` | Scroll Depth |
| GA4 - Outbound Click | `outbound_click` | `link_url` = `{{Click URL}}` | Outbound Link Click |

`generate_lead` is a GA4 recommended event name — use it rather than a custom name so
GA4's built-in reporting understands it.

---

## 5. Mark conversions in GA4

GA4 → Admin → **Events** (wait until each event has fired once and appears), then
toggle **Mark as key event** for:

- `generate_lead` ← the form
- `whatsapp_click`
- `email_click`

Leave `cta_click`, `scroll_depth`, `form_start` as plain events — they're for
diagnosis, not goals. Marking everything as a conversion makes the number meaningless.

---

## 6. Google Ads conversion tracking

In **Google Ads** → Goals → Conversions → New → Website → *Manual setup / use GTM*.
Create one conversion action per lead type (Form, WhatsApp, Email). Google gives you a
**Conversion ID** and **Conversion Label** for each.

Then in GTM, Tags → New → **Google Ads Conversion Tracking**:

| Tag name | Conversion Label | Trigger |
|---|---|---|
| Ads - Lead (Form) | *(form label)* | CE - Form Submit |
| Ads - Lead (WhatsApp) | *(whatsapp label)* | CE - WhatsApp Click |
| Ads - Lead (Email) | *(email label)* | CE - Email Click |

Add a **Conversion Linker** tag firing on *All Pages* — without it, Google Ads can't
attribute conversions back to clicks. This is the single most-missed step.

If you assign a value, use your own estimate of a lead's worth so Smart Bidding can
optimise toward revenue rather than raw lead count.

---

## 7. Test before publishing

1. GTM → **Preview** → enter `https://safijamil.com` → Connect.
2. In the Tag Assistant window, walk the site and check each action:

| Do this | Expect in Tag Assistant |
|---|---|
| Click a form field | `contact_form_start` → GA4 - Form Start fired |
| Submit the form | `contact_form_submit` → GA4 - Generate Lead + Ads - Lead fired |
| Click WhatsApp | `whatsapp_click` → GA4 + Ads fired |
| Click the email address | `email_click` fired |
| Click "See my work" | `cta_click` with `link_label = hero_see_my_work` |
| Scroll to the bottom | `scroll_depth` at 25/50/75/90 |

3. Cross-check in **GA4 → Reports → Realtime** — events should appear within seconds.
4. Only then hit **Submit / Publish** in GTM, and name the version so you can roll back.

**Debug tip:** open the browser console and type `dataLayer` — you'll see every event
the page has pushed, exactly as GTM sees it.

---

## 8. Recommended reports to build

Once data accumulates (give it a week):

- **Lead source report** — GA4 → Reports → Acquisition, with `generate_lead` as the key
  event. Tells you which channel actually produces enquiries.
- **CTA effectiveness** — Explore → free-form, dimension `link_label`, metric event
  count. Shows which button earns its place.
- **Form funnel** — compare `form_start` vs `generate_lead` counts. A big gap means the
  form is losing people; check Clarity recordings for those sessions.
- **Clarity** — filter recordings by "Rage clicks" and "Dead clicks" to spot UX
  problems the numbers alone won't show.

---

## 9. Adding a new event later

In the relevant component:

```tsx
import { track } from "@/lib/analytics";
track("my_new_event", { some_param: "value" });
```

Add the name to the `TrackEvent` union in `src/lib/analytics.ts`, then create a matching
Custom Event trigger + GA4 Event tag in GTM using the steps above.

For links, the shortcut is the existing component:

```tsx
<TrackedLink href="..." event="cta_click" label="where_it_is" location="which_page">
```
