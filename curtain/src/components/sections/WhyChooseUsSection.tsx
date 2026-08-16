"use client";

import React from "react";
import { Award, Ruler, Cpu, ShieldCheck, Gem, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenConsultation: () => void;
}

export default function WhyChooseUsSection({ onOpenConsultation }: WhyChooseUsSectionProps) {
  const whyUsReasons = [
    {
      icon: Award,
      title: "7+ Years Master Craftsmanship",
      description: "Over 7 years of specialized drapery tailoring across luxury residences and architectural projects.",
      badge: "7+ Years",
    },
    {
      icon: Ruler,
      title: "3D Laser Millimeter Precision",
      description: "Advanced digital laser scanning for exact drop heights, double-height bays, and recessed ceiling pockets.",
      badge: "Laser Accuracy",
    },
    {
      icon: Cpu,
      title: "Whisper-Quiet Smart Automation",
      description: "Certified Somfy® smart motorization with zero visible wires, remote app control, and sunrise timers.",
      badge: "Smart Home Ready",
    },
    {
      icon: Gem,
      title: "Curated International Textiles",
      description: "Direct access to 100% French organic flax linen, Belgian sheers, and acoustic blackout velvets.",
      badge: "Premium Weaves",
    },
    {
      icon: ShieldCheck,
      title: "Direct Workroom Quality & Pricing",
      description: "Hand-finished blind stitching, lead-weighted bottom hems, and direct workroom pricing with no middlemen.",
      badge: "Master Atelier",
    },
    {
      icon: CheckCircle2,
      title: "White-Glove Fitting & Warranty",
      description: "Complete turnkey installation handled by our certified in-house fitting team backed by our guarantee.",
      badge: "Full Turnkey",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>The Master Atelier Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Why Choose <span className="bronze-gradient-text">Snow White</span>
          </h2>
          <p className="text-stone-600 text-sm font-normal leading-relaxed">
            Uncompromising quality, laser precision, and seamless smart automation for your architectural drapery.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsReasons.map((reason, index) => {
            const IconComp = reason.icon;
            return (
              <div
                key={index}
                className="group glass-card rounded-3xl p-8 border border-stone-200 hover:border-[#B35C37]/50 transition-all duration-500 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A3D1E] bg-[#B35C37]/10 px-3 py-1 rounded-full border border-[#B35C37]/20">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B35C37] transition-colors leading-snug">
                    {reason.title}
                  </h3>
                  
                  <p className="text-stone-600 text-xs font-normal leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-200/80">
                  <span className="text-[11px] font-bold text-stone-700 flex items-center gap-1.5 group-hover:text-[#B35C37] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#B35C37]" />
                    <span>Snow White Standard</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <span>Schedule Free Measurement & Fitting Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
