import type { ReactNode } from "react";
import CalButton from "./CalButton";
import Reveal from "./Reveal";
import RevealLink from "./RevealLink";

type ArticleLayoutProps = {
  tag: string;
  readTime: string;
  title: string;
  dek: string;
  children: ReactNode;
};

export default function ArticleLayout({ tag, readTime, title, dek, children }: ArticleLayoutProps) {
  return (
    <article className="px-[clamp(20px,5vw,48px)] pt-[clamp(100px,20vw,170px)] pb-10">
      <div className="mx-auto max-w-[760px]">
        <RevealLink
          href="/insights"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/50 hover:text-brand-dark"
        >
          ← Back to Insights
        </RevealLink>
        <Reveal delay={60} className="mb-4.5 flex items-center gap-3 text-[13px] text-ink/50">
          <span className="rounded-full bg-tint px-3 py-[5px] text-[11.5px] font-semibold tracking-[.04em] text-brand-dark uppercase">{tag}</span>
          <span>{readTime}</span>
        </Reveal>
        <Reveal as="h1" delay={120} className="mb-5.5 text-[clamp(32px,5vw,50px)] leading-[1.15] font-bold tracking-[-.03em]">
          {title}
        </Reveal>
        <Reveal as="p" delay={180} className="mb-10 text-lg leading-relaxed text-ink/60">
          {dek}
        </Reveal>

        <Reveal delay={240} className="prose-article text-[17px] leading-[1.85] text-ink/82">
          {children}
        </Reveal>

        <Reveal className="mt-14 rounded-[26px] bg-ink p-10 text-center text-canvas">
          <h3 className="mb-3.5 text-2xl font-bold tracking-[-.02em]">Not sure if this is you?</h3>
          <p className="mx-auto mb-6.5 max-w-[440px] text-[15.5px] leading-relaxed text-canvas/65">
            A 20-minute call is enough for us to tell you honestly whether an audit would actually help.
          </p>
          <CalButton variant="green" size="lg">Book a free consultation call</CalButton>
        </Reveal>
      </div>
    </article>
  );
}
