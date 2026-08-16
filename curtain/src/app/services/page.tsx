"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ConsultationModal from "@/components/modals/ConsultationModal";
import { Sparkles, Ruler, Cpu, Scissors, ShieldCheck, Check } from "lucide-react";

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const servicesList = [
    {
      icon: Ruler,
      title: "In-Home Laser Measurement & Fitting",
      description: "Our certified drapery specialists conduct millimeter-precise 3D laser measurements of double-height windows, bay corners, and recessed ceiling pockets.",
      features: ["3D laser scanning for curved tracks", "Exact drop height clearance calculations", "Structural bracket weight assessment"],
    },
    {
      icon: Cpu,
      title: "Automated Motorized Curtains & Blinds",
      description: "Complete supply, track fabrication, and smart motor installation for automated curtains and motorized roller blinds with remote app control.",
      features: ["Whisper-quiet Somfy® motors", "App, remote & voice control", "Automated timer & sunrise schedules"],
    },
    {
      icon: Scissors,
      title: "Bespoke Hemming & Shape Pleating",
      description: "Hand-finished blind stitching with discreet corner lead weights to ensure curtains drop in crisp architectural vertical lines without flaring.",
      features: ["Lead-weighted corner hems", "Thermal steam memory pleating", "Interlining options for sound & thermal insulation"],
    },
    {
      icon: ShieldCheck,
      title: "Architect & Interior Designer Trade Portal",
      description: "Exclusive trade pricing, expedited swatch shipments, dedicated project managers, and custom CAD specifications for design studios.",
      features: ["Tier III trade discount rates", "Dedicated atelier account manager", "Custom fabric milling & dye matching"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#1C1917]">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-grow">
        {/* Full-Width Edge-to-Edge Top Banner with Curved Bottom Sides */}
        <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] overflow-hidden bg-stone-900 group rounded-b-[32px] sm:rounded-b-[50px] lg:rounded-b-[70px] shadow-2xl border-b border-[#B35C37]/30">
          {/* Banner Background Image */}
          <Image
            src="/curtain_dining_grand.jpg"
            alt="Snow White Master Atelier Services & Fitting Showcase"
            fill
            quality={95}
            priority
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          
          {/* Rich Multi-Layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-stone-950/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Banner Content Container Centered */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-16 sm:pt-20">
            <div className="space-y-3 sm:space-y-4 max-w-4xl text-center text-white z-10 mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] sm:text-xs font-bold text-white uppercase border border-white/20 shadow-md">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D97E59]" />
                <span>End-to-End Atelier Solutions</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
                Services & <span className="text-[#D97E59]">Atelier Solutions</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesList.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card-bronze p-8 rounded-3xl border border-[#B35C37]/30 shadow-xl hover:shadow-2xl hover:border-[#B35C37] transition-all duration-500 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B35C37] to-[#8A3D1E] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#B35C37] transition-colors pt-2">
                        {service.title}
                      </h2>

                      <p className="text-stone-700 text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-stone-200">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 text-xs text-stone-800 font-medium">
                            <div className="w-4 h-4 rounded-full bg-[#B35C37]/20 text-[#B35C37] flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={() => setIsConsultationOpen(true)}
                        className="w-full py-3.5 rounded-full border border-[#B35C37]/50 text-[#8A3D1E] font-bold text-xs uppercase tracking-wider hover:bg-[#B35C37] hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        Book {service.title.split(" ")[0]} Service
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
