"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const CONSENT_KEY = "id-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. private mode) — just show it every visit.
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // ignore — nothing to persist to
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[250] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-canvas/10 bg-ink px-[clamp(20px,5vw,48px)] py-5 text-canvas shadow-[0_-8px_30px_rgba(16,18,16,.25)]">
        <p className="m-0 max-w-[640px] text-[14px] leading-relaxed text-canvas/70">
          We use cookies to keep this site working well and to understand how it&apos;s used. Continuing to browse means you&apos;re okay with that.
        </p>
        <div className="flex flex-shrink-0 items-center gap-3">
          <MagneticButton
            as="button"
            type="button"
            variant="outline-dark"
            size="sm"
            onClick={() => respond("declined")}
          >
            Decline
          </MagneticButton>
          <MagneticButton
            as="button"
            type="button"
            variant="green"
            size="sm"
            onClick={() => respond("accepted")}
          >
            Accept
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
