export default function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div data-reveal="">
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
            01 — About
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: "0 0 24px",
            }}
          >
            Marketer by craft, engineer by training
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#B7C2D4", margin: "0 0 18px" }}>
            Brand strategist and Google Ads specialist, in the PPC industry since 2018 — turning
            ad spend into measurable growth for e-commerce and service brands. Currently managing
            $261,855+ in active Google &amp; Meta Ads spend across car rental, home services,
            paint, and retail industries, working with US-based companies fully remotely.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#B7C2D4", margin: 0 }}>
            Google Ads Premier Partner–recognized and a Level 2 Seller on Fiverr, with a software
            engineering foundation — I own the full funnel, from account architecture and
            conversion tracking to A/B testing and AI-driven optimization that consistently
            lowers CPA and lifts lead volume.
          </p>
        </div>
        <div data-reveal="" style={{ display: "grid", gap: 20 }}>
          <div style={{ padding: "28px 32px", background: "#101826", border: "1px solid rgba(92,173,255,.14)" }}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Certifications
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#B7C2D4", fontSize: 15.5, lineHeight: 2 }}>
              <li>Google Ads Search Certification</li>
              <li>Google SkillShop Certifications</li>
              <li>Udemy Digital Marketing Certifications</li>
            </ul>
          </div>
          <div style={{ padding: "28px 32px", background: "#101826", border: "1px solid rgba(92,173,255,.14)" }}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Education
            </div>
            <div style={{ fontSize: 16, color: "#E8EDF5", fontWeight: 500 }}>
              B.S. Computer Software Engineering
            </div>
            <div style={{ fontSize: 14.5, color: "#8493A8", marginTop: 4 }}>
              Minhaj University Lahore
            </div>
          </div>
          <div style={{ padding: "28px 32px", background: "#101826", border: "1px solid rgba(92,173,255,.14)" }}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Based in
            </div>
            <div style={{ fontSize: 16, color: "#E8EDF5" }}>Edmond, Oklahoma, United States</div>
            <div style={{ fontSize: 14.5, color: "#8493A8", marginTop: 4 }}>
              Working with clients worldwide
            </div>
          </div>
          <div style={{ padding: "28px 32px", background: "#101826", border: "1px solid rgba(92,173,255,.14)" }}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: 14,
                letterSpacing: 1.5,
                color: "#8CC5FF",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Freelance profile
            </div>
            <div style={{ fontSize: 16, color: "#E8EDF5", fontWeight: 500 }}>
              Level 2 Seller on Fiverr
            </div>
            <div style={{ fontSize: 14.5, marginTop: 4 }}>
              <a href="https://www.fiverr.com/safiullahjamil" target="_blank" rel="noopener noreferrer">
                fiverr.com/safiullahjamil →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
