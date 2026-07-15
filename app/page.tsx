import type { Metadata } from "next";
import HomeView from "./HomeView";

export const metadata: Metadata = {
  title: "Inside Dynamics — Design Consultants, Pune",
  description:
    "A design consultancy that diagnoses what's holding your brand back — then designs, builds, and markets the way forward.",
};

export default function Page() {
  return <HomeView />;
}
