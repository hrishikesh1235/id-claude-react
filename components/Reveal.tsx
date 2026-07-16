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
  children,
  ...rest
}: RevealProps<C>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  // Content is visible by default (see .reveal in globals.css) so it's never
  // hidden before JS hydrates. This effect only ever HIDES-then-reveals
  // elements that are genuinely below the fold at mount — anything already
  // on screen is left alone, avoiding both a flash of invisible content and
  // a flash of "wrong" state once JS catches up.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyOnScreen) return;

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          el.classList.remove("reveal-pending");
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
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
