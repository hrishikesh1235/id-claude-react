"use client";

import { useEffect, useRef, useState } from "react";

const QUOTES: [string, string][] = [
  ['"They think like co-founders, not vendors."', "LoansJagat"],
  ['"Every design decision came backed by research."', "ModeAI"],
  ['"They understood our mission before our brief."', "Vardhishnu"],
  ['"The audit alone paid for the whole project."', "Craftline"],
];

export default function QuoteRotator() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % QUOTES.length);
        setVisible(true);
      }, 430);
    }, 4200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const [text, author] = QUOTES[i];

  return (
    <>
      <div
        className="text-[22px] leading-[1.35] font-semibold transition-all duration-400 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
      >
        {text}
      </div>
      <div
        className="text-[13px] text-ink/55 transition-opacity duration-400 ease-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {author}
      </div>
    </>
  );
}
