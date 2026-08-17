"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const stats = [
    { value: "7+", label: "Years In Kerala", highlight: "Est. 2019 Atelier" },
    { value: "850+", label: "Kerala Homes", highlight: "Bungalows & Penthouses" },
    { value: "250+", label: "Global Projects", highlight: "Outstation Estates" },
    { value: "100%", label: "Laser Precision", highlight: "Millimeter Accuracy" },
  ];

  return (
    <section id="about-teaser" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section: Pill Badge + Title Heading (Centered Above Image) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30 tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>MASTER ATELIER STORY • EST. 2019</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight text-center">
            About <span className="bronze-gradient-text">Snow White Atelier</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Frame (Renders 2nd below Header) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#B35C37]/30 group glass-card-bronze p-2">
              <div className="relative w-full rounded-2xl overflow-hidden bg-stone-900">
                <Image
                  src="/work1.jpeg"
                  alt="Snow White Atelier Bespoke Drapery Workroom"
                  width={800}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Stats, Regional Pills & CTAs */}
          <div className="lg:col-span-6 space-y-6">

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              For over 7 years, Snow White Atelier has been a leading destination for luxury custom window treatments—engineering bespoke motorized drapes, architectural sheers, and precision shade systems tailored for distinction.
            </p>

            <p className="text-stone-700 text-sm leading-relaxed font-normal">
              Having transformed over 850 premier residences and luxury waterfront estates, our master workroom also executes prestigious turnkey installations in <strong className="font-bold text-stone-900">neighboring regions and outstation locations</strong> across South India.
            </p>

            {/* Key Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 rounded-2xl border border-stone-300/80 hover:border-[#B35C37]/50 transition-all duration-300 shadow-sm hover:shadow-md text-center group"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8A3D1E] block group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-stone-800 font-bold uppercase tracking-wider block mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[9px] text-stone-500 font-medium block">
                    {stat.highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Regional Presence Pills */}
            <div className="space-y-2.5 pt-3 border-t border-stone-200">
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <div className="p-1.5 rounded-lg bg-[#B35C37]/15 text-[#B35C37] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-stone-900 font-bold">Kerala Core:</strong> Direct In-Home Laser Measurement & On-Site Fitting Crews
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-700">
                <div className="p-1.5 rounded-lg bg-[#8A3D1E]/15 text-[#8A3D1E] shrink-0 mt-0.5">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-stone-900 font-bold">Outstation Projects:</strong> Turnkey Installation Crews for Neighboring States & Regions
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full">
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 text-center shrink-0"
              >
                <span>Read Full Atelier Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-full border border-[#B35C37]/50 text-[#8A3D1E] font-bold text-xs uppercase tracking-wider hover:bg-[#B35C37] hover:text-white transition-all cursor-pointer bg-white/90 shadow-sm hover:-translate-y-0.5 text-center shrink-0"
              >
                Book Measurement
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
