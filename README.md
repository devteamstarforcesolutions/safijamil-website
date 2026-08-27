# safijamil.com

Personal site for **Safi Jamil** — brand strategist & Google Ads specialist.
Next.js (App Router, TypeScript), deployed on Vercel.

---

## Handover / context for a new developer or AI assistant

Everything needed to continue this project is in this repo. Read this file first,
then `src/app/page.tsx` to see how the homepage is assembled.

**Owner workflow note:** the owner edits this site via the GitHub web UI directly
(editing files in-browser, or **Add file → Create new file / Upload files**),
committing to `main`. Vercel then redeploys automatically. If you are an AI
assistant without push access, deliver changes as exact file contents or precise
find-and-replace instructions rather than assuming you can push.

**Known deployment quirk:** this project has occasionally served a frozen/stale
version of dynamic routes (e.g. `sitemap.xml`, `robots.txt`) even after a
successful-looking commit — the fix is a **manual redeploy from the Vercel
dashboard with "Use existing Build Cache" unchecked**. If a change doesn't
appear live after a normal push, try that before assuming the code is wrong.
Also note: AI assistants fetching the live site to verify changes may see
stale/cached results from their own fetch tooling — always cross-check with the
owner's own browser (ideally incognito) or a third-party tool (Google Rich
Results Test, Facebook Sharing Debugger) before concluding something is broken.

---

## Stack & services

| Thing | Where | Notes |
|---|---|---|
| Code | GitHub `devteamstarforcesolutions/safijamil-website` | private |
| Hosting | Vercel (Hobby / free) | auto-deploys on push to `main` |
| Domain | **safijamil.com** (no www) is primary; `www` **301-redirects** to it (configured in Vercel → Domains → Redirect to Another Domain). Canonicals, the sitemap and structured data all use the bare form — keep them matching whichever domain is set primary in Vercel. | DNS at **Cloudflare** |
| Contact form | Web3Forms (free tier) | delivers to safijamil.dev@gmail.com; conversion tracked as GA4 `generate_lead` (see Analytics section) |
| Search | Google Search Console | domain property verified; sitemap submitted |
| Analytics | GTM `GTM-N8RCXCCG` only | GA4, Google Ads and Clarity are fired as tags **inside GTM**, not from the page |
| Web Analytics | `@vercel/analytics` | installed in `layout.tsx`, visible in Vercel dashboard |
| Speed monitoring | `@vercel/speed-insights` | installed in `layout.tsx`, Core Web Vitals from real visitors in Vercel dashboard (allow 24h+ for data) |
| AI/LLM discoverability | `public/llms.txt` | plain-text summary of the site for AI crawlers/agents (ChatGPT, Claude, Perplexity, etc.) |

### Cloudflare DNS gotcha

The apex `safijamil.com` CNAME and `www` records must be **grey cloud / "DNS only"**.
Turning on Cloudflare's orange-cloud proxy causes an infinite redirect loop
(`ERR_TOO_MANY_REDIRECTS`) because Cloudflare talks HTTP to Vercel while Vercel
redirects back to HTTPS. Zoho email MX records are unrelated — don't touch them.

### Environment variables (set in Vercel → Settings → Environment Variables)

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | yes | Browser posts the contact form straight to Web3Forms. Must be `NEXT_PUBLIC_` so the browser can read it; do **not** mark Sensitive. Web3Forms keys are public by design. |
| `WEB3FORMS_ACCESS_KEY` | optional | Server-side fallback for the same service. |
| `RESEND_API_KEY` | optional | If set, the API route sends via Resend instead. Needs a verified domain. |
| `RESEND_FROM_EMAIL` | optional | e.g. `Contact <contact@safijamil.com>`. |

Env vars only apply to builds started **after** they are saved — redeploy after changing them.

---

## Where to change what

Content lives in plain data files; you rarely need to touch layout code.

| To change… | Edit |
|---|---|
| Jobs / case-work cards / skills / tools / testimonials | `src/data/content.ts` |
| Blog posts (see scheduling below) — now includes `faq` array per post | `src/data/posts.ts` |
| Pakistan city landing pages — FAQs are now fully unique per city (no shared FAQ) | `src/data/cities.ts` |
| Case studies (masked client accounts) | `src/data/caseStudies.ts` |
| Email, phone, WhatsApp link + prefilled greeting | `src/data/contact.ts` |
| Colour scheme (whole site) | CSS variables at the top of `src/app/globals.css` |
| Page titles, meta descriptions, Person schema, WebSite schema | `src/app/layout.tsx` |
| Homepage FAQ (has its own FAQPage schema) | `src/components/HomeFaq.tsx` |
| Sitemap entries | `src/app/sitemap.ts` (mostly automatic; static-page dates driven by `SITE_LAST_UPDATED` constant — update it manually when core pages change) |
| AI crawler allowlist | `src/app/robots.ts` |
| AI/LLM site summary | `public/llms.txt` — update when adding new pages/posts |
| Security headers, redirects for retired URLs | `next.config.ts` |
| 404 page | `src/app/not-found.tsx` |

