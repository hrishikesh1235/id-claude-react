import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import TiltLink from "@/components/TiltLink";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "Services — Inside Dynamics",
  description:
    "Strategy, design, research, and consulting — delivered as one connected engagement, not four disconnected vendors.",
};

const serviceCards = [
  {
    href: "/services/ui-ux-design",
    delay: 0,
    tag: "01 · Design",
    tagColor: "text-ink/55",
    title: "UI/UX Design",
    body: "Product design that feels effortless for users and works hard for your business — new builds, redesigns, and MVPs.",
    bg: "bg-brand",
    text: "text-ink",
    bodyColor: "text-ink/70",
    arrowBg: "bg-ink",
    arrowColor: "text-brand",
    border: "",
  },
  {
    href: "/services/ux-research",
    delay: 120,
    tag: "02 · Evidence",
    tagColor: "text-brand-dark",
    title: "UX Audit & Research",
    body: "Usability testing, discovery research, and audits — so every design decision is backed by real users, not opinions.",
    bg: "bg-white",
    text: "text-ink",
    bodyColor: "text-ink/60",
    arrowBg: "bg-tint",
    arrowColor: "text-brand-dark",
    border: "border border-ink/[0.07]",
  },
  {
    href: "/services/ux-consulting",
    delay: 240,
    tag: "03 · Enablement",
    tagColor: "text-brand",
    title: "UX Consulting",
    body: "Workshops, process audits, and design systems — we teach your team to run UX like we do, then hand over the keys.",
    bg: "bg-ink",
    text: "text-canvas",
    bodyColor: "text-canvas/65",
    arrowBg: "bg-brand",
    arrowColor: "text-ink",
    border: "",
  },
];

const engagementModels = [
  {
    delay: 0,
    duration: "2 weeks",
    title: "Design Audit Sprint",
    body: "A fast, honest diagnosis of your brand, site, and funnel — with a prioritized action plan you can execute with anyone, including us.",
    bg: "bg-white border border-ink/[0.07]",
    bodyColor: "text-ink/55",
  },
  {
    delay: 120,
    duration: "4–12 weeks",
    title: "Full Project",
    body: "Brand, website, or product — strategy through launch. One senior team, one point of contact, weekly demos.",
    bg: "bg-white border border-ink/[0.07]",
    bodyColor: "text-ink/55",
  },
  {
    delay: 240,
    duration: "Ongoing",
    title: "Growth Retainer",
    body: "A design partner on call — continuous design, experiments, and marketing after launch. Our most popular model.",
    bg: "bg-tint",
    bodyColor: "text-ink/60",
  },
];

const typicalAgencyPoints = [
  "Account manager relays to a junior designer",
  "Design handed off, then a different team builds it",
  "Relationship ends at launch",
];

const insideDynamicsPoints = [
  "Senior consultant on every project, always",
  "Same team designs, builds, and ships it",
  "We stick around for the growth retainer",
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
            Services
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="mb-[22px] max-w-[900px] text-[clamp(40px,5.6vw,80px)] font-bold tracking-[-.03em]"
          >
            Everything you need to{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
              grow
            </span>{" "}
            — under one roof.
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="max-w-[560px] text-[17px] leading-[1.65] text-ink/60"
          >
            Strategy, design, research, and consulting — delivered as one connected
            engagement, not four disconnected vendors.
          </Reveal>
        </div>
      </section>

      {/* ======= SERVICE LINK CARDS ======= */}
      <section className="px-12 pt-10 pb-[90px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {serviceCards.map((card) => (
            <Reveal key={card.href} delay={card.delay}>
              <TiltLink
                href={card.href}
                className={`box-border flex min-h-[320px] flex-col justify-between rounded-[26px] ${card.bg} ${card.text} ${card.border} px-[34px] py-10`}
              >
                <div>
                  <div className={`mb-[18px] text-[13px] font-bold ${card.tagColor}`}>
                    {card.tag}
                  </div>
                  <h2 className="mb-[14px] text-[30px] font-bold tracking-[-.02em]">
                    {card.title}
                  </h2>
                  <p className={`text-[15.5px] leading-[1.65] ${card.bodyColor}`}>
                    {card.body}
                  </p>
                </div>
                <div className="flex items-center gap-[10px] text-[15px] font-semibold">
                  Explore
                  <span
                    className={`inline-flex h-[34px] w-[34px] items-center justify-center rounded-full ${card.arrowBg} ${card.arrowColor}`}
                  >
                    →
                  </span>
                </div>
              </TiltLink>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======= ENGAGEMENT MODELS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-[14px] text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark">
            Ways to work with us
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            Three ways in. All of them start with a conversation.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {engagementModels.map((model) => (
              <Reveal key={model.title} delay={model.delay}>
                <TiltCard className={`box-border rounded-[22px] ${model.bg} px-8 py-9`}>
                  <div className="mb-[14px] text-[13px] font-semibold text-brand-dark">
                    {model.duration}
                  </div>
                  <h3 className="mb-3 text-[22px] font-semibold">{model.title}</h3>
                  <p className={`text-[15px] leading-[1.65] ${model.bodyColor}`}>
                    {model.body}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= WHY US ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-[14px] text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark">
            Us vs. a typical agency
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            Same budget. Very different experience.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            <Reveal>
              <TiltCard className="box-border rounded-[22px] border border-ink/[0.07] bg-white p-8">
                <div className="mb-[18px] text-[13px] font-bold uppercase tracking-[.08em] text-ink/40">
                  Typical agency
                </div>
                <div className="flex flex-col gap-[14px]">
                  {typicalAgencyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[15px] text-ink/55">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ink/[0.08] text-center text-[12px] leading-5">
                        ✕
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={120}>
              <TiltCard className="box-border rounded-[22px] bg-brand p-8">
                <div className="mb-[18px] text-[13px] font-bold uppercase tracking-[.08em] text-ink/55">
                  Inside Dynamics
                </div>
                <div className="flex flex-col gap-[14px]">
                  {insideDynamicsPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ink text-center text-[12px] leading-5 text-brand">
                        ✓
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            className="rounded-[32px] bg-ink px-12 py-[72px] text-center text-canvas"
          >
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Not sure which one you need?
            </h2>
            <p className="mx-auto mb-9 max-w-[480px] text-[16.5px] leading-[1.6] text-canvas/65">
              That&apos;s what the free consultation is for. We&apos;ll tell you
              honestly — even if the answer is &quot;you don&apos;t need us yet.&quot;
            </p>
            <CalButton variant="green" size="lg">
              Book a free consultation call
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
