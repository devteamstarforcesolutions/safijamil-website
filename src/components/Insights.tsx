import { posts } from "@/data/content";

export default function Insights() {
  return (
    <section
      id="blog"
      style={{ padding: "110px 48px", borderTop: "1px solid rgba(92,173,255,.08)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 56,
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 13,
                letterSpacing: 2.5,
                color: "#5CADFF",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              06 — Insights
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 40,
                fontWeight: 700,
                margin: 0,
                letterSpacing: -0.5,
              }}
            >
              Writing, coming soon
            </h2>
          </div>
          <span
            style={{
              fontSize: 13,
              letterSpacing: 1.5,
              color: "#40E0D0",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              paddingBottom: 8,
            }}
          >
            In the works
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {posts.map((p) => (
            <div
              data-reveal=""
              key={p.title}
              style={{
                padding: 32,
                border: "1px dashed rgba(92,173,255,.3)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <span
                style={{
                  fontSize: 12.5,
                  letterSpacing: 1.5,
                  color: "#8493A8",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
