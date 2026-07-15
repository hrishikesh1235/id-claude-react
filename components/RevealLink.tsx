"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactElement } from "react";
import Reveal from "./Reveal";

const LinkTag = Link as unknown as ElementType;

type RevealLinkProps = { href: string; delay?: number; className?: string } & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className"
>;

/**
 * Reveal, pre-bound to next/link's Link. Server Components can't pass a
 * component reference (like `Link`) as a prop into a Client Component
 * (Reveal's `as`), so this small client boundary exists to do that binding
 * locally instead.
 */
export default function RevealLink({ href, delay, className, ...rest }: RevealLinkProps) {
  const RevealAny = Reveal as unknown as (props: Record<string, unknown>) => ReactElement;
  return <RevealAny as={LinkTag} href={href} delay={delay} className={className} {...rest} />;
}
