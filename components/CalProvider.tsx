"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#32cc40" },
          dark: { "cal-brand": "#32cc40" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("floatingButton", {
        calLink: "insidedynamics/meeting",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      });
    })();
  }, []);
  return null;
}
