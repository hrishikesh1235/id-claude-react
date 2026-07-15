"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactElement } from "react";
import TiltCard from "./TiltCard";

const LinkTag = Link as unknown as ElementType;

type TiltLinkProps = { href: string; strength?: number; className?: string } & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className"
>;

/**
 * TiltCard, pre-bound to next/link's Link — see RevealLink for why this
 * boundary exists (Server Components can't pass `Link` as TiltCard's `as` prop).
 */
export default function TiltLink({ href, strength, className, ...rest }: TiltLinkProps) {
  const TiltCardAny = TiltCard as unknown as (props: Record<string, unknown>) => ReactElement;
  return <TiltCardAny as={LinkTag} href={href} strength={strength} className={className} {...rest} />;
}
