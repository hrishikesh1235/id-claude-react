import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "UX Consulting — Inside Dynamics",
  description:
    "Audits, workshops, and design systems — we set up the right UX processes inside your company, then teach your team to run them without us.",
};

const benefitPills = [
  { label: "Raise your UX maturity", style: "border border-ink/[.08] bg-white text-ink font-medium" },
  { label: "Find hidden opportunities", style: "bg-tint text-ink font-medium" },
  { label: "Increase design ROI", style: "bg-brand text-ink font-semibold" },
  { label: "Save design & engineering time", style: "border border-ink/[.08] bg-white text-ink font-medium" },
  { label: "Define success metrics", style: "bg-tint text-ink font-medium" },
];

const offerings = [
  {
    delay: 0,
    title: "Training & Workshops",
    body: "Hands-on sessions built around your exact use cases — design thinking, user empathy, and best practices your team can apply the next morning.",
    bg: "border border-ink/[.07] bg-white",
    text: "text-ink",
    bodyColor: "text-ink/60",
  },
  {
    delay: 120,
    title: "UX Process Audit",
    body: "We evaluate how design happens in your company — strengths, weaknesses, gaps — then define the problem areas and the next steps to fix them.",
    bg: "bg-brand",
    text: "text-ink",
    bodyColor: "text-ink/70",
  },
  {
    delay: 240,
    title: "Design Systems",
    body: "Reusable building blocks instead of starting from scratch every time — faster launches, fewer errors, stronger consistency. We set it up and show your team how to keep it alive.",
    bg: "bg-ink",
    text: "text-canvas",
    bodyColor: "text-canvas/65",
  },
];

const agenda = [
  {
    delay: 0,
    time: "09:00",
    label: "Where you're stuck — an open conversation, no slides",
    bg: "border border-ink/[.07] bg-white",
    timeColor: "text-brand-dark",
    labelColor: "text-ink",
  },
  {
    delay: 90,
    time: "10:00",
    label: "Live teardown of your product, side by side",
    bg: "border border-ink/[.07] bg-white",
    timeColor: "text-brand-dark",
    labelColor: "text-ink",
  },
  {
    delay: 180,
    time: "11:30",
    label: "Whiteboard the fix — mapped together, not handed down",
    bg: "bg-brand",
    timeColor: "text-ink/60",
    labelColor: "text-ink font-semibold",
  },
  {
    delay: 270,
    time: "13:00",
    label: "Walk away with next steps your team owns",
    bg: "bg-ink text-canvas",
    timeColor: "text-brand",
    labelColor: "text-canvas",
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
          style={{
            background:
              "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 65%)",
          }}
        />
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[56px]">
          <div className="flex-1 basis-[420px]">
            <Reveal
              as="p"
              className="mb-4 text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark"
            >
              <Link href="/services" className="text-brand-dark">
                Services
              </Link>{" "}
              · UX Consulting
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mb-[22px] text-[clamp(38px,5vw,72px)] font-bold tracking-[-.03em]"
            >
              A UX practice that{" "}
              <span className="inline-block -rotate-1 rounded-[12px] bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
                scales
              </span>{" "}
              with you.
            </Reveal>
            <Reveal
              as="p"
              delay={200}
              className="mb-8 max-w-[520px] text-[17px] leading-[1.65] text-ink/60"
            >
              Audits, workshops, and design systems — we set up the right UX
              processes inside your company, then teach your team to run them
              without us.
            </Reveal>
            <Reveal delay={300}>
              <CalButton variant="dark" size="lg">
                Partner with a consultant
              </CalButton>
            </Reveal>
          </div>
          <Reveal delay={250} className="relative h-[340px] flex-1 basis-[320px]">
            <TiltCard className="absolute inset-0 overflow-hidden rounded-[22px] bg-ink p-8">
              <div className="grid h-full grid-cols-3 grid-rows-3 gap-3.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg"
                    style={{ background: i === 4 ? "var(--color-brand)" : "rgba(88,233,92,.15)" }}
                  />
                ))}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ======= BENEFITS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-10 pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            as="h2"
            className="mb-7 text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]"
          >
            Consulting helps you…
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            {benefitPills.map((pill) => (
              <span
                key={pill.label}
                className={`rounded-full px-[22px] py-3 text-[15px] ${pill.style}`}
              >
                {pill.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ======= OFFERINGS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            as="h2"
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            What a consulting engagement looks like.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {offerings.map((card) => (
              <Reveal
                key={card.title}
                as={TiltCard}
                delay={card.delay}
                className={`box-border rounded-[22px] p-[38px_32px] ${card.bg} ${card.text}`}
              >
                <h3 className="mb-[14px] text-[23px] font-semibold">
                  {card.title}
                </h3>
                <p className={`m-0 text-[15px] leading-[1.7] ${card.bodyColor}`}>
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= OUTCOME ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-12 rounded-[26px] bg-tint p-[clamp(32px,6vw,56px)_clamp(20px,5vw,48px)]">
            <h2 className="m-0 text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
              The goal: you stop needing us.
            </h2>
            <p className="m-0 text-[16px] leading-[1.7] text-ink/65">
              Most agencies optimize for dependency. We optimize for handover
              — the engagement ends with your team running better UX
              processes on their own, with us on call only when you want us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======= SESSION AGENDA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            as="p"
            className="mb-[14px] text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark"
          >
            Inside a workshop
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            What a half-day session looks like.
          </Reveal>
          <div className="flex flex-col gap-[14px]">
            {agenda.map((row) => (
              <Reveal
                key={row.time}
                delay={row.delay}
                className={`grid grid-cols-[120px_1fr] items-center gap-6 rounded-[18px] px-[26px] py-[22px] ${row.bg}`}
              >
                <div className={`text-[14px] font-bold ${row.timeColor}`}>
                  {row.time}
                </div>
                <div className={`text-[15.5px] ${row.labelColor}`}>
                  {row.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-ink p-[clamp(44px,9vw,72px)_clamp(24px,5vw,48px)] text-center text-canvas">
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Evolve your team.
            </h2>
            <CalButton variant="green" size="xl">
              Get a quote
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
