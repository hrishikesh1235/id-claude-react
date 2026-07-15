export type InsightMeta = {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  /** Card background treatment on the index grid, matches the design reference. */
  card?: "dark" | "brand";
};

export const INSIGHTS: InsightMeta[] = [
  {
    slug: "ux-audit-warning-signs",
    tag: "UX Audit",
    readTime: "6 min read",
    title: "5 warning signs your startup needs a UX audit",
    excerpt:
      "Rising support tickets and a shrinking activation rate aren't random — they're symptoms. Here's how to read them before they become a crisis.",
  },
  {
    slug: "design-sprint-vs-redesign",
    tag: "Process",
    readTime: "7 min read",
    title: "Design sprint vs. full redesign: which does your product need?",
    excerpt:
      "Not every problem needs a ground-up rebuild. A framework for scoping the right amount of change for where your product actually is.",
  },
  {
    slug: "founders-user-research",
    tag: "Research",
    readTime: "5 min read",
    title: "Why founders should sit in on user research",
    excerpt:
      "A summary slide never carries the tone of voice a user used when they got stuck. What's lost when founders only read the report.",
    card: "brand",
  },
  {
    slug: "design-system-scaling",
    tag: "Design Systems",
    readTime: "8 min read",
    title: "Building a design system that survives your first 10 hires",
    excerpt:
      "Most early design systems die the day a second designer joins. How to build one that scales past founder-led design.",
  },
  {
    slug: "inhouse-vs-agency-vs-consultant",
    tag: "Hiring a Partner",
    readTime: "6 min read",
    title: "In-house vs. agency vs. consultant: picking the right design partner",
    excerpt:
      "Each model solves a different problem. A practical way to match your stage and budget to the right kind of design help.",
  },
  {
    slug: "onboarding-audit",
    tag: "Onboarding",
    readTime: "6 min read",
    title: "The onboarding audit: 11 places founders lose new users",
    excerpt:
      "A checklist we run on every fintech and SaaS audit — the exact friction points that quietly cap your activation rate.",
    card: "dark",
  },
  {
    slug: "saas-website-conversion",
    tag: "Website Design",
    readTime: "7 min read",
    title: "SaaS website design that actually converts: what we check before a redesign",
    excerpt:
      "A polished homepage and a converting homepage are not the same thing. Here's what we audit before touching a single pixel.",
  },
  {
    slug: "ai-ux-design-principles",
    tag: "AI Technology",
    readTime: "8 min read",
    title: "Designing AI features founders can trust: UX principles beyond the chat box",
    excerpt:
      "Adding an AI feature is easy. Designing one users actually understand and trust is a different, much harder problem.",
    card: "brand",
  },
  {
    slug: "saas-brand-identity",
    tag: "Branding",
    readTime: "6 min read",
    title: "Who should build your brand identity? A founder's guide for SaaS companies",
    excerpt:
      "Your brand identity outlives your first pitch deck, your first hire, and probably your first pivot. Here's how to get it built right, once.",
  },
  {
    slug: "heuristic-evaluation",
    tag: "UI/UX",
    readTime: "6 min read",
    title: "Heuristic evaluation: the fastest way to catch UX problems before users do",
    excerpt:
      "You don't always need a research study to find what's broken. A structured expert review can surface most of it in a day.",
    card: "dark",
  },
];

export function getInsightBySlug(slug: string): InsightMeta | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
