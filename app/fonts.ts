import localFont from "next/font/local";

// Self-hosted (previously loaded from Fontshare's CDN via a render-blocking
// <link> in <head> — that round-trip was a direct hit to FCP/LCP). Only the
// weights actually used in the app are included.
export const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const cabinetGrotesk = localFont({
  src: [
    { path: "./fonts/CabinetGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CabinetGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
});
