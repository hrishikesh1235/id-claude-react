"use client";

import React, { ComponentPropsWithoutRef, ElementType, useRef } from "react";

type TiltOwnProps<C extends ElementType> = {
  as?: C;
  strength?: number;
  className?: string;
  children?: React.ReactNode;
};

type TiltProps<C extends ElementType> = TiltOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof TiltOwnProps<C>>;

export default function TiltCard<C extends ElementType = "div">({
  as,
  strength = 9,
  className = "",
  children,
  ...rest
}: TiltProps<C>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useRef<boolean | null>(null);

  const check = () => {
    if (reduced.current === null) {
      reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return reduced.current;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (check()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform .12s ease-out";
    el.style.transform = `perspective(900px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg) scale(1.02)`;
    el.style.zIndex = "5";
  };

  const onMouseLeave = () => {
    if (check()) return;
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.zIndex = "";
  };

  return (
    <Tag ref={ref} className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} {...rest}>
      {children}
    </Tag>
  );
}
