import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "Process — Inside Dynamics",
  description:
    "A consultant's process, not a factory line. Here's exactly what working with us looks like, week by week — from discovery to build to growth.",
};

const steps = [
  {
    number: "01",
    meta: "Week 0 · free, no strings",
    title: "Discover",
    body: "One call. You talk, we listen. We want to know what you sell, who buys it, what growth looked like last quarter, and what you have already tried. By the end of the call we will tell you plainly whether we think we can move the needle — and if we can’t, we will say so and point you somewhere better.",
    youGet: "A straight answer on whether we’re a fit, and a rough scope",
    weNeed: "45 minutes and honest answers about your numbers",
  },
  {
    number: "02",
    meta: "Week 1 · the audit",
    title: "Diagnose",
    body: "Before any pixels move, we go through your brand, website, and funnel the way a doctor reads a scan. Where do users hesitate? Where does the copy over-promise? Which page quietly loses the most people? Everything goes into a written report, ranked by impact — not by what is fun to redesign.",
    youGet: "A written audit with a prioritized fix list you could hand to any team",
    weNeed: "Access to your analytics and any past research",
  },
  {
    number: "03",
    meta: "Weeks 2–4 · prototypes first",
    title: "Design",
    body: "We design the riskiest screens first and put a clickable prototype in your hands before committing to anything final. You test it, your team pokes at it, real users try it. Direction gets corrected while it is still cheap to correct. No 40-page brand reveal at the end — you see the work every week.",
    youGet: "A tested, clickable prototype and weekly demo calls",
    weNeed: "Feedback within 48 hours so momentum doesn’t die",
  },
  {
    number: "04",
    meta: "Weeks 4–8 · design to code",
    title: "Build",
    body: "The same team that designed it builds it — in Next.js, responsive, fast, and QA’d on real devices. Nothing gets lost in a handoff document because there is no handoff. You review staging builds as they come together, not screenshots of them.",
    youGet: "A live, tested website or product, plus all source files",
    weNeed: "A domain, hosting access, and content sign-offs",
  },
  {
    number: "05",
    meta: "Ongoing · optional retainer",
    title: "Grow",
    body: "Launch is the starting line, not the finish. On retainer we watch the numbers, run experiments, ship improvements, and keep the design system healthy as you hire. Most of our clients stay — not because of a contract, but because the monthly report keeps earning its keep.",
    youGet: "Monthly experiments, reporting, and a design team on call",
    weNeed: "A monthly 30-minute review call",
  },
];

const principles = [
  {
    title: "No surprise invoices",
    body: "Scope is agreed in writing before we start. If something genuinely changes mid-project, we re-quote before doing the work — never after.",
    bg: "border border-ink/[0.07] bg-white",
    bodyColor: "text-ink/55",
  },
  {
    title: "No junior hand-offs",
    body: "The person you meet on the first call is the person doing the work. We stay small on purpose so that never has to change.",
    bg: "border border-ink/[0.07] bg-white",
    bodyColor: "text-ink/55",
  },
  {
    title: "No hostage files",
    body: "Figma files, source code, accounts — everything lives in your name from day one. If we part ways, you lose nothing.",
    bg: "bg-tint",
    bodyColor: "text-ink/60",
  },
];

export default function Page() {
  return (
    <>
      {/* ======= PAGE HERO ======= */}
      <section className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pt-[clamp(100px,20vw,170px)] pb-[clamp(40px,8vw,70px)]">
        <Parallax
          y={-0.1}
          className="pointer-events-none absolute -top-[160px] -right-[140px] h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 65%)",
          }}
        />
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark">
            How we work
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="mb-[22px] max-w-[940px] text-[clamp(40px,5.6vw,80px)] font-bold tracking-[-.03em]"
          >
            A consultant&apos;s process, not a{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
              factory line.
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="max-w-[580px] text-[17px] leading-[1.65] text-ink/60"
          >
            Most agencies start designing on day one. We don&apos;t — because the
            most expensive design mistake is solving the wrong problem beautifully.
            Here&apos;s exactly what working with us looks like, week by week.
          </Reveal>
        </div>
      </section>

      {/* ======= PROCESS STEPS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-5 pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          {steps.map((step) => (
            <Reveal
              key={step.number}
              className="flex flex-wrap gap-x-10 gap-y-6 border-t border-ink/10 py-9"
            >
              <div className="flex-[0_0_200px]">
                <div className="font-display text-[44px] font-bold text-brand-dark">
                  {step.number}
                </div>
                <div className="mt-[6px] text-[13px] font-semibold text-ink/45">
                  {step.meta}
                </div>
              </div>
              <div className="min-w-0 flex-[1_1_380px]">
                <h3 className="mb-3 text-[26px] font-bold">{step.title}</h3>
                <p className="max-w-[620px] text-[16px] leading-[1.7] text-ink/65">
                  {step.body}
                </p>
              </div>
              <div className="flex flex-[0_1_260px] flex-col gap-[14px]">
                <div className="rounded-2xl bg-tint px-[18px] py-4">
                  <div className="mb-[6px] text-[11.5px] font-bold uppercase tracking-[.08em] text-brand-dark">
                    You get
                  </div>
                  <div className="text-[14px] leading-[1.5]">{step.youGet}</div>
                </div>
                <div className="rounded-2xl border border-ink/[0.08] bg-white px-[18px] py-4">
                  <div className="mb-[6px] text-[11.5px] font-bold uppercase tracking-[.08em] text-ink/40">
                    We need from you
                  </div>
                  <div className="text-[14px] leading-[1.5] text-ink/65">
                    {step.weNeed}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======= PROCESS PRINCIPLES ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark">
            Ground rules
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            Three rules we never break.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {principles.map((principle) => (
              <Reveal key={principle.title}>
                <TiltCard
                  className={`box-border rounded-[22px] ${principle.bg} px-8 py-9`}
                >
                  <h3 className="mb-3 text-[22px] font-semibold">
                    {principle.title}
                  </h3>
                  <p className={`text-[15px] leading-[1.65] ${principle.bodyColor}`}>
                    {principle.body}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-ink px-12 py-[72px] text-center text-canvas">
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Want to see step one in action?
            </h2>
            <p className="mx-auto mb-9 max-w-[500px] text-[16.5px] leading-[1.6] text-canvas/65">
              The discovery call is free and genuinely useful either way — founders
              have left it with a fix list and never hired us. That&apos;s fine by
              us.
            </p>
            <CalButton variant="green" size="lg">
              Book the discovery call
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