### Blog post scheduling

Each post in `src/data/posts.ts` has a `date`. A post becomes visible **when that
date arrives** — `publishedPosts()` filters out future dates, and pages use
`export const revalidate = 3600`, so the site re-checks hourly. To schedule a new
batch, append posts with future dates. Each post also needs:
- A banner at `public/images/blog/<slug>.svg` (existing ones were generated; match their style)
- A `faq` array (2–3 entries, `{ q, a }`) — required by the `Post` type; powers the
  visible FAQ section and the `FAQPage` schema on that post
- Reasonably current keyword research folded into the `content` and `keywords` field —
  the existing 8 posts were rewritten in Aug 2026 with 2026-specific data (pricing,
  platform changes, benchmarks); refresh stale stats periodically rather than
  leaving old figures to go out of date silently

### Colour scheme

`globals.css` defines the palette once as CSS custom properties on `:root`
(`--bg`, `--card`, `--text`, `--accent`, `--accent-rgb`, …). Changing those
values restyles the entire site. Note: some older components still contain
hard-coded hex values matching the dark theme — grep for `#5CADFF` if a colour
change looks incomplete.

---

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before shipping
npm run lint    # must pass before shipping
```

---

## Routes

- `/` — homepage (hero, about, experience, case work, skills, testimonials, FAQ, blog preview, contact). Has `Person` and `WebSite` (with `SearchAction`) schema.
- `/blog` and `/blog/[slug]` — insights. Each post has `BlogPosting`, `FAQPage`, and `BreadcrumbList` schema, an OG/Twitter share image, related-posts links, and a visible FAQ section.
- `/case-studies` — screenshot-backed client results. Has `ItemList`/`Service` schema (one entry per case study) and a dedicated OG/Twitter share image.
- `/google-ads-expert` and `/google-ads-expert/[city]` — 8 Pakistan city pages. Each has `Service`, `FAQPage`, and `BreadcrumbList` schema, fully unique FAQ content per city, and an OG/Twitter share image.
- `/api/contact` — form delivery (GET returns whether a provider is configured)
- `/robots.txt` — generated by `src/app/robots.ts`; explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) in addition to the general wildcard rule
- `/sitemap.xml` — generated by `src/app/sitemap.ts`
- `/llms.txt` — static file in `public/`, plain-text site summary for AI agents
- `/not-found` (404) — custom branded page with popular links, `noindex`
- Icons: `src/app/favicon.ico` (multi-res 16→256, SJ monogram), `icon.svg`, `apple-icon.png`.
  Google reads `/favicon.ico` in preference to the others — keep it in sync with the brand.

---

## Contact form

The browser posts **directly** to `api.web3forms.com`. This is deliberate: Web3Forms
sits behind Cloudflare and returns **403** for server-to-server calls that arrive
without browser headers. The server route at `src/app/api/contact/route.ts` remains
as a fallback and as the Resend path.

Debugging: append `?debug=1` to any page URL and submit the form — the exact
upstream error appears under the error message. Visiting `/api/contact` shows
whether a provider key is configured.

---

## Analytics

**Only the GTM container loads from the page** (`src/app/layout.tsx`, via
`next/script` plus the `<noscript>` iframe inside `<body>`). Everything else —
GA4 `G-BEZK2MSB9E`, Google Ads `AW-11476762889`, Microsoft Clarity `xw96qvpavg` —
is fired as a tag inside GTM.

> **Do not re-add gtag.js or the Clarity snippet to the page.** They were briefly
> installed both in code and in GTM, which double-counted pageviews and duplicated
> Clarity recordings. One tag, one place: GTM.

Raw `<script>` tags pasted into `<head>` do not work reliably in the App Router —
always use `next/script`.

**Custom events pushed to `dataLayer`** (see `GTM-SETUP-GUIDE.md` for the full
tag/trigger configuration):

| Event | Fires when |
|---|---|
| `contact_form_start` | visitor focuses a form field (once per page) |
| `contact_form_submit` | form submitted successfully — GTM maps this to the GA4 recommended event **`generate_lead`**, which is marked as a **Key Event** in GA4 (Admin → Events). Verified end-to-end Aug 2026. |
| `contact_form_error` | submission failed (carries `error_status`) |
| `whatsapp_click` | any WhatsApp link |
| `email_click` | any mailto link |
| `linkedin_click` | LinkedIn profile link |
| `cta_click` | any call-to-action button |

Click events carry `link_label`, `link_location` and `link_url`.

Events are pushed through `src/lib/analytics.ts`:

```ts
import { track } from "@/lib/analytics";
track("cta_click", { link_label: "hero_see_my_work", link_location: "hero" });
```

For links, wrap them in `src/components/TrackedLink.tsx` instead — it handles
internal/external routing and fires the event on click.

**Verifying tracking is alive:** GA4 → Reports → Realtime → Realtime overview →
"Event count by Event name" card. Submit a test contact form and confirm
`generate_lead` appears within ~30 seconds.

---

## Confidentiality rules for client data

Case studies deliberately **mask** client brand names (`Royal Ca••• Limo`) and never
show campaign names. Screenshots are cropped to remove Google account warning
banners. One account is presented strategy-only, with no metrics, because its
numbers are not flattering. Keep these conventions for any new case study — the
owner offers full walkthroughs privately over Zoom instead.

---

## SEO / GEO / Maintenance log (August 2026)

A full technical, content, and GEO (Generative Engine Optimization / AI-search)
audit and remediation pass was done in August 2026. Summary of what changed and
why, for future reference:

### Indexing & technical SEO
- **Fixed a frozen sitemap.** `sitemap.ts` was correct in code but the deployed
  route had been serving a stale build-time snapshot for weeks (2 of 8 blog posts
  only). Root cause was never fully confirmed (not static export — likely an ISR/
  caching edge case); fixed by a forced redeploy with build cache cleared. Sitemap
  resubmitted in Search Console.
- `sitemap.ts` static-page dates now come from a manually-maintained
  `SITE_LAST_UPDATED` constant instead of `new Date()` at build time, so
  `lastmod` reflects real content changes, not every redeploy. Blog listing page
  uses the newest post's date automatically.
- Added a **301 redirect from `www.safijamil.com`** to the bare domain (set as
  Vercel's primary domain redirect) — previously `www` served identical content
  without redirecting, a duplicate-content risk.
- Added **`next.config.ts` redirects** for old/dead URLs discovered via GSC's
  404 report (leftover from a previous site version): `/portfolio`,
  `/free-ppc-audit`, `/contact`, `/contact-me`, `/about-me`, and trailing-slash
  variants → mapped to current equivalent pages.
- Added **security headers** in `next.config.ts` (`headers()`): HSTS,
  `X-Frame-Options`, `X-Content-Type-Options`, `Cross-Origin-Opener-Policy`,
  `Referrer-Policy`. A **CSP was deliberately not added** — the risk of silently
  breaking GTM/GA4/Google Ads tracking outweighed the Lighthouse score benefit.
  Revisit only with careful testing if pursued later.
- Lighthouse: Performance 96–100, SEO 100, Accessibility 95–98, Best Practices
  capped around 81 — the remaining points are lost to a "deprecated API" warning
  originating from **Google's own** `gtag.js`/Attribution Reporting, not
  something fixable in this codebase.

### Schema / structured data
- **Person** schema (root layout) — pre-existing, verified correct.
- **FAQPage** schema — pre-existing on homepage FAQ; **newly added** to every
  blog post (`FAQPage`) and already present on city pages.
- **BlogPosting** schema — pre-existing; enhanced with `image`, `publisher`,
  `dateModified`, and corrected `datePublished`/`dateModified` to full ISO 8601
  with timezone (was missing timezone, flagged by Rich Results Test).
- **WebSite** schema with `SearchAction` — newly added to root layout (enables
  Google to show a sitelinks search box, not guaranteed).
- **ItemList** + **Service** schema — newly added to `/case-studies`, one
  `Service` entry per case study built dynamically from `caseStudies.ts` data.
- **BreadcrumbList** schema — newly added to blog posts (Home → Blog → Post) and
  city pages (Home → Google Ads Expert → City).
- **Reviews/AggregateRating schema was deliberately NOT added** to testimonials —
  Google disallows self-serving review markup without a genuine, verifiable
  third-party rating mechanism. Revisit only via a real review platform
  (Google Business Profile, Clutch, etc.), never by marking up on-site testimonials directly.

### Content
- All 8 existing blog posts were rewritten (Aug 2026) with fresh, researched
  2026-specific content — real pricing benchmarks, platform changes (e.g. AI Max
  for Search, Local Service Ads cost-per-lead data, server-side tracking/Consent
  Mode v2, the 2026 Meta-vs-Google ad-revenue crossover), and expanded keyword
  targeting (persona-based: campaign management, conversion tracking, audit,
  brand strategist angles; city/country-aware where relevant).
- Every post gained a `faq` field (2–3 Q&As) — see "Blog post scheduling" above.
- Fixed empty `alt=""` on blog hero images (individual post page + blog index) —
  was hurting image-SEO and accessibility.
- Added a `RelatedPosts` component (`src/components/RelatedPosts.tsx`) — every
  post now links to ≥3 others (same-tag prioritized), closing a gap where posts
  had zero internal links to each other.
- City pages: removed a shared `sharedFaq` array that was duplicating 2 of 3 FAQ
  answers verbatim across all 8 cities (thin/duplicate-content risk). Every city
  now has 3 fully unique, city-specific FAQs.
- Fixed missing/generic **Open Graph + Twitter Card images** on `/case-studies`
  and all city pages — both previously fell back to the generic homepage
  preview when shared on social/WhatsApp; now show page-specific descriptions
  and images.

### GEO (AI search / LLM discoverability)
- Added **`public/llms.txt`** — plain-text, structured summary of the site
  (who, what, services, blog index, contact) for AI agents to parse. **Update
  this whenever new pages or posts are added** — it is not auto-generated.
- `robots.ts` now **explicitly** allows major AI crawlers (GPTBot, ChatGPT-User,
  OAI-SearchBot, PerplexityBot, Perplexity-User, ClaudeBot, anthropic-ai,
  Claude-User, Claude-SearchBot, Google-Extended, Applebot-Extended,
  meta-externalagent, Bytespider, Amazonbot, CCBot) in addition to the general
  wildcard — was already technically allowed by the wildcard, but explicit
  listing removes ambiguity and future-proofs against accidental restriction.
- Added a custom, branded **404 page** (`src/app/not-found.tsx`) with `noindex`
  and links back into the site — replaces Next.js's generic default.

### Analytics / conversion tracking
- Installed **`@vercel/analytics`** and **`@vercel/speed-insights`**
  (`layout.tsx`) — previously not present; Vercel dashboard had no visitor or
  Core Web Vitals data of its own (GA4/GTM tracking was already fine and
  unaffected).
- Verified the GA4 lead-tracking funnel end-to-end: contact form → `track()` →
  GTM `dataLayer` → GA4 `generate_lead` event, confirmed live in Realtime
  reports and marked as a **Key Event** in GA4 Admin.

### Off-page / directories (external, not in this repo)
Existing external listings were audited: **Clutch** (live, linking correctly,
but portfolio/reviews/industries left mostly empty — needs strengthening),
**AgencyVista** (profile currently returns a server error — needs investigation
via login), **CrowdReviews** (live, but bio text contains a factual
inconsistency vs. the site — claims "mid-nineties" start and "two decades" of
experience, contradicting the site's actual 2018 PPC start date; **needs
correcting**), **Contra** (in good shape, active portfolio). General backlink
strategy (2026 best practice: credibility-first link earning, not volume —
directory listings, brand-mention monitoring, digital PR around the site's real
case-study data, community engagement) was discussed but is an ongoing,
external, manual process outside the codebase.

---

## Open items

- **Vercel Deployment Protection must stay OFF.** "Require Log In" was enabled at
  one point, which returned 403 to everyone including Googlebot and left the site
  unindexable. Check it first if pages stop being crawled.
- **Testimonials** in `src/data/content.ts` are written on behalf of real, named
  clients (Physio Shop, Rehab Care ×2, Solar Bridge) based on real results. Confirm
  each client approves the wording, or replace with their own words.
- Blog posts are scheduled through **9 Aug 2026**; add a new batch after that.
  Suggested next topics: Google Ads for real estate in Pakistan, "how much does
  Google Ads cost in Pakistan", Sialkot export marketing, GA4 setup for lead gen,
  click fraud in Pakistan PPC, WhatsApp lead tracking.
- Keyword targeting map: search volumes were never verified against Keyword
  Planner — the owner can pull exact figures from their own Google Ads account.
- Optional: move email to Resend so enquiries send from `contact@safijamil.com`.
- **CrowdReviews.com bio needs correcting** (see log above) — factual
  inconsistency vs. the site's real timeline.
- **AgencyVista profile is currently broken** (server error) — needs login and
  investigation.
- **Clutch profile is thin** — no portfolio, no reviews, no industries listed;
  service-line mix included an irrelevant "Sales Outsourcing" category that
  should be removed.
- **E-E-A-T signal expansion not yet done**: `Person` schema `sameAs` currently
  only lists LinkedIn — consider adding Fiverr, Contra, Clutch, or other
  verified professional profiles once they're in good shape.
- **Blog hero images**: current SVGs are the original site design; an AI-image
  regeneration pass (minimal/abstract style matching the homepage's dark
  navy + glowing-icon aesthetic, replacing the more generic first draft) was
  started for one post (`hire-google-ads-expert`) but not finished or rolled
  out to the remaining 7 — resume if desired.
- **Quotable/definition-style sentence polish** for AI-citation purposes was
  identified as a minor, optional GEO improvement but not executed — low
  priority relative to everything above.
- Backlink building (directories, digital PR, community engagement — see log
  above) is an ongoing manual process, not a one-time fix.
