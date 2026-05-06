"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-secondary/10 bg-white/10 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          className="font-display text-xl font-semibold text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          href="/#inicio"
          onClick={() => setOpen(false)}
        >
          Bachmann<span className="text-primary">.</span>
        </Link>

        <button
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-secondary/15 text-secondary transition hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                className="nav-link rounded-lg px-3 py-2 font-display text-sm text-secondary/90 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-secondary/10 bg-background/95 transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <ul className="min-h-0 px-5">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                className="block rounded-lg px-3 py-3 font-display text-sm text-secondary/90 transition hover:bg-white/10 hover:text-primary"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
