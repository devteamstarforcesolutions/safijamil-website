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
      "Lessons from managing $261,855+ in live Google Ads spend: how to structure campaigns, ad groups, and budgets so your account scales without wasting money.",
    date: "2026-08-02",
    tag: "Google Ads",
    keywords: ["google ads account structure", "google ads campaign structure", "ppc account structure"],
    content: `
Most Google Ads accounts don't fail because of bad ads. They fail because of bad structure — budgets spread across too many campaigns, ad groups stuffed with unrelated keywords, and no clean way to see what's actually driving revenue.

I currently manage over $261,855 in active Google and Meta Ads spend across car rental, home services, paint, and retail businesses. Here's the structure playbook that consistently holds up.

## Start with business goals, not keywords

Before touching the keyword planner, define what a conversion is worth. A car rental booking, a housekeeping lead, and an e-commerce sale justify completely different costs per acquisition. Your structure should mirror your revenue streams — one campaign per service line or product category with its own budget, so money flows to what pays.

## Fewer campaigns, tighter themes

The old "single keyword ad groups" era is over. Google's matching is broader and smart bidding needs data density. My rule: group keywords by identical search intent, not by keyword variant. If two keywords deserve the same landing page and ad copy, they belong in the same ad group. If they don't, split them.

## Separate brand from non-brand — always

Brand terms convert at a fraction of the cost of generic terms. If they live in the same campaign, your averages look great while your growth terms quietly underperform. Split them, give brand a small protected budget, and judge non-brand campaigns on their own numbers.

## Budget by data, not by hope

- Give every campaign enough budget for at least 30-50 clicks a day, or consolidate until you can.
- Let smart bidding exit learning before you judge it — usually 2-4 weeks.
- Move budget monthly toward the campaigns with the best cost per conversion, not the most impressions.

## Structure is a measurement decision

The real reason structure matters: it decides what you can measure. When each campaign maps to one service and one landing page, your reports answer business questions directly — "is paint outperforming rental this month?" — instead of requiring spreadsheet archaeology.

If your account has grown into a tangle, a restructure usually pays for itself within a quarter. That's typically the first thing I audit for a new client.
`,
  },
  {
    slug: "conversion-tracking-stack",
    title: "The Conversion Tracking Stack Every Service Business Needs Before Spending $1",
    description:
      "GA4, Google Tag Manager, CallRail, and Microsoft Clarity — the exact measurement stack I install for service businesses before launching any Google Ads campaign.",
    date: "2026-08-03",
    tag: "Tracking",
    keywords: ["conversion tracking google ads", "call tracking for business", "ga4 lead tracking"],
    content: `
Running ads without conversion tracking is paying for traffic and guessing at results. Yet most service business accounts I audit have either no tracking or tracking that counts the wrong things.

Here is the stack I install before a single dollar of a client's budget is spent.

## Google Tag Manager: the foundation

Every tag goes through GTM — never hard-coded into the site. One container, clear naming, and every conversion action documented. When something breaks (it will), you can diagnose it in minutes instead of days.

## GA4 configured for leads, not pageviews

Out of the box, GA4 tells you about traffic. Service businesses need it configured around lead events: form submissions, phone clicks, booking starts, quote requests. Each one registered as a key event and imported into Google Ads as a conversion.

## CallRail: because service leads phone in

For home services, car rental, and local businesses, half the leads or more arrive by phone. CallRail assigns dynamic tracking numbers so every call is attributed to the campaign, ad, and keyword that produced it. Without it, your "cost per lead" ignores the most valuable lead type you have — and smart bidding optimizes toward the wrong customers.

## Microsoft Clarity: watch what users actually do

Clarity is free session recording and heatmaps. When a campaign drives clicks that don't convert, Clarity shows you why — the form nobody scrolls to, the button that doesn't work on mobile, the pricing section people rage-click. It turns "the landing page underperforms" into a specific fix.

## ClickCease: protect the budget

Competitors and bots click ads. On high cost-per-click service keywords, click fraud can quietly eat 10-20% of a budget. ClickCease detects and blocks fraudulent IPs automatically, so the budget only buys real prospects.

## The order matters

- Week 1: GTM + GA4 events + phone tracking live and tested.
- Week 2: conversions imported to Google Ads, verified with test leads.
- Then — and only then — campaigns launch.

Every account I run has this stack, which is why every report I send a client shows real leads and real cost per lead, not clicks and hope.
`,
  },
  {
    slug: "google-ads-car-rental",
    title: "Google Ads for Car Rental Companies: A Complete Playbook",
    description:
      "How I run profitable Google Ads for car rental businesses: campaign types, location strategy, call attribution with CallRail, and the metrics that matter.",
    date: "2026-08-04",
    tag: "Case Playbook",
    keywords: ["google ads for car rental", "car rental advertising", "car rental ppc"],
    content: `
Car rental is one of the most rewarding — and most punishing — industries for Google Ads. Search intent is extremely high, competition is fierce, and a booking is worth enough that small optimization gains compound fast. I've run car rental accounts inside a portfolio of $261K+ active spend. This is the playbook.

## The campaign mix

- Search campaigns on high-intent terms: "rent a car + [city]", "[airport] car rental", vehicle-type terms.
- Performance Max to capture Maps, YouTube, and Display demand around locations.
- A small brand campaign to protect your name from competitors bidding on it — they are.

## Location strategy decides profitability

Rental demand is hyper-local. Structure campaigns by pickup location, bid up around airports and transit hubs, and use location insertion in ad copy so "Car Rental in {City}" matches the search. Radius targeting beats city-wide targeting almost every time.

## Track calls or fly blind

A large share of rental bookings happen by phone — often the highest-value, longest-duration bookings. CallRail with keyword-level call attribution means the account optimizes toward bookings, not just form fills. When I add call attribution to a rental account, reported cost per booking typically drops immediately — not because performance changed, but because we finally see everything the ads produce.

## Ad copy that pre-qualifies

The click is expensive, so the ad should filter. State what makes you bookable: no-deposit options, free cancellation, airport pickup, fleet range. Extensions carry the rest — sitelinks to vehicle categories, call extension during business hours, location extension always.

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
      "A practical checklist for home services businesses: the levers that actually reduce cost per lead in Google Ads, from keyword strategy to landing page CRO.",
    date: "2026-08-05",
    tag: "Lead Generation",
    keywords: ["cost per lead google ads", "home services marketing", "google ads for cleaning business"],
    content: `
"Our leads got expensive" is the most common reason home services businesses come to me — housekeeping, painting, repairs, landscaping. The fix is rarely one magic setting. It's a stack of small levers, each worth 5-15%. Here they are, in the order I pull them.

## 1. Cut the keywords that produce clicks, not leads

Run a search terms report over 90 days. Sort by spend, flag everything with zero leads. Usually 20-30% of spend sits on research terms ("how to paint a wall") or wrong-intent terms ("housekeeping jobs"). Negative keywords are the fastest CPL cut available.

## 2. Match ad schedule to answering capacity

Home services leads decay in minutes — a quote request answered in 5 minutes converts several times better than one answered in 2 hours. If nobody answers phones after 6pm, don't pay premium CPCs at 9pm. Schedule ads around your actual response capability.

## 3. One service, one landing page

Sending "house cleaning" clicks to a homepage listing ten services kills conversion rates. Each core service gets its own page: the service, the area covered, social proof, and one form plus one phone number above the fold. This alone has cut CPL by a third on accounts I've taken over.

## 4. A/B test the form, not the logo

- Short form vs long form (short usually wins for first contact).
- "Get a free quote" vs "Book now" (matching commitment level to intent).
- Phone-first vs form-first layouts, by device.

Run one test at a time, judge on leads per visitor, keep the winner, repeat.

## 5. Feed the algorithm real lead quality

Import offline outcomes — which leads became booked jobs — back into Google Ads. Smart bidding then optimizes toward booked customers rather than form-fillers. This is the compounding lever: it makes every future dollar smarter.

## The realistic expectation

Pulled together, these typically bring cost per lead down quarter over quarter — which is exactly the trend I report to my home services clients. No single trick, just disciplined iteration with full tracking underneath it.
`,
  },
  {
    slug: "performance-max-vs-search",
    title: "Performance Max vs Search Campaigns: When to Use Each",
    description:
      "PMax and Search do different jobs. Here's how I decide the split for real accounts — and the guardrails that stop Performance Max from spending blind.",
    date: "2026-08-06",
    tag: "Strategy",
    keywords: ["performance max vs search", "pmax strategy", "google ads campaign types"],
    content: `
Performance Max is either the best or worst thing in a Google Ads account, depending entirely on how it's deployed. After running both types side by side across industries, here's my decision framework.

## What Search does best

Search is intent capture. Someone types "emergency plumber near me" and you bid on exactly that moment. You control the keyword, the ad, the landing page. For service businesses with clear high-intent queries, Search remains the backbone — it's predictable, diagnosable, and scalable by budget.

## What PMax does best

PMax is demand expansion. It reaches people across Maps, YouTube, Gmail, Discover, and Display who match your converters' profile but never typed your keyword. For businesses with visual products, physical locations, or broad audiences — retail, car rental, e-commerce — it finds volume Search can't.

## The split I actually use

- New account, limited budget: Search only until conversion tracking has 30+ conversions. PMax without conversion data is spending blind.
- Established service business: 70-80% Search, 20-30% PMax as an expansion layer.
- E-commerce with a product feed: PMax carries more weight — often half the budget — because Shopping placements live there.

## Guardrails that make PMax safe

- Feed it only real conversions (booked calls, sales — not pageviews).
- Add brand exclusions so it doesn't cannibalize cheap brand traffic and claim credit.
- Review the placement and search-category insights monthly; exclude junk.
- Give asset groups real creative variety — it needs material to work with.

## The mistake to avoid

Don't judge them against each other on cost per conversion alone. Search harvests demand that exists; PMax creates and captures demand that didn't. They're complementary layers of one system — which is why the accounts I run use both, deliberately, rather than betting everything on either.
`,
  },
  {
    slug: "ab-tests-that-moved-conversion-rates",
    title: "A/B Tests That Actually Moved Conversion Rates — and the Ones That Didn't",
    description:
      "Years of structured A/B testing across ad copy, landing pages, and CTAs: which experiments consistently pay off and which are a waste of traffic.",
    date: "2026-08-07",
    tag: "CRO",
    keywords: ["ab testing landing pages", "conversion rate optimization", "ppc landing page tests"],
    content: `
I've been running structured A/B tests since my early Shopify dropshipping days, and later across service business accounts at agencies. Most tests lose. That's normal — the discipline is in running them anyway and keeping honest score. Here's my scorecard.

## Tests that consistently won

- Headline-to-keyword match. Making the landing page headline mirror the ad group's core keyword ("House Cleaning in Edmond" for "house cleaning edmond" traffic). Boring, repeatable, effective.
- Form length cuts. Dropping fields from 7 to 3 for first-contact forms. More leads, and sales teams confirmed quality held.
- Phone-first mobile layouts. For service businesses, putting a tappable call button above the fold on mobile beat form-first layouts nearly every time.
- Concrete proof near the CTA. Review count, star rating, "500+ jobs completed" placed next to the button — small lifts, almost always positive.
- Offer reframing. "Free quote in 30 minutes" vs "Contact us" — matching the promise to what the visitor actually wants next.

## Tests that were mostly noise

- Button colors. The internet's favorite test almost never reached significance on real traffic volumes.
- Minor copy edits below the fold. If they don't see it, it can't convert them.
- Slider vs static hero images. No consistent winner; sliders often lost slightly.

## The rules that make testing real

- One variable at a time, or you learn nothing.
- Pre-commit to a sample size; don't stop at the first exciting day.
- Judge on leads or sales, never on time-on-page or other comfort metrics.
- Log every test — the archive becomes your playbook and stops you re-testing losers.

The meta-lesson: tests that reduce friction or sharpen the promise win; cosmetic tests don't. Spend your traffic on experiments with a hypothesis about visitor behavior, not decoration.
`,
  },
  {
    slug: "meta-ads-vs-google-ads",
    title: "Meta Ads vs Google Ads: Where Should a Small Business Spend First?",
    description:
      "Managing both platforms daily, here's my honest framework for deciding whether your first ad dollars belong in Google Ads or Meta (Facebook & Instagram) Ads.",
    date: "2026-08-08",
    tag: "Strategy",
    keywords: ["meta ads vs google ads", "facebook ads vs google ads", "where to advertise small business"],
    content: `
I run both platforms every day for clients, so I have no horse in this race. The right answer depends on one question: does your customer already know they need you?

## When Google Ads goes first

If people actively search for your service — "car rental lahore", "house cleaning near me", "emergency electrician" — Google captures existing demand at the exact moment of need. Intent is high, and a properly tracked Search campaign becomes profitable faster than anything on Meta. Service businesses, local businesses, and urgent-need categories: start here.

## When Meta goes first

If your product is visual, impulse-friendly, or something nobody searches for by name — fashion, home decor, food brands, new product categories — Meta creates demand. Its targeting finds lookalikes of your buyers scrolling Instagram, and strong creative does the selling. E-commerce brands with striking products and sub-$80 price points: start here.

## The honest cost comparison

- Google Search clicks cost more but convert at higher rates — you pay for intent.
- Meta clicks are cheap but colder — you pay in creative production and testing instead.
- Both platforms punish weak tracking equally. Whichever you pick, conversion tracking comes first.

## The sequence I recommend for most small businesses

- Months 1-2: one platform only, full tracking, until cost per lead or sale is known and stable.
- Month 3: retargeting on the second platform — warm audiences are the cheapest wins available.
- Month 4+: prospecting on both, budgets weighted by measured cost per acquisition, reviewed monthly.

## The trap to avoid

Splitting a small budget across both platforms on day one guarantees neither gets enough data to optimize. $1,000/month on one platform beats $500 on each, every time.

Pick the platform that matches how your customers buy, measure honestly, then expand. That's the whole framework.
`,
  },
  {
    slug: "hire-google-ads-expert",
    title: "How to Hire a Google Ads Expert (and What It Should Cost)",
    description:
      "What to look for when hiring a Google Ads specialist or PPC freelancer: the questions to ask, red flags to avoid, and realistic pricing models.",
    date: "2026-08-09",
    tag: "Hiring",
    keywords: ["hire google ads expert", "google ads freelancer", "ppc specialist cost"],
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

## What it should cost

Models vary by market: monthly flat fees, percentage of ad spend (commonly 10-20%), or project-based setups. Freelance platforms like Fiverr and Upwork run cheaper than agencies for comparable work — you're paying for the specialist, not the office. What matters more than the model: management fees should be justified by the spend they optimize. Paying $500/month to manage $300/month of ads makes no sense; on $5,000/month of spend, good management pays for itself in eliminated waste alone.

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
