export default function AiUxDesignPrinciples() {
  return (
    <>
      <p>Every product roadmap has an AI feature on it now. Fewer teams have thought through what makes an AI feature feel trustworthy rather than just impressive in a demo. The gap between the two is almost entirely a design problem, not a model problem.</p>

      <h2>Show your work, even briefly</h2>
      <p>Users trust AI output more when they can see a trace of how it got there — the sources it pulled from, the fields it used, a short &quot;why we suggested this.&quot; A black-box answer, however accurate, invites more suspicion than a visibly reasoned one.</p>

      <h2>Make uncertainty visible, not hidden</h2>
      <p>Confidently wrong is worse than visibly unsure. Interfaces that communicate a model&apos;s uncertainty — a confidence indicator, a &quot;double-check this&quot; nudge on lower-confidence output — earn more long-term trust than ones that present every answer with the same flat authority.</p>

      <h2>Design the edit, not just the generation</h2>
      <p>The most-used part of any AI feature usually isn&apos;t the generate button — it&apos;s what happens after, when a user needs to fix something the model got 80% right. If editing AI output takes more effort than doing the task manually, the feature will get abandoned regardless of how good the underlying model is.</p>

      <h2>Keep a human escape hatch</h2>
      <p>Every AI flow needs a visible, low-friction way to bypass it and do the task the old way. Users who feel trapped inside an AI-only flow — with no manual override — lose trust in the whole product, not just that one feature.</p>

      <h2>Don&apos;t let novelty replace usability</h2>
      <p>A chat interface is not automatically the right interface. Plenty of AI features are better served by a form, a button, or a suggestion inline in an existing flow than by a new conversational window. Choose the interaction model that fits the task, not the one that&apos;s currently fashionable.</p>
    </>
  );
}
