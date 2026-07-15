"use client";

import React, { ComponentPropsWithoutRef, ElementType, useEffect, useRef } from "react";

type StatCounterOwnProps<C extends ElementType> = {
  as?: C;
  value: string;
  className?: string;
};

type StatCounterProps<C extends ElementType> = StatCounterOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof StatCounterOwnProps<C>>;

export default function StatCounter<C extends ElementType = "div">({
  as,
  value,
  className = "",
  ...rest
}: StatCounterProps<C>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)([\s\S]*)$/);
    if (!m || reduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const target = parseFloat(m[2]);
          const decimals = (m[2].split(".")[1] || "").length;
          const t0 = performance.now();
          const dur = 1500;
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = m[1] + (target * e).toFixed(decimals) + m[3];
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {value}
    </Tag>
  );
}
