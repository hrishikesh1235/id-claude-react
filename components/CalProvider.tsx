"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const FLOATING_BUTTON_DELAY_MS = 8000;

export default function CalProvider() {
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    (async () => {
      const cal = await getCalApi({ namespace: "meeting" });
      if (cancelled) return;

      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#32cc40" },
          dark: { "cal-brand": "#32cc40" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // The floating bubble competes with the cookie banner and eats space on
      // small screens, and there are already plenty of "Book a call" CTAs on
      // every page — so it only shows up on wider viewports, and only after
      // the visitor has been on the page a few seconds.
      timer = setTimeout(() => {
        if (cancelled) return;
        if (!window.matchMedia("(min-width: 640px)").matches) return;
        cal("floatingButton", {
          calLink: "insidedynamics/meeting",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        });
      }, FLOATING_BUTTON_DELAY_MS);
    })();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);
  return null;
}
