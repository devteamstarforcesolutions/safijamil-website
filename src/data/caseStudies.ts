export type CaseStudy = {
  slug: string;
  name: string; // masked brand name
  industry: string;
  location: string;
  image?: string; // screenshot in /images/case-studies/
  stats: { value: string; label: string }[];
  strategy: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "royal-ca-limo",
    name: "Royal Ca••• Limo",
    industry: "Luxury Limo Fleet",
    location: "Chicago, US",
    image: "/images/case-studies/royal-ca-limo.jpg",
    stats: [
      { value: "$711K", label: "Ad spend managed" },
      { value: "$1.18M", label: "Conversion value" },
      { value: "113K", label: "Clicks" },
      { value: "2,170", label: "Tracked phone calls" },
    ],
    strategy: [
      "Scaled the account from zero to a 7-figure conversion-value pipeline in 15 months.",
      "Portfolio bid strategies with per-campaign target adjustments; budget reallocation guided by conversion-value trends.",
      "2.1K+ tracked phone calls via call reporting — every booking channel measured.",
    ],
  },
  {
    slug: "physio-t-shop",
    name: "Physio T••• Shop",
    industry: "Physiotherapy Products E-commerce",
    location: "Pakistan (nationwide)",
    image: "/images/case-studies/physio-t-shop.jpg",
    stats: [
      { value: "6.8x", label: "ROAS" },
      { value: "Rs 1.41M", label: "Conversion value" },
      { value: "Rs 208K", label: "Ad spend" },
      { value: "Rs 18", label: "Cost per conversion" },
    ],
    strategy: [
      "6.8x return on ad spend with an Rs 18 cost per conversion across nationwide e-commerce campaigns.",
      "Search + Shopping structure for a specialized health-products catalog.",
      "Conversion growth driven by campaign-level experiment wins (+90 conversions from the top campaign in one period).",
    ],
  },
  {
    slug: "z-shoppe",
    name: "Z••• Shoppe",
    industry: "Healthcare E-commerce",
    location: "Pakistan (nationwide)",
    image: "/images/case-studies/z-shoppe.jpg",
    stats: [
      { value: "4.6x", label: "ROAS" },
      { value: "Rs 4.53M", label: "Conversion value" },
      { value: "58K+", label: "Clicks" },
      { value: "Rs 17", label: "Average CPC" },
    ],
    strategy: [
      "4.6x ROAS on ~Rs 1M spend for a healthcare e-commerce catalog.",
      "58K+ clicks at Rs 17 average CPC through tight keyword-match and negative-list management.",
      "Full-funnel tracking (GTM + GA4) attributing revenue back to campaign and product level.",
    ],
  },
  {
    slug: "rehab-c",
    name: "Rehab C•••",
    industry: "Special-Needs Children's School",
    location: "Lahore & DHA, Pakistan",
    image: "/images/case-studies/rehab-c.jpg",
    stats: [
      { value: "1,980", label: "Conversions (enquiries)" },
      { value: "Rs 78", label: "Cost per conversion" },
      { value: "Rs 155K", label: "Ad spend" },
    ],
    strategy: [
      "Generated ~2K enquiries at Rs 78 per conversion for a sensitive, trust-driven service category.",
      "Hyper-local targeting (Lahore + DHA) with ad copy written for parent decision-makers.",
      "Lead quality protected via click-fraud filtering and careful search-term auditing.",
    ],
  },
  {
    slug: "e-black-car",
    name: "E••• Black Car Service",
    industry: "Executive Transport",
    location: "US",
    image: "/images/case-studies/e-black-car.jpg",
    stats: [
      { value: "1,220", label: "Conversions" },
      { value: "$32.66", label: "Cost per conversion" },
      { value: "$39.9K", label: "Ad spend" },
    ],
    strategy: [
      "Drove 1.2K+ conversions at a $32.66 CPA in a niche with $100+ average booking values.",
      "Impression-share defense against national competitors on high-value keywords.",
      "Competitive-analysis-led keyword expansion and continuous ad copy testing.",
    ],
  },
  {
    slug: "chi-t-black-cars",
    name: "Chi T••• Black Cars",
    industry: "Executive Car Service",
    location: "Chicago, US",
    image: "/images/case-studies/chi-t-black-cars.jpg",
    stats: [
      { value: "$54.4K", label: "Ad spend" },
      { value: "$83.4K", label: "Conversion value" },
      { value: "122", label: "Tracked phone calls" },
    ],
    strategy: [
      "Suburb-level geo campaigns capturing airport and corporate travel demand around Chicago.",
      "Bid-strategy and keyword-targeting iterations tracked with change-history discipline.",
      "Positive-ROAS growth while competing against national aggregators.",
    ],
  },
  {
    slug: "royal-c-buses",
    name: "Royal C••• Buses",
    industry: "Charter & Party Buses",
    location: "Chicago, US",
    image: "/images/case-studies/royal-c-buses.jpg",
    stats: [
      { value: "$4,594", label: "Spend (Jun–Jul '26)" },
      { value: "$10,257", label: "Conversion value" },
      { value: "2.2x", label: "ROAS" },
    ],
    strategy: [
      "Geo-segmented local Search campaigns targeting high-intent charter and event transport queries.",
      "Value-based conversion tracking with call reporting; budget scaled only into campaigns clearing target ROAS.",
      "Continuous keyword and bid-strategy refinement, fully documented in the account change history.",
    ],
  },
  {
    slug: "regal-b-limo",
    name: "Regal B••• Limo",
    industry: "Black Car & Limo Service",
    location: "New Orleans, US",
    image: "/images/case-studies/regal-b-limo.jpg",
    stats: [
      { value: "331", label: "Phone call leads" },
      { value: "$5.88", label: "Average CPC" },
      { value: "Jan '25 – Jul '26", label: "Period" },
    ],
    strategy: [
      "Call-first strategy for a booking-by-phone business: call assets, call campaigns, and CallRail attribution.",
      "Local Search structure segmented by service area; negative-keyword sculpting to protect CPC in a premium niche.",
      "Ongoing bid-strategy and keyword-targeting experiments to stabilize lead flow across seasonality.",
    ],
  },
  {
    slug: "e-p-masters",
    name: "E••• P••• M•••",
    industry: "Packaging Manufacturer",
    location: "US",
    stats: [{ value: "Launch stage", label: "Account architecture & build-out" }],
    strategy: [
      "Full account build-out: campaign architecture, conversion tracking, and billing/compliance handling for a new advertiser.",
      "Keyword and competitor research completed for B2B packaging demand capture.",
      "Launch strategy ready — spend scaling to follow.",
    ],
  },
];
