"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
  { href: "/", label: "Heim" },
  { href: "/cocktails", label: "Kokteílar 101" },
  { href: "/recipes", label: "Uppskriftir" },
  { href: "/about", label: "Um Barinn" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header when scrolled past 80vh (after hero section)
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-10 transition-all duration-300" 
        style={{
          background: isScrolled 
            ? 'var(--hero-gradient-start)' 
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 
              className="text-xl md:text-3xl text-white transition-transform duration-300 group-hover:scale-105 uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              BARINN
            </h1>
          </Link>

          {/* Navigation - Pill shaped container - Desktop */}
          <nav className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 border border-white/20">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-full text-white transition-all text-sm ${
                  index === 0 ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
                style={{ fontFamily: 'var(--font-clash-regular)' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Login button - Desktop */}
          <Link 
            href="/login"
            className="hidden md:block px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20 text-sm backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-clash-regular)' }}
          >
            Innskráning
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl transition-colors"
                style={{ 
                  color: 'var(--hero-gradient-start)',
                  fontFamily: 'var(--font-clash-bold)'
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-4 text-white rounded-full text-lg"
              style={{ 
                backgroundColor: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              Innskráning
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
