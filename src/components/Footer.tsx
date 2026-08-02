export default function Footer() {
  return (
    <footer
      className="footer-bar"
      style={{ borderTop: "1px solid rgba(var(--accent-rgb),.1)" }}
    >
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
      <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
        <a href="mailto:safijamil.dev@gmail.com" className="footer-link">Email</a>
        <a href="https://linkedin.com/in/safiullahjamil" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://www.fiverr.com/safiullahjamil" target="_blank" rel="noopener noreferrer" className="footer-link">
          Fiverr
        </a>
      </div>
    </footer>
  );
}
