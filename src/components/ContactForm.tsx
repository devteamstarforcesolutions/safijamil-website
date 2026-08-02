"use client";

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

export default function ContactForm() {
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
    const email = (f.elements.namedItem("email") as HTMLInputElement).value;
    const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:safijamil.dev@gmail.com?subject=${encodeURIComponent(
      "Project inquiry from safijamil.com"
    )}&body=${body}`;
  };

  return (
    <form
      data-reveal=""
      className="contact-form-card"
      onSubmit={sendMail}
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
        <input
          name="name"
          required
          placeholder="Your name"
          className="field"
          style={fieldStyle}
        />
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
      <button
        type="submit"
        className="btn-primary"
        style={{
          padding: 15,
          background: "var(--accent)",
          color: "var(--on-accent)",
          fontWeight: 600,
          fontSize: 16,
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-ibm-plex-sans), sans-serif",
          boxShadow: "0 0 28px rgba(var(--accent-rgb),.35)",
        }}
      >
        Send message →
      </button>
    </form>
  );
}
