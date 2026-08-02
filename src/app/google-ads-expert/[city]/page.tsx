import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities, getCity, sharedFaq } from "@/data/cities";
import FaqList from "@/components/FaqList";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Google Ads Expert in ${c.name} — PPC & Performance Marketing | Safi Jamil`;
  const description = `Hire a Google Ads specialist for your ${c.name} business. PPC campaigns, Meta Ads, and full conversion tracking from Safi Jamil — in the PPC industry since 2018, managing $261K+ in active ad spend.`;
  return {
    title,
    description,
    keywords: [
      `google ads expert ${c.slug}`,
      `ppc services ${c.slug}`,
      `digital marketing ${c.slug}`,
      `google ads agency ${c.slug}`,
      "google ads specialist pakistan",
    ],
    alternates: { canonical: `/google-ads-expert/${c.slug}` },
    openGraph: { title, description, url: `https://safijamil.com/google-ads-expert/${c.slug}` },
  };
}

const services = [
  { name: "Google Ads (Search, PMax, Display)", desc: "High-intent campaigns built on keyword strategy, competitor analysis, and smart bidding." },
  { name: "Meta Ads (Facebook & Instagram)", desc: "Creative-tested campaigns with AI-driven audience strategy for brands and e-commerce." },
  { name: "Conversion tracking", desc: "GA4, Google Tag Manager, and call tracking — every lead attributed to the ad that produced it." },
  { name: "Landing pages & CRO", desc: "A/B-tested pages on Shopify, WordPress, or Webflow that turn clicks into leads." },
  { name: "Click fraud protection", desc: "ClickCease monitoring so your budget is spent on real customers, not bots." },
  { name: "Plain-language reporting", desc: "Monthly reports tied to leads and sales — never vanity metrics." },
];

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: 13,
  letterSpacing: 2.5,
  color: "var(--accent)",
  textTransform: "uppercase",
  marginBottom: 16,
};

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const faqs = [...c.faq, ...sharedFaq];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Google Ads & PPC Management in ${c.name}`,
    serviceType: "Google Ads Management, PPC, Performance Marketing",
    areaServed: { "@type": "City", name: `${c.name}, Pakistan` },
    provider: {
      "@type": "Person",
      name: "Safi Jamil",
      url: "https://safijamil.com",
      jobTitle: "Brand Strategist & Google Ads Specialist",
    },
    url: `https://safijamil.com/google-ads-expert/${c.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 76 }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="section" style={{ borderTop: "none" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={labelStyle}>Service area — Pakistan</div>
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(30px, 5.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: -0.5,
                margin: "0 0 20px",
              }}
            >
              Google Ads Expert in {c.name}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--text-2)", margin: "0 0 18px" }}>{c.intro}</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--text-2)", margin: "0 0 28px" }}>
              I&apos;m Safi Jamil — a brand strategist and Google Ads specialist in the PPC industry
              since 2018, currently managing $261,855+ in active Google &amp; Meta Ads spend, with
              hands-on experience running accounts for US-based clients. I bring that same
              full-funnel discipline to businesses in {c.name}.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 8 }}>
              <Link
                href="/#contact"
                className="btn-primary"
                style={{ display: "inline-block", padding: "14px 28px", background: "var(--accent)", color: "var(--on-accent)", fontWeight: 600, fontSize: 15.5 }}
              >
                Get a free campaign review
              </Link>
              <Link
                href="/#work"
                className="btn-outline"
                style={{ display: "inline-block", padding: "14px 28px", border: "1px solid rgba(var(--accent-rgb),.4)", color: "var(--text)", fontWeight: 500, fontSize: 15.5 }}
              >
                See case work
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={labelStyle}>What I do for {c.name} businesses</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
              {services.map((s) => (
                <div key={s.name} style={{ padding: "24px 26px", background: "var(--card)", border: "1px solid rgba(var(--accent-rgb),.14)" }}>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 16.5, marginBottom: 8 }}>{s.name}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--text-2)", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={labelStyle}>Local approach</div>
            <p style={{ fontSize: 16.5, lineHeight: 1.8, color: "var(--text-2)", margin: "0 0 22px" }}>{c.localAngle}</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
              Areas served include {c.areas.join(", ")} — and everywhere in between. Campaigns are
              managed remotely with monthly plain-language reporting.
            </p>
          </div>
        </section>

        <section className="section">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={labelStyle}>Frequently asked questions</div>
            <FaqList faqs={faqs} />
            <div style={{ marginTop: 40 }}>
              <div style={{ fontSize: 14.5, color: "var(--muted)", marginBottom: 12 }}>Other cities I serve:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: 14.5 }}>
                {cities
                  .filter((x) => x.slug !== c.slug)
                  .map((x) => (
                    <Link key={x.slug} href={`/google-ads-expert/${x.slug}`}>
                      {x.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
