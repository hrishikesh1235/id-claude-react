import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About — Inside Dynamics, Design Consultants, Pune",
  description:
    "Inside Dynamics is a design consultancy in Pune. We are deliberately small, deliberately senior, and deliberately picky about the projects we take on.",
};

export default function Page() {
  return <AboutView />;
}
