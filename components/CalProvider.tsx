"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCalApi } from "@calcom/embed-react";

const FLOATING_BUTTON_DELAY_MS = 8000;
const IDLE_FALLBACK_MS = 12000;

// Module-level singleton: the embed script + "ui" config only ever load
// once per page session, no matter how many signals ask for it.
let calLoadPromise: ReturnType<typeof getCalApi> | null = null;

function loadCal() {
  if (!calLoadPromise) {
    calLoadPromise = getCalApi({ namespace: "meeting" }).then((cal) => {
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#32cc40" },
          dark: { "cal-brand": "#32cc40" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      return cal;
    });
  }
  return calLoadPromise;
}

export default function CalProvider() {
  const pathname = usePathname();

  // Re-scan for [data-cal-link] buttons on every route change (client-side
  // navigation doesn't remount this component), so a button that only
  // exists on the page you just navigated to still triggers a lazy load
  // when it nears the viewport.
  useEffect(() => {
    if (calLoadPromise) return; // already loading/loaded — nothing left to watch for
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-cal-link]"));
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadCal();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  // Everything below only needs to be set up once for the whole session:
  // a click-delegated listener (always current, survives navigation) so a
  // click on a booking button never silently does nothing even if the
  // script hasn't loaded yet, an idle-time fallback so it's not deferred
  // forever, and the floating bubble (desktop only, well after load).
  useEffect(() => {
    let cancelled = false;
    let floatingTimer: ReturnType<typeof setTimeout> | undefined;
    let idleHandle: number | undefined;

    const onClickCapture = (e: MouseEvent) => {
      const target = e.target instanceof HTMLElement ? e.target.closest<HTMLElement>("[data-cal-link]") : null;
      if (target) loadCal();
    };
    document.addEventListener("click", onClickCapture, { capture: true });

    const ric = window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, IDLE_FALLBACK_MS));
    const cic = window.cancelIdleCallback ?? window.clearTimeout;
    idleHandle = ric(() => {
      if (!cancelled) loadCal();
    }, { timeout: IDLE_FALLBACK_MS }) as unknown as number;

    floatingTimer = setTimeout(() => {
      if (cancelled) return;
      if (!window.matchMedia("(min-width: 640px)").matches) return;
      loadCal().then((cal) => {
        if (cancelled) return;
        cal("floatingButton", {
          calLink: "insidedynamics/meeting",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        });
      });
    }, FLOATING_BUTTON_DELAY_MS);

    return () => {
      cancelled = true;
      document.removeEventListener("click", onClickCapture, { capture: true });
      if (floatingTimer) clearTimeout(floatingTimer);
      if (idleHandle !== undefined) cic(idleHandle);
    };
  }, []);

  return null;
}
