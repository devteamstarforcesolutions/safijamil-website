import { posts } from "@/data/content";

export default function Insights() {
  return (
    <section id="blog" className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="" className="insights-head">
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
              className="h2"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                margin: 0,
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
        <div className="posts-grid">
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
