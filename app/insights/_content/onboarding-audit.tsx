export default function OnboardingAudit() {
  return (
    <>
      <p>Onboarding drop-off rarely comes from one dramatic failure. It&apos;s usually death by a dozen small cuts — each one losing a few percent of users, none alarming enough on its own to trigger a redesign, until the compounding effect quietly caps your activation rate for years.</p>
      <p>This is the checklist we run first on every audit, roughly in the order users actually hit it.</p>

      <h2>Before they even sign up</h2>
      <ul>
        <li><strong>1. The value prop isn&apos;t restated at signup.</strong> Users arrive from an ad or a landing page with one promise in mind — if the signup form doesn&apos;t echo it, doubt creeps in immediately.</li>
        <li><strong>2. Too many fields, too early.</strong> Every field before the first &quot;aha moment&quot; is a small tax on momentum. Ask for the minimum, and ask for the rest once the user has a reason to trust you.</li>
      </ul>

      <h2>The first five minutes</h2>
      <ul>
        <li><strong>3. No clear next step after account creation.</strong> Landing on an empty dashboard with no guidance is one of the most common activation killers we see.</li>
        <li><strong>4. Empty states that explain nothing.</strong> A blank screen should sell the user on what will eventually be there, not just say &quot;no data yet.&quot;</li>
        <li><strong>5. Setup requires information the user doesn&apos;t have handy.</strong> Anything that sends a user away from the tab to go find something (a document, a teammate&apos;s email, an API key) is a natural drop-off point.</li>
      </ul>

      <h2>Getting to first value</h2>
      <ul>
        <li><strong>6. The core action is buried.</strong> If reaching the feature that proves your value takes more than two or three steps, most users won&apos;t get there unassisted.</li>
        <li><strong>7. No progress indicator on multi-step setup.</strong> Users tolerate friction far better when they can see how much is left.</li>
        <li><strong>8. Success isn&apos;t celebrated.</strong> When a user does complete the core action, if the product doesn&apos;t clearly acknowledge it, they may not even realize they&apos;ve reached the value you promised.</li>
      </ul>

      <h2>Keeping them past day one</h2>
      <ul>
        <li><strong>9. No reason to come back tomorrow.</strong> Great onboarding sets up a next visit, not just a first one.</li>
        <li><strong>10. Notifications are generic or absent.</strong> The gap between &quot;we should email them&quot; and &quot;we should email them something they&apos;ll actually want to open&quot; is where most re-engagement plans fail.</li>
        <li><strong>11. Support is the only path when something breaks.</strong> If the first error a new user hits sends them straight to a support ticket, that&apos;s a UX gap wearing a support costume.</li>
      </ul>

      <h2>Run this yourself first</h2>
      <p>Before commissioning anything formal, sign up for your own product on a fresh account, with no internal knowledge, and time how long it takes to reach real value. Most founders are surprised by what they find in that first ten minutes alone.</p>
    </>
  );
}
