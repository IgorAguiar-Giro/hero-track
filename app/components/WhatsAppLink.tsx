"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type WhatsAppLinkProps = {
  href: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

export default function WhatsAppLink({
  href,
  className,
  "aria-label": ariaLabel,
  children,
}: WhatsAppLinkProps) {
  const opening = useRef(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (opening.current) return;
    opening.current = true;

    window.location.assign(href);

    window.setTimeout(() => {
      opening.current = false;
    }, 1500);
  };

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
