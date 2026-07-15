import Image from "next/image";
import Link from "next/link";
import CalButton from "./CalButton";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
];

const SERVICES = [
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "UX Research", href: "/services/ux-research" },
  { label: "UX Consulting", href: "/services/ux-consulting" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-canvas/10 bg-ink px-12 pt-14 pb-10 text-canvas max-md:px-5">
      <div className="relative z-10 mx-auto mb-10 flex max-w-[1240px] flex-wrap justify-between gap-10">
        <div className="max-w-[280px]">
          <Image
            src="/images/logo-white-cropped.png"
            alt="Inside Dynamics"
            width={190}
            height={44}
            className="mb-4 block h-auto w-[180px]"
          />
          <p className="mb-5 text-[14px] leading-relaxed text-canvas/60">
            Design consultants for founders who don&apos;t have time to get design wrong.
          </p>
          <div className="mb-5">
            <div className="mb-2 text-[12px] font-bold tracking-[.12em] text-brand uppercase">Studios</div>
            <div className="text-[14.5px] text-canvas/70">Pune · Bengaluru · Gurugram</div>
          </div>
          <CalButton variant="green" size="sm">Book a call</CalButton>
        </div>
        <div className="flex flex-wrap gap-14">
          <div>
            <div className="mb-3.5 text-[12px] font-bold tracking-[.1em] text-canvas/40 uppercase">Pages</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {PAGES.map((p) => (
                <Link key={p.label} href={p.href} className="text-canvas/70 transition-colors hover:text-brand">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-[12px] font-bold tracking-[.1em] text-canvas/40 uppercase">Services</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {SERVICES.map((s) => (
                <Link key={s.label} href={s.href} className="text-canvas/70 transition-colors hover:text-brand">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-[12px] font-bold tracking-[.1em] text-canvas/40 uppercase">Connect</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <a href="mailto:contact@insidedynamics.in" className="text-canvas/70 transition-colors hover:text-brand">
                contact@insidedynamics.in
              </a>
              <a
                href="https://www.instagram.com/insidedynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-canvas/70 transition-colors hover:text-brand"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/insidedynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-canvas/70 transition-colors hover:text-brand"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1240px] border-t border-canvas/10 pt-6 text-[13px] text-canvas/45">
        © 2026 Inside Dynamics. All rights reserved. · Pune · Bengaluru · Gurugram, India
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-[6vw] flex justify-center overflow-hidden opacity-[0.07]">
        <Image src="/images/logo-white-cropped.png" alt="" width={1400} height={310} className="w-[110vw] max-w-none" />
      </div>
    </footer>
  );
}
