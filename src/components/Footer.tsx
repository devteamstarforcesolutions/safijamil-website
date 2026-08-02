import Link from "next/link";
import { cities } from "@/data/cities";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(var(--accent-rgb),.1)" }}>
      <div className="footer-bar" style={{ paddingBottom: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            SJ
          </span>
          <span style={{ fontSize: 14, color: "var(--muted)" }}>© 2026 Safi Jamil · safijamil.com</span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/blog" className="footer-link">Blog</Link>
          <a href="mailto:safijamil.dev@gmail.com" className="footer-link">Email</a>
          <a href="https://linkedin.com/in/safiullahjamil" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://www.fiverr.com/safiullahjamil" target="_blank" rel="noopener noreferrer" className="footer-link">
            Fiverr
          </a>
        </div>
      </div>
      <div className="footer-bar" style={{ paddingTop: 14, borderTop: "none" }}>
        <div style={{ fontSize: 13, color: "var(--muted)", display: "flex", flexWrap: "wrap", gap: "6px 14px", justifyContent: "center" }}>
          <Link href="/google-ads-expert" className="footer-link" style={{ fontWeight: 500 }}>
            Google Ads expert in Pakistan:
          </Link>
          {cities.map((c) => (
            <Link key={c.slug} href={`/google-ads-expert/${c.slug}`} className="footer-link">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
