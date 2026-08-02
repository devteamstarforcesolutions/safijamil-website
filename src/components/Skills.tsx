import { skills, tools } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="" style={{ marginBottom: 56 }}>
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
            04 — Skills &amp; Stack
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Full-funnel, tool by tool
          </h2>
        </div>
        <div className="skills-grid">
          <div data-reveal="" style={{ padding: 36, background: "#101826", border: "1px solid rgba(92,173,255,.14)" }}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Core skills
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill-chip"
                  style={{
                    padding: "9px 16px",
                    border: "1px solid rgba(92,173,255,.3)",
                    color: "#D6E4F5",
                    fontSize: 14,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div
            data-reveal=""
            style={{
              padding: 36,
              background: "#101826",
              border: "1px solid rgba(92,173,255,.14)",
              display: "grid",
              gap: 18,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Tools &amp; analytics
            </div>
            {tools.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  borderBottom: "1px solid rgba(92,173,255,.1)",
                  paddingBottom: 14,
                }}
              >
                <span style={{ fontSize: 15.5, color: "#E8EDF5", fontWeight: 500 }}>{t.name}</span>
                <span style={{ fontSize: 14, color: "#8493A8", textAlign: "right" }}>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
