"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/modals/ConsultationModal";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Ruler, Cpu, Award, Phone, MapPin, Globe } from "lucide-react";

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#1C1917]">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-grow">
        {/* Full-Width Edge-to-Edge Top Banner with Curved Bottom Sides */}
        <section className="relative w-full h-[450px] sm:h-[580px] lg:h-[650px] overflow-hidden bg-stone-900 group rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-[#B35C37]/30">
          {/* Banner Background Image */}
          <Image
            src="/work1.jpeg"
            alt="Snow White Master Atelier Bespoke Drapery Showcase"
            fill
            quality={95}
            priority
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          
          {/* Rich Multi-Layer Gradient Overlays for High Contrast Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-stone-950/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Banner Content Container */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20">
            <div className="space-y-4 max-w-4xl text-center text-white z-10 mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase border border-white/20 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D97E59]" />
                <span>Master Atelier Story • Est. 2019</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
                About <span className="text-[#D97E59]">Snow White Atelier</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Essential Story & Key Metrics */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Frame (work2.jpeg) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="glass-card rounded-3xl p-3 border border-stone-200 shadow-xl overflow-hidden">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/work2.jpeg"
                      alt="Snow White Master Atelier Workroom S-Fold Wave"
                      width={600}
                      height={450}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      className="w-full h-auto block rounded-2xl object-contain hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Right Story Narrative & Key Metrics */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                  7 Years of Precision, Elegance & <span className="bronze-gradient-text">Architectural Drapery</span>
                </h2>

                <p className="text-stone-700 text-sm leading-relaxed">
                  Founded with a passion for custom textile craftsmanship, Snow White Atelier blends European hand-tailoring with 3D digital laser measurement. Every curtain panel is custom-stitched in our master workroom with lead-weighted bottom hems and permanent memory-shape pleats.
                </p>

                <p className="text-stone-700 text-sm leading-relaxed">
                  From soaring double-height living rooms to whisper-quiet Somfy® motorized tracks, our dedicated in-house specialists handle everything from design consultation to turnkey fitting.
                </p>

                {/* Key Metric Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-200">
                  <div className="p-3 rounded-2xl glass-card border border-stone-200 text-center">
                    <span className="font-serif text-2xl font-bold text-[#8A3D1E] block">7+</span>
                    <span className="text-[10px] text-stone-600 font-bold uppercase">Years Excellence</span>
                  </div>
                  <div className="p-3 rounded-2xl glass-card border border-stone-200 text-center">
                    <span className="font-serif text-2xl font-bold text-stone-900 block">850+</span>
                    <span className="text-[10px] text-stone-600 font-bold uppercase">Homes Fitted</span>
                  </div>
                  <div className="p-3 rounded-2xl glass-card border border-stone-200 text-center">
                    <span className="font-serif text-2xl font-bold text-[#8A3D1E] block">100%</span>
                    <span className="text-[10px] text-stone-600 font-bold uppercase">Laser Precision</span>
                  </div>
                  <div className="p-3 rounded-2xl glass-card border border-stone-200 text-center">
                    <span className="font-serif text-2xl font-bold text-stone-900 block">Somfy®</span>
                    <span className="text-[10px] text-stone-600 font-bold uppercase">Smart Certified</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership & Founders Section - Prominently Positioned Up */}
        <section className="py-16 bg-transparent relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30 tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                Meet Our <span className="bronze-gradient-text">Founders</span>
              </h2>
              <p className="text-stone-600 text-sm font-normal leading-relaxed">
                The master visionaries behind Snow White Atelier, committed to millimeter-precise tailoring, smart automation, and bespoke interior luxury.
              </p>
            </div>

            {/* Executive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Founder 1: Firoskhan */}
              <div className="group glass-card-bronze p-6 sm:p-8 rounded-3xl border border-[#B35C37]/30 shadow-xl hover:shadow-2xl hover:border-[#B35C37] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6">
                
                {/* Clean Portrait Frame */}
                <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-[#B35C37]/40 shadow-lg bg-stone-100 relative">
                  <Image
                    src="/owner1.png"
                    alt="Firoskhan - Co-Founder & Managing Partner"
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    loading="lazy"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Narrative Details */}
                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A3D1E] bg-[#B35C37]/15 px-3 py-1 rounded-full border border-[#B35C37]/30 inline-block">
                      Founder & Managing Partner
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#B35C37] transition-colors pt-1.5">
                      Firoskhan
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed font-normal">
                    Directs master workroom operations, hand-tailored pleats, fabric curation, and client consultations.
                  </p>

                  <div className="pt-1">
                    <a
                      href="tel:9539437537"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white text-xs font-bold tracking-wider hover:shadow-lg transition-all cursor-pointer shadow-sm group-hover:scale-105"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 95394 37537</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder 2: Sharafudheen */}
              <div className="group glass-card-bronze p-6 sm:p-8 rounded-3xl border border-[#B35C37]/30 shadow-xl hover:shadow-2xl hover:border-[#B35C37] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6">
                
                {/* Clean Portrait Frame */}
                <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-[#B35C37]/40 shadow-lg bg-stone-100 relative">
                  <Image
                    src="/owner2.png"
                    alt="Sharafudheen - Co-Founder & Managing Partner"
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    loading="lazy"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Narrative Details */}
                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A3D1E] bg-[#B35C37]/15 px-3 py-1 rounded-full border border-[#B35C37]/30 inline-block">
                      Founder & Managing Partner
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#B35C37] transition-colors pt-1.5">
                      Sharafudheen
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed font-normal">
                    Leads Somfy® smart motorization engineering, digital 3D laser scanning, and outstation project fitting.
                  </p>

                  <div className="pt-1">
                    <a
                      href="tel:+919744044819"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white text-xs font-bold tracking-wider hover:shadow-lg transition-all cursor-pointer shadow-sm group-hover:scale-105"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 97440 44819</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
