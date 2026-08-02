export default function Nav() {
  return (
    <nav
      className="nav-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(var(--accent-rgb),.12)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text)" }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            border: "1.5px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: 0.5,
            boxShadow: "0 0 18px rgba(var(--accent-rgb),.35), inset 0 0 12px rgba(var(--accent-rgb),.12)",
          }}
        >
          SJ
        </span>
        <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: 0.3 }}>
          Safi Jamil
        </span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14.5 }}>
        <a href="#about" className="nav-link">About</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#work" className="nav-link">Case Work</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a
          href="#contact"
          className="nav-cta"
          style={{
            display: "inline-block",
            padding: "10px 22px",
            background: "var(--accent)",
            color: "var(--on-accent)",
            fontWeight: 600,
            boxShadow: "0 0 24px rgba(var(--accent-rgb),.4)",
          }}
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
