import { cases } from "@/data/content";
import TiltCard from "./TiltCard";

export default function CaseWork() {
  return (
    <section id="work" className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="" style={{ marginBottom: 56, maxWidth: 640 }}>
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
            03 — Case Work
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: "0 0 18px",
            }}
          >
            Campaigns that pay for themselves
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
            A snapshot of the industries I run paid growth for — hefty ad accounts for US-based
            businesses, managed remotely, every one with full conversion tracking so every dollar
            is accountable.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map((c) => (
            <TiltCard className="case-card" key={c.industry}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 18,
                }}
              >
                <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 22, fontWeight: 600, margin: 0 }}>
                  {c.industry}
                </h3>
                <span
                  style={{
                    fontSize: 12.5,
                    letterSpacing: 1,
                    color: "var(--accent-2)",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  {c.channel}
                </span>
              </div>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--text-2)", margin: "0 0 24px" }}>
                {c.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  borderTop: "1px solid rgba(var(--accent-rgb),.12)",
                  paddingTop: 20,
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>
                    {c.stat1}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{c.stat1label}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>
                    {c.stat2}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{c.stat2label}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
