import FaqList, { type FaqEntry } from "./FaqList";

const faqs: FaqEntry[] = [
  {
    q: "What services do you offer?",
    a: "End-to-end paid growth: Google Ads (Search, Performance Max, Shopping, Display), Meta Ads (Facebook & Instagram), conversion tracking (GA4, Google Tag Manager, CallRail), landing page CRO with A/B testing, and click-fraud protection. I own the full funnel — from account architecture to the monthly report.",
  },
  {
    q: "How much ad budget do I need to get started?",
    a: "It depends on your market and cost per click. As a rule of thumb, your monthly budget should allow at least 30–50 clicks a day on your core campaign so smart bidding has data to learn from. In the first call I'll tell you honestly whether your budget can produce meaningful results — and if it can't, I'll say so.",
  },
  {
    q: "How do you measure and report results?",
    a: "Every account I run has full conversion tracking installed before ads go live — GA4, Google Tag Manager, and call tracking where phone leads matter. You get a monthly plain-language report tied to leads, bookings, or revenue, never vanity metrics like impressions.",
  },
  {
    q: "How long until I see results?",
    a: "Expect the first meaningful read at 2–4 weeks, once smart bidding exits its learning phase, and a reliable trend by month two or three. Accounts with existing conversion history move faster; brand-new accounts need patience while data accumulates.",
  },
  {
    q: "Do I keep ownership of my ad account?",
    a: "Always. The account, the data, and the campaign history belong to you — I work as a manager on your account, never as a gatekeeper. If we part ways, everything stays with you.",
  },
  {
    q: "Can I see proof of your results?",
    a: "Yes — the case studies page shows screenshots from live accounts I manage, with client names masked for confidentiality. For serious enquiries I'm happy to walk through full account details, change history, and campaign structures personally over Zoom or Google Meet.",
  },
];

export default function HomeFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div data-reveal="" style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: 13,
              letterSpacing: 2.5,
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            07 — FAQ
          </div>
          <h2
            className="h2"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, margin: 0 }}
          >
            Questions clients ask
          </h2>
        </div>
        <div data-reveal="">
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
