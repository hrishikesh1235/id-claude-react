export const EASE_OUT_QUART = "cubic-bezier(.22,1,.36,1)";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
