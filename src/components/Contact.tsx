import ContactForm from "./ContactForm";
import { WHATSAPP_URL } from "@/data/contact";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

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
            08 — Contact
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
            <a
              href={WHATSAPP_URL}
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
                  color: "#25D366",
                }}
              >
                <WhatsAppIcon />
              </span>
              <span style={{ fontSize: 16 }}>
                +92 344 3047362 <span style={{ color: "#8493A8" }}>· Chat on WhatsApp</span>
              </span>
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
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
