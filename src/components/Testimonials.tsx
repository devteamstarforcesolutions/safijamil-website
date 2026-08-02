import { quotes } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="" style={{ marginBottom: 56 }}>
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
            05 — Testimonials
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: 0,
            }}
          >
            What clients say
          </h2>
        </div>
        <div className="quotes-grid">
          {quotes.map((q) => (
            <div
              data-reveal=""
              key={q.text}
              style={{
                padding: 32,
                background: "var(--card)",
                border: "1px solid rgba(var(--accent-rgb),.14)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 40,
                  lineHeight: 0.5,
                  color: "var(--accent)",
                  marginTop: 10,
                }}
              >
                &quot;
              </div>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--text-2)", margin: 0, flex: 1 }}>
                {q.text}
              </p>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{q.name}</div>
                <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 2 }}>{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
