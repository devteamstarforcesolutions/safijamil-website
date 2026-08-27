export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date — post goes live when this date arrives
  tag: string;
  keywords: string[];
  content: string; // markdown-lite: ## headings, - lists, blank-line paragraphs
};

export const posts: Post[] = [
  {
    slug: "google-ads-account-structure",
    title: "What $261K of Ad Spend Taught Me About Google Ads Account Structure",
    description:
      "Lessons from managing $261,855+ in live Google Ads spend: how to structure campaigns, ad groups, and budgets in 2026 — including the AI Max migration — so your account scales without wasting money.",
    date: "2026-08-02",
    tag: "Google Ads",
    keywords: [
      "google ads account structure",
      "google ads campaign structure",
      "ppc account structure",
      "google ads account structure 2026",
      "ai max for search campaigns",
      "google ads account audit expert",
      "campaign management expert",
      "google ads structure agency vs freelancer",
    ],
    content: `
Most Google Ads accounts don't fail because of bad ads. They fail because of bad structure — budgets spread across too many campaigns, ad groups stuffed with unrelated keywords, and no clean way to see what's actually driving revenue.
 
I currently manage over $261,855 in active Google and Meta Ads spend across car rental, home services, paint, and retail businesses. Here's the structure playbook that consistently holds up — updated for how the platform actually behaves in 2026.
 
## Start with business goals, not keywords
 
Before touching the keyword planner, define what a conversion is worth. A car rental booking, a housekeeping lead, and an e-commerce sale justify completely different costs per acquisition. Your structure should mirror your revenue streams — one campaign per service line or product category with its own budget, so money flows to what pays.
 
## Fewer campaigns, tighter themes — STAGs, not SKAGs
 
The old "single keyword ad groups" (SKAGs) era is over. In 2026, Single Theme Ad Groups (STAGs) — 3 to 10 tightly themed keywords per ad group — are the accepted standard, because Smart Bidding needs data density to learn, not artificial keyword isolation. My rule: group keywords by identical search intent, not by keyword variant. If two keywords deserve the same landing page and ad copy, they belong in the same ad group.
 
There's a hard data threshold behind this: an ad group pulling in fewer than roughly 15 conversions a month doesn't give Smart Bidding enough signal to optimize properly. If your ad groups are too narrow to hit that, consolidate — granularity that starves the algorithm of data is not precision, it's self-sabotage.
 
## Separate brand from non-brand — always
 
Brand terms convert at a fraction of the cost of generic terms. If they live in the same campaign, your averages look great while your growth terms quietly underperform. Split them, give brand a small protected budget, add brand terms as negatives in your non-brand and Performance Max campaigns so PMax can't claim credit for demand that already existed, and judge non-brand campaigns on their own numbers.
 
## The 2026 shift: AI Max for Search
 
Google has been rolling out AI Max as a native layer on top of standard Search campaigns — it expands keyword matching, generates ad copy variations, and can select landing pages automatically, without moving you into a full Performance Max structure. As of 2026 it's enabled by default on new Search campaigns in many accounts, and Google is auto-enrolling existing campaigns through recommendations.
 
What this means for structure: don't treat it as "set and forget." Test it deliberately on one campaign, keep brand exclusions and URL controls tight, and check monthly whether it's finding genuinely incremental traffic or just cannibalizing exact-match and branded clicks you already had. Structure now has a third dial to manage — Search, AI Max on Search, and Performance Max — not just two.
 
## Budget by data, not by hope
 
- Give every campaign enough budget for at least 30-50 clicks a day, or consolidate until you can.
- Let smart bidding exit learning before you judge it — usually 2-4 weeks.
- Move budget monthly toward the campaigns with the best cost per conversion, not the most impressions.
 
## Structure is a measurement decision
 
The real reason structure matters: it decides what you can measure. When each campaign maps to one service and one landing page, your reports answer business questions directly — "is paint outperforming rental this month?" — instead of requiring spreadsheet archaeology.
 
If your account has grown into a tangle, a restructure usually pays for itself within a quarter. That's typically the first thing I audit for a new client — before touching bids, before touching creative, before anything else.
`,
  },
  {
    slug: "conversion-tracking-stack",
    title: "The Conversion Tracking Stack Every Service Business Needs Before Spending $1",
    description:
      "GA4, Google Tag Manager, CallRail, Microsoft Clarity, and 2026's server-side layer — the exact measurement stack I install for service businesses before launching any Google Ads campaign.",
    date: "2026-08-03",
    tag: "Tracking",
    keywords: [
      "conversion tracking google ads",
      "call tracking for business",
      "ga4 lead tracking",
      "server-side tracking 2026",
      "consent mode v2 google ads",
      "enhanced conversions setup",
      "conversion tracking expert",
      "google ads audit expert",
    ],
    content: `
Running ads without conversion tracking is paying for traffic and guessing at results. Yet most service business accounts I audit have either no tracking or tracking that counts the wrong things.

Here is the stack I install before a single dollar of a client's budget is spent — including the layer that became non-negotiable in 2026.

## Google Tag Manager: the foundation

Every tag goes through GTM — never hard-coded into the site. One container, clear naming, and every conversion action documented. When something breaks (it will), you can diagnose it in minutes instead of days.

## GA4 configured for leads, not pageviews

Out of the box, GA4 tells you about traffic. Service businesses need it configured around lead events: form submissions, phone clicks, booking starts, quote requests. Each one registered as a key event and imported into Google Ads as a conversion.

## The 2026 addition: server-side tracking is no longer optional

Client-side, browser-based pixel tracking has quietly broken down. Ad blockers, cookie consent rejections, iOS attribution restrictions, and browsers stripping third-party signals mean a meaningful share of real conversions never make it back to Google Ads or Meta — which means Smart Bidding is optimizing against incomplete data without you knowing it.

The fix I now build into every stack:

- **Server-side GTM** (via a service like Stape, or a custom Google Cloud container) routes conversion data through a server before it reaches the ad platforms, avoiding a lot of what browsers now block.
- **Consent Mode v2** governs how Google tags behave based on the user's consent choice — required in an increasing number of markets, and it directly affects how much conversion data Google is even allowed to receive.
- **Enhanced Conversions** sends hashed first-party data (email, phone) alongside the conversion event, recovering matches that cookies alone would miss.
- Keep the original browser-based pixel running in parallel as a fallback, not the primary method — if the server-side path fails silently, the client-side pixel is what catches it.

This isn't a "nice to have" anymore. Depending on your traffic mix, incomplete signal from client-side-only tracking can mean Smart Bidding is quietly training on a partial picture of who's actually converting.

## CallRail: because service leads phone in

For home services, car rental, and local businesses, half the leads or more arrive by phone. CallRail assigns dynamic tracking numbers so every call is attributed to the campaign, ad, and keyword that produced it. Without it, your "cost per lead" ignores the most valuable lead type you have — and smart bidding optimizes toward the wrong customers.

## Microsoft Clarity: watch what users actually do

Clarity is free session recording and heatmaps. When a campaign drives clicks that don't convert, Clarity shows you why — the form nobody scrolls to, the button that doesn't work on mobile, the pricing section people rage-click. It turns "the landing page underperforms" into a specific fix.

## ClickCease: protect the budget

Competitors and bots click ads. On high cost-per-click service keywords, click fraud can quietly eat 10-20% of a budget. ClickCease detects and blocks fraudulent IPs automatically, so the budget only buys real prospects.

## The order matters

- Week 1: GTM + GA4 events + phone tracking live and tested.
- Week 2: conversions imported to Google Ads, verified with test leads; Consent Mode v2 and Enhanced Conversions configured.
- Week 3 (if budget and traffic justify it): server-side container deployed for the highest-value conversion events.
- Then — and only then — campaigns launch.

Every account I run has this stack, which is why every report I send a client shows real leads and real cost per lead, not clicks and hope.
`,
  },
  {
    slug: "google-ads-car-rental",
    title: "Google Ads for Car Rental Companies: A Complete Playbook",
    description:
      "How I run profitable Google Ads for car rental businesses across cities and airports: campaign architecture, location-intent strategy, call attribution with CallRail, and the metrics that matter.",
    date: "2026-08-04",
    tag: "Case Playbook",
    keywords: [
      "google ads for car rental",
      "car rental advertising",
      "car rental ppc",
      "car rental google ads campaign structure",
      "airport car rental keywords",
      "car rental ppc agency",
      "google ads expert car rental",
      "car rental marketing by city",
    ],
    content: `
Car rental is one of the most rewarding — and most punishing — industries for Google Ads. Search intent is extremely high, competition is fierce, and a booking is worth enough that small optimization gains compound fast. I've run car rental accounts inside a portfolio of $261K+ active spend. This is the playbook.

## Location is an intent signal, not just a targeting setting

Here's the distinction most car rental accounts miss: someone searching "car rental" from a phone physically at an airport terminal is in a completely different buying state than someone searching the identical phrase from a suburban home. The first person has a flight and a pickup time within hours. The second is comparing prices for a trip next month. Same keyword, wildly different conversion probability — and most accounts bid on both the same way, which means the account performs averagely everywhere instead of exceptionally where it matters.

## The five-layer campaign architecture

A car rental account that scales cleanly separates these layers, each with its own budget and keyword territory — never sharing either:

- **Brand campaigns** — protect existing demand at low cost. Never your primary growth driver, but leaving your name unprotected means competitors bid on it and win clicks that should be free.
- **High-intent non-brand** — "rent a car + [city]", vehicle-type terms, "[airport] car rental". This is where most new-customer acquisition happens and where budget should be heaviest.
- **Location-based / radius campaigns** — capture local and mobile intent that airport-focused campaigns miss entirely.
- **Performance Max** — captures Maps, YouTube, and Display demand around your pickup locations that Search alone can't reach.
- **Retargeting** — the cheapest bookings available: people who compared prices but didn't complete checkout.

## Airport-level location strategy decides profitability

Rental demand is hyper-local down to the terminal. Structure campaigns around pickup location, bid up aggressively around airports and transit hubs, and use location insertion in ad copy so "Car Rental in {City}" or "{Airport Code} Car Rental" matches the exact search. In practice, the top-performing airport structures follow a consistent pattern: [airport code or name] + car rental + [modifier — deposit, one-way, weekly]. Radius targeting beats city-wide targeting almost every time in this category.

## Track calls or fly blind

A large share of rental bookings happen by phone — often the highest-value, longest-duration bookings. CallRail with keyword-level call attribution means the account optimizes toward bookings, not just form fills. When I add call attribution to a rental account, reported cost per booking typically drops immediately — not because performance changed, but because we finally see everything the ads produce.

## Ad copy and CTAs that match booking readiness

The click is expensive, so the ad should filter and the CTA should match how ready the searcher is to commit:

- "Book Now" for same-day, airport, and clearly urgent searches.
- "Check Availability" or "Compare Vehicles" for earlier-stage, non-immediate searches.
- State what makes you bookable directly in the ad: no-deposit options, free cancellation, airport pickup, fleet range.
- Let extensions carry the rest — sitelinks to vehicle categories, call extension live during business hours, location extension always on.

## Metrics that matter

- Cost per booking (calls + forms), not cost per click.
- Booking value by campaign — weekend and long-term rentals differ enormously.
- Impression share on your top pickup locations: if you're below 80% on your own turf, there's growth on the table.

Car rental rewards operators who measure properly and punish everyone else. If your account reports clicks instead of bookings, that's the first thing to fix.
`,
  },
  {
    slug: "lower-cost-per-lead-home-services",
    title: "How to Lower Cost Per Lead for Home Services with Google Ads",
    description:
      "A practical checklist for home services businesses in 2026: the levers that actually reduce cost per lead in Google Ads, real Local Service Ads benchmark data, and landing page CRO that compounds.",
    date: "2026-08-05",
    tag: "Lead Generation",
    keywords: [
      "cost per lead google ads",
      "home services marketing",
      "google ads for cleaning business",
      "home services cost per lead benchmark 2026",
      "local service ads vs google ads",
      "hvac google ads cost per lead",
      "home services ppc expert",
      "google ads audit for contractors",
    ],
    content: `
"Our leads got expensive" is the most common reason home services businesses come to me — housekeeping, painting, repairs, landscaping. The fix is rarely one magic setting. It's a stack of small levers, each worth 5-15%. Here they are, in the order I pull them.

## 1. Cut the keywords that produce clicks, not leads

Run a search terms report over 90 days. Sort by spend, flag everything with zero leads. Usually 20-30% of spend sits on research terms ("how to paint a wall") or wrong-intent terms ("housekeeping jobs"). Negative keywords are the fastest CPL cut available.

## 2. Match ad schedule to answering capacity

Home services leads decay in minutes — a quote request answered in 5 minutes converts several times better than one answered in 2 hours. If nobody answers phones after 6pm, don't pay premium CPCs at 9pm. Schedule ads around your actual response capability.

## 3. One service, one landing page

Sending "house cleaning" clicks to a homepage listing ten services kills conversion rates. Each core service gets its own page: the service, the area covered, social proof, and one form plus one phone number above the fold. This alone has cut CPL by a third on accounts I've taken over.

## 4. Know your real benchmark: Local Service Ads vs. standard Google Ads

Before optimizing a Search campaign further, check whether the budget is even in the right channel. Recent industry benchmark data (SearchLight, Feb 2026, tracking $6.72M across 888 home services contractors) puts blended Local Service Ads cost per lead at $53 — against $104 for blended standard Google Ads, and $149 for non-branded Google Ads specifically. LSA leads also book at a higher rate: 43.9% versus 37.6% for non-branded Search.

That doesn't mean abandon Search — LSA and Search play different roles, and LSA has its own limits on service categories and lead volume. But if you're running a home services account without LSA at all, you're very likely leaving the cheapest leads in the category on the table. The right move is usually both, measured against each other honestly.

## 5. A/B test the form, not the logo

- Short form vs long form (short usually wins for first contact).
- "Get a free quote" vs "Book now" (matching commitment level to intent).
- Phone-first vs form-first layouts, by device.

Run one test at a time, judge on leads per visitor, keep the winner, repeat.

## 6. Feed the algorithm real lead quality

Import offline outcomes — which leads became booked jobs — back into Google Ads. Smart bidding then optimizes toward booked customers rather than form-fillers. This is the compounding lever: it makes every future dollar smarter.

## The realistic expectation

Pulled together, these typically bring cost per lead down quarter over quarter — which is exactly the trend I report to my home services clients. No single trick, just disciplined iteration with full tracking underneath it, and the right channel mix from the start.
`,
  },
  {
    slug: "performance-max-vs-search",
    title: "Performance Max vs Search Campaigns: When to Use Each",
    description:
      "PMax, Search, and 2026's AI Max for Search do different jobs. Here's how I decide the split for real accounts — and the guardrails that stop automation from spending blind.",
    date: "2026-08-06",
    tag: "Strategy",
    keywords: [
      "performance max vs search",
      "pmax strategy",
      "google ads campaign types",
      "ai max for search 2026",
      "performance max ai max comparison",
      "google ads campaign management expert",
      "google ads strategy consultant",
    ],
    content: `
Performance Max is either the best or worst thing in a Google Ads account, depending entirely on how it's deployed. After running both types side by side across industries — and now with a third option in the mix — here's my decision framework for 2026.

## What Search does best

Search is intent capture. Someone types "emergency plumber near me" and you bid on exactly that moment. You control the keyword, the ad, the landing page. For service businesses with clear high-intent queries, Search remains the backbone — it's predictable, diagnosable, and scalable by budget.

## What PMax does best

PMax is demand expansion. It reaches people across Maps, YouTube, Gmail, Discover, and Display who match your converters' profile but never typed your keyword. For businesses with visual products, physical locations, or broad audiences — retail, car rental, e-commerce — it finds volume Search can't. Reporting transparency on PMax has genuinely improved through 2025 and 2026 — search term insights and asset-level performance data are now visible where they used to be a black box.

## The new middle layer: AI Max for Search

The genuinely new variable in 2026 is AI Max — a native automation layer Google now applies on top of standard Search campaigns. It expands keyword matching beyond what you've explicitly targeted, generates dynamic ad copy variations, and can select landing pages automatically, all without moving the campaign into full Performance Max. It's rolling out enabled by default on new Search campaigns in many accounts, and Google is auto-enrolling existing ones through recommendations — so if you haven't checked, it may already be running.

Treat it as its own decision, not an automatic yes. Run it as a deliberate test on one campaign at a time: keep brand exclusions and URL controls in place, and specifically check whether it's surfacing genuinely incremental demand or simply reallocating spend from exact-match and branded traffic you already had. The honest answer usually only shows up after a few weeks of watching search term reports, not from the summary dashboard.

## The split I actually use

- New account, limited budget: Search only until conversion tracking has 30+ conversions. PMax and AI Max without conversion data are spending blind.
- Established service business: 70-80% Search (test AI Max cautiously within it), 20-30% PMax as an expansion layer.
- E-commerce with a product feed: PMax carries more weight — often half the budget — because Shopping placements live there.

## Guardrails that make automation safe

- Feed it only real conversions (booked calls, sales — not pageviews).
- Add brand exclusions so PMax and AI Max don't cannibalize cheap brand traffic and claim credit for demand that already existed.
- Review the placement, search-category, and search term insights monthly; exclude junk.
- Give asset groups real creative variety — every automated layer needs material to actually work with.

## The mistake to avoid

Don't judge these against each other on cost per conversion alone, and don't assume more automation is automatically better in 2026 just because Google keeps shipping more of it. Search harvests demand that exists; PMax creates and captures demand that didn't; AI Max sits between them, expanding what Search can reach without fully handing over control. They're complementary layers of one system — which is why the accounts I run use all three deliberately, with someone actually watching what each one is doing, rather than betting everything on automation and checking in once a quarter.
`,
  },
  {
    slug: "ab-tests-that-moved-conversion-rates",
    title: "A/B Tests That Actually Moved Conversion Rates — and the Ones That Didn't",
    description:
      "Years of structured A/B testing across ad copy, landing pages, and CTAs, backed by 2026 industry benchmark data: which experiments consistently pay off and which are a waste of traffic.",
    date: "2026-08-07",
    tag: "CRO",
    keywords: [
      "ab testing landing pages",
      "conversion rate optimization",
      "ppc landing page tests",
      "landing page conversion rate benchmarks 2026",
      "cro statistics 2026",
      "conversion rate optimization expert",
      "landing page audit expert",
    ],
    content: `
I've been running structured A/B tests since my early Shopify dropshipping days, and later across service business accounts at agencies. Most tests lose. That's normal, and the data backs it up: across more than 28,000 tests analyzed by major experimentation platforms in 2026, only around 13% reached statistical significance in favor of the new variant, roughly 9% were significant losses, and the rest were inconclusive. The discipline is in running them anyway and keeping honest score. Here's my scorecard.

## Tests that consistently won

- Headline-to-keyword match. Making the landing page headline mirror the ad group's core keyword ("House Cleaning in Edmond" for "house cleaning edmond" traffic). Boring, repeatable, effective.
- Form length cuts. Dropping fields from 7 to 3 for first-contact forms. More leads, and sales teams confirmed quality held.
- Phone-first mobile layouts. For service businesses, putting a tappable call button above the fold on mobile beat form-first layouts nearly every time — worth noting given mobile pages still convert meaningfully lower than desktop industry-wide, so any lever that closes that gap earns its place.
- Concrete proof near the CTA. Review count, star rating, "500+ jobs completed" placed next to the button — small lifts, almost always positive.
- CTA placement before the fold. Industry data backs this one hard: moving a clear call-to-action above the fold is one of the single highest-leverage layout changes measured across large sample studies.
- Offer reframing and personalized CTAs. "Free quote in 30 minutes" vs "Contact us" — matching the promise to what the visitor actually wants next. Personalized CTAs consistently outperform generic ones by a wide margin in cross-industry data, which matches what I see on client accounts.

## Tests that were mostly noise

- Button colors. The internet's favorite test almost never reached significance on real traffic volumes.
- Minor copy edits below the fold. If they don't see it, it can't convert them.
- Slider vs static hero images. No consistent winner; sliders often lost slightly.

## The rules that make testing real

- One variable at a time, or you learn nothing.
- Pre-commit to a sample size; don't stop at the first exciting day. The median honest test in current data runs about three weeks — anything shorter is usually noise dressed up as a result.
- Judge on leads or sales, never on time-on-page or other comfort metrics.
- Log every test — the archive becomes your playbook and stops you re-testing losers.

## Why most businesses still don't test

Only a minority of companies test their landing pages in any structured way, despite the average lift from doing it properly running close to 50% on the pages that get tested. That gap is the opportunity: if your competitors aren't testing — and most categories, most aren't — a disciplined program compounds into a real advantage, not just a marginal one.

The meta-lesson: tests that reduce friction or sharpen the promise win; cosmetic tests don't. Spend your traffic on experiments with a hypothesis about visitor behavior, not decoration.
`,
  },
  {
    slug: "meta-ads-vs-google-ads",
    title: "Meta Ads vs Google Ads: Where Should a Small Business Spend First?",
    description:
      "Managing both platforms daily in 2026 — the year Meta overtook Google in global ad revenue for the first time — here's my honest framework for deciding where your first ad dollars belong.",
    date: "2026-08-08",
    tag: "Strategy",
    keywords: [
      "meta ads vs google ads",
      "facebook ads vs google ads",
      "where to advertise small business",
      "facebook ads vs google ads cost 2026",
      "meta ads google ads brand strategist",
      "google ads meta ads campaign management expert",
      "which platform to advertise first small business",
    ],
    content: `
I run both platforms every day for clients, so I have no horse in this race. The right answer depends on one question: does your customer already know they need you?

Worth noting up front: 2026 was the year Meta overtook Google in global advertising revenue for the first time in either company's history — reportedly around $243 billion versus $239 billion. That headline doesn't change the framework below, but it does mean "Meta is the smaller platform" is no longer a safe assumption to build a strategy on. The two are now genuine peers, not a default and an alternative.

## When Google Ads goes first

If people actively search for your service — "car rental lahore", "house cleaning near me", "emergency electrician" — Google captures existing demand at the exact moment of need. Intent is high, and a properly tracked Search campaign becomes profitable faster than anything on Meta. Service businesses, local businesses, and urgent-need categories: start here.

## When Meta goes first

If your product is visual, impulse-friendly, or something nobody searches for by name — fashion, home decor, food brands, new product categories — Meta creates demand. Its targeting finds lookalikes of your buyers scrolling Instagram and Reels, and strong creative does the selling. E-commerce brands with striking products and sub-$80 price points: start here.

## The honest cost comparison

Reported averages vary by source and shift constantly, but the pattern holds across every 2026 benchmark I've checked: Meta's cost per click sits somewhere in the roughly $0.50–$1.50 range, while Google Search averages several dollars higher — commonly cited between $2.50 and $5+ depending on industry, with competitive service categories running much higher still. Comparing those numbers directly is the wrong exercise, though:

- Google Search clicks cost more but convert at meaningfully higher rates — you're paying for intent that already exists.
- Meta clicks are cheap but colder — you pay in creative production and testing instead of cost per click.
- The real comparison is cost per acquisition relative to customer value, not cost per click in isolation. A "cheap" Meta click that doesn't convert can cost more per customer than an "expensive" Google click that does.
- Both platforms punish weak tracking equally. Whichever you pick, conversion tracking comes first — see my post on the tracking stack for what that actually requires in 2026.

## The sequence I recommend for most small businesses

- Months 1-2: one platform only, full tracking, until cost per lead or sale is known and stable.
- Month 3: retargeting on the second platform — warm audiences are the cheapest wins available.
- Month 4+: prospecting on both, budgets weighted by measured cost per acquisition, reviewed monthly.

This matches what most current data suggests too: most businesses can't launch both platforms well at once — each needs budget, learning time, and attention to reach a stable cost per lead. Master one, then add the second; the second one almost always performs faster because you're applying lessons the first platform already taught you.

## The trap to avoid

Splitting a small budget across both platforms on day one guarantees neither gets enough data to optimize. $1,000/month on one platform beats $500 on each, every time.

Pick the platform that matches how your customers buy, measure honestly, then expand. That's the whole framework — 2026 ad-revenue headlines included.
`,
  },
  {
    slug: "hire-google-ads-expert",
    title: "How to Hire a Google Ads Expert (and What It Should Cost)",
    description:
      "What to look for when hiring a Google Ads specialist or PPC freelancer in 2026: the questions to ask, red flags to avoid, how to verify certifications, and realistic pricing.",
    date: "2026-08-09",
    tag: "Hiring",
    keywords: [
      "hire google ads expert",
      "google ads freelancer",
      "ppc specialist cost",
      "google ads specialist pricing 2026",
      "google ads management cost",
      "google ads expert red flags",
      "how to verify google ads certification",
    ],
    content: `
After years as the person businesses hire — through agencies, referrals, and as a Level 2 Seller on Fiverr — I've seen what separates a good Google Ads hire from an expensive mistake. Here's the checklist I'd use if I were the client.

## Questions that reveal real expertise

- "How will you track conversions?" A real specialist talks about GTM, call tracking, and importing conversions before they talk about ads. If the answer is vague, walk away.
- "What happened in the last account you ran?" Listen for specific metrics — cost per lead, changes over time — not adjectives.
- "What would you do in the first 30 days?" Good answer: audit, tracking, restructure, then optimize. Bad answer: "launch campaigns."
- "How do you report?" You want a monthly report in plain language tied to leads and revenue, not screenshots of impressions.

## Red flags

- Guaranteed rankings or guaranteed results. Nobody controls the auction.
- No questions about your business economics. If they don't ask what a customer is worth, they can't manage your bids intelligently.
- Refusing to give you admin access to your own ad account. Your account, your data — always.
- Reporting on clicks and CTR while avoiding cost per lead.

## Verify their certification — don't just take their word for it

Anyone can claim to be "Google Ads certified." It takes thirty seconds to check if it's true, and most clients never bother:

1. Ask for their public Google Skillshop profile link (not a screenshot — a link you can click yourself).
2. Confirm which certifications they actually hold — Search, Performance Max, and Measurement are the ones that matter most for a typical lead-gen or e-commerce account. A "Display" or "Apps" badge alone isn't the same skill set.
3. Check the date. Google's certifications expire and need renewing — an expert who's kept theirs current is signaling they still test their knowledge, not just coasting on years of experience.

A certification alone doesn't make someone good — plenty of certified people run mediocre accounts. But an expert who's evasive about proving it, or who has none at all, is a real yellow flag worth asking about directly.

## What it should actually cost in 2026

Pricing varies more by who you hire than by what the work involves:

- **Freelancers** (Fiverr, Upwork, direct): roughly $50–$150/hour, or flat monthly retainers in the $500–$1,500 range for small-to-mid accounts. You're paying for the specialist directly, not an agency's overhead.
- **Boutique agencies**: typically $750–$2,500/month, often with a minimum ad spend requirement, plus either a flat fee or a percentage of spend (commonly 10–20%).
- **Senior/specialist consultants**: $150–$300+/hour for complex accounts, multi-channel strategy, or fixing a badly broken account — this tier is about judgment, not hours logged.

What matters more than which tier you pick: management fees should be justified by the spend they're optimizing. Paying $500/month to manage $300/month of ads makes no sense; on $5,000/month of spend, good management usually pays for itself in eliminated waste alone. If a quote feels disconnected from your actual ad budget, ask them to walk you through why.

## The one-sentence test

Ask them what success looks like in 90 days. The right hire answers with a number you care about — leads, bookings, sales — and a plan to measure it. That's the entire job.
`,
  },
];

export function publishedPosts(now = new Date()): Post[] {
  return posts
    .filter((p) => new Date(p.date + "T00:00:00Z") <= now)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, now = new Date()): Post | undefined {
  return publishedPosts(now).find((p) => p.slug === slug);
}
