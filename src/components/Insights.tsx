import Link from "next/link";
import { publishedPosts } from "@/data/posts";

export default function Insights() {
  const latest = publishedPosts().slice(0, 3);
  return (
    <section id="blog-preview" className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="" className="insights-head">
          <div>
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
              06 — Insights
            </div>
            <h2
              className="h2"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                margin: 0,
              }}
            >
              From the blog
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontSize: 13,
              letterSpacing: 1.5,
              fontFamily: "var(--font-space-grotesk), sans-serif",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              paddingBottom: 8,
            }}
          >
            View all posts →
          </Link>
        </div>
        <div className="posts-grid">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              data-reveal=""
              style={{
                padding: 32,
                border: "1px dashed rgba(var(--accent-rgb),.3)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "var(--text)",
              }}
            >
              <span
                style={{
                  fontSize: 12.5,
                  letterSpacing: 1.5,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                {p.tag}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
