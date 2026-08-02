"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/data/contact";

const labelStyle: React.CSSProperties = {
  display: "grid",
  gap: 8,
  fontSize: 13.5,
  color: "var(--accent-soft)",
  letterSpacing: 1,
  fontFamily: "var(--font-space-grotesk), sans-serif",
  textTransform: "uppercase",
};

const fieldStyle: React.CSSProperties = {
  padding: "14px 16px",
  background: "var(--bg)",
  border: "1px solid rgba(var(--accent-rgb),.2)",
  color: "var(--text)",
  fontSize: 15,
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [detail, setDetail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok && body.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(body.error || "Your message couldn't be sent. Please try again.");
        setDetail(body.detail || `HTTP ${res.status}`);
      }
    } catch (err) {
      setStatus("error");
      setError(
        "Couldn't reach the server — check your connection, or email safijamil.dev@gmail.com directly."
      );
      setDetail(err instanceof Error ? err.message : String(err));
    }
  }

  if (status === "sent") {
    return (
      <div
        data-reveal=""
        style={{
          padding: 40,
          background: "var(--card)",
          border: "1px solid rgba(var(--accent2-rgb),.4)",
          display: "grid",
          gap: 14,
          alignContent: "center",
          minHeight: 320,
        }}
      >
        <div style={{ fontSize: 34, color: "var(--accent-2)", lineHeight: 1 }}>✓</div>
        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Message sent
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
          Thanks for reaching out — I&apos;ve got your details and will reply within a day, usually
          sooner. If it&apos;s urgent,{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            message me on WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          style={{
            justifySelf: "start",
            marginTop: 6,
            padding: "10px 20px",
            background: "none",
            border: "1px solid rgba(var(--accent-rgb),.4)",
            color: "var(--text)",
            fontSize: 14.5,
            cursor: "pointer",
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      data-reveal=""
      className="contact-form-card"
      onSubmit={handleSubmit}
      noValidate
      style={{
        padding: 40,
        background: "var(--card)",
        border: "1px solid rgba(var(--accent-rgb),.14)",
        display: "grid",
        gap: 18,
      }}
    >
      <label style={labelStyle}>
        Name
        <input name="name" required placeholder="Your name" className="field" style={fieldStyle} />
      </label>
      <label style={labelStyle}>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="field"
          style={fieldStyle}
        />
      </label>
      <label style={labelStyle}>
        Project details
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you selling, and what does growth look like for you?"
          className="field"
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </label>

      {/* Honeypot: hidden from people, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {status === "error" && (
        <p
          role="alert"
          style={{
            margin: 0,
            padding: "12px 16px",
            border: "1px solid rgba(255,120,120,.4)",
            background: "rgba(255,120,120,.08)",
            color: "#FFB4B4",
            fontSize: 14.5,
            lineHeight: 1.6,
          }}
        >
          {error}{" "}
          <a href="mailto:safijamil.dev@gmail.com" style={{ color: "#FFD2D2" }}>
            Email me directly
          </a>
          .
          {detail && typeof window !== "undefined" && window.location.search.includes("debug=1") && (
            <span style={{ display: "block", marginTop: 8, fontFamily: "monospace", fontSize: 12.5, color: "#FFD2D2", wordBreak: "break-word" }}>
              {detail}
            </span>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-primary"
        style={{
          padding: 15,
          background: sending ? "rgba(var(--accent-rgb),.55)" : "var(--accent)",
          color: "var(--on-accent)",
          fontWeight: 600,
          fontSize: 16,
          border: "none",
          cursor: sending ? "wait" : "pointer",
          fontFamily: "var(--font-ibm-plex-sans), sans-serif",
          boxShadow: "0 0 28px rgba(var(--accent-rgb),.35)",
        }}
      >
        {sending ? "Sending…" : "Send message →"}
      </button>

      <p aria-live="polite" style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
        {sending
          ? "Sending your message…"
          : "I reply within a day. Prefer email? safijamil.dev@gmail.com"}
      </p>
    </form>
  );
}
