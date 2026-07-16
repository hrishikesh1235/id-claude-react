"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactElement } from "react";
import MagneticButton, { PILL_SIZES, PILL_VARIANTS } from "./MagneticButton";

const LinkTag = Link as unknown as ElementType;

type MagneticLinkProps = {
  href: string;
  variant?: keyof typeof PILL_VARIANTS;
  size?: keyof typeof PILL_SIZES;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

/**
 * MagneticButton, pre-bound to next/link's Link — see RevealLink for why
 * this boundary exists (Server Components can't pass `Link` as a `as` prop).
 */
export default function MagneticLink({ href, variant, size, className, ...rest }: MagneticLinkProps) {
  const MagneticButtonAny = MagneticButton as unknown as (props: Record<string, unknown>) => ReactElement;
  return <MagneticButtonAny as={LinkTag} href={href} variant={variant} size={size} className={className} {...rest} />;
}
