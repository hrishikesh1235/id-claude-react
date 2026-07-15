export const SITE = {
  name: "Inside Dynamics",
  tagline: "Design consultants for founders who don't have time to get design wrong.",
  email: "contact@insidedynamics.in",
  phone: "(+91) 755-945-2405",
  phoneHref: "tel:+917559452405",
  location: "Pune · Bengaluru · Gurugram, India",
  instagram: "https://www.instagram.com/insidedynamics/",
  linkedin: "https://www.linkedin.com/company/insidedynamics/",
  studios: ["Pune", "Bengaluru", "Gurugram"],
} as const;

export const CAL_LINK = "insidedynamics/meeting";
export const CAL_NAMESPACE = "meeting";

/**
 * Menu overlay links (numbered, full-screen takeover). Home's #work/#faq stay
 * as in-page anchors since those sections only exist on the home page — every
 * other item now points at its own dedicated route rather than a home anchor.
 */
export const MENU_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
] as const;

export const FOOTER_PAGE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "UX Research", href: "/services/ux-research" },
  { label: "UX Consulting", href: "/services/ux-consulting" },
] as const;
