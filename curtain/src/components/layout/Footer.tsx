"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layers, ShieldCheck, Award, Sparkles, Send, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#1F1C19] border-t border-stone-800 text-stone-300 text-xs">
      {/* Top Banner Guarantees */}
      <div className="border-b border-stone-800/80 py-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#D97E59] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-white font-bold text-sm">15-Year Master Warranty</h4>
              <p className="text-stone-400 text-[11px]">Comprehensive coverage on motorized tracks, seams, and fabric light-fastness.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#D97E59] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-white font-bold text-sm">OEKO-TEX® Certified Eco Textiles</h4>
              <p className="text-stone-400 text-[11px]">Free from harmful chemical dyes. 100% sustainable European weavers.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#D97E59] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-white font-bold text-sm">Somfy® Certified Smart Partner</h4>
              <p className="text-stone-400 text-[11px]">Precision silent automation integrated seamlessly into your home system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <Image src="/logo.png" alt="Snow White Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                SNOW WHITE
              </span>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm font-normal">
              Creating bespoke architectural curtains, velvet drapes, and smart window coverings tailored for luxury private residences, penthouses, and hotels worldwide.
            </p>
            <div className="space-y-2 pt-2 text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97E59] shrink-0 mt-0.5" />
                <span>Snow White Decor, Opp. Ma'din Public School, Melmuri (P.O), Malappuram (Dist), Kerala - 676514</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97E59] shrink-0" />
                <span>+91 95394 37537 / +91 97440 44819</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97E59] shrink-0" />
                <span>contact@snowwhitecurtains.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-serif text-white font-bold text-sm tracking-wider uppercase text-[#D97E59]">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#D97E59] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D97E59] transition-colors">About</Link></li>
              <li><Link href="/gallery" className="hover:text-[#D97E59] transition-colors">Gallery</Link></li>
              <li><Link href="/services" className="hover:text-[#D97E59] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#D97E59] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Tools & Trade */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-serif text-white font-bold text-sm tracking-wider uppercase text-[#D97E59]">
              Atelier Tools
            </h5>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="hover:text-[#D97E59] transition-colors">3D Fabric Visualizer</Link></li>
              <li><Link href="/services" className="hover:text-[#D97E59] transition-colors">Yardage Estimator</Link></li>
              <li><Link href="/about" className="hover:text-[#D97E59] transition-colors">Craftsmanship</Link></li>
              <li><Link href="/about" className="hover:text-[#D97E59] transition-colors">Client Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-[#D97E59] transition-colors">Trade Portal</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-serif text-white font-bold text-sm tracking-wider uppercase text-[#D97E59]">
              Snow White Privé Newsletter
            </h5>
            <p className="text-stone-400 text-xs font-normal">
              Subscribe to receive exclusive lookbooks, textile trend reports, and private seasonal fabric releases.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D97E59]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#B35C37] text-white font-bold rounded-lg hover:bg-[#D97E59] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-[#B35C37]/15 border border-[#B35C37]/30 text-[#D97E59] text-xs font-bold">
                Welcome to Snow White Privé. Lookbook dispatched.
              </div>
            )}
          </div>

        </div>

        <div className="pt-12 mt-12 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] gap-4">
          <p>© 2026 Snow White Haute Draperie LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300">Warranty Registration</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
