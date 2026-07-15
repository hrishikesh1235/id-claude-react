import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { getInsightBySlug, INSIGHTS } from "@/lib/insights";

import AiUxDesignPrinciples from "../_content/ai-ux-design-principles";
import DesignSprintVsRedesign from "../_content/design-sprint-vs-redesign";
import DesignSystemScaling from "../_content/design-system-scaling";
import FoundersUserResearch from "../_content/founders-user-research";
import HeuristicEvaluation from "../_content/heuristic-evaluation";
import InhouseVsAgencyVsConsultant from "../_content/inhouse-vs-agency-vs-consultant";
import OnboardingAudit from "../_content/onboarding-audit";
import SaasBrandIdentity from "../_content/saas-brand-identity";
import SaasWebsiteConversion from "../_content/saas-website-conversion";
import UxAuditWarningSigns from "../_content/ux-audit-warning-signs";

const CONTENT: Record<string, React.ComponentType> = {
  "ux-audit-warning-signs": UxAuditWarningSigns,
  "design-sprint-vs-redesign": DesignSprintVsRedesign,
  "founders-user-research": FoundersUserResearch,
  "design-system-scaling": DesignSystemScaling,
  "inhouse-vs-agency-vs-consultant": InhouseVsAgencyVsConsultant,
  "onboarding-audit": OnboardingAudit,
  "saas-website-conversion": SaasWebsiteConversion,
  "ai-ux-design-principles": AiUxDesignPrinciples,
  "saas-brand-identity": SaasBrandIdentity,
  "heuristic-evaluation": HeuristicEvaluation,
};

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getInsightBySlug(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getInsightBySlug(slug);
  const Content = CONTENT[slug];
  if (!meta || !Content) notFound();

  return (
    <ArticleLayout tag={meta.tag} readTime={meta.readTime} title={meta.title} dek={meta.excerpt}>
      <Content />
    </ArticleLayout>
  );
}
