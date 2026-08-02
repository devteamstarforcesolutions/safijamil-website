import { jobs } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
            02 — Experience
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: 0,
            }}
          >
            In the growth trenches since 2018
          </h2>
        </div>
        <div className="timeline">
          {jobs.map((job) => (
            <div data-reveal="" key={job.company + job.dates} style={{ position: "relative" }}>
              <span
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: -42,
                  top: 8,
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 0 12px rgba(var(--accent-rgb),.6)",
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  color: "var(--accent-2)",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  letterSpacing: 1,
                  marginBottom: 8,
                }}
              >
                {job.dates}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  margin: "0 0 4px",
                }}
              >
                {job.title}
              </h3>
              <div style={{ fontSize: 15, color: "var(--accent-soft)", marginBottom: 12 }}>{job.company}</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--text-2)", margin: 0, maxWidth: 680 }}>
                {job.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
