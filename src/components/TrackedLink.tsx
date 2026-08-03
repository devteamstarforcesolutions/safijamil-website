"use client";

import Link from "next/link";
import { track, type TrackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event: TrackEvent;
  /** Which button/link this was, e.g. "hero_see_my_work" — becomes a GA4 parameter. */
  label?: string;
  /** Where on the site it was clicked, e.g. "contact_section". */
  location?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

/**
 * A link that reports its click to GTM. Uses next/link for internal routes and
 * a plain anchor for mailto:, tel: and external URLs.
 */
export default function TrackedLink({
  href,
  event,
  label,
  location,
  className,
  style,
  target,
  rel,
  children,
}: Props) {
  const onClick = () => track(event, { link_label: label, link_location: location, link_url: href });

  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={className} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
