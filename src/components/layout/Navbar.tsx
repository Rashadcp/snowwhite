"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`rounded-full transition-all duration-500 px-6 sm:px-8 py-3 flex items-center justify-between border ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-[#B35C37]/30 shadow-xl shadow-stone-950/10"
              : "bg-white/90 backdrop-blur-md border-stone-200/90 shadow-lg shadow-stone-900/5"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Snow White Logo"
              width={180}
              height={48}
              priority
              style={{ width: "auto" }}
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14 xl:gap-16 text-xs uppercase tracking-[0.2em] font-bold text-stone-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#B35C37] font-extrabold"
                      : "hover:text-[#B35C37]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B35C37] rounded-full shadow-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-7 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-lg hover:shadow-[#B35C37]/25 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span>Connect Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B35C37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-7xl mx-auto mt-2 pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-[#B35C37]/30 px-6 py-6 space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-bold uppercase tracking-wider ${
                  pathname === link.href ? "text-[#B35C37]" : "text-stone-800 hover:text-[#B35C37]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-stone-200/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-center cursor-pointer shadow-md"
              >
                Connect Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


