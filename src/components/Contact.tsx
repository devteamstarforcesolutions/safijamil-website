import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -260,
          right: -160,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92,173,255,.16) 0%, rgba(92,173,255,0) 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="contact-grid">
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
            07 — Contact
          </div>
          <h2
            className="h2--xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: "0 0 22px",
            }}
          >
            Let&apos;s grow something together
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#B7C2D4", margin: "0 0 40px" }}>
            Tell me about your business and your goals — I&apos;ll reply within a day with an
            honest read on whether paid ads can move the needle for you.
          </p>
          <div style={{ display: "grid", gap: 20 }}>
            <a href="mailto:safijamil.dev@gmail.com" className="contact-link" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(92,173,255,.35)",
                  color: "#5CADFF",
                  fontSize: 17,
                }}
              >
                ✉
              </span>
              <span style={{ fontSize: 16 }}>safijamil.dev@gmail.com</span>
            </a>
            <a href="tel:+923443047362" className="contact-link" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(92,173,255,.35)",
                  color: "#5CADFF",
                  fontSize: 17,
                }}
              >
                ✆
              </span>
              <span style={{ fontSize: 16 }}>+92 344 3047362</span>
            </a>
            <a
              href="https://linkedin.com/in/safiullahjamil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(92,173,255,.35)",
                  color: "#5CADFF",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                in
              </span>
              <span style={{ fontSize: 16 }}>linkedin.com/in/safiullahjamil</span>
            </a>
            <a
              href="https://www.fiverr.com/safiullahjamil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(92,173,255,.35)",
                  color: "#5CADFF",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                fi
              </span>
              <span style={{ fontSize: 16 }}>fiverr.com/safiullahjamil · Level 2 Seller</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
