"use client";

import React from "react";
import Link from "next/link";
import { Ruler, Cpu, Scissors, ShieldCheck, Check, ArrowRight, Calculator } from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const servicesList = [
    {
      icon: Ruler,
      title: "In-Home Laser Measurement & Fitting",
      description: "Our certified drapery specialists conduct millimeter-precise 3D laser measurements of double-height windows, bay corners, and recessed ceiling pockets.",
      features: ["3D laser scanning", "Drop height clearance", "Bracket weight assessment"],
    },
    {
      icon: Cpu,
      title: "Automated Motorized Curtains & Blinds",
      description: "Complete supply, track fabrication, and smart motor installation for automated curtains and motorized roller blinds.",
      features: ["Whisper-quiet Somfy® motors", "App, remote & voice control", "Automated timer schedules"],
    },
    {
      icon: Scissors,
      title: "Bespoke Hemming & Shape Pleating",
      description: "Hand-finished blind stitching with discreet corner lead weights to ensure curtains drop in crisp vertical lines.",
      features: ["Lead-weighted hems", "Thermal steam memory pleats", "Acoustic interlining"],
    },
    {
      icon: ShieldCheck,
      title: "Architect & Designer Trade Portal",
      description: "Exclusive trade pricing, expedited swatch shipments, dedicated project managers, and custom CAD specifications.",
      features: ["Tier III trade rates", "Dedicated atelier manager", "Custom dye matching"],
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
            <Calculator className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>End-to-End Atelier Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Services & <span className="bronze-gradient-text">Estimator Studio</span>
          </h2>
          <p className="text-stone-600 text-sm font-normal leading-relaxed">
            From white-glove laser measurement and silent motorization to instant fabric yardage calculation.
          </p>
        </div>

        {/* Services 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-3xl border border-stone-200 hover:border-[#B35C37]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-200/80 pt-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#B35C37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-stone-900 rounded-xl bg-stone-100 group-hover:bg-[#B35C37] group-hover:text-white transition-all cursor-pointer shadow-sm"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drapery Measurement & Estimate CTA Banner */}
        <div className="mt-14 glass-card-bronze p-8 sm:p-10 rounded-3xl border border-[#B35C37]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Calculate Your Custom Curtain & Track Requirements
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              Get an accurate measurement assessment, fabric yardage estimation, and custom motorized track quote tailored for your space.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
            >
              <span>Get Estimate & Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
