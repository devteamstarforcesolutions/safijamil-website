import Image from "next/image";
import HeroTilt from "./HeroTilt";
import safiPhoto from "../../public/images/safi-jamil.jpeg";

export default function Hero() {
  return (
    <header
      id="top"
      className="hero-pad"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="orb"
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),.22) 0%, rgba(var(--accent-rgb),0) 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb2"
        style={{
          position: "absolute",
          bottom: -220,
          left: -140,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent2-rgb),.10) 0%, rgba(var(--accent2-rgb),0) 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="hero-grid">
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 16px",
              border: "1px solid rgba(var(--accent-rgb),.35)",
              color: "var(--accent-soft)",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              marginBottom: 28,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent-2)",
              }}
            />
            Available for freelance projects
          </div>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              margin: "0 0 22px",
            }}
          >
            Turning ad spend into{" "}
            <span style={{ color: "var(--accent)", textShadow: "0 0 32px rgba(var(--accent-rgb),.45)" }}>
              measurable growth
            </span>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "var(--text-2)",
              maxWidth: 540,
              margin: "0 0 36px",
              textWrap: "pretty",
            }}
          >
            I&apos;m Safi — a brand strategist and Google Ads specialist, in the PPC industry since
            2018. I help US-based e-commerce and service brands generate sales and leads through
            Google Ads and Meta campaigns — working remotely, with full-funnel ownership from
            tracking to testing.
          </p>
          <div className="hero-ctas">
            <a
              href="#work"
              className="btn-primary"
              style={{
                display: "inline-block",
                padding: "15px 32px",
                background: "var(--accent)",
                color: "var(--on-accent)",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 0 32px rgba(var(--accent-rgb),.4)",
              }}
            >
              See my work
            </a>
            <a
              href="#contact"
              className="btn-outline"
              style={{
                display: "inline-block",
                padding: "15px 32px",
                border: "1px solid rgba(var(--accent-rgb),.4)",
                color: "var(--text)",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Get in touch
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "var(--accent)" }}>
                $261K+
              </div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>Active ad spend managed</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "var(--accent)" }}>
                Since 2018
              </div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>In the PPC industry</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "var(--accent)" }}>
                Level 2
              </div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>
                <a href="https://www.fiverr.com/safiullahjamil" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Fiverr seller
                </a>
              </div>
            </div>
          </div>
        </div>
        <HeroTilt>
          <div
            className="ring"
            style={{
              position: "absolute",
              inset: -36,
              border: "1px solid rgba(var(--accent-rgb),.25)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 14px var(--accent)",
              }}
            />
          </div>
          <div
            className="ring-reverse"
            style={{
              position: "absolute",
              inset: -70,
              border: "1px dashed rgba(var(--accent2-rgb),.2)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: "18%",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent-2)",
                boxShadow: "0 0 12px var(--accent-2)",
              }}
            />
          </div>
          <Image
            src={safiPhoto}
            alt="Safi Jamil"
            width={360}
            height={440}
            priority
            className="hero-photo"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              border: "1px solid rgba(var(--accent-rgb),.35)",
              boxShadow: "0 24px 80px rgba(16,40,90,.16), 0 0 60px rgba(var(--accent-rgb),.18)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -18,
              right: 6,
              padding: "12px 18px",
              background: "var(--card)",
              border: "1px solid rgba(var(--accent-rgb),.3)",
              fontSize: 13,
              boxShadow: "0 12px 40px rgba(16,40,90,.12)",
            }}
          >
            <span style={{ color: "var(--accent-2)", fontWeight: 600 }}>▲ Lower CPA</span>{" "}
            <span style={{ color: "var(--muted)" }}>· AI-driven optimization</span>
          </div>
        </HeroTilt>
      </div>
    </header>
  );
}
