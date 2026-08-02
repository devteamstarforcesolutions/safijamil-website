import Image from "next/image";
import HeroTilt from "./HeroTilt";
import safiPhoto from "../../public/images/safi-jamil.jpeg";

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 48px 80px",
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
          background: "radial-gradient(circle, rgba(92,173,255,.22) 0%, rgba(92,173,255,0) 65%)",
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
          background: "radial-gradient(circle, rgba(64,224,208,.10) 0%, rgba(64,224,208,0) 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.15fr .85fr",
          gap: 64,
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 16px",
              border: "1px solid rgba(92,173,255,.35)",
              color: "#8CC5FF",
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
                background: "#40E0D0",
              }}
            />
            Available for freelance projects
          </div>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: 60,
              lineHeight: 1.06,
              fontWeight: 700,
              margin: "0 0 22px",
              letterSpacing: -1,
            }}
          >
            Turning ad spend into{" "}
            <span style={{ color: "#5CADFF", textShadow: "0 0 32px rgba(92,173,255,.45)" }}>
              measurable growth
            </span>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "#B7C2D4",
              maxWidth: 540,
              margin: "0 0 36px",
              textWrap: "pretty",
            }}
          >
            I&apos;m Safi — a performance marketer and brand strategist. I help e-commerce and service
            brands generate sales and leads through Google Ads and Meta campaigns, with full-funnel
            ownership from tracking to testing.
          </p>
          <div style={{ display: "flex", gap: 16, marginBottom: 56 }}>
            <a
              href="#work"
              className="btn-primary"
              style={{
                display: "inline-block",
                padding: "15px 32px",
                background: "#5CADFF",
                color: "#06090F",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 0 32px rgba(92,173,255,.4)",
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
                border: "1px solid rgba(92,173,255,.4)",
                color: "#E8EDF5",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Get in touch
            </a>
          </div>
          <div style={{ display: "flex", gap: 48 }}>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "#5CADFF" }}>
                $261K+
              </div>
              <div style={{ fontSize: 13.5, color: "#8493A8", marginTop: 4 }}>Active ad spend managed</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "#5CADFF" }}>
                7+ yrs
              </div>
              <div style={{ fontSize: 13.5, color: "#8493A8", marginTop: 4 }}>Performance marketing</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 34, fontWeight: 700, color: "#5CADFF" }}>
                6
              </div>
              <div style={{ fontSize: 13.5, color: "#8493A8", marginTop: 4 }}>Industries scaled</div>
            </div>
          </div>
        </div>
        <HeroTilt>
          <div
            className="ring"
            style={{
              position: "absolute",
              inset: -36,
              border: "1px solid rgba(92,173,255,.25)",
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
                background: "#5CADFF",
                boxShadow: "0 0 14px #5CADFF",
              }}
            />
          </div>
          <div
            className="ring-reverse"
            style={{
              position: "absolute",
              inset: -70,
              border: "1px dashed rgba(64,224,208,.2)",
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
                background: "#40E0D0",
                boxShadow: "0 0 12px #40E0D0",
              }}
            />
          </div>
          <Image
            src={safiPhoto}
            alt="Safi Jamil"
            width={360}
            height={440}
            priority
            style={{
              width: 360,
              height: 440,
              objectFit: "cover",
              objectPosition: "top",
              border: "1px solid rgba(92,173,255,.35)",
              boxShadow: "0 24px 80px rgba(0,0,0,.6), 0 0 60px rgba(92,173,255,.18)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -18,
              right: 6,
              padding: "12px 18px",
              background: "#101826",
              border: "1px solid rgba(92,173,255,.3)",
              fontSize: 13,
              boxShadow: "0 12px 40px rgba(0,0,0,.5)",
            }}
          >
            <span style={{ color: "#40E0D0", fontWeight: 600 }}>▲ Lower CPA</span>{" "}
            <span style={{ color: "#8493A8" }}>· AI-driven optimization</span>
          </div>
        </HeroTilt>
      </div>
    </header>
  );
}
