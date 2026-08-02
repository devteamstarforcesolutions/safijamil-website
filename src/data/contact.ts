export const EMAIL = "safijamil.dev@gmail.com";

/** International format, digits only — required by wa.me links. */
export const WHATSAPP_NUMBER = "923443047362";
export const PHONE_DISPLAY = "+92 344 3047362";

const WHATSAPP_GREETING =
  "Hi Safi, I found your website and I'd like to discuss Google Ads for my business.";

/** Opens WhatsApp (app or web) with the greeting pre-filled — no manual typing. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_GREETING
)}`;
