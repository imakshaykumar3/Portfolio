// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Akshay<span className="text-accent-blue">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/resume.pdf" download variant="secondary" className="text-xs">
            <Download size={14} /> Resume
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <ul className="section-container flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="/resume.pdf" download variant="secondary" className="w-fit">
                <Download size={14} /> Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
