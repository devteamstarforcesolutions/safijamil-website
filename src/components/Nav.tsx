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
        background: "rgba(11,15,23,.82)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(92,173,255,.12)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, color: "#E8EDF5" }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            border: "1.5px solid #5CADFF",
            color: "#5CADFF",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: 0.5,
            boxShadow: "0 0 18px rgba(92,173,255,.35), inset 0 0 12px rgba(92,173,255,.12)",
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
            background: "#5CADFF",
            color: "#06090F",
            fontWeight: 600,
            boxShadow: "0 0 24px rgba(92,173,255,.4)",
          }}
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
