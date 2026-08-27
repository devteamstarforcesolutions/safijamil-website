import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

/**
 * Only the GTM container loads from the page. GA4 (G-BEZK2MSB9E), Google Ads
 * (AW-11476762889) and Microsoft Clarity (xw96qvpavg) are all fired as tags
 * inside GTM — loading them here as well would double-count pageviews and
 * duplicate Clarity recordings.
 */
const GTM_ID = "GTM-N8RCXCCG";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const siteUrl = "https://safijamil.com";
const title = "Safi Jamil — Brand Strategist & Google Ads Specialist";
const description =
  "Brand strategist and Google Ads specialist in the PPC industry since 2018. Safi Jamil helps US-based e-commerce and service brands generate sales and leads through Google Ads and Meta campaigns, with full-funnel conversion tracking.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Google Ads specialist",
    "PPC expert",
    "performance marketing",
    "brand strategist",
    "Meta Ads",
    "Google Ads freelancer",
    "conversion tracking",
    "PPC campaign management",
    "Safi Jamil",
  ],
  authors: [{ name: "Safi Jamil", url: siteUrl }],
  creator: "Safi Jamil",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Safi Jamil",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/safi-jamil.jpeg",
        width: 1122,
        height: 1402,
        alt: "Safi Jamil — Brand Strategist & Google Ads Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/safi-jamil.jpeg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Safi Jamil",
  url: siteUrl,
  image: `${siteUrl}/images/safi-jamil.jpeg`,
  jobTitle: "Brand Strategist & Google Ads Specialist",
  description,
  email: "mailto:safijamil.dev@gmail.com",
  telephone: "+92 344 3047362",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Minhaj University Lahore",
  },
  sameAs: [
    "https://linkedin.com/in/safiullahjamil",
  ],
  knowsAbout: [
    "Google Ads",
    "Meta Ads",
    "PPC Campaign Management",
    "Conversion Tracking",
    "A/B Testing",
    "Brand Strategy",
    "Performance Marketing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Safi Jamil",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
      <head>
        {/* Google Tag Manager — next/script is the App Router equivalent of
            pasting the snippet in <head>; it loads once, before hydration
            completes, and survives client-side route changes. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
/>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
