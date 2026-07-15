"use client";

import CalButton from "@/components/CalButton";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";

const STORY_STATS = [
  { value: "7+", label: "years doing this — through two market cycles", variant: "dark" as const },
  { value: "100+", label: "projects shipped across fintech, AI, D2C, and non-profits", variant: "brand" as const },
  { value: "94%", label: "of clients come back with a second project", variant: "white" as const },
];

const BELIEFS = [
  {
    title: "Pretty is not the goal",
    body: "A gorgeous site that doesn’t convert is an expensive painting. We design for the metric first and the moodboard second — in that order, every time.",
  },
  {
    title: "Evidence beats taste",
    body: "When we disagree with a client — or with each other — we don’t argue harder, we test. Five user sessions settle debates that meetings never will.",
  },
  {
    title: "Small teams ship better",
    body: "Every layer between you and the person doing the work adds a week and subtracts clarity. We keep the layer count at zero.",
  },
  {
    title: "Say no early",
    body: "If a project isn’t a fit — wrong stage, wrong budget, wrong problem — we say so on the first call. It costs us revenue and saves everyone months.",
    tint: true,
  },
];

export default function AboutView() {
  return (
    <>
      {/* ======= PAGE HERO ======= */}
      <section className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pt-[clamp(100px,20vw,170px)] pb-[clamp(40px,8vw,70px)]">
        <Parallax
          y={-0.1}
          className="pointer-events-none absolute -top-[160px] -right-[140px] h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 65%)" }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">
            About us
          </Reveal>
          <Reveal as="h1" delay={100} className="mb-[22px] max-w-[940px] text-[clamp(40px,5.6vw,80px)] font-bold tracking-[-.03em]">
            A small team that thinks like your{" "}
            <span className="inline-block rounded-xl bg-brand px-[18px] pt-0.5 pb-1.5 font-display font-bold" style={{ transform: "rotate(-1deg)" }}>
              co-founder.
            </span>
          </Reveal>
          <Reveal as="p" delay={200} className="max-w-[580px] text-[17px] leading-[1.65] text-ink/60">
            Inside Dynamics is a design consultancy in Pune. We are deliberately small, deliberately senior, and deliberately picky about the projects we take on. Here&apos;s why we work this way.
          </Reveal>
        </div>
      </section>

      {/* ======= OUR STORY ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-5 pb-[90px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap gap-x-16 gap-y-10">
          <Reveal className="min-w-0 flex-1 basis-[340px]">
            <h2 className="mb-5 text-[clamp(28px,3.2vw,42px)] font-bold tracking-[-.02em]">Why we exist</h2>
            <p className="mb-4 text-[16.5px] leading-[1.75] text-ink/70">
              We started Inside Dynamics after watching the same story repeat at agency after agency: a founder pays for senior expertise, gets a polished pitch meeting, and then the actual work quietly lands on the newest hire&apos;s desk. The result looks fine in a case study and underperforms in the market.
            </p>
            <p className="mb-4 text-[16.5px] leading-[1.75] text-ink/70">
              So we built the agency we wished we could have hired: no account managers, no pitch teams, no bait and switch. The people you talk to are the people who do the work — and the work is measured against your numbers, not our portfolio.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.75] text-ink/70">
              Seven years in, most of our new clients come from old clients. We&apos;d like to keep it that way.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex min-w-0 flex-1 basis-[300px] flex-col gap-4">
            {STORY_STATS.map((s) => (
              <div
                key={s.value}
                className={`rounded-[22px] p-7 ${
                  s.variant === "dark" ? "bg-ink text-canvas" : s.variant === "brand" ? "bg-brand text-ink" : "border border-ink/7 bg-white"
                }`}
              >
                <StatCounter
                  value={s.value}
                  className={`font-display text-[40px] font-bold ${
                    s.variant === "dark" ? "text-brand" : s.variant === "brand" ? "text-ink" : "text-brand-dark"
                  }`}
                />
                <div className={`mt-1 text-[14px] ${s.variant === "dark" ? "text-canvas/60" : s.variant === "brand" ? "text-ink/60" : "text-ink/55"}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ======= WHAT WE BELIEVE ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">
            What we believe
          </Reveal>
          <Reveal as="h2" delay={100} className="mb-11 max-w-[720px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]">
            Opinions we&apos;re happy to defend.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <TiltCard
                  className={`box-border rounded-[22px] p-9 px-8 ${b.tint ? "bg-tint" : "border border-ink/7 bg-white"}`}
                >
                  <h3 className="mb-3 text-[21px] font-semibold">{b.title}</h3>
                  <p className={`m-0 text-[15px] leading-[1.65] ${b.tint ? "text-ink/60" : "text-ink/55"}`}>{b.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-ink px-[clamp(24px,5vw,48px)] py-[72px] text-center text-canvas">
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Sound like people you could work with?
            </h2>
            <p className="mx-auto mb-9 max-w-[500px] text-[16.5px] leading-[1.6] text-canvas/65">
              One call and you&apos;ll know. We don&apos;t do hard sells — mostly because we&apos;re bad at them.
            </p>
            <CalButton variant="green" size="lg">
              Say hello
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
