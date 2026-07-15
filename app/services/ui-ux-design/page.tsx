import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "UI/UX Design — Inside Dynamics",
  description:
    "Intuitive interfaces for startups and B2B products — designed in sprints, tested on real users, measured against your numbers.",
};

const benefitPills = [
  { label: "Exceed user expectations", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Improve retention", bg: "bg-tint font-medium" },
  { label: "Build brand loyalty", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Boost revenue", bg: "bg-brand font-semibold" },
  { label: "Increase engagement", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Simplify complex systems", bg: "bg-tint font-medium" },
  { label: "Win a competitive edge", bg: "border border-ink/8 bg-white font-medium" },
];

const industryPills = [
  { label: "Fintech", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Healthcare", bg: "bg-tint font-medium" },
  { label: "Legal", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Logistics", bg: "border border-ink/8 bg-white font-medium" },
  { label: "Education", bg: "bg-tint font-medium" },
  { label: "D2C", bg: "border border-ink/8 bg-white font-medium" },
];

const callOuts = [
  "Your user journey feels more like a maze",
  "Customers keep complaining about friction",
  "Your design is aging faster than your product",
  "Your audience is niche and hard to design for",
];

const offerings = [
  {
    delay: 0,
    title: "UX/UI Design",
    body: "UX makes products work; UI makes them shine — we do both. Working in design sprints, we streamline journeys, clarify information architecture, and craft interfaces that feel effortless for users and profitable for you.",
    card: "bg-brand",
    body_color: "text-ink/70",
  },
  {
    delay: 120,
    title: "Redesign",
    body: "When your product feels outdated, we start with an audit — uncovering usability gaps, clarifying navigation, and modernizing visuals. The result feels fresh and competitive without losing what already works.",
    card: "border border-ink/7 bg-white",
    body_color: "text-ink/60",
  },
  {
    delay: 240,
    title: "MVP",
    body: "The fastest way to turn an idea into a tangible product. Market research, personas, prioritized features, and clickable prototypes you can put in front of investors — and launch with low investment.",
    card: "border border-ink/7 bg-white",
    body_color: "text-ink/60",
  },
];

const processSteps = [
  {
    delay: 0,
    week: "W1",
    title: "Immerse",
    body: "Stakeholder interviews, competitor teardown, success metrics locked.",
    card: "border border-ink/7 bg-white",
    badge: "bg-ink text-brand",
    body_color: "text-ink/55",
  },
  {
    delay: 100,
    week: "W2",
    title: "Sketch",
    body: "Flows and wireframes for the core journeys, reviewed with you daily.",
    card: "border border-ink/7 bg-white",
    badge: "bg-ink text-brand",
    body_color: "text-ink/55",
  },
  {
    delay: 200,
    week: "W3",
    title: "Design",
    body: "High-fidelity UI across every screen, states, and edge case.",
    card: "bg-brand",
    badge: "bg-ink text-brand",
    body_color: "text-ink/70",
  },
  {
    delay: 300,
    week: "W4",
    title: "Test & hand off",
    body: "Usability pass, dev-ready prototype, and a clickable demo you can share.",
    card: "bg-ink text-canvas",
    badge: "bg-brand text-ink",
    body_color: "text-canvas/60",
  },
];

export default function Page() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pt-[clamp(100px,20vw,170px)] pb-[clamp(40px,8vw,70px)]">
        <Parallax
          y={-0.1}
          className="pointer-events-none absolute -top-[160px] -right-[140px] h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 65%)" }}
        />
        <div className="relative mx-auto flex max-w-[1240px] flex-wrap items-center gap-14">
          <div className="flex-[1_1_420px]">
            <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">
              <Link href="/services" className="text-brand-dark hover:text-ink">
                Services
              </Link>{" "}
              · UI/UX Design
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mb-[22px] text-[clamp(38px,5vw,72px)] font-bold tracking-[-.03em]"
            >
              Product design that feels{" "}
              <span className="inline-block -rotate-1 rounded-xl bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
                effortless.
              </span>
            </Reveal>
            <Reveal as="p" delay={200} className="mb-8 max-w-[520px] text-[17px] leading-[1.65] text-ink/60">
              Intuitive interfaces for startups and B2B products — designed in sprints, tested on real users, measured against your numbers.
            </Reveal>
            <Reveal delay={300}>
              <CalButton variant="dark" size="lg">
                Get a quote
              </CalButton>
            </Reveal>
          </div>
          <Reveal delay={250} className="relative h-[340px] flex-[1_1_320px]">
            <TiltCard className="absolute inset-0 overflow-hidden rounded-[22px] bg-ink p-7">
              <div className="flex h-full flex-col gap-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                </div>
                <div className="h-8 w-2/3 rounded-md bg-brand/25" />
                <div className="grid flex-1 grid-cols-2 gap-3.5">
                  <div className="rounded-lg bg-brand/15" />
                  <div className="flex flex-col gap-3.5">
                    <div className="h-1/2 rounded-lg bg-brand" />
                    <div className="h-1/2 rounded-lg bg-brand/30" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-1/3 rounded bg-canvas/20" />
                  <div className="h-3 w-1/4 rounded bg-canvas/10" />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ======= BENEFITS ======= */}
      <section className="px-12 pt-10 pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="h2" className="mb-7 text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
            Good UX helps you…
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            {benefitPills.map((pill) => (
              <span key={pill.label} className={`rounded-full px-[22px] py-3 text-[15px] ${pill.bg}`}>
                {pill.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ======= WHEN TO CALL US ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[26px] bg-ink px-12 py-14 text-canvas">
            <h2 className="mb-3 max-w-[640px] text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
              You can count on us when…
            </h2>
            <p className="mb-9 max-w-[520px] text-[16px] text-canvas/60">
              If any of these sound familiar, a design sprint will pay for itself.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[14px]">
              {callOuts.map((item) => (
                <div key={item} className="rounded-2xl bg-canvas/7 p-[22px] text-[15.5px] leading-[1.5]">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======= OFFERINGS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="h2" className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]">
            Three ways we design.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {offerings.map((card) => (
              <Reveal key={card.title} delay={card.delay}>
                <TiltCard className={`box-border rounded-[22px] px-8 py-[38px] ${card.card}`}>
                  <h3 className="mb-[14px] text-[23px] font-semibold">{card.title}</h3>
                  <p className={`text-[15px] leading-[1.7] ${card.body_color}`}>{card.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= INDUSTRIES ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-12">
          <div>
            <Reveal as="h2" className="mb-[14px] text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
              Fit to your niche.
            </Reveal>
            <Reveal as="p" delay={100} className="max-w-[460px] text-[16px] leading-[1.7] text-ink/60">
              Deep domain knowledge from past projects, an in-depth discovery process, and real engagement with your actual users.
            </Reveal>
          </div>
          <Reveal delay={200} className="flex flex-wrap gap-3">
            {industryPills.map((pill) => (
              <span key={pill.label} className={`rounded-full px-[22px] py-3 text-[15px] ${pill.bg}`}>
                {pill.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ======= PROCESS TIMELINE ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-[14px] text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">
            How a sprint runs
          </Reveal>
          <Reveal as="h2" delay={100} className="mb-12 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]">
            Four weeks, start to prototype.
          </Reveal>
          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
            {processSteps.map((step) => (
              <Reveal key={step.week} delay={step.delay}>
                <TiltCard className={`relative z-[1] box-border rounded-[20px] px-[22px] py-[26px] ${step.card}`}>
                  <div className={`mb-[18px] flex h-11 w-11 items-center justify-center rounded-full font-bold ${step.badge}`}>
                    {step.week}
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold">{step.title}</h3>
                  <p className={`text-[13.5px] leading-[1.6] ${step.body_color}`}>{step.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-brand px-[clamp(24px,5vw,48px)] py-[clamp(44px,9vw,72px)] text-center">
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Let&apos;s design something that sells.
            </h2>
            <CalButton
              variant="none"
              className="inline-block rounded-full bg-ink px-[38px] py-4 text-[16px] font-semibold text-canvas transition-colors hover:bg-white hover:text-ink"
            >
              Get a quote
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
