import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Google Ads Case Studies — Real Accounts, Real Results | Safi Jamil",
  description:
    "Screenshot-backed Google Ads case studies from live accounts: $711K spend scaled to $1.18M conversion value, 6.8x ROAS e-commerce, Rs 78 cost-per-lead campaigns, and more. Client names masked for confidentiality.",
  keywords: ["google ads case studies", "ppc case study", "google ads results", "google ads portfolio"],
  alternates: { canonical: "/case-studies" },
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: 13,
  letterSpacing: 2.5,
  color: "var(--accent)",
  textTransform: "uppercase",
  marginBottom: 16,
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main className="section" style={{ paddingTop: 150 }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={labelStyle}>Case Studies</div>
          <h1 className="h2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, margin: "0 0 14px" }}>
            Real accounts, real spend, real outcomes
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--text-2)", margin: "0 0 10px", maxWidth: 680 }}>
            Nine selected accounts across US transportation, e-commerce, healthcare, and education —
            managed end-to-end by me. Every screenshot below is taken directly from a live Google
            Ads account I manage.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 56px", maxWidth: 680 }}>
            Client brand names and campaign names are masked for confidentiality. Full account
            walkthroughs — including change history and campaign structures — available personally
            over Zoom or Google Meet.
          </p>

          <div style={{ display: "grid", gap: 40 }}>
            {caseStudies.map((cs, i) => (
              <article
                key={cs.slug}
                style={{
                  background: "var(--card)",
                  border: "1px solid rgba(var(--accent-rgb),.14)",
                  overflow: "hidden",
                }}
              >
                {cs.image && (
                  <div style={{ borderBottom: "1px solid rgba(var(--accent-rgb),.14)", background: "#fff" }}>
                    <Image
                      src={cs.image}
                      alt={`Google Ads account overview — ${cs.name} (${cs.industry})`}
                      width={1200}
                      height={600}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      sizes="(max-width: 980px) 100vw, 980px"
                    />
                  </div>
                )}
                <div style={{ padding: "30px 34px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline", marginBottom: 6 }}>
                    <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 24, fontWeight: 600, margin: 0 }}>
                      {cs.name}
                    </h2>
                    <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-space-grotesk), sans-serif", letterSpacing: 1 }}>
                      {String(i + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div style={{ fontSize: 14.5, color: "var(--accent-2)", marginBottom: 22 }}>
                    {cs.industry} · {cs.location}
                  </div>
                  <div style={{ display: "flex", gap: "18px 40px", flexWrap: "wrap", borderTop: "1px solid rgba(var(--accent-rgb),.12)", borderBottom: "1px solid rgba(var(--accent-rgb),.12)", padding: "18px 0", marginBottom: 22 }}>
                    {cs.stats.map((s) => (
                      <div key={s.label}>
                        <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 24, fontWeight: 700, color: "var(--accent)" }}>
                          {s.value}
                        </div>
                        <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 13, letterSpacing: 1.5, color: "var(--accent-soft)", textTransform: "uppercase", marginBottom: 12 }}>
                    Strategy &amp; execution
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 20px", color: "var(--text-2)", fontSize: 15, lineHeight: 1.8 }}>
                    {cs.strategy.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              padding: "32px 36px",
              border: "1px dashed rgba(var(--accent-rgb),.35)",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
              Want the full walkthrough?
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--text-2)", margin: "0 auto 20px", maxWidth: 520 }}>
              Detailed campaign structures, change history, and live account access can be
              demonstrated personally during a Zoom or Google Meet session.
            </p>
            <Link
              href="/#contact"
              className="btn-primary"
              style={{ display: "inline-block", padding: "14px 30px", background: "var(--accent)", color: "var(--on-accent)", fontWeight: 600, fontSize: 15.5 }}
            >
              Book a walkthrough
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
