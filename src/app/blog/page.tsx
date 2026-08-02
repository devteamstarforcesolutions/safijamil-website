import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { publishedPosts } from "@/data/posts";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PPC & Google Ads Insights — Safi Jamil's Blog",
  description:
    "Practical Google Ads, Meta Ads, and conversion tracking insights from Safi Jamil — a brand strategist and PPC specialist managing $261K+ in active ad spend.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const items = publishedPosts();
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
            Insights
          </div>
          <h1 className="h2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, margin: "0 0 14px" }}>
            PPC &amp; Google Ads insights
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text-2)", margin: "0 0 48px", maxWidth: 620 }}>
            Field notes from managing $261K+ in active ad spend — account structure, conversion
            tracking, and the tests that actually move numbers.
          </p>
          <div style={{ display: "grid", gap: 20 }}>
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                style={{
                  display: "block",
                  padding: "28px 32px",
                  background: "var(--card)",
                  border: "1px solid rgba(var(--accent-rgb),.14)",
                  color: "var(--text)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 10, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      letterSpacing: 1.5,
                      color: "var(--accent-2)",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>
                    {new Date(p.date + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 21, fontWeight: 600, margin: "0 0 8px", lineHeight: 1.35 }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-2)", margin: 0 }}>{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
