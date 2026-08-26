export type City = {
  slug: string;
  name: string;
  areas: string[];
  intro: string;
  localAngle: string;
  faq: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: "karachi",
    name: "Karachi",
    areas: ["Clifton", "DHA", "Gulshan-e-Iqbal", "Saddar", "North Nazimabad", "Korangi"],
    intro:
      "Karachi is Pakistan's commercial capital — and its most competitive advertising market. From e-commerce brands shipping nationwide to service businesses serving Clifton and DHA, winning here means precise targeting and airtight conversion tracking, not bigger budgets.",
    localAngle:
      "For Karachi businesses I typically build campaigns around area-level targeting — a cleaning service in DHA doesn't want clicks from Korangi — combined with Urdu and English keyword coverage, because Karachi customers search in both.",
    faq: [
      {
        q: "Can you run ads for my Karachi e-commerce store?",
        a: "Yes. I've run Google Shopping and Meta campaigns for Shopify stores, including product feed setup, A/B-tested landing pages, and ClickCease fraud protection so your budget only buys real customers.",
      },
      {
        q: "Isn't Karachi too competitive for a small ad budget to work?",
        a: "Competition drives up cost per click here, which is exactly why targeting matters more than budget size. A tightly area-targeted campaign with strong conversion tracking often beats a broad, bigger-spend competitor — I'll give you an honest read on your numbers before we start.",
      },
      {
        q: "Do you handle bilingual Urdu/English ad copy for Karachi audiences?",
        a: "Yes — Karachi searches happen in both languages depending on the audience and area, so I test copy variants in each and let the data show which converts better for your specific customer base.",
      },
    ],
  },
  {
    slug: "lahore",
    name: "Lahore",
    areas: ["Gulberg", "DHA Lahore", "Johar Town", "Model Town", "Bahria Town", "Cantt"],
    intro:
      "Lahore's business scene — from Gulberg's offices to Johar Town's retail and the city's booming food and fashion brands — is increasingly won and lost on digital. I studied software engineering at Minhaj University Lahore, so this market is home ground for me.",
    localAngle:
      "Lahore searches show strong seasonal patterns around weddings, Eid, and winter — smart campaigns budget for these peaks in advance. I structure Lahore accounts with area-level bidding for DHA, Gulberg, and Bahria Town, where service pricing and intent differ sharply from the city average.",
    faq: [
      {
        q: "Do you meet clients in Lahore in person?",
        a: "My work is remote-first, which keeps costs down and lets me serve clients across Pakistan and the US. Everything — strategy, reporting, reviews — happens over calls and shared dashboards.",
      },
      {
        q: "Can you run ads for a fashion or food brand launching in Lahore?",
        a: "Yes — these are among the categories I enjoy most here. Visual-first Meta campaigns paired with a Google Search safety net for people already searching your brand or category tends to work well for Lahore's fashion and food scene.",
      },
      {
        q: "How do you plan around Lahore's wedding and Eid seasons?",
        a: "I build seasonal budget curves in advance — ramping spend and bids ahead of known peaks rather than reacting once competition (and cost per click) has already spiked. This matters most for retail, fashion, and events-adjacent businesses.",
      },
    ],
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    areas: ["Blue Area", "F-6 / F-7 Markaz", "G-8", "I-8", "Bahria Enclave", "DHA Islamabad"],
    intro:
      "Islamabad's market skews professional — clinics, law firms, real estate, consultancies, and premium services clustered around Blue Area and the F-sector markazes. Buyers here research carefully before they call, which makes search intent unusually strong.",
    localAngle:
      "For Islamabad service businesses I lean heavily on Search campaigns with call tracking, because high-value clients here often phone rather than fill forms. CallRail-style attribution shows exactly which keyword produced which consultation call.",
    faq: [
      {
        q: "Do you handle real estate advertising in Islamabad?",
        a: "Yes — lead generation for property is a natural fit for the Search + landing page + call tracking stack I build, with careful negative keywords to filter browsers from genuine buyers.",
      },
      {
        q: "What's a realistic ad budget for a premium Islamabad service business?",
        a: "It depends on your consultation value, but Islamabad's professional-services clicks cost more than most Pakistani cities because the audience is higher-intent and higher-value. I'll model expected cost per consultation against your numbers before you commit to a budget.",
      },
      {
        q: "Can you track which calls actually turn into paying clients?",
        a: "Call tracking tells you which keyword produced the call — closing the loop to which calls became paying clients usually means a short intake conversation with your front desk or CRM, which I help set up so the whole funnel is measurable.",
      },
    ],
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    areas: ["Saddar", "Bahria Town Phases 1-8", "Chaklala", "Satellite Town", "Westridge"],
    intro:
      "Rawalpindi businesses compete in a twin-city market — customers compare options across Pindi and Islamabad without a second thought. Your ads need to show up on both sides of the boundary, priced to each side's expectations.",
    localAngle:
      "I typically run twin-city campaigns from one account with location bid adjustments, so a Bahria Town service business captures Islamabad demand without paying Islamabad premiums everywhere. Radius targeting around Saddar and Satellite Town beats blanket city targeting.",
    faq: [
      {
        q: "Should I advertise in Rawalpindi and Islamabad separately?",
        a: "Usually one account with location-adjusted bidding beats two separate campaigns — you keep conversion data pooled so smart bidding learns faster, while still pricing each city correctly.",
      },
      {
        q: "Is Rawalpindi cheaper to advertise in than Islamabad?",
        a: "Generally yes for cost per click, but demand and buyer budgets also run lower in parts of the city. The right read depends on your specific service and price point — that's exactly what I check in a free campaign review before recommending a budget.",
      },
      {
        q: "Do you work with Bahria Town businesses specifically?",
        a: "Yes — Bahria Town's phases have their own pricing dynamics and audience compared to the rest of Rawalpindi, so I typically give it its own bid adjustment rather than treating the whole city as one block.",
      },
    ],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    areas: ["D-Ground", "Peoples Colony", "Madina Town", "Susan Road", "Jaranwala Road"],
    intro:
      "Faisalabad is Pakistan's industrial and textile heartland, and its manufacturers, exporters, and wholesalers are moving online fast. For B2B businesses here, one qualified lead can be worth a year of ad spend — which changes the whole campaign math.",
    localAngle:
      "Faisalabad campaigns I build often target buyer keywords in both Pakistan and export markets — 'textile manufacturer pakistan', 'wholesale bedsheets supplier' — pairing Google Search with landing pages built to capture serious inquiries rather than window shoppers.",
    faq: [
      {
        q: "Can Google Ads work for my textile or manufacturing business?",
        a: "Very well — B2B search intent is high-value. The key is strict negative keywords (filtering job seekers and students), inquiry-focused landing pages, and tracking that treats a WhatsApp or form inquiry as the conversion.",
      },
      {
        q: "How do you measure ROI when one lead can be worth so much?",
        a: "High-value B2B leads need every inquiry tracked individually, not lumped into a generic conversion count — I typically set up separate tracking for quote requests versus general inquiries so you can see which campaigns actually produce serious buyers.",
      },
      {
        q: "Do you target export buyers as well as domestic wholesale customers?",
        a: "Yes, often in the same account with separate campaigns — domestic wholesale searches look very different from an overseas buyer searching in English for a Pakistani supplier, so they need different keywords, copy, and landing pages.",
      },
    ],
  },
  {
    slug: "multan",
    name: "Multan",
    areas: ["Gulgasht Colony", "Cantt", "Model Town", "Shah Rukn-e-Alam", "Bosan Road"],
    intro:
      "Multan's market is growing quickly but still under-served by quality digital marketing — which is an opportunity. Local service businesses and retailers here can own their search results for a fraction of what the same visibility costs in Lahore or Karachi.",
    localAngle:
      "Click costs in Multan run well below the big-city average, so properly tracked campaigns often deliver the country's cheapest qualified leads. I focus Multan accounts on Search plus Google Business Profile alignment, so ads and map listings reinforce each other.",
    faq: [
      {
        q: "Is my Multan business too small for Google Ads?",
        a: "If your customers search for what you sell, no. Lower competition means modest budgets go further here — I'll tell you honestly in the first call whether your budget can produce meaningful lead flow.",
      },
      {
        q: "What does a lead typically cost in Multan compared to bigger cities?",
        a: "Meaningfully less in most categories, since click costs are lower and competition is thinner. Exact numbers depend on your industry, but Multan is usually where I see the best cost-per-lead results across the cities I manage.",
      },
      {
        q: "Can you connect my Google Business Profile with my ad campaigns?",
        a: "Yes — for local Multan businesses, aligning your Business Profile (reviews, hours, photos) with active Search campaigns reinforces both. Someone who sees your ad often checks your profile next, so the two should tell the same story.",
      },
    ],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    areas: ["Hayatabad", "University Town", "Saddar", "Ring Road", "DHA Peshawar"],
    intro:
      "Peshawar's businesses — from Hayatabad clinics to University Town institutes and the city's growing property sector — serve a market that increasingly searches before it buys. Being the business that shows up first is still cheap here, but it won't stay that way.",
    localAngle:
      "For Peshawar I build mobile-first campaigns — the overwhelming majority of local searches happen on phones — with tappable call buttons, WhatsApp contact options, and ad schedules matched to when your staff can actually answer.",
    faq: [
      {
        q: "Do you run ads for clinics and educational institutes?",
        a: "Yes, both are strong fits. Clinics need call-focused campaigns with careful ad policy compliance; institutes need seasonal admission campaigns planned months ahead. I've built both patterns for service clients.",
      },
      {
        q: "Most of my customers contact me on WhatsApp — can ads track that?",
        a: "Yes — WhatsApp click-to-chat can be tracked as a conversion event just like a form or call, so campaigns optimize toward the contact method your Peshawar customers actually prefer instead of a form they'd never fill out.",
      },
      {
        q: "What ad budget makes sense for a Peshawar property business?",
        a: "Property lead gen typically needs a slightly higher budget than local services to gather enough data for smart bidding, but click costs here are still moderate compared to Lahore or Islamabad — I'll model this against your numbers on the first call.",
      },
    ],
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    areas: ["Cantt", "Paris Road", "Kashmir Road", "Daska Road", "Sialkot Export Zone"],
    intro:
      "Sialkot exports to the world — sports goods, surgical instruments, leather — and its manufacturers increasingly win orders through search. When a buyer in Germany or the US googles your product category, the factories on page one get the inquiry.",
    localAngle:
      "Sialkot campaigns I run are usually export-focused: English-language Search campaigns targeting buyer countries, inquiry-optimized landing pages, and conversion tracking on quote requests. It's a different discipline from local lead gen — international targeting, currencies, and time zones all matter.",
    faq: [
      {
        q: "Can you target international buyers for my export business?",
        a: "Yes — that's the core of export PPC. We pick target countries, build buyer-keyword campaigns in English, and measure cost per qualified inquiry. My experience running US-market accounts remotely maps directly onto this.",
      },
      {
        q: "How do you handle different time zones for export inquiries?",
        a: "Ad scheduling and response workflows both matter — I typically set campaigns to run when your target buyer countries are actually searching, and help set up a process so inquiries from US or European time zones don't sit unanswered overnight.",
      },
      {
        q: "Do you have experience with sports goods or surgical instrument exporters?",
        a: "I've worked directly with Sialkot's core export categories. The pattern is consistent — buyer-intent English keywords, a landing page built to answer a serious inquiry (MOQ, certifications, samples), and tracking that separates real buyer inquiries from generic traffic.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
