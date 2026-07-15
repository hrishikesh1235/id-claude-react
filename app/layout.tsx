import type { Metadata } from "next";
import CalProvider from "@/components/CalProvider";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionShell from "@/components/MotionShell";
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=cabinet-grotesk@500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col bg-canvas text-ink antialiased">
        <CalProvider />
        <Header />
        <MotionShell />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
