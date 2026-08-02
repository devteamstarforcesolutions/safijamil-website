import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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
    addressLocality: "Edmond",
    addressRegion: "Oklahoma",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Minhaj University Lahore",
  },
  sameAs: [
    "https://linkedin.com/in/safiullahjamil",
    "https://www.fiverr.com/safiullahjamil",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
