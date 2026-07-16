"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
       * `sticky`, not `fixed` — the banner + nav occupy real space in normal
       * document flow, so page content is physically pushed below them and
       * can never render underneath. That also means no JS-measured height /
       * CSS-variable offset is needed anywhere: the browser lays this out
       * correctly on its own, on every viewport, even if the banner wraps to
       * 2 lines or the logo image fails to load.
       */}
      <div className="sticky top-0 z-100 flex flex-col">
        <div className="flex min-h-[34px] items-center justify-center bg-brand px-4 py-1.5 text-center text-[11.5px] leading-snug font-semibold tracking-[.02em] text-ink sm:text-[12.5px]">
          🚧 This website is under construction — content and images are still being finalized.
        </div>

        <header
          className={`flex items-center justify-between gap-2 border-b border-ink/8 bg-canvas/90 px-[clamp(14px,4vw,48px)] backdrop-blur-[14px] transition-[padding] duration-300 ease-out ${
            scrolled ? "py-[10px]" : "py-[14px] sm:py-[18px]"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-end gap-1 text-[19px] leading-none font-bold tracking-[-.01em] whitespace-nowrap text-ink">
            <Image
              src="/images/logo-black-cropped.png"
              alt="Inside Dynamics"
              width={220}
              height={48}
              className="block h-9 w-auto sm:h-12"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <div className="hidden min-[380px]:block">
              <CalButton size="sm" className="!px-[clamp(12px,3vw,20px)] whitespace-nowrap !text-[13px] sm:!text-[14px]">
                Book a call
              </CalButton>
            </div>
            <button
              type="button"
              data-menu-btn
              onClick={() => setOpen(true)}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] border-ink/15 bg-white px-[clamp(10px,2.5vw,20px)] py-[10px] font-sans text-[13px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-brand-dark sm:text-[14px]"
            >
              Menu
              <span className="inline-flex flex-col gap-1">
                <span className="h-[2px] w-4 rounded-full bg-ink" />
                <span className="h-[2px] w-4 rounded-full bg-ink" />
              </span>
            </button>
          </div>
        </header>
      </div>

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
