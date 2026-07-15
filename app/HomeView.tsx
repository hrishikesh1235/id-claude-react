"use client";

import Image from "next/image";
import Link from "next/link";
import CalButton from "@/components/CalButton";
import Marquee from "@/components/Marquee";
import MagneticButton from "@/components/MagneticButton";
import Parallax from "@/components/Parallax";
import QuoteRotator from "@/components/QuoteRotator";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";

const MARQUEE_ITEMS = [
  "Brand Strategy",
  "UX Research",
  "Product Design",
  "Web Engineering",
  "Growth Marketing",
  "Design Audits",
];

const SERVICES = [
  {
    n: "01",
    title: "Design Strategy Consulting",
    body: "Brand and UX audits, competitive positioning, and design roadmaps that tell you exactly where to invest.",
    variant: "brand" as const,
  },
  {
    n: "02",
    title: "Brand Identity",
    body: "Identity systems built to scale — logo, voice, and visual language grounded in who your customers are.",
    variant: "white" as const,
  },
  {
    n: "03",
    title: "Product & UX Design",
    body: "Research-driven websites and product interfaces — measured against conversion, not opinions.",
    variant: "white" as const,
  },
  {
    n: "04",
    title: "Build & Grow",
    body: "Engineering in Next.js plus growth marketing — designs that ship fast and keep compounding.",
    variant: "white" as const,
  },
];

const PROCESS_STEPS = [
  { step: "Step 1", title: "Discover", body: "A free consultation call to understand your business, market, and goals.", meta: "~30 minutes · no cost", dark: true },
  { step: "Step 2", title: "Diagnose", body: "We audit your brand, site, and funnel — and show you exactly what's leaking.", meta: "~1 week · written audit report" },
  { step: "Step 3", title: "Design", body: "Prototypes first. You see and test the direction before we commit to build.", meta: "2–4 weeks · clickable prototype" },
  { step: "Step 4", title: "Build", body: "Designed in Figma, delivered in Next.js — tested, responsive, and fast.", meta: "3–6 weeks · dev-ready handoff" },
  { step: "Step 5", title: "Grow", body: "Post-launch we monitor, market, and iterate — growth is the deliverable.", meta: "Ongoing · monthly retainer, optional", tint: true },
];

const TRUST = [
  { icon: "🔒", title: "We sign an NDA first", body: "We value startup privacy. Before you tell us a single thing about your idea, we put a non-disclosure agreement on the table — signed by us, for you.", dark: true },
  { icon: "©", title: "You own every design", body: "Our contract is explicit: we hold zero rights over the work. Every file, every source, every asset — full ownership transfers to you, always." },
  { icon: "↩", title: "Walk away whenever you want", body: "No long lock-in contracts. If a sprint or retainer isn't working for you, you keep everything delivered so far and we part ways — no penalty, no hard feelings.", dark: true },
];

const ABOUT_CARDS = [
  { icon: "🔎", title: "Senior eyes only", body: "No juniors, no hand-offs — the person you talk to is the person who does the work.", dark: true },
  { icon: "🤝", title: "No account managers", body: "One point of contact throughout — nothing gets lost translating between you and the team." },
  { icon: "©", title: "Ownership is yours", body: "Every file, every source, every asset — we hold zero rights over the work, always.", brand: true },
  { icon: "◇", title: "Transparent, always", body: "Open files, weekly demos, honest reporting — you see everything we see, as it happens." },
];

const INSIGHTS = [
  { href: "/insights/ux-audit-warning-signs", tag: "UX Audit", read: "6 min read", title: "5 warning signs your startup needs a UX audit" },
  { href: "/insights/saas-website-conversion", tag: "Website Design", read: "7 min read", title: "SaaS website design that actually converts" },
  { href: "/insights/ai-ux-design-principles", tag: "AI Technology", read: "8 min read", title: "Designing AI features founders can trust", dark: true },
];

