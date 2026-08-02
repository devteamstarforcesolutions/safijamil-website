export type City = {
  slug: string;
  name: string;
  areas: string[];
  intro: string;
  localAngle: string;
  faq: { q: string; a: string }[];
};

const sharedFaq = [
  {
    q: "How much does Google Ads management cost?",
    a: "It depends on your ad budget and goals. I work on flat monthly fees or a percentage of ad spend, and I'll tell you honestly if your budget is too small for paid ads to make sense. The first conversation is free.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes — I work with clients fully remotely and have managed US-based accounts this way since 2018. Reporting is monthly, in plain language, tied to leads and sales rather than clicks.",
  },
];

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
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export { sharedFaq };
