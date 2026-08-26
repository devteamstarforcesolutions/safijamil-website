import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