const FAQS = [
  { q: "How long does a typical engagement take?", a: "A design sprint runs about four weeks, start to a clickable prototype. Brand and full product builds usually run 6–10 weeks depending on scope — we scope this together on the first call." },
  { q: "Do you only design, or do you build too?", a: "Both. We hand off dev-ready Figma files if your engineers take it from there, or our team ships it in Next.js if you'd rather not manage a build." },
  { q: "We already have an in-house design team — how do you fit in?", a: "Most of our clients do. We usually come in for a focused audit, a specific sprint, or to unblock a backlog — then hand our process to your team so they can keep running it without us." },
  { q: "Who owns the designs and code after we're done?", a: "You do, fully. Figma files, source code, brand assets — everything transfers to you at handoff. We're happy to sign an NDA before we start." },
  { q: "How is this different from a regular design agency?", a: "We start every engagement as consultants, not order-takers — diagnosing what's actually costing you growth before we touch a pixel. Every recommendation is tied to a business metric, not a trend." },
  { q: "What happens after launch?", a: "We stay on to monitor how the design performs and iterate with you — growth is the deliverable, not just the file. Many clients keep us on a light monthly retainer for this reason." },
];

export default function HomeView() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section id="hero" className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pt-[clamp(110px,22vw,150px)] pb-[clamp(50px,8vw,90px)]">
        <Parallax
          y={-0.12}
          className="pointer-events-none absolute -top-[160px] -right-[140px] h-[560px] w-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,233,92,.22) 0%, rgba(88,233,92,0) 65%)" }}
        />
        <Parallax
          y={0.08}
          className="pointer-events-none absolute -bottom-[100px] -left-[120px] h-[440px] w-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,233,92,.16) 0%, rgba(88,233,92,0) 65%)" }}
        />
        <Parallax
          y={-0.07}
          className="pointer-events-none absolute top-[20%] left-[8%] h-4 w-4 animate-float-bob rounded-full bg-brand"
          style={{ boxShadow: "0 0 20px rgba(88,233,92,.8)" }}
        />
        <Parallax y={0.05} className="pointer-events-none absolute top-[26%] right-[10%] h-[90px] w-[90px]">
          <div className="h-full w-full animate-spin-slow rounded-full border-[1.5px] border-dashed border-brand-dark/50" />
        </Parallax>

        <div className="relative mx-auto w-full max-w-[1240px] text-center">
          <h1 className="mx-auto mb-6 max-w-[1000px] text-[clamp(44px,6.4vw,92px)] leading-[1.04] font-bold tracking-[-.03em]">
            <Reveal as="span" delay={0} className="inline-block">Design</Reveal>{" "}
            <Reveal as="span" delay={90} className="inline-block">by</Reveal>{" "}
            <Reveal as="span" delay={180} className="relative inline-block rounded-[18px] px-[26px] pt-0.5 pb-1.5" style={{ transform: "rotate(-1.2deg)", background: "linear-gradient(#58e95c,#58e95c) left center no-repeat", backgroundSize: "0% 100%", animation: "markerSweep .7s cubic-bezier(.65,0,.35,1) .85s forwards" }}>
              <span className="inline-block font-display font-bold" style={{ clipPath: "inset(0 100% 0 0)", animation: "writeReveal 1s cubic-bezier(.65,0,.35,1) 1.15s forwards" }}>humans</span>
              <span className="absolute -top-3.5 -right-1.5 text-xl text-ink opacity-0" style={{ animation: "sparkPop .7s ease-out 2.05s forwards" }}>✦</span>
              <span className="absolute -bottom-2.5 right-2.5 text-[13px] text-ink opacity-0" style={{ animation: "sparkPop .6s ease-out 2.2s forwards" }}>✦</span>
              <span className="absolute top-0.5 -left-2.5 text-sm text-ink opacity-0" style={{ animation: "sparkPop .65s ease-out 2.3s forwards" }}>✦</span>
            </Reveal>
            <br />
            <Reveal as="span" delay={420} className="inline-block">for</Reveal>{" "}
            <Reveal as="span" delay={510} className="inline-block">humans.</Reveal>
          </h1>

          <Reveal as="p" delay={700} className="mx-auto mb-9 max-w-[540px] text-[17px] leading-[1.6] text-ink/60">
            A design consultancy that diagnoses what&apos;s holding your brand back — then designs, builds, and markets the way forward.
          </Reveal>

          <Reveal delay={820} className="mb-16 flex flex-wrap justify-center gap-3.5">
            <span className="relative inline-block">
              <span className="pointer-events-none absolute right-0 bottom-[calc(100%-12px)] left-0 z-0 h-16 overflow-hidden">
                <span className="absolute bottom-[-60px] left-1/2 h-[58px] w-[54px] animate-peek" style={{ marginLeft: "-27px" }}>
                  <span className="absolute top-0 left-[7px] h-10 w-10 rounded-full border-[2.5px] border-ink bg-brand box-border">
                    <span className="absolute top-[14px] left-2 h-[7px] w-[5px] rounded-[3px] bg-ink" />
                    <span className="absolute top-[14px] right-2 h-[7px] w-[5px] rounded-[3px] bg-ink" />
                    <span className="absolute top-[25px] left-[15px] h-[3px] w-[6px] rounded-b-[4px] bg-ink" />
                  </span>
                  <span className="absolute bottom-1.5 left-0 h-3.5 w-3.5 rounded-full border-[2.5px] border-ink bg-brand box-border" />
                  <span className="absolute right-0 bottom-1.5 h-3.5 w-3.5 rounded-full border-[2.5px] border-ink bg-brand box-border" />
                </span>
              </span>
              <CalButton variant="dark" size="lg" className="relative z-10">
                Book a call
              </CalButton>
            </span>
            <MagneticButton as="a" href="#work" variant="outline-light" size="lg">
              See our work
            </MagneticButton>
          </Reveal>

          {/* Bento row */}
          <div className="mt-8 flex flex-wrap items-stretch gap-4 text-left">
            <Reveal as={Link} href="/contact" delay={900} className="min-w-0 flex-1 basis-[220px]">
              <TiltCard className="box-border flex h-full min-h-[clamp(160px,40vw,240px)] flex-col justify-between gap-[18px] rounded-[22px] border-[1.5px] border-brand bg-white p-6 text-ink">
                <div className="text-[13px] font-semibold text-brand-dark">Free · 30 minutes</div>
                <div>
                  <div className="mb-3.5 text-xl leading-[1.3] font-semibold">Get a free audit of your current website.</div>
                  <div className="inline-flex items-center gap-2 text-[14px] font-semibold">
                    Book a call <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-brand">→</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={980} className="min-w-0 flex-1 basis-[190px]">
              <TiltCard className="box-border flex h-full min-h-[clamp(160px,40vw,240px)] flex-col justify-between gap-[18px] rounded-[22px] bg-brand p-6">
                <div className="text-[13px] font-semibold text-ink/65">Projects delivered</div>
                <div>
                  <StatCounter value="100+" className="text-[52px] font-bold tracking-[-.03em]" />
                  <div className="text-[13px] text-ink/65">across 8 industries</div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={1060} className="min-w-0 flex-1 basis-[190px]">
              <TiltCard className="box-border flex h-full min-h-[clamp(160px,40vw,240px)] flex-col justify-between gap-[18px] rounded-[22px] border border-ink/7 bg-white p-6">
                <div className="text-[13px] font-semibold text-ink/50">Clients who return</div>
                <div>
                  <StatCounter value="94%" className="text-[52px] font-bold tracking-[-.03em] text-brand-dark" />
                  <div className="text-[13px] text-ink/50">come back for more</div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={1140} className="min-w-0 flex-1 basis-[220px]">
              <TiltCard className="box-border flex h-full min-h-[clamp(160px,40vw,240px)] flex-col justify-between gap-[18px] rounded-[22px] bg-tint p-6">
                <QuoteRotator />
              </TiltCard>
            </Reveal>

            <Reveal delay={1220} className="min-w-0 flex-1 basis-[190px]">
              <TiltCard className="box-border flex h-full min-h-[clamp(160px,40vw,240px)] flex-col justify-between gap-[18px] rounded-[22px] bg-ink p-6 text-canvas">
                <div>
                  <div className="text-[40px] font-bold tracking-[-.02em]">7+</div>
                  <div className="text-[13px] text-canvas/60">years in the field</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-ink" style={{ transform: "rotate(-2deg)" }}>Branding</span>
                  <span className="rounded-full bg-canvas/14 px-3 py-1.5 text-xs" style={{ transform: "rotate(1.5deg)" }}>UI/UX</span>
                  <span className="rounded-full bg-canvas/14 px-3 py-1.5 text-xs" style={{ transform: "rotate(-1deg)" }}>Web</span>
                  <span className="rounded-full bg-canvas/14 px-3 py-1.5 text-xs" style={{ transform: "rotate(2deg)" }}>Growth</span>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* ======= SERVICES ======= */}
      <section id="services" className="relative overflow-hidden bg-ink px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)] pb-[clamp(60px,10vw,100px)] text-canvas">
        <Parallax
          y={0.07}
          x={0.16}
          className="pointer-events-none absolute top-[30px] -right-[60px] text-[190px] font-bold tracking-[-.04em] whitespace-nowrap text-canvas/3"
        >
          CONSULT
        </Parallax>
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto mb-2 max-w-[760px] text-center">
            <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand uppercase">What we do</Reveal>
            <Reveal as="h2" delay={100} className="mb-[22px] text-[clamp(34px,4.6vw,60px)] font-bold tracking-[-.02em]">
              Consulting first.{" "}
              <span className="inline-block rounded-xl bg-brand px-[18px] pt-0.5 pb-1.5 font-display font-bold text-ink" style={{ transform: "rotate(-1deg)" }}>
                Pixels
              </span>{" "}
              second.
            </Reveal>
            <Reveal as="p" delay={200} className="mx-auto mb-9 max-w-[480px] text-[16px] leading-[1.6] text-canvas/60">
              Every engagement starts with your business goals — not a template. We advise, then we execute.
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap justify-center gap-3.5">
              <MagneticButton as={Link} href="/services" variant="green" size="md">Explore all services</MagneticButton>
              <CalButton variant="outline-dark" size="md">Book a call</CalButton>
            </Reveal>
          </div>

          <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <TiltCard
                  className={`box-border rounded-[22px] p-7 px-[28px] ${s.variant === "brand" ? "bg-brand" : "bg-white"}`}
                >
                  <div className={`mb-[22px] flex h-11 w-11 items-center justify-center rounded-[14px] text-[15px] font-bold ${s.variant === "brand" ? "bg-ink text-brand" : "bg-tint text-brand-dark"}`}>
                    {s.n}
                  </div>
                  <h3 className="mb-3 text-[21px] font-semibold text-ink">{s.title}</h3>
                  <p className={`m-0 text-[14.5px] leading-[1.6] ${s.variant === "brand" ? "text-ink/65" : "text-ink/55"}`}>{s.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= SOLUTIONS ======= */}
      <section id="solutions" className="relative overflow-hidden px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Solutions</Reveal>
          <Reveal as="h2" delay={100} className="mb-14 max-w-[820px] text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-.02em]">
            Built for where your business is{" "}
            <span className="inline-block rounded-xl bg-brand px-[18px] pt-0.5 pb-1.5 font-display font-bold text-ink" style={{ transform: "rotate(-1deg)" }}>
              right now.
            </span>
          </Reveal>

          <div className="flex flex-wrap gap-5">
            <Reveal className="min-w-0 flex-[1_1_380px]">
              <TiltCard className="box-border flex h-full flex-col gap-5.5 rounded-[26px] bg-ink p-[clamp(30px,5vw,48px)] text-canvas">
                <span className="self-start rounded-full bg-brand/16 px-3.5 py-1.5 text-xs font-semibold tracking-[.06em] text-brand uppercase">For startups</span>
                <h3 className="text-[clamp(24px,2.6vw,32px)] font-bold">Startup Solutions</h3>
                <p className="text-[15.5px] leading-relaxed text-canvas/65">
                  You need to look credible, convert early users, and ship fast — before the runway runs out. We take you from idea to a launched product: brand, MVP design, website, and the first growth loop, all with one senior team.
                </p>
                <div className="flex flex-col gap-3 text-[14.5px] font-medium">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand">✓</span>Brand + MVP design sprint in 4 weeks
                  </div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand">✓</span>Investor- and launch-ready website
                  </div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand">✓</span>Founder-friendly pricing, no lock-in
                  </div>
                </div>
                <CalButton variant="green" size="md" className="mt-auto self-start">
                  Scope my startup →
                </CalButton>
              </TiltCard>
            </Reveal>

            <Reveal delay={150} className="min-w-0 flex-[1_1_380px]">
              <TiltCard className="box-border flex h-full flex-col gap-5.5 rounded-[26px] border border-ink/7 bg-white p-[clamp(30px,5vw,48px)]">
                <span className="self-start rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold tracking-[.06em] text-brand-dark uppercase">For enterprises</span>
                <h3 className="text-[clamp(24px,2.6vw,32px)] font-bold">Enterprise Solutions</h3>
                <p className="text-[15.5px] leading-relaxed text-ink/60">
                  Your product works — but legacy UX, inconsistent design, and slow handoffs are costing you retention and team velocity. We audit, systemize, and modernize without disrupting what already ships revenue.
                </p>
                <div className="flex flex-col gap-3 text-[14.5px] font-medium text-ink">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand-dark">✓</span>UX audits with a prioritized fix roadmap
                  </div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand-dark">✓</span>Design systems your teams build on
                  </div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-brand-dark">✓</span>NDA-first, works with in-house teams
                  </div>
                </div>
                <CalButton variant="dark" size="md" className="mt-auto self-start">
                  Talk to a consultant →
                </CalButton>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======= CASE STUDIES ======= */}
      <section id="work" className="relative overflow-hidden bg-white px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal as="p" className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Our latest works</Reveal>
              <Reveal as="h2" delay={100} className="text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-.02em]">Proof, not promises.</Reveal>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-wrap items-stretch overflow-hidden rounded-[26px] bg-canvas">
              <div className="flex min-w-0 flex-1 basis-[380px] flex-col justify-center p-[clamp(28px,6vw,48px)]">
                <div className="mb-[18px] flex items-center gap-3.5">
                  <span className="text-[14px] font-bold text-ink/35">01</span>
                  <span className="rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold tracking-[.06em] text-brand-dark uppercase">Fintech · Web design + build</span>
                </div>
                <h3 className="mb-3.5 text-[30px] font-semibold">LoansJagat</h3>
                <p className="mb-6 max-w-[440px] text-[15.5px] leading-[1.65] text-ink/60">
                  India&apos;s first loan consolidation marketplace. We designed a trust-first experience that turns a stressful money moment into a clear 3-step journey.
                </p>
                <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
                  <div>
                    <StatCounter value="10 Lac+" className="text-[32px] font-bold text-brand-dark" />
                    <div className="text-[13px] text-ink/50">customers served</div>
                  </div>
                  <div>
                    <StatCounter value="₹2000 Cr+" className="text-[32px] font-bold text-brand-dark" />
                    <div className="text-[13px] text-ink/50">loans disbursed</div>
                  </div>
                  <a href="https://www.loansjagat.com/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-brand-dark">Visit site ↗</a>
                </div>
              </div>
              <TiltCard className="relative min-h-[340px] flex-1 basis-[320px] box-border p-5">
                <Image
                  src="/images/case-loansjagat.png"
                  alt="LoansJagat — website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-[18px] object-cover object-top"
                />
              </TiltCard>
            </Reveal>

            <Reveal className="flex flex-wrap-reverse items-stretch overflow-hidden rounded-[26px] border border-ink/7 bg-white box-border text-ink">
              <TiltCard className="relative min-h-[340px] flex-1 basis-[320px] box-border p-5">
                <div
                  className="absolute inset-5 flex items-center justify-center gap-6 overflow-hidden rounded-[18px]"
                  style={{ background: "radial-gradient(circle at 50% 40%, #ffffff 0%, #e4f9e5 60%, #c9f3cc 100%)" }}
                >
                  <Image
                    src="/images/modeai-phone-1.png"
                    alt="ModeAI — home screen"
                    width={220}
                    height={460}
                    className="h-[78%] max-h-[78%] w-auto max-w-[40%] rounded-[22px] object-contain"
                    style={{ transform: "rotate(-4deg) translateY(-8px)", boxShadow: "0 24px 50px rgba(16,18,16,.28), 0 0 0 1px rgba(16,18,16,.06)" }}
                  />
                  <Image
                    src="/images/modeai-phone-2.png"
                    alt="ModeAI — chat screen"
                    width={220}
                    height={460}
                    className="h-[78%] max-h-[78%] w-auto max-w-[40%] rounded-[18px] object-contain"
                    style={{ transform: "rotate(3deg) translateY(14px)", boxShadow: "0 24px 50px rgba(16,18,16,.28), 0 0 0 1px rgba(16,18,16,.06)" }}
                  />
                </div>
              </TiltCard>
              <div className="min-w-0 flex-1 basis-[380px] p-[clamp(28px,6vw,48px)]">
                <div className="mb-[18px] flex items-center gap-3.5">
                  <span className="text-[14px] font-bold text-ink/35">02</span>
                  <span className="rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold tracking-[.06em] text-brand-dark uppercase">AI · Product design</span>
                </div>
                <h3 className="mb-3.5 text-[30px] font-semibold">ModeAI</h3>
                <a href="https://www.producthunt.com/products/modeai" target="_blank" rel="noopener noreferrer" className="mb-[18px] inline-block">
                  <Image src="/images/modeai-producthunt.png" alt="Featured on Product Hunt" width={160} height={40} className="block h-10 w-auto rounded-lg" />
                </a>
                <p className="mb-6 max-w-[440px] text-[15.5px] leading-[1.65] text-ink/60">
                  An all-in-one AI workspace for iOS — chat, image and video generation, and task automation. We designed an interface that keeps four powerful tools feeling like one calm app.
                </p>
                <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
                  <div>
                    <div className="text-[32px] font-bold text-brand-dark">4-in-1</div>
                    <div className="text-[13px] text-ink/50">chat · images · video · agents</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold text-brand-dark">iOS</div>
                    <div className="text-[13px] text-ink/50">native app experience</div>
                  </div>
                  <a href="https://www.modeai.io/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-brand-dark">Visit site ↗</a>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex flex-wrap items-stretch overflow-hidden rounded-[26px] bg-canvas">
              <div className="min-w-0 flex-1 basis-[380px] p-[clamp(28px,6vw,48px)]">
                <div className="mb-[18px] flex items-center gap-3.5">
                  <span className="text-[14px] font-bold text-ink/35">03</span>
                  <span className="rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold tracking-[.06em] text-brand-dark uppercase">Non-profit · Web design</span>
                </div>
                <h3 className="mb-3.5 text-[30px] font-semibold">Vardhishnu</h3>
                <p className="mb-6 max-w-[440px] text-[15.5px] leading-[1.65] text-ink/60">
                  A Jalgaon NGO running Anandghar learning centers for vulnerable children. We designed a website that turns their on-ground impact into a story donors can feel — and act on.
                </p>
                <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
                  <div>
                    <div className="text-[32px] font-bold text-brand-dark">Anandghar</div>
                    <div className="text-[13px] text-ink/50">community learning centers</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold text-brand-dark">Jalgaon</div>
                    <div className="text-[13px] text-ink/50">Maharashtra, India</div>
                  </div>
                  <a href="https://vardhishnu.org/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-brand-dark">Visit site ↗</a>
                </div>
              </div>
              <TiltCard className="relative min-h-[340px] flex-1 basis-[320px] box-border p-5">
                <Image
                  src="/images/vardhishnu-website.png"
                  alt="Vardhishnu — website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-[18px] object-cover object-top"
                />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======= PROCESS ======= */}
      <section id="process" className="relative overflow-hidden px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <Parallax
          y={0.06}
          x={-0.14}
          className="pointer-events-none absolute top-[50px] -left-10 text-[190px] font-bold tracking-[-.04em] whitespace-nowrap text-ink/3.5"
        >
          PROCESS
        </Parallax>
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">How we work</Reveal>
          <Reveal as="h2" delay={100} className="mb-14 max-w-[720px] text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-.02em]">
            A consultant&apos;s process, not a factory line.
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-stretch gap-[18px]">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 120} className="h-full">
                <TiltCard
                  className={`box-border flex h-full min-h-[230px] flex-col justify-between rounded-[22px] p-[30px] px-[26px] ${
                    s.dark ? "bg-ink text-canvas" : s.tint ? "bg-tint" : "border border-ink/7 bg-white"
                  }`}
                >
                  <div>
                    <div className={`mb-3.5 text-[13px] font-semibold ${s.dark ? "text-brand" : "text-brand-dark"}`}>{s.step}</div>
                    <h3 className="mb-2.5 text-[19px] font-semibold">{s.title}</h3>
                    <p className={`m-0 text-[14px] leading-[1.6] ${s.dark ? "text-canvas/60" : "text-ink/55"}`}>{s.body}</p>
                  </div>
                  <div className={`mt-[18px] border-t pt-3.5 text-[12.5px] font-semibold ${s.dark ? "border-canvas/15 text-brand/85" : "border-ink/8 text-brand-dark"}`}>
                    {s.meta}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Trust */}
          <div className="mt-20">
            <Reveal as="p" className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Built on trust</Reveal>
            <Reveal as="h3" delay={100} className="mb-10 max-w-[640px] text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
              Your idea stays yours. All of it.
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-[18px]">
              {TRUST.map((t, i) => (
                <Reveal key={t.title} delay={i * 120} className="h-full">
                  <TiltCard
                    className={`box-border flex h-full min-h-[240px] flex-col justify-between rounded-[22px] p-8 px-[32px] ${
                      t.dark ? "bg-ink text-canvas" : "border border-ink/7 bg-white"
                    }`}
                  >
                    <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[14px] text-lg ${t.dark ? "bg-brand/15 text-brand" : "bg-tint text-brand-dark"}`}>
                      {t.icon}
                    </div>
                    <div>
                      <h4 className="mb-2.5 text-xl font-semibold">{t.title}</h4>
                      <p className={`m-0 text-[14.5px] leading-[1.65] ${t.dark ? "text-canvas/60" : "text-ink/55"}`}>{t.body}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
              <Reveal delay={240} className="relative box-border h-full min-h-[240px] overflow-hidden rounded-[22px]">
                <div
                  className="pointer-events-none absolute h-[190px] w-[190px] rounded-full opacity-85 blur-[6px]"
                  style={{ top: "-40px", left: "-30px", background: "#58e95c" }}
                />
                <div
                  className="pointer-events-none absolute h-[210px] w-[210px] rounded-full opacity-55 blur-[20px]"
                  style={{ bottom: "-50px", right: "-20px", background: "#2ec73f" }}
                />
                <div
                  className="pointer-events-none absolute h-[110px] w-[110px] rounded-full opacity-70 blur-[14px]"
                  style={{ top: "40%", left: "45%", background: "#8df290" }}
                />
                <div
                  className="box-border flex h-full flex-col justify-between rounded-[22px] border p-8 px-[32px]"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,.32)",
                    backdropFilter: "blur(16px)",
                    borderColor: "rgba(255,255,255,.7)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[22px]"
                    style={{ background: "linear-gradient(rgba(255,255,255,.45), rgba(255,255,255,0))" }}
                  />
                  <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/80 bg-white/55 text-lg text-ink">◇</div>
                  <div className="relative">
                    <h4 className="mb-2.5 text-xl font-semibold">Glass-like transparency</h4>
                    <p className="m-0 text-[14.5px] leading-[1.65] text-ink/70">Open files, weekly demos, honest reporting — you see everything we see, exactly as it happens. Nothing behind frosted doors.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======= ABOUT ======= */}
      <section id="about" className="relative overflow-hidden bg-white px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-wrap items-start gap-x-16 gap-y-10">
            <Reveal className="min-w-0 flex-1 basis-[320px]">
              <p className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">About us</p>
              <h2 className="text-[clamp(34px,4.2vw,52px)] font-bold tracking-[-.02em]">
                A small team that thinks like your{" "}
                <span className="inline-block rounded-xl bg-brand px-4 pt-0.5 pb-1.5 font-display font-bold" style={{ transform: "rotate(-1deg)" }}>
                  co-founder.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={150} className="min-w-0 flex-1 basis-[320px]">
              <p className="mb-[18px] text-[16.5px] leading-[1.7] text-ink/65">
                We&apos;re a design and engineering consultancy based in Pune. We stay deliberately small so every project gets senior eyes — no hand-offs to juniors, no account managers in between.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.7] text-ink/65">
                Our clients treat us less like a vendor and more like a design partner on retainer for growth.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
            {ABOUT_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <TiltCard
                  className={`box-border flex min-h-[210px] flex-col justify-between rounded-[22px] p-[30px] px-[26px] ${
                    c.dark ? "bg-ink text-canvas" : c.brand ? "bg-brand" : "border border-ink/7 bg-white"
                  }`}
                >
                  <div className={`flex h-[42px] w-[42px] items-center justify-center rounded-xl text-[19px] ${c.dark ? "bg-brand/15 text-brand" : c.brand ? "bg-ink/10 text-ink" : "bg-tint text-brand-dark"}`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="mb-2 text-[17px] font-semibold">{c.title}</div>
                    <div className={`text-[13.5px] leading-[1.6] ${c.dark ? "text-canvas/60" : c.brand ? "text-ink/70" : "text-ink/55"}`}>{c.body}</div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= LATEST INSIGHTS ======= */}
      <section className="relative overflow-hidden bg-white px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,110px)]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal as="p" className="mb-3.5 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Insights</Reveal>
              <Reveal as="h2" delay={100} className="text-[clamp(30px,4vw,48px)] font-bold tracking-[-.02em]">Notes on design, for founders.</Reveal>
            </div>
            <Reveal as={Link} href="/insights" delay={150} className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-brand-dark">
              See all articles →
            </Reveal>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {INSIGHTS.map((a, i) => (
              <Reveal key={a.href} as={Link} href={a.href} delay={i * 100}>
                <TiltCard
                  as="div"
                  className={`box-border flex flex-col gap-4 rounded-[22px] p-[30px] ${a.dark ? "bg-ink text-canvas" : "bg-canvas text-ink"}`}
                >
                  <div className={`flex items-center gap-2.5 text-[12.5px] ${a.dark ? "text-canvas/50" : "text-ink/50"}`}>
                    <span className={`rounded-full px-[11px] py-1 text-[11px] font-semibold tracking-[.04em] uppercase ${a.dark ? "bg-brand/16 text-brand" : "bg-tint text-brand-dark"}`}>{a.tag}</span>
                    <span>{a.read}</span>
                  </div>
                  <h3 className="m-0 text-[19px] leading-[1.3] font-semibold tracking-[-.01em]">{a.title}</h3>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FAQ ======= */}
      <section id="faq" className="relative overflow-hidden bg-white px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[840px]">
          <Reveal as="p" className="mb-3.5 text-center text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">FAQ</Reveal>
          <Reveal as="h2" delay={100} className="mb-12 text-center text-[clamp(30px,4vw,48px)] font-bold tracking-[-.02em]">
            Questions founders ask us first.
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} as="details" delay={i * 80} className="box-border rounded-2xl bg-canvas p-[22px] px-6">
                <summary className="flex items-center justify-between gap-4 text-[17px] font-semibold">
                  {f.q}
                  <span className="details-icon flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-ink text-[14px] text-brand">+</span>
                </summary>
                <p className="m-0 mt-3.5 text-[15px] leading-[1.65] text-ink/60">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTACT / CTA ======= */}
      <section id="contact" className="relative overflow-hidden px-[clamp(20px,5vw,48px)] py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-[clamp(24px,5vw,48px)] py-[clamp(48px,10vw,100px)] text-center text-canvas">
            <Parallax
              y={-0.08}
              className="pointer-events-none absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 62%)" }}
            />
            <div className="relative">
              <Reveal as="p" delay={100} className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand uppercase">Let&apos;s talk</Reveal>
              <Reveal as="h2" delay={200} className="mb-[22px] text-[clamp(36px,5vw,68px)] font-bold tracking-[-.025em]">Turn your business into a brand.</Reveal>
              <Reveal as="p" delay={300} className="mx-auto mb-10 max-w-[540px] text-[17px] leading-[1.65] text-canvas/65">
                One call. We&apos;ll tell you honestly what&apos;s working, what isn&apos;t, and what we&apos;d do about it — whether or not you hire us.
              </Reveal>
              <Reveal delay={400}>
                <span className="relative inline-block">
                  <span className="pointer-events-none absolute right-0 bottom-[calc(100%-12px)] left-0 z-0 h-16 overflow-hidden">
                    <span className="absolute bottom-[-60px] left-1/2 h-[58px] w-[54px] animate-peek" style={{ marginLeft: "-27px", animationDelay: "2.5s" }}>
                      <span className="absolute top-0 left-[7px] h-10 w-10 rounded-full border-[2.5px] border-brand bg-ink box-border">
                        <span className="absolute top-[14px] left-2 h-[7px] w-[5px] rounded-[3px] bg-brand" />
                        <span className="absolute top-[14px] right-2 h-[7px] w-[5px] rounded-[3px] bg-brand" />
                        <span className="absolute top-[25px] left-[15px] h-[3px] w-[6px] rounded-b-[4px] bg-brand" />
                      </span>
                      <span className="absolute bottom-1.5 left-0 h-3.5 w-3.5 rounded-full border-[2.5px] border-brand bg-ink box-border" />
                      <span className="absolute right-0 bottom-1.5 h-3.5 w-3.5 rounded-full border-[2.5px] border-brand bg-ink box-border" />
                    </span>
                  </span>
                  <CalButton variant="green" size="xl" className="relative z-10">
                    Book a free consultation call
                  </CalButton>
                </span>
              </Reveal>
              <Reveal delay={500} className="mt-11 flex flex-wrap justify-center gap-8 text-[14.5px]">
                <a href="mailto:contact@insidedynamics.in" className="text-canvas/70 hover:text-brand">contact@insidedynamics.in</a>
                <a href="tel:+917559452405" className="text-canvas/70 hover:text-brand">(+91) 755-945-2405</a>
                <span className="text-canvas/70">Pune · Bengaluru · Gurugram, India</span>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
