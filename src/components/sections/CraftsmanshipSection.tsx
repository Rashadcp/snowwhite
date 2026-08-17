"use client";

import React from "react";
import { Scissors, Feather, Flame, Sparkles, Star, Award } from "lucide-react";

export default function CraftsmanshipSection() {
  const steps = [
    {
      icon: Scissors,
      number: "01",
      title: "Hand Patterning & Laser Cutting",
      description: "Every panel is measured to the millimeter and precision laser-cut to preserve weave alignment across double-height windows.",
    },
    {
      icon: Feather,
      number: "02",
      title: "Blind-Stitched Hems & Lead Weights",
      description: "Discreet bottom corner lead weights ensure curtains fall in straight, vertical architectural lines without flare.",
    },
    {
      icon: Flame,
      number: "03",
      title: "Steam-Memory Shape Pleating",
      description: "High-pressure thermal steaming sets permanent S-wave or triple-pinch pleats that never lose shape, even after cleaning.",
    },
    {
      icon: Award,
      number: "04",
      title: "Somfy Smart Motor Calibration",
      description: "Our certified master installers program whisper-quiet motorized tracks, smart home bridges, and sun sensors.",
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-bronze text-xs font-bold tracking-widest text-[#8A3D1E] uppercase border border-[#B35C37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>About Snow White Atelier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Uncompromising <span className="bronze-gradient-text">Craftsmanship</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            From silk mills in Como to the Snow White master workroom, discover the meticulous steps behind every curtain we tailor.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-stone-200 hover:border-[#B35C37] transition-all duration-300 relative group shadow-sm hover:shadow-md"
              >
                <span className="font-serif text-4xl font-bold text-[#B35C37]/40 group-hover:text-[#B35C37] transition-colors block mb-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Testimonials Showcase */}
        <div id="reviews" className="glass-card-bronze p-8 sm:p-12 rounded-3xl border border-[#B35C37]/30 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-1 text-[#B35C37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B35C37]" />
                ))}
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 italic leading-snug font-bold">
                &ldquo;Snow White transformed our penthouse salon. The motorized velvet drapes open silently at sunrise, creating an atmosphere that takes our guests&apos; breath away.&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-stone-900 text-sm">Victoria Vance</p>
                <p className="text-xs font-bold text-[#8A3D1E]">Principal Architect, Vance & Co. Design Studio</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="glass-card p-4 rounded-2xl border border-stone-200 text-center shadow-sm">
                <span className="font-serif text-3xl font-bold text-stone-900 block">1,200+</span>
                <span className="text-[10px] text-stone-600 font-bold uppercase">Homes Draped</span>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-stone-200 text-center shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#8A3D1E] block">99.4%</span>
                <span className="text-[10px] text-stone-600 font-bold uppercase">5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
