"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";

interface DraperyCalculatorProps {
  onOpenConsultation: () => void;
}

export default function DraperyCalculator({ onOpenConsultation }: DraperyCalculatorProps) {
  const [widthFt, setWidthFt] = useState<number>(10);
  const [heightFt, setHeightFt] = useState<number>(9);
  const [fullness, setFullness] = useState<number>(2.5);
  const [includeMotor, setIncludeMotor] = useState<boolean>(true);
  const fabricTier = 150;

  const trackWidthMeters = (widthFt * 0.3048).toFixed(1);
  const fabricMetersEst = Math.ceil((widthFt * fullness * (heightFt + 1.5)) / 12);
  const estimatedCost = Math.round(fabricMetersEst * fabricTier + (includeMotor ? 450 : 150));

  return (
    <section id="services" className="py-24 relative bg-[#F5F0E6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-bronze text-xs font-bold tracking-widest text-[#8A3D1E] uppercase border border-[#B35C37]/30">
              <Calculator className="w-3.5 h-3.5 text-[#B35C37]" />
              <span>Snow White Services</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Services & <span className="bronze-gradient-text">Yardage Estimator</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Use our atelier estimator to calculate exact fabric yardage, pleat fullness multipliers, and track specs for your bespoke window installation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-stone-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#B35C37]/15 flex items-center justify-center text-[#B35C37]">
                  <Check className="w-3 h-3" />
                </div>
                <span>In-home laser measurement & custom hem fitting</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#B35C37]/15 flex items-center justify-center text-[#B35C37]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Automatic track length & bracket recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#B35C37]/15 flex items-center justify-center text-[#B35C37]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Optional Somfy Smart Motor integration pricing</span>
              </div>
            </div>
          </div>

          {/* Right Calculator Card */}
          <div className="lg:col-span-7 glass-card-bronze p-8 rounded-3xl border border-[#B35C37]/30 shadow-xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Window Width */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Window Width (Feet)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="3"
                    max="40"
                    value={widthFt}
                    onChange={(e) => setWidthFt(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-mono font-bold text-lg focus:outline-none focus:border-[#B35C37] shadow-sm"
                  />
                  <span className="absolute right-4 top-3.5 text-xs text-stone-500 font-semibold">FT</span>
                </div>
              </div>

              {/* Window Height */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Ceiling / Drop Height (Feet)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="4"
                    max="30"
                    value={heightFt}
                    onChange={(e) => setHeightFt(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-mono font-bold text-lg focus:outline-none focus:border-[#B35C37] shadow-sm"
                  />
                  <span className="absolute right-4 top-3.5 text-xs text-stone-500 font-semibold">FT</span>
                </div>
              </div>
            </div>

            {/* Pleat Style / Fullness Multiplier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Header Pleat Fullness
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 1.8, label: "Tailored Flat", sub: "1.8x Fullness" },
                  { value: 2.2, label: "S-Wave Fold", sub: "2.2x Fullness" },
                  { value: 2.5, label: "French Pinch", sub: "2.5x Fullness (Luxe)" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setFullness(item.value)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                      fullness === item.value
                        ? "bg-[#B35C37] text-white border-[#B35C37] font-bold shadow-md"
                        : "bg-white border-stone-200 text-stone-700 hover:border-stone-400"
                    }`}
                  >
                    <p className="font-bold">{item.label}</p>
                    <p className="text-[10px] opacity-90 mt-0.5">{item.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Motorization Checkbox */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
              <div>
                <span className="block text-xs font-bold text-stone-900">Somfy Silent Smart Motor Track</span>
                <span className="text-[11px] text-stone-600 font-medium">Includes RF remote & Wi-Fi home automation bridge</span>
              </div>
              <input
                type="checkbox"
                checked={includeMotor}
                onChange={(e) => setIncludeMotor(e.target.checked)}
                className="w-5 h-5 accent-[#B35C37] cursor-pointer"
              />
            </div>

            {/* Estimate Result Display */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/90 p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Fabric Required</span>
                <span className="font-serif text-2xl font-bold text-stone-900">{fabricMetersEst} Meters</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Track Metric</span>
                <span className="font-serif text-2xl font-bold text-stone-900">{trackWidthMeters} m Length</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#8A3D1E]">Est. Budget Range</span>
                <span className="font-serif text-2xl font-bold text-[#8A3D1E]">${estimatedCost} - ${estimatedCost + 300}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-xl hover:shadow-[#B35C37]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Precise Measuring & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
