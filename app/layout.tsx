import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CalProvider from "@/components/CalProvider";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionShell from "@/components/MotionShell";
import { cabinetGrotesk, generalSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Inside Dynamics — Design Consultants, Pune",
    template: "%s · Inside Dynamics",
  },
  description:
    "A design consultancy that diagnoses what's holding your brand back — then designs, builds, and markets the way forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable} ${cabinetGrotesk.variable}`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink antialiased">
        <CalProvider />
        <Header />
        <MotionShell />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
