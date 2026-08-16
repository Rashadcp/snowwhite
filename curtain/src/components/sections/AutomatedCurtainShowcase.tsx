"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, Smartphone, Sun, Volume2, ShieldCheck, Play, Pause, RefreshCw, Zap, CheckCircle2 } from "lucide-react";

interface AutomatedCurtainShowcaseProps {
  onOpenConsultation: () => void;
}

export default function AutomatedCurtainShowcase({ onOpenConsultation }: AutomatedCurtainShowcaseProps) {
  // Curtain position: 0 (fully closed) to 100 (fully open)
  const [openPercentage, setOpenPercentage] = useState<number>(60);
  const [activeMode, setActiveMode] = useState<"drapes" | "blinds">("drapes");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleSetPosition = (percent: number) => {
    setIsAnimating(true);
    setOpenPercentage(percent);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Calculate width of each curtain panel (0% when open=100, 50% when open=0)
  const panelWidthPercent = (100 - openPercentage) / 2;

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
            <Cpu className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>Smart Home Automation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Automated <span className="bronze-gradient-text">Motorized Curtains & Blinds</span>
          </h2>
          <p className="text-stone-600 text-sm font-normal leading-relaxed">
            Experience whisper-quiet automated window treatments operated via remote control, smartphone app, or hands-free voice automation.
          </p>
        </div>

        {/* Interactive Motorized Motion Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1.5 glass-card rounded-2xl border border-stone-200 shadow-sm">
              <button
                onClick={() => setActiveMode("drapes")}
                className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeMode === "drapes"
                    ? "bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-white shadow-md"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                Motorized S-Fold Drapes
              </button>
              <button
                onClick={() => setActiveMode("blinds")}
                className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeMode === "blinds"
                    ? "bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-white shadow-md"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                Automated Roller Blinds
              </button>
            </div>

            {/* Smart Remote Control Panel */}
            <div className="glass-card-bronze p-6 rounded-3xl border border-[#B35C37]/30 shadow-lg space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A3D1E] flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#B35C37]" />
                  <span>Somfy® Smart Remote Simulation</span>
                </span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${isAnimating ? "bg-[#B35C37] text-white animate-pulse" : "bg-emerald-100 text-emerald-800"}`}>
                  {isAnimating ? "Motor Gliding..." : "Motor Idle"}
                </span>
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleSetPosition(100)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    openPercentage === 100
                      ? "bg-[#B35C37] text-white border-[#B35C37] shadow-md"
                      : "bg-white/80 text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  100% Open
                </button>
                <button
                  onClick={() => handleSetPosition(50)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    openPercentage === 50
                      ? "bg-[#B35C37] text-white border-[#B35C37] shadow-md"
                      : "bg-white/80 text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  50% Filter
                </button>
                <button
                  onClick={() => handleSetPosition(0)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    openPercentage === 0
                      ? "bg-[#B35C37] text-white border-[#B35C37] shadow-md"
                      : "bg-white/80 text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  0% Closed
                </button>
              </div>

              {/* Slider for Smooth Custom Position */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700">
                  <span>Glide Position Adjustment</span>
                  <span className="text-[#B35C37] font-mono">{openPercentage}% Open</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={openPercentage}
                  onChange={(e) => handleSetPosition(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B35C37]"
                />
              </div>
            </div>

            {/* Key Automation Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass-card rounded-2xl border border-stone-200 space-y-1">
                <Volume2 className="w-5 h-5 text-[#B35C37]" />
                <h4 className="font-bold text-stone-900 text-xs">Whisper Quiet</h4>
                <p className="text-[11px] text-stone-500 font-normal">&lt;35dB Somfy® Glydea motor</p>
              </div>

              <div className="p-4 glass-card rounded-2xl border border-stone-200 space-y-1">
                <Sun className="w-5 h-5 text-[#B35C37]" />
                <h4 className="font-bold text-stone-900 text-xs">Sunrise Schedules</h4>
                <p className="text-[11px] text-stone-500 font-normal">Auto open/close by time</p>
              </div>

              <div className="p-4 glass-card rounded-2xl border border-stone-200 space-y-1">
                <Smartphone className="w-5 h-5 text-[#B35C37]" />
                <h4 className="font-bold text-stone-900 text-xs">App & Voice Control</h4>
                <p className="text-[11px] text-stone-500 font-normal">Alexa, Siri & HomeKit</p>
              </div>

              <div className="p-4 glass-card rounded-2xl border border-stone-200 space-y-1">
                <Zap className="w-5 h-5 text-[#B35C37]" />
                <h4 className="font-bold text-stone-900 text-xs">Concealed Track</h4>
                <p className="text-[11px] text-stone-500 font-normal">Zero visible motor wires</p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all cursor-pointer shadow-md"
            >
              Book Automated Motorized Demo
            </button>
          </div>

          {/* Right Visual Window Simulator Display (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-2xl relative">
              
              {/* Window Frame Header Bar with Metallic Motor Channel */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3 text-xs font-bold text-stone-600">
                <span className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isAnimating ? "bg-[#B35C37] animate-ping" : "bg-emerald-500"}`} />
                  <span>Somfy® Recessed Aluminum Track</span>
                </span>
                <span className="font-mono text-[11px] text-[#B35C37]">
                  {activeMode === "drapes" ? "Bi-Parting S-Wave Motor Track" : "Cassette Roller Blind System"}
                </span>
              </div>

              {/* Realistic Interactive Window Viewport */}
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl">
                
                {/* Background Window View (Real Architectural Interior Window) */}
                <Image
                  src="/curtain_dining_sheer.jpg"
                  alt="Architectural Window"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                  className="object-cover brightness-95 scale-100 transition-all duration-1000"
                />

                {/* Soft Acoustic Sheer Curtain Underlay (Translates sunlight softly) */}
                <div
                  className="absolute inset-0 bg-white/10 backdrop-blur-[1px] transition-opacity duration-1000 pointer-events-none"
                  style={{ opacity: openPercentage > 80 ? 0.3 : 0.6 }}
                >
                  <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.06)_20px,rgba(255,255,255,0.06)_40px)]" />
                </div>

                {/* Visible Motorized Aluminum Top Track & Glider Carriers */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-950 border-b border-stone-700 z-30 flex items-center justify-between px-2">
                  {/* Left Carrier Glider */}
                  <div
                    className="w-4 h-3 bg-[#B35C37] rounded-sm transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-md"
                    style={{ marginLeft: `${panelWidthPercent}%` }}
                  />
                  {/* Right Carrier Glider */}
                  <div
                    className="w-4 h-3 bg-[#B35C37] rounded-sm transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-md"
                    style={{ marginRight: `${panelWidthPercent}%` }}
                  />
                </div>

                {/* Mode 1: Ultra-Realistic Bi-Parting S-Fold Drapery */}
                {activeMode === "drapes" && (
                  <>
                    {/* LEFT DRAPERY PANEL */}
                    <div
                      className="absolute top-4 left-0 bottom-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 shadow-2xl overflow-hidden"
                      style={{ width: `${panelWidthPercent}%` }}
                    >
                      {/* Heavy Architectural Fabric Base (Luxury Slate Ash Velvet) */}
                      <div className="relative w-full h-full bg-[#3F444A] shadow-2xl">
                        
                        {/* Realistic Vertical S-Wave Pleat Shadows & Highlights */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.5)_0px,rgba(255,255,255,0.22)_12px,rgba(0,0,0,0.35)_24px,rgba(0,0,0,0.7)_36px)]" />
                        
                        {/* Silk & Linen Weave Micro-Texture Layer */}
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(210,214,217,0.5),transparent)]" />
                        
                        {/* Curved Vertical Lead Seam Edge */}
                        <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-l from-[#25282C] via-[#606770] to-transparent shadow-2xl border-r border-white/20" />
                        
                        {/* Weighted Bottom Hem Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#25282C] border-t border-white/10" />
                      </div>
                    </div>

                    {/* RIGHT DRAPERY PANEL */}
                    <div
                      className="absolute top-4 right-0 bottom-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 shadow-2xl overflow-hidden"
                      style={{ width: `${panelWidthPercent}%` }}
                    >
                      {/* Heavy Architectural Fabric Base */}
                      <div className="relative w-full h-full bg-[#3F444A] shadow-2xl">
                        
                        {/* Realistic Vertical S-Wave Pleat Shadows & Highlights */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.7)_0px,rgba(0,0,0,0.35)_12px,rgba(255,255,255,0.22)_24px,rgba(0,0,0,0.5)_36px)]" />
                        
                        {/* Silk & Linen Weave Micro-Texture Layer */}
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(210,214,217,0.5),transparent)]" />
                        
                        {/* Curved Vertical Lead Seam Edge */}
                        <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-[#25282C] via-[#606770] to-transparent shadow-2xl border-l border-white/20" />
                        
                        {/* Weighted Bottom Hem Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#25282C] border-t border-white/10" />
                      </div>
                    </div>
                  </>
                )}

                {/* Mode 2: Ultra-Realistic Motorized Roller Blind */}
                {activeMode === "blinds" && (
                  <div
                    className="absolute top-4 left-0 right-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 shadow-2xl overflow-hidden"
                    style={{ height: `${100 - openPercentage}%` }}
                  >
                    {/* Woven Architectural Screen Fabric (Sand Beige / Cream Solar Fabric) */}
                    <div className="relative w-full h-full bg-gradient-to-b from-[#D8D2C7] via-[#EAE6DE] to-[#D8D2C7] shadow-2xl">
                      
                      {/* Horizontal Blind Slats & Texture Pattern */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(255,255,255,0.4)_4px,rgba(0,0,0,0.18)_8px)]" />
                      
                      {/* Side Cable Tension Wire Guides */}
                      <div className="absolute top-0 left-2 bottom-0 w-0.5 bg-stone-500/40" />
                      <div className="absolute top-0 right-2 bottom-0 w-0.5 bg-stone-500/40" />

                      {/* Heavy Aluminum Bottom Hem Rail Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-400 border-t border-white/40 shadow-lg flex items-center justify-between px-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Real-time Status Floating Bar Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/75 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 text-white text-xs z-30 shadow-2xl">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${isAnimating ? "text-[#B35C37] animate-spin" : "text-emerald-400"}`} />
                    <span className="font-semibold tracking-wide">
                      {openPercentage === 100
                        ? "100% Fully Open • Maximum Daylight"
                        : openPercentage === 0
                        ? "0% Fully Closed • 100% Acoustic Blackout"
                        : `Motor Positioned: ${openPercentage}% Open`}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-stone-300 bg-white/10 px-2.5 py-1 rounded-md">
                    Somfy® Glydea Ultra 60
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
