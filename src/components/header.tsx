"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/",                           label: "Inicio" },
  { href: "/tienda",                     label: "Tienda" },
  { href: "/sobre-nosotros",             label: "Sobre Nosotros" },
  { href: "/sobre-nosotros#contactanos", label: "Contáctanos" },
];

export function Header() {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHidden,     setIsHidden]     = useState(false);
  const [lastScrollY,  setLastScrollY]  = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setIsHidden(y > lastScrollY && y > 80);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled ? "glass shadow-xl shadow-black/10 dark:shadow-black/30" : "bg-transparent"
      }`}
    >
      {/* Línea neon superior al hacer scroll */}
      {isScrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(33,158,188,0.5), rgba(168,85,247,0.4), transparent)" }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110">
              <Image src="/img/image.png" alt="JEDYX SPORT Logo" fill className="object-contain" priority />
            </div>
            <span className="text-lg md:text-xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight">
              <span className="text-prussian-600 dark:text-sky-50">JEDYX </span>
              <span className="text-orange-400">SPORT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium
                           text-prussian-600/70 dark:text-sky-200/70
                           rounded-xl transition-all duration-300
                           hover:bg-bluegreen-400/8 hover:text-prussian-600 dark:hover:text-sky-50 group"
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px rounded-full transition-all duration-300 group-hover:w-2/3"
                  style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
                />
              </Link>
            ))}
            <Link
              href="/tienda"
              className="btn-glow ml-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl
                         bg-gradient-to-r from-orange-400 to-orange-500
                         shadow-md shadow-orange-400/20
                         hover:shadow-lg hover:shadow-orange-400/40 hover:-translate-y-0.5
                         active:translate-y-0 transition-all duration-300"
            >
              Explorar Ahora
            </Link>

            {/* Theme toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl
                         hover:bg-bluegreen-400/10 transition-colors
                         border border-[var(--border-card)]"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2 bg-bluegreen-400" : "bg-prussian-600 dark:bg-sky-200/70"}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-0" : "bg-prussian-600 dark:bg-sky-200/70"}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2 bg-bluegreen-400" : "bg-prussian-600 dark:bg-sky-200/70"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass mx-4 mb-4 p-4 rounded-2xl border border-[var(--glass-border)] shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium
                           text-prussian-600/70 dark:text-sky-200/70
                           rounded-xl hover:bg-bluegreen-400/10
                           hover:text-prussian-600 dark:hover:text-sky-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tienda"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-bold text-center text-white
                         bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl shadow-md"
            >
              Explorar Ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
