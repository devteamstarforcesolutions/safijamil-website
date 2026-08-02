"use client";

import { useEffect } from "react";

/**
 * Fades/slides in any [data-reveal] element the first time it scrolls
 * into view. Elements already on screen at mount stay visible as-is.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.9) {
        el.classList.add("is-hidden");
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
