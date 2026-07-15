import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact — Inside Dynamics",
  description:
    "No forms that vanish into a CRM. Email us, call us, or book the free consultation directly — a real person replies within one business day, usually faster.",
};

export default function Page() {
  return <ContactView />;
}
