"use client";

import React, { useEffect, useRef } from "react";

const STRENGTH = 1.9;

export default function Parallax({
  y = 0,
  x = 0,
  className = "",
  style,
  children,
}: {
  y?: number;
  x?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const host = el.parentElement || el;
        const rect = host.getBoundingClientRect();
        const vh = window.innerHeight;
        const d = rect.top + rect.height / 2 - vh / 2;
        let t = "";
        if (y) t += `translateY(${(d * y * STRENGTH * -1).toFixed(1)}px) `;
        if (x) t += `translateX(${(d * x * STRENGTH * -1).toFixed(1)}px)`;
        el.style.transform = t;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y]);

  return (
    <div ref={ref} aria-hidden className={className} style={style}>
      {children}
    </div>
  );
}
