import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Old site had a /portfolio page — send it to the current equivalent.
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/case-studies",
        permanent: true,
      },
      // Old site had a /free-ppc-audit page — send it to the contact section.
      {
        source: "/free-ppc-audit",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/free-ppc-audit/",
        destination: "/#contact",
        permanent: true,
      },
      // Old contact/about URLs — send to the current homepage sections.
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact-me",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact-me/",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/about-me/",
        destination: "/#about",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply to every route
        source: "/:path*",
        headers: [
          {
            // Forces HTTPS for 2 years, including subdomains — fixes "Use a strong HSTS policy"
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Prevents the site being embedded in an <iframe> elsewhere — fixes "Mitigate clickjacking with XFO"
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Stops browsers guessing content types — general hardening, low risk
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Isolates this origin from cross-origin popups/openers — fixes "Ensure proper origin isolation with COOP"
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            // Controls how much referrer info is sent to other sites
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
