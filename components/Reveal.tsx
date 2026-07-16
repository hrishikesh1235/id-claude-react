"use client";

import React, { ComponentPropsWithoutRef, ElementType, useLayoutEffect, useRef } from "react";

type RevealOwnProps<C extends ElementType> = {
  as?: C;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
};

type RevealProps<C extends ElementType> = RevealOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof RevealOwnProps<C>>;

export default function Reveal<C extends ElementType = "div">({
  as,
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}: RevealProps<C>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  // The entrance animation is a CSS `@keyframes` (see .reveal in globals.css)
  // that autoplays on paint — no JS/hydration dependency, so it never gates
  // FCP/LCP the way a JS-triggered class-toggle would. This effect's only
  // job is to PAUSE that animation for elements genuinely below the fold
  // (before the browser paints it running, via useLayoutEffect) and resume
  // it once scrolled into view, so the scroll-reveal effect is preserved
  // for below-fold content without holding up above-fold content at all.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyOnScreen) return; // let the auto-playing animation run as-is

    el.style.animationPlayState = "paused";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          el.style.animationPlayState = "running";
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
