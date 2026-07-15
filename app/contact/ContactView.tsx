import CalButton from "@/components/CalButton";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const METHODS = [
  {
    label: "Email — best for briefs",
    href: "mailto:contact@insidedynamics.in",
    value: "contact@insidedynamics.in",
    body: "Send whatever you have — a one-liner is enough. Replies within one business day.",
    variant: "brand" as const,
  },
  {
    label: "Phone — best for urgent",
    href: "tel:+917559452405",
    value: "(+91) 755-945-2405",
    body: "Mon–Fri, 10am–7pm IST. If we miss you, we call back the same day.",
    variant: "white" as const,
  },
];

const NEXT_STEPS = [
  { meta: "Within 1 day", title: "We reply", body: "A real reply from the consultant who'd work on your project — with 2–3 times for a call." },
  { meta: "The call", title: "45 honest minutes", body: "We ask about your goals and numbers, you ask us anything. NDA signed first if you want one." },
  { meta: "Within 3 days", title: "A written plan", body: "Scope, timeline, and price in writing — or an honest “you don’t need us yet” with what to do instead.", tint: true },
];

export default function ContactView() {
  return (
    <>
      {/* ======= PAGE HERO ======= */}
      <section className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pt-[clamp(100px,20vw,170px)] pb-[clamp(40px,8vw,70px)]">
        <Parallax
          y={-0.1}
          className="pointer-events-none absolute -top-40 -right-36 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,233,92,.2) 0%, rgba(88,233,92,0) 65%)" }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Contact</Reveal>
          <Reveal as="h1" delay={100} className="mb-5.5 max-w-[940px] text-[clamp(40px,5.6vw,80px)] font-bold tracking-[-.03em]">
            Tell us what&rsquo;s{" "}
            <span className="inline-block rounded-xl bg-brand px-[18px] pt-0.5 pb-1.5 font-display font-bold text-ink" style={{ transform: "rotate(-1deg)" }}>
              not working.
            </span>
          </Reveal>
          <Reveal as="p" delay={200} className="max-w-[580px] text-[17px] leading-relaxed text-ink/60">
            No forms that vanish into a CRM. Email us, call us, or book the free consultation directly — a real person replies within one business day, usually faster.
          </Reveal>
        </div>
      </section>

      {/* ======= CONTACT METHODS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-5 pb-[90px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4.5">
          {METHODS.map((m, i) => (
            <Reveal key={m.label} as="a" href={m.href} delay={i * 120}>
              <TiltCard
                as="div"
                className={`box-border rounded-3xl p-[38px_32px] ${m.variant === "brand" ? "bg-brand text-ink" : "border border-ink/7 bg-white text-ink"}`}
              >
                <div className={`mb-4 text-[13px] font-bold tracking-[.08em] uppercase ${m.variant === "brand" ? "text-ink/55" : "text-brand-dark"}`}>{m.label}</div>
                <div className="mb-2.5 text-[clamp(19px,2vw,24px)] font-bold break-all">{m.value}</div>
                <p className={`text-[14.5px] leading-relaxed ${m.variant === "brand" ? "text-ink/65" : "text-ink/55"}`}>{m.body}</p>
              </TiltCard>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <TiltCard className="box-border rounded-3xl bg-ink p-[38px_32px] text-canvas">
              <div className="mb-4 text-[13px] font-bold tracking-[.08em] text-brand uppercase">Studios</div>
              <div className="mb-2.5 text-[clamp(19px,2vw,24px)] font-bold">Pune · Bengaluru · Gurugram</div>
              <p className="text-[14.5px] leading-relaxed text-canvas/60">We work with clients across India and abroad — remote-first, with in-person workshops in Pune, Bengaluru, and Gurugram on request.</p>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ======= WHAT HAPPENS NEXT ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[110px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">After you reach out</Reveal>
          <Reveal as="h2" delay={100} className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]">
            What happens next — no mystery.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4.5">
            {NEXT_STEPS.map((s) => (
              <Reveal key={s.title}>
                <TiltCard className={`box-border rounded-[22px] p-8 ${s.tint ? "bg-tint" : "border border-ink/7 bg-white"}`}>
                  <div className="mb-3 text-[13px] font-bold text-brand-dark">{s.meta}</div>
                  <h3 className="mb-2.5 text-xl font-semibold">{s.title}</h3>
                  <p className={`text-[14.5px] leading-relaxed ${s.tint ? "text-ink/60" : "text-ink/55"}`}>{s.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-ink p-[72px_clamp(24px,5vw,48px)] text-center text-canvas">
            <h2 className="mb-4.5 text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">The consultation costs nothing.</h2>
            <p className="mx-auto mb-9 max-w-[500px] text-[16.5px] leading-relaxed text-canvas/65">
              Worst case: you leave with a free expert read on your product and a fix list. Best case: you&rsquo;ve found your design team.
            </p>
            <CalButton variant="green" size="lg">Book the free consultation</CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
