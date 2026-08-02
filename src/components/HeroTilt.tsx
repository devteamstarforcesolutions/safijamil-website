"use client";

import { useEffect, useRef } from "react";

export default function HeroTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
    >
      {children}
    </div>
  );
}
