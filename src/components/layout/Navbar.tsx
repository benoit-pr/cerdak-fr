"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const links = [
  { href: "/produits",   label: "Produits" },
  { href: "/la-science", label: "La Science" },
  { href: "/clinique",   label: "Clinique" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-display font-semibold tracking-tight text-[var(--primary-dark)]">Cerdak</span>
          <span className="text-[11px] font-body font-medium text-[var(--muted)] mt-3 uppercase tracking-widest">France</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-body text-[var(--fg)] hover:text-[var(--primary)] transition-colors">{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="px-4 py-2 bg-[var(--primary)] text-white text-sm font-body font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors">
              Devenir distributeur
            </Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {[...links, { href: "/contact", label: "Devenir distributeur" }].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-body" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
