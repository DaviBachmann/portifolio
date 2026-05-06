import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "subtle";
  download?: boolean;
};

const variants = {
  primary:
    "bg-primary text-background shadow-soft hover:bg-secondary focus-visible:ring-primary",
  ghost:
    "border border-secondary/20 bg-white/5 text-secondary hover:border-primary hover:bg-primary/15 focus-visible:ring-primary",
  subtle:
    "bg-secondary/10 text-secondary hover:bg-secondary/15 focus-visible:ring-secondary"
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-display text-sm font-medium transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    className
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
