"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "HEIM" },
  { href: "/about", label: "UPPSKRIFTIR" },
  { href: "/menu", label: "KOKTEILL 101" },
  { href: "/contact", label: "UM BARINN" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--background)' }}>
        <div className="flex items-center justify-center px-8 py-6 md:px-12 md:py-8 relative">
          <Link href="/" className="group">
            <h1 className="text-3xl md:text-4xl font-custom transition-transform duration-300 group-hover:scale-105" style={{ fontWeight: 400, color: 'var(--foreground)' }}>
              Barinn
            </h1>
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 md:right-12 w-12 h-12 flex items-center justify-center z-[101]"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <div className="grid grid-cols-2 gap-1.5 w-7 h-7">
                <div className="rounded-sm" style={{ backgroundColor: 'var(--foreground)' }}></div>
                <div className="rounded-sm" style={{ backgroundColor: 'var(--foreground)' }}></div>
                <div className="rounded-sm" style={{ backgroundColor: 'var(--foreground)' }}></div>
                <div className="rounded-sm" style={{ backgroundColor: 'var(--foreground)' }}></div>
              </div>
            ) : (
              <div className="relative w-7 h-7">
                <div 
                  className="absolute top-1/2 left-0 w-full h-0.5 rounded-sm"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    transform: 'rotate(45deg) translateY(-50%)'
                  }}
                />
                <div 
                  className="absolute top-1/2 left-0 w-full h-0.5 rounded-sm"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    transform: 'rotate(-45deg) translateY(-50%)'
                  }}
                />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Full screen menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'var(--foreground)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <nav className="w-full max-w-4xl px-8 space-y-8 md:space-y-12" onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item) => (
              <div key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl md:text-6xl lg:text-7xl font-orange-squash font-semibold transition-all duration-300 hover:text-subtext hover:translate-x-4 origin-left"
                  style={{ color: 'var(--background)' }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
