export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 48px",
        borderTop: "1px solid rgba(92,173,255,.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            border: "1.5px solid #5CADFF",
            color: "#5CADFF",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          SJ
        </span>
        <span style={{ fontSize: 14, color: "#8493A8" }}>© 2026 Safi Jamil · safijamil.com</span>
      </div>
      <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
        <a href="mailto:safijamil.dev@gmail.com" className="footer-link">Email</a>
        <a href="https://linkedin.com/in/safiullahjamil" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
