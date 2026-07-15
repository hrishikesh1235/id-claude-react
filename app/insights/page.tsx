import type { Metadata } from "next";
import CalButton from "@/components/CalButton";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import RevealLink from "@/components/RevealLink";
import TiltCard from "@/components/TiltCard";
import TiltLink from "@/components/TiltLink";
import { INSIGHTS, getInsightBySlug } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "What we've learned running design sprints and audits for early-stage teams — written for people building products, not other designers.",
};

const featured = getInsightBySlug("ux-audit-warning-signs")!;
const rest = INSIGHTS.filter((i) => i.slug !== featured.slug);

function cardClasses(card?: "dark" | "brand") {
  if (card === "dark") return "bg-ink text-canvas";
  if (card === "brand") return "bg-brand text-ink";
  return "border border-ink/7 bg-white text-ink";
}

function metaClasses(card?: "dark" | "brand") {
  if (card === "dark") return "text-canvas/50";
  if (card === "brand") return "text-ink/60";
  return "text-ink/50";
}

function badgeClasses(card?: "dark" | "brand") {
  if (card === "dark") return "bg-brand/16 text-brand";
  if (card === "brand") return "bg-ink text-brand";
  return "bg-tint text-brand-dark";
}

function excerptClasses(card?: "dark" | "brand") {
  if (card === "dark") return "text-canvas/65";
  if (card === "brand") return "text-ink/65";
  return "text-ink/55";
}

export default function InsightsPage() {
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
          <Reveal as="p" className="mb-4 text-[13px] font-semibold tracking-[.14em] text-brand-dark uppercase">Insights</Reveal>
          <Reveal as="h1" delay={100} className="mb-5.5 max-w-[900px] text-[clamp(40px,5.6vw,76px)] font-bold tracking-[-.03em]">
            Notes for founders{" "}
            <span className="inline-block rounded-xl bg-brand px-[18px] pt-0.5 pb-1.5 font-display font-bold text-ink" style={{ transform: "rotate(-1deg)" }}>
              thinking
            </span>{" "}
            about design.
          </Reveal>
          <Reveal as="p" delay={200} className="max-w-[560px] text-[17px] leading-relaxed text-ink/60">
            What we&apos;ve learned running design sprints and audits for early-stage teams — written for people building products, not other designers.
          </Reveal>
        </div>
      </section>

      {/* ======= FEATURED ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-5 pb-10">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <TiltLink
              href={`/insights/${featured.slug}`}
              className="relative block overflow-hidden rounded-[26px] bg-ink text-canvas"
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(88,233,92,.28) 0%, rgba(88,233,92,0) 65%)" }}
              />
              <div className="relative flex flex-col gap-4 p-[clamp(32px,6vw,48px)]">
                <div className="flex items-center gap-3 text-[13px] text-canvas/55">
                  <span className="rounded-full bg-brand/16 px-3 py-[5px] text-[11.5px] font-semibold tracking-[.04em] text-brand uppercase">{featured.tag}</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="max-w-[640px] text-[clamp(26px,3.2vw,38px)] leading-[1.2] font-bold tracking-[-.02em]">{featured.title}</h2>
                <p className="max-w-[520px] text-[15.5px] leading-relaxed text-canvas/65">{featured.excerpt}</p>
                <div className="mt-2 flex items-center gap-2.5 text-[15px] font-semibold text-brand">
                  Read the piece <span>→</span>
                </div>
              </div>
            </TiltLink>
          </Reveal>
        </div>
      </section>

      {/* ======= ARTICLE GRID ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pt-5 pb-[110px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {rest.map((post, i) => (
            <RevealLink key={post.slug} href={`/insights/${post.slug}`} delay={(i % 3) * 80}>
              <TiltCard as="div" className={`box-border flex flex-col gap-4 rounded-[22px] p-[30px] ${cardClasses(post.card)}`}>
                <div className={`flex items-center gap-2.5 text-[12.5px] ${metaClasses(post.card)}`}>
                  <span className={`rounded-full px-[11px] py-1 text-[11px] font-semibold tracking-[.04em] uppercase ${badgeClasses(post.card)}`}>{post.tag}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl leading-snug font-semibold tracking-[-.01em]">{post.title}</h3>
                <p className={`text-[14.5px] leading-relaxed ${excerptClasses(post.card)}`}>{post.excerpt}</p>
              </TiltCard>
            </RevealLink>
          ))}
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[90px]">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="rounded-[32px] bg-tint p-[clamp(44px,9vw,72px)_clamp(24px,5vw,48px)] text-center">
            <h2 className="mb-4.5 text-[clamp(30px,4vw,52px)] font-bold tracking-[-.02em]">Have a specific problem in mind?</h2>
            <p className="mx-auto mb-9 max-w-[480px] text-[16.5px] leading-relaxed text-ink/65">
              Skip the reading — tell us what&apos;s broken and we&apos;ll walk you through it on a call.
            </p>
            <CalButton variant="dark" size="lg">Book a free consultation call</CalButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
