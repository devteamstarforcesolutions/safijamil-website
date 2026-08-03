"use client";

import Link from "next/link";

import { useState } from "react";
import { track } from "@/lib/analytics";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="nav-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(var(--accent-rgb),.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text)" }}>
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
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14.5 }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="nav-cta"
            onClick={() => track("cta_click", { link_label: "nav_lets_talk", link_location: "nav" })}
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
          </Link>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={open ? "burger-line burger-line--top-open" : "burger-line"} />
            <span className={open ? "burger-line burger-line--mid-open" : "burger-line"} />
            <span className={open ? "burger-line burger-line--bot-open" : "burger-line"} />
          </button>
        </div>
      </div>
      <div className={open ? "nav-mobile-menu nav-mobile-menu--open" : "nav-mobile-menu"}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="nav-mobile-link"
          onClick={() => {
            setOpen(false);
            track("cta_click", { link_label: "nav_mobile_contact", link_location: "nav_mobile" });
          }}
          style={{ color: "var(--accent)" }}
        >
          Contact →
        </Link>
      </div>
    </nav>
  );
}
