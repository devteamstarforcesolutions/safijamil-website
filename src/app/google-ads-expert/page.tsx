import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Google Ads Expert in Pakistan — Cities I Serve | Safi Jamil",
  description:
    "Google Ads and PPC management for businesses across Pakistan — Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Sialkot. Full conversion tracking, honest reporting.",
  keywords: ["google ads expert pakistan", "ppc services pakistan", "google ads specialist pakistan", "digital marketing expert pakistan"],
  alternates: { canonical: "/google-ads-expert" },
};

export default function CitiesIndex() {
  return (
    <>
      <Nav />
      <main className="section" style={{ paddingTop: 150, minHeight: "70vh" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
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
            Service areas — Pakistan
          </div>
          <h1 className="h2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, margin: "0 0 14px" }}>
            Google Ads expert for businesses across Pakistan
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--text-2)", margin: "0 0 44px", maxWidth: 640 }}>
            I&apos;m Safi Jamil — a brand strategist and Google Ads specialist in the PPC industry
            since 2018, managing $261K+ in active ad spend with full conversion tracking on every
            account. I work remotely with businesses in these cities:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/google-ads-expert/${c.slug}`}
                style={{
                  display: "block",
                  padding: "24px 28px",
                  background: "var(--card)",
                  border: "1px solid rgba(var(--accent-rgb),.14)",
                  color: "var(--text)",
                }}
              >
                <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 6 }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>{c.areas.slice(0, 3).join(" · ")}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
