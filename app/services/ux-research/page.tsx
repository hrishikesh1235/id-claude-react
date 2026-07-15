import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import CalButton from "@/components/CalButton";

export const metadata: Metadata = {
  title: "UX Research | Decisions Backed by Evidence — Inside Dynamics",
  description:
    "We put your product in front of real users, study what actually happens, and turn the findings into a design plan — taking the guesswork out of every decision.",
};

export default function UxResearchPage() {
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
              · UX Audit &amp; Research
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mb-[22px] text-[clamp(38px,5vw,72px)] font-bold tracking-[-.03em]"
            >
              Decisions backed by{" "}
              <span className="inline-block -rotate-1 rounded-[12px] bg-brand px-[18px] pt-[2px] pb-[6px] font-display font-bold">
                evidence.
              </span>
            </Reveal>
            <Reveal
              as="p"
              delay={200}
              className="mb-8 max-w-[520px] text-[17px] leading-[1.65] text-ink/60"
            >
              We put your product in front of real users, study what actually
              happens, and turn the findings into a design plan — taking the
              guesswork out of every decision.
            </Reveal>
            <Reveal delay={300}>
              <CalButton
                variant="none"
                className="inline-block rounded-full bg-ink px-8 py-[15px] text-[16px] font-semibold text-canvas transition-colors hover:bg-brand hover:text-ink"
              >
                Get a quote
              </CalButton>
            </Reveal>
          </div>
          <Reveal delay={250} className="relative h-[340px] flex-1 basis-[320px]">
            <TiltCard className="absolute inset-0 overflow-hidden rounded-[22px] bg-ink p-8">
              <div className="flex h-full items-end justify-center gap-4">
                {[38, 68, 46, 88, 58, 30].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-md"
                    style={{ height: `${h}%`, background: i === 3 ? "var(--color-brand)" : "rgba(88,233,92,.25)" }}
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
            Research helps you…
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <span className="rounded-full border border-ink/[.08] bg-white px-[22px] py-3 text-[15px] font-medium">
              Find what to fix first
            </span>
            <span className="rounded-full bg-tint px-[22px] py-3 text-[15px] font-medium">
              Remove bias from design
            </span>
            <span className="rounded-full bg-brand px-[22px] py-3 text-[15px] font-semibold">
              Validate before you build
            </span>
            <span className="rounded-full border border-ink/[.08] bg-white px-[22px] py-3 text-[15px] font-medium">
              Know what users actually value
            </span>
            <span className="rounded-full bg-tint px-[22px] py-3 text-[15px] font-medium">
              Cut costly rework
            </span>
          </Reveal>
        </div>
      </section>

      {/* ======= METHODS ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            as="h2"
            className="mb-3 text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            Our main methods.
          </Reveal>
          <Reveal
            as="p"
            delay={100}
            className="mb-11 max-w-[560px] text-[16px] text-ink/55"
          >
            Qualitative and quantitative — chosen for the question, not the
            fashion.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            <Reveal as={TiltCard} className="box-border rounded-[22px] border border-ink/[.07] bg-white p-[38px_32px]">
              <h3 className="mb-[14px] text-[23px] font-semibold">
                Usability Testing
              </h3>
              <p className="mb-5 text-[15px] leading-[1.7] text-ink/60">
                Watch real users use your product. We recruit across roles,
                moderate remote or in-person sessions, and turn observed pain
                points into clear recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-canvas px-[14px] py-[6px] text-[13px]">
                  Recruiting
                </span>
                <span className="rounded-full bg-canvas px-[14px] py-[6px] text-[13px]">
                  Moderated sessions
                </span>
                <span className="rounded-full bg-canvas px-[14px] py-[6px] text-[13px]">
                  Actionable report
                </span>
              </div>
            </Reveal>
            <Reveal as={TiltCard} delay={120} className="box-border rounded-[22px] bg-brand p-[38px_32px]">
              <h3 className="mb-[14px] text-[23px] font-semibold">
                Discovery
              </h3>
              <p className="mb-5 text-[15px] leading-[1.7] text-ink/70">
                Validate assumptions before you invest in design. We explore
                real user needs, build data-based personas, and map the
                features that will actually matter.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-ink/10 px-[14px] py-[6px] text-[13px]">
                  Interviews
                </span>
                <span className="rounded-full bg-ink/10 px-[14px] py-[6px] text-[13px]">
                  Personas
                </span>
                <span className="rounded-full bg-ink/10 px-[14px] py-[6px] text-[13px]">
                  Feature roadmap
                </span>
              </div>
            </Reveal>
            <Reveal as={TiltCard} delay={240} className="box-border rounded-[22px] bg-ink p-[38px_32px] text-canvas">
              <h3 className="mb-[14px] text-[23px] font-semibold">
                UX Audit
              </h3>
              <p className="mb-5 text-[15px] leading-[1.7] text-canvas/65">
                A structured teardown of your existing product — data,
                journeys, navigation, competitors. You get high-impact fixes
                plus overlooked opportunities, prioritized.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-canvas/10 px-[14px] py-[6px] text-[13px]">
                  Data analysis
                </span>
                <span className="rounded-full bg-canvas/10 px-[14px] py-[6px] text-[13px]">
                  Journey review
                </span>
                <span className="rounded-full bg-canvas/10 px-[14px] py-[6px] text-[13px]">
                  Priority fixes
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======= WHY US ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-12 rounded-[26px] bg-tint p-[clamp(32px,6vw,56px)_clamp(20px,5vw,48px)]"
          >
            <h2 className="m-0 text-[clamp(26px,3vw,40px)] font-bold tracking-[-.02em]">
              Reduced risk, lower cost.
            </h2>
            <p className="m-0 text-[16px] leading-[1.7] text-ink/65">
              Catching a problem in research costs hours. Catching it after
              launch costs months. We help you prioritize features and
              improvements based on real user needs and your business goals —
              before they become expensive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======= DELIVERABLES ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal
            as="p"
            className="mb-[14px] text-[13px] font-semibold uppercase tracking-[.14em] text-brand-dark"
          >
            What lands in your inbox
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mb-11 max-w-[680px] text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-.02em]"
          >
            Every engagement ends with something you can act on.
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
            <Reveal as={TiltCard} className="box-border rounded-[20px] border border-ink/[.07] bg-white p-[30px_26px]">
              <div className="mb-[14px] text-[26px]">📋</div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Findings report
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-ink/55">
                Every insight, ranked by impact — not a 60-slide deck nobody
                reads.
              </p>
            </Reveal>
            <Reveal as={TiltCard} delay={100} className="box-border rounded-[20px] bg-tint p-[30px_26px]">
              <div className="mb-[14px] text-[26px]">🎥</div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Session recordings
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-ink/60">
                Clipped highlights so your whole team can watch users struggle
                — or succeed.
              </p>
            </Reveal>
            <Reveal as={TiltCard} delay={200} className="box-border rounded-[20px] bg-ink p-[30px_26px] text-canvas">
              <div className="mb-[14px] text-[26px]">🗺️</div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Prioritized roadmap
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-canvas/60">
                What to fix first, next, and later — mapped against effort and
                impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[70px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-ink p-[clamp(44px,9vw,72px)_clamp(24px,5vw,48px)] text-center text-canvas">
            <h2 className="mb-[18px] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">
              Get input straight from your users.
            </h2>
            <CalButton
              variant="none"
              className="inline-block rounded-full bg-brand px-[38px] py-4 text-[16px] font-semibold text-ink transition-colors hover:bg-brand-light"
            >
              Get a tailored quote
            </CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
