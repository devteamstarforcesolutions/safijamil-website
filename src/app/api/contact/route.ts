import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = "safijamil.dev@gmail.com";
const SUBJECT = "New enquiry from safijamil.com";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — real people never fill this
};

function fail(error: string, status = 400, detail?: string) {
  return NextResponse.json({ ok: false, error, ...(detail ? { detail } : {}) }, { status });
}

/** Quick config check: visit /api/contact in a browser. Never exposes the key itself. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    provider: process.env.RESEND_API_KEY
      ? "resend"
      : process.env.WEB3FORMS_ACCESS_KEY
        ? "web3forms"
        : "none",
    configured: Boolean(process.env.RESEND_API_KEY || process.env.WEB3FORMS_ACCESS_KEY),
  });
}

function buildBody(name: string, email: string, message: string) {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
    "",
    "—",
    "Sent from the contact form on safijamil.com",
  ].join("\n");
}

/** Web3Forms — no domain setup needed, just an access key. */
async function sendViaWeb3Forms(key: string, name: string, email: string, message: string) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Web3Forms is behind Cloudflare; a request with no browser-ish headers
      // is treated as a bot and rejected with 403.
      "User-Agent": "Mozilla/5.0 (compatible; safijamil.com contact form)",
      Origin: "https://www.safijamil.com",
      Referer: "https://www.safijamil.com/",
    },
    body: JSON.stringify({
      access_key: key,
      subject: SUBJECT,
      from_name: "safijamil.com contact form",
      replyto: email,
      name,
      email,
      message,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.success === false) {
    throw new Error(data?.message || `Web3Forms responded ${res.status}`);
  }
}

/** Resend — better deliverability, needs a verified sending domain. */
async function sendViaResend(key: string, name: string, email: string, message: string) {
  const from = process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [TO_EMAIL],
      reply_to: email,
      subject: SUBJECT,
      text: buildBody(name, email, message),
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 200)}`);
  }
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return fail("Something went wrong reading your message. Please try again.");
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const honeypot = String(payload.company ?? "").trim();

  // Bots fill hidden fields; accept silently so they don't retry.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return fail("Please fill in your name, email, and project details.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail("That email address doesn't look right — please check it.");
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return fail("That message is too long. Please shorten it or email me directly.");
  }

  const resendKey = process.env.RESEND_API_KEY;
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!resendKey && !web3formsKey) {
    return fail(
      "The contact form isn't connected yet. Please email safijamil.dev@gmail.com directly.",
      503
    );
  }

  try {
    if (resendKey) {
      await sendViaResend(resendKey, name, email, message);
    } else {
      await sendViaWeb3Forms(web3formsKey as string, name, email, message);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return fail(
      "Your message couldn't be sent right now. Please email safijamil.dev@gmail.com directly.",
      502,
      err instanceof Error ? err.message : String(err)
    );
  }
}
