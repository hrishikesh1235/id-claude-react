"use client";

import React, { ComponentPropsWithoutRef, ElementType, useRef } from "react";

export const PILL_VARIANTS = {
  dark: "bg-ink text-canvas hover:bg-brand hover:text-ink",
  green: "bg-brand text-ink hover:bg-brand-light",
  "outline-light": "border-[1.5px] border-ink/20 text-ink bg-transparent hover:border-brand-dark hover:text-brand-dark",
  "outline-dark": "border-[1.5px] border-canvas/25 text-canvas bg-transparent hover:border-brand hover:text-brand",
  white: "bg-white text-ink border-[1.5px] border-ink/15 hover:border-brand-dark hover:text-brand-dark",
  none: "",
} as const;

export const PILL_SIZES = {
  sm: "px-[20px] py-[10px] text-[14px]",
  md: "px-[26px] py-[13px] text-[15px]",
  lg: "px-[32px] py-[15px] text-[16px]",
  xl: "px-10 py-[17px] text-[16px]",
} as const;

type MagneticOwnProps<C extends ElementType> = {
  as?: C;
  variant?: keyof typeof PILL_VARIANTS;
  size?: keyof typeof PILL_SIZES;
  magnetic?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type MagneticProps<C extends ElementType> = MagneticOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof MagneticOwnProps<C>>;

export default function MagneticButton<C extends ElementType = "a">({
  as,
  variant = "none",
  size,
  magnetic = true,
  className = "",
  children,
  ...rest
}: MagneticProps<C>) {
  const Tag = (as || "a") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useRef<boolean | null>(null);

  const check = () => {
    if (reduced.current === null) {
      reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return reduced.current;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || check()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transition = "transform .15s ease-out";
    el.style.transform = `translate(${(dx * 0.28).toFixed(1)}px,${(dy * 0.4).toFixed(1)}px)`;
  };

  const onMouseLeave = () => {
    if (!magnetic || check()) return;
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
    el.style.transform = "translate(0,0)";
  };

  const variantClass = PILL_VARIANTS[variant];
  const sizeClass = size ? PILL_SIZES[size] : "";
  const base = variant !== "none" ? "inline-block rounded-full font-semibold transition-colors" : "";

  return (
    <Tag
      ref={ref}
      className={`${base} ${variantClass} ${sizeClass} ${className}`.trim()}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
