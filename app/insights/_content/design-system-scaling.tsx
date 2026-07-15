export default function DesignSystemScaling() {
  return (
    <>
      <p>Design systems built for a team of one rarely survive contact with a team of two. Not because the components are wrong, but because the system was never actually a system — it was a set of decisions living in one person&apos;s head, applied consistently only because that person touched every screen.</p>

      <h2>The first hire exposes everything undocumented</h2>
      <p>The moment a second designer or a contractor joins, every implicit rule becomes a real question: why is this spacing 12px here and 16px there? Is this shade of green a semantic &quot;success&quot; color or just what looked good on that one screen? If the answer lives only in your memory, the system doesn&apos;t scale — it just adds meetings.</p>

      <h2>Start smaller than you think you need to</h2>
      <p>A design system that survives growth doesn&apos;t start with a 40-component library. It starts with the five things that touch every screen: type scale, color tokens (not just hex values — named roles like primary, surface, and danger), spacing scale, corner radii, and button states. Everything else can stay ad hoc a little longer than founders expect.</p>

      <h2>Name decisions, don&apos;t just make them</h2>
      <p>The real unlock isn&apos;t the Figma file — it&apos;s writing down why. &quot;We use 8px increments so spacing stays predictable across screen sizes&quot; is one sentence that saves your third hire from re-litigating it. A system without rationale becomes a system people quietly work around.</p>

      <h2>Build it in the tool your engineers actually use</h2>
      <p>A beautiful Figma library that never makes it into code is a design system in name only. The version that survives is the one where tokens live in code as early as possible — even just a handful of CSS variables — so design and engineering are pointing at the same source of truth from day one.</p>

      <h2>Assign an owner, even part-time</h2>
      <p>Systems drift without someone accountable for them. It doesn&apos;t need to be a full-time role at 10 hires — but someone should have &quot;does this new component fit the system, or does the system need to change&quot; as an explicit part of their job, or the system quietly becomes optional.</p>
    </>
  );
}
