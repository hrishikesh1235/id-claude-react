import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "Solutions — Inside Dynamics",
  description:
    "A two-person startup and a two-hundred-person company don't have the same design problem — so we don't sell them the same engagement. Pick the one that sounds like your week.",
};

const startupPoints = [
  "Brand identity + investor-ready website in one sprint",
  "MVP designed around the one metric that matters at your stage",
  "Clickable prototype for user tests before you spend on dev",
  "Founder-friendly pricing — phased, no lock-in",
];

const enterprisePoints = [
  "UX audit with a fix roadmap ranked by business impact",
  "Design systems your teams actually adopt — with training",
  "Incremental modernization — no big-bang rewrite risk",
  "NDA-first, procurement-friendly, works inside your process",
];

const selfTestCards = [
  {
    delay: 0,
    title: "“We need to launch”",
    body: "No live product yet, or an MVP that embarrasses you? Startup track. Speed matters more than polish coverage.",
    bg: "bg-white border border-ink/[0.07]",
    bodyColor: "text-ink/55",
  },
  {
    delay: 100,
    title: "“We need to fix”",
    body: "Live product, real revenue, but metrics plateauing and UX debt piling up? Enterprise track — audit first.",
    bg: "bg-white border border-ink/[0.07]",
    bodyColor: "text-ink/55",
  },
  {
    delay: 200,
    title: "“Honestly, both”",
    body: "Common at Series A–B. We usually start with the audit, then sprint on the highest-impact gap it finds. Ask us on the call.",
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
            Solutions
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="mb-[22px] max-w-[940px] text-[clamp(40px,5.6vw,80px)] font-bold tracking-[-.03em]"
          >
            Built for where your business is{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
              right now.
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="max-w-[580px] text-[17px] leading-[1.65] text-ink/60"
          >
            A two-person startup and a two-hundred-person company don&rsquo;t have
            the same design problem — so we don&rsquo;t sell them the same
            engagement. Pick the one that sounds like your week.
          </Reveal>
        </div>
      </section>

      {/* ======= STARTUPS ======= */}
      <section id="startups" className="px-[clamp(20px,5vw,48px)] pt-5 pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            className="flex flex-wrap gap-x-16 gap-y-10 rounded-[32px] bg-ink px-[clamp(32px,6vw,64px)] py-[clamp(32px,6vw,64px)] text-canvas"
          >
            <div className="min-w-0 flex-[1_1_380px]">
              <span className="mb-5 inline-block rounded-full bg-brand/16 px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[.06em] text-brand">
                For startups · pre-seed to Series A
              </span>
              <h2 className="mb-[18px] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-.02em]">
                Look fundable. Ship fast. Don&rsquo;t rebuild it in a year.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.7] text-canvas/65">
                At this stage you don&rsquo;t need a brand book — you need investors
                to take the deck seriously, early users to convert, and a product
                you can demo without apologizing. That&rsquo;s the whole brief, and
                it has a deadline.
              </p>
              <p className="text-[16px] leading-[1.7] text-canvas/65">
                We compress brand, website, and MVP design into one
                four-to-six-week sprint with one senior team, so nothing gets
                lost between three different vendors.
              </p>
            </div>
            <div className="flex min-w-0 flex-[1_1_300px] flex-col justify-center gap-[14px]">
              {startupPoints.map((point) => (
                <div key={point} className="flex items-baseline gap-[10px] text-[15px] leading-[1.55]">
                  <span className="flex-shrink-0 text-brand">✓</span>
                  <span>{point}</span>
                </div>
              ))}
              <CalButton variant="green" size="lg" className="mt-[14px] self-start">
                Scope my startup →
              </CalButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======= ENTERPRISE ======= */}
      <section id="enterprise" className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            className="flex flex-wrap gap-x-16 gap-y-10 rounded-[32px] border border-ink/[0.07] bg-white px-[clamp(32px,6vw,64px)] py-[clamp(32px,6vw,64px)]"
          >
            <div className="min-w-0 flex-[1_1_380px]">
              <span className="mb-5 inline-block rounded-full bg-tint px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[.06em] text-brand-dark">
                For enterprises · established products
              </span>
              <h2 className="mb-[18px] text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-.02em]">
                Modernize the product without stopping the machine.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.7] text-ink/65">
                Your product already makes money — which is exactly why a risky
                big-bang redesign is off the table. The real problems are
                quieter: UX debt that shows up as support tickets, five teams
                shipping five different button styles, and a design process
                that can&rsquo;t keep up with engineering.
              </p>
              <p className="text-[16px] leading-[1.7] text-ink/65">
                We come in as consultants first: audit, prioritize, then fix in
                increments your roadmap can absorb — alongside your in-house
                team, not instead of them.
              </p>
            </div>
            <div className="flex min-w-0 flex-[1_1_300px] flex-col justify-center gap-[14px] text-ink">
              {enterprisePoints.map((point) => (
                <div key={point} className="flex items-baseline gap-[10px] text-[15px] leading-[1.55]">
                  <span className="flex-shrink-0 text-brand-dark">✓</span>
                  <span>{point}</span>
                </div>
              ))}
              <CalButton variant="dark" size="lg" className="mt-[14px] self-start">
                Talk to a consultant →
              </CalButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======= WHICH ONE / SELF-TEST ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark">
            Not sure which fits?
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            A quick self-test.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {selfTestCards.map((card) => (
              <Reveal key={card.title} delay={card.delay}>
                <TiltCard className={`box-border rounded-[22px] ${card.bg} px-8 py-9`}>
                  <h3 className="mb-3 text-[20px] font-semibold">{card.title}</h3>
                  <p className={`text-[15px] leading-[1.65] ${card.bodyColor}`}>{card.body}</p>
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
              Fifteen minutes will tell you.
            </h2>
            <p className="mx-auto mb-9 max-w-[500px] text-[16.5px] leading-[1.6] text-canvas/65">
              Bring your biggest design frustration to the free call.
              We&rsquo;ll tell you which track fits — or whether you need us at
              all.
            </p>
            <CalButton variant="green" size="lg">
              Book a free consultation
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
