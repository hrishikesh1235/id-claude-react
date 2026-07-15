"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CalButton from "./CalButton";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { n: "01", label: "Services", href: "/services" },
  { n: "02", label: "Solutions", href: "/solutions" },
  { n: "03", label: "Work", href: "/#work" },
  { n: "04", label: "Process", href: "/process" },
  { n: "05", label: "About", href: "/about" },
  { n: "06", label: "Insights", href: "/insights" },
  { n: "07", label: "Contact", href: "/contact" },
];

const SCROLL_THRESHOLD = 400;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const workHref = pathname === "/" ? "#work" : "/#work";
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The banner's height isn't fixed (it wraps to 2 lines on narrow phones), so
  // the header below it can't just assume a hardcoded 34px offset.
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const setVar = () => {
      document.documentElement.style.setProperty("--banner-h", `${el.offsetHeight}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="fixed top-0 left-0 right-0 z-[101] flex min-h-[34px] items-center justify-center bg-brand px-4 py-1.5 text-center text-[12.5px] leading-snug font-semibold tracking-[.02em] text-ink"
      >
        🚧 This website is under construction — content and images are still being finalized.
      </div>

      <header
        style={{ top: "var(--banner-h, 34px)" }}
        className={`fixed left-0 right-0 z-100 flex items-center justify-between gap-2 border-b px-[clamp(14px,4vw,48px)] transition-[padding,background-color,backdrop-filter,border-color] duration-300 ease-out ${
          scrolled
            ? "border-ink/8 bg-canvas/82 py-[10px] backdrop-blur-[14px]"
            : "border-transparent bg-canvas/0 py-[20px] backdrop-blur-none"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-end gap-1 text-[19px] leading-none font-bold tracking-[-.01em] text-ink">
          <Image src="/images/logo-black-cropped.png" alt="Inside Dynamics" width={220} height={48} className="block h-12 w-auto" priority />
        </Link>
        <div className="flex items-center gap-2">
          <CalButton size="sm" className="!px-[clamp(12px,3vw,20px)] whitespace-nowrap !text-[13px] sm:!text-[14px]">
            Book a call
          </CalButton>
          <button
            type="button"
            data-menu-btn
            onClick={() => setOpen(true)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] border-ink/15 bg-white px-[clamp(10px,2.5vw,20px)] py-[10px] font-sans text-[13px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-brand-dark sm:text-[14px]"
          >
            Menu
            <span className="inline-flex flex-col gap-1">
              <span className="h-[2px] w-4 rounded-full bg-ink" />
              <span className="h-[2px] w-4 rounded-full bg-ink" />
            </span>
          </button>
        </div>
      </header>

      <div
        data-menu-overlay
        className="fixed inset-0 z-200 flex flex-col justify-center bg-ink px-[8vw] text-canvas transition-[clip-path] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          clipPath: open ? "circle(150% at 94% 44px)" : "circle(0% at 94% 44px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <Image
          src="/images/logo-white-cropped.png"
          alt="Inside Dynamics"
          width={200}
          height={46}
          className="absolute top-[18px] left-[48px] h-[46px] w-auto"
        />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-12 cursor-pointer rounded-full bg-brand px-[22px] py-[10px] font-sans text-[14px] font-semibold text-ink"
        >
          Close ✕
        </button>
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-baseline gap-[18px] text-[clamp(36px,5.5vw,62px)] font-bold tracking-[-.02em] text-canvas transition-colors hover:text-brand"
            >
              <span className="text-[15px] text-brand">{l.n}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-8 left-12 right-12 flex flex-wrap justify-between gap-3 text-[14px] text-canvas/55">
          <MagneticButton
            as="a"
            href="mailto:contact@insidedynamics.in"
            magnetic={false}
            className="text-canvas/70 transition-colors hover:text-brand"
          >
            contact@insidedynamics.in
          </MagneticButton>
          <span>Pune · Bengaluru · Gurugram, India</span>
        </div>
      </div>
    </>
  );
}
