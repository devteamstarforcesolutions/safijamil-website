import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found — Safi Jamil",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { href: "/", label: "Homepage" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/google-ads-expert", label: "Google Ads Expert — Pakistan" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        className="section"
        style={{
          paddingTop: 150,
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(64px, 12vw, 96px)",
              fontWeight: 700,
              color: "var(--accent)",
              lineHeight: 1,
              marginBottom: 8,
              opacity: 0.85,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            This page doesn&apos;t exist
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--text-2)",
              margin: "0 0 40px",
            }}
          >
            The page you&apos;re looking for may have moved or the link may be
            outdated. Here are a few places to start instead:
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            {popularLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={i === 0 ? "btn-primary" : "btn-outline"}
                style={
                  i === 0
                    ? {
                        display: "inline-block",
                        padding: "12px 24px",
                        background: "var(--accent)",
                        color: "var(--on-accent)",
                        fontWeight: 600,
                        fontSize: 14.5,
                      }
                    : {
                        display: "inline-block",
                        padding: "12px 24px",
                        border: "1px solid rgba(var(--accent-rgb),.4)",
                        color: "var(--text)",
                        fontWeight: 500,
                        fontSize: 14.5,
                      }
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: "var(--muted)" }}>
            Or email directly:{" "}
            <a href="mailto:safijamil.dev@gmail.com" style={{ color: "var(--accent-2)" }}>
              safijamil.dev@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
