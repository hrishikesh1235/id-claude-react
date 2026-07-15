"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.display = "none";
      return;
    }

    let tx = -9999;
    let ty = -9999;
    let gx = -9999;
    let gy = -9999;
    let raf = 0;

    const onMouse = (e: MouseEvent) => {
      if (gx < -5000) {
        gx = e.clientX;
        gy = e.clientY;
      }
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const loop = () => {
      gx += (tx - gx) * 0.09;
      gy += (ty - gy) * 0.09;
      el.style.transform = `translate(${(gx - 260).toFixed(1)}px,${(gy - 260).toFixed(1)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] h-[520px] w-[520px] rounded-full will-change-transform"
      style={{
        background: "radial-gradient(circle, rgba(88,233,92,.12) 0%, rgba(88,233,92,0) 60%)",
        transform: "translate(-9999px,-9999px)",
      }}
    />
  );
}
