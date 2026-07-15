"use client";

import MagneticButton, { PILL_SIZES, PILL_VARIANTS } from "./MagneticButton";

export default function CalButton({
  children,
  variant = "dark",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  variant?: keyof typeof PILL_VARIANTS;
  size?: keyof typeof PILL_SIZES;
  className?: string;
}) {
  return (
    <MagneticButton
      as="button"
      type="button"
      variant={variant}
      size={size}
      className={className}
      data-cal-namespace="meeting"
      data-cal-link="insidedynamics/meeting"
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </MagneticButton>
  );
}
