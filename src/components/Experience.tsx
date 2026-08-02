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
              color: "#5CADFF",
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
            Seven years in the growth trenches
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
                  background: "#0B0F17",
                  border: "2px solid #5CADFF",
                  boxShadow: "0 0 12px rgba(92,173,255,.6)",
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  color: "#40E0D0",
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
              <div style={{ fontSize: 15, color: "#8CC5FF", marginBottom: 12 }}>{job.company}</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#B7C2D4", margin: 0, maxWidth: 680 }}>
                {job.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
