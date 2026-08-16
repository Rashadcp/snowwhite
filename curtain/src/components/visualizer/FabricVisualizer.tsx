"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Sun,
  Sunset,
  Moon,
  Sliders,
  Check,
  Info,
  Shield,
  Volume2,
  ArrowRight,
  Play,
  Square,
  Zap,
  Layers,
  ShoppingBag
} from "lucide-react";

interface FabricOption {
  id: string;
  name: string;
  material: string;
  weight: string;
  opacity: number;
  soundAbsorption: string;
  thermalRating: string;
  colors: { id: string; name: string; hex: string; gradient: string }[];
}

interface PleatOption {
  id: string;
  name: string;
  fullness: string;
  description: string;
  pattern: "pinch" | "sfold" | "grommet" | "box";
}

const FABRICS: FabricOption[] = [
  {
    id: "royal-velvet",
    name: "Imperial Plush Velvet",
    material: "100% Belgian Cotton Velvet",
    weight: "520 gsm",
    opacity: 98,
    soundAbsorption: "NRC 0.85 (High Acoustic)",
    thermalRating: "A+ Thermal Shield",
    colors: [
      { id: "cream", name: "Ivory Cream", hex: "#F5EFEB", gradient: "from-[#E8DFD5] via-[#F5EFEB] to-[#ECE3D9]" },
      { id: "sand", name: "Sand Beige", hex: "#D6C7B2", gradient: "from-[#B8A68F] via-[#D6C7B2] to-[#C7B59F]" },
      { id: "slate", name: "Slate Grey", hex: "#4A4E54", gradient: "from-[#35393E] via-[#4A4E54] to-[#5C6168]" },
      { id: "ash", name: "Muted Ash", hex: "#8E9399", gradient: "from-[#6F747A] via-[#8E9399] to-[#9FA5AC]" },
      { id: "gold", name: "Venetian Gold", hex: "#D4AF37", gradient: "from-[#9E8224] via-[#D4AF37] to-[#E6C65A]" },
    ],
  },
  {
    id: "sheer-linen",
    name: "Bespoke Sheer Linen",
    material: "Pure French Flax Linen",
    weight: "180 gsm",
    opacity: 35,
    soundAbsorption: "NRC 0.30 (Light Acoustic)",
    thermalRating: "Daylight Diffuser",
    colors: [
      { id: "pure-white", name: "Pure White", hex: "#FFFFFF", gradient: "from-[#EDEDED] via-[#FFFFFF] to-[#F7F7F7]" },
      { id: "pearl-offwhite", name: "Pearl Off-White", hex: "#FAF6EE", gradient: "from-[#E8E1D5] via-[#FAF6EE] to-[#EDE6DC]" },
      { id: "light-ash", name: "Light Ash", hex: "#D2D6D9", gradient: "from-[#B8BDBF] via-[#D2D6D9] to-[#E0E4E6]" },
      { id: "warm-cream", name: "Warm Cream", hex: "#F5EFEB", gradient: "from-[#DCD2C9] via-[#F5EFEB] to-[#E3D9D0]" },
      { id: "sahara-beige", name: "Sahara Beige", hex: "#D6C7B2", gradient: "from-[#B8A68F] via-[#D6C7B2] to-[#C7B59F]" },
    ],
  },
  {
    id: "silk-jacquard",
    name: "Venetian Silk Jacquard",
    material: "Silk Blend with Metallic Threading",
    weight: "410 gsm",
    opacity: 92,
    soundAbsorption: "NRC 0.70 (Medium Acoustic)",
    thermalRating: "A Thermal Barrier",
    colors: [
      { id: "champagne-gold", name: "Champagne Gold", hex: "#D4AF37", gradient: "from-[#9E8224] via-[#D4AF37] to-[#E6C65A]" },
      { id: "pearl-silk", name: "Pearl Off-White Silk", hex: "#FAF6EE", gradient: "from-[#E5DDD0] via-[#FAF6EE] to-[#EFEAE2]" },
      { id: "platinum-ash", name: "Moonlight Ash Silk", hex: "#C5CCD6", gradient: "from-[#9FA7B3] via-[#C5CCD6] to-[#B1B9C5]" },
      { id: "sand-silk", name: "Sand Beige Silk", hex: "#D6C7B2", gradient: "from-[#B8A68F] via-[#D6C7B2] to-[#C7B59F]" },
    ],
  },
];

const PLEATS: PleatOption[] = [
  { id: "pinch", name: "French Pinch Pleat", fullness: "3.0x Fullness", description: "Classic tailored triple folds for timeless luxury", pattern: "pinch" },
  { id: "sfold", name: "S-Fold Ripplefold", fullness: "2.5x Fullness", description: "Modern continuous fluid architectural waves", pattern: "sfold" },
  { id: "grommet", name: "Tailored Grommet", fullness: "2.0x Fullness", description: "Deep uniform folds with hand-brushed bronze rings", pattern: "grommet" },
  { id: "box", name: "Inverted Box Pleat", fullness: "2.8x Fullness", description: "Flat tailored front face with concealed back pleats", pattern: "box" },
];

interface FabricVisualizerProps {
  showGalleryLink?: boolean;
  onOpenConsultation?: () => void;
}

export default function FabricVisualizer({ showGalleryLink = false, onOpenConsultation }: FabricVisualizerProps) {
  const [selectedFabric, setSelectedFabric] = useState<FabricOption>(FABRICS[0]);
  const [selectedColor, setSelectedColor] = useState(FABRICS[0].colors[0]);
  const [selectedPleat, setSelectedPleat] = useState<PleatOption>(PLEATS[0]);
  const [lightMode, setLightMode] = useState<"day" | "sunset" | "night">("day");
  const [drapeOpenPercent, setDrapeOpenPercent] = useState<number>(30);

  // Somfy Motorized Track State
  const [motorState, setMotorState] = useState<"idle" | "opening" | "closing">("idle");

  const handleFabricChange = (fabric: FabricOption) => {
    setSelectedFabric(fabric);
    setSelectedColor(fabric.colors[0]);
  };

  // Automated Smooth Motor Movement
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (motorState === "opening") {
      interval = setInterval(() => {
        setDrapeOpenPercent((prev) => {
          if (prev >= 85) {
            setMotorState("idle");
            return 85;
          }
          return prev + 1;
        });
      }, 40);
    } else if (motorState === "closing") {
      interval = setInterval(() => {
        setDrapeOpenPercent((prev) => {
          if (prev <= 5) {
            setMotorState("idle");
            return 5;
          }
          return prev - 1;
        });
      }, 40);
    }
    return () => clearInterval(interval);
  }, [motorState]);

  return (
    <section id="visualizer" className="py-20 relative bg-transparent overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Single Ultra-Premium Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-stone-300/60">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-bronze text-xs font-bold tracking-widest text-[#8A3D1E] uppercase border border-[#B35C37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
              <span>Snow White 3D Atelier Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Interactive Textile & Light <span className="bronze-gradient-text">Visualizer</span>
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-normal leading-relaxed">
              Customize luxury fabrics, pleat header architecture, outdoor daylight diffusion, and Somfy® smart motorized track movement in real time.
            </p>
          </div>

          {showGalleryLink && (
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-xs font-bold uppercase tracking-wider text-[#B35C37] hover:text-[#8A3D1E] transition-all border border-[#B35C37]/30 shadow-md hover:shadow-lg shrink-0 cursor-pointer"
            >
              <span>Open Full Studio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left Column) */}
          <div className="lg:col-span-5 space-y-6 glass-card-bronze p-6 sm:p-8 rounded-[36px] border border-[#B35C37]/30 shadow-2xl backdrop-blur-xl">
            
            {/* 1. Fabric Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center justify-between">
                <span>1. Textile Weave</span>
                <span className="text-[#8A3D1E] font-serif text-sm font-bold">{selectedFabric.name}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {FABRICS.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => handleFabricChange(fabric)}
                    className={`p-3 rounded-2xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                      selectedFabric.id === fabric.id
                        ? "bg-[#B35C37]/20 border-[#B35C37] text-stone-900 shadow-md scale-[1.02]"
                        : "bg-white/80 border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-white"
                    }`}
                  >
                    <p className="font-bold text-stone-900 truncate">{fabric.name}</p>
                    <p className="text-[10px] text-stone-500 mt-1">{fabric.weight}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Palette */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center justify-between">
                <span>2. Atelier Color Tone</span>
                <span className="text-[#8A3D1E] font-sans font-bold text-xs">{selectedColor.name}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {selectedFabric.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer shadow-sm ${
                      selectedColor.id === color.id
                        ? "border-[#B35C37] scale-110 shadow-md shadow-[#B35C37]/40 ring-2 ring-[#B35C37]/30"
                        : "border-stone-300 opacity-90 hover:opacity-100 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor.id === color.id && (
                      <Check className={`w-4 h-4 ${color.hex === "#F5EFEB" || color.hex === "#E5C880" || color.hex === "#D97E59" ? "text-black" : "text-white"}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Heading Pleat Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#B35C37]" />
                  3. Heading & Pleat Style
                </span>
                <span className="text-[#8A3D1E] font-sans text-xs font-bold">{selectedPleat.fullness}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PLEATS.map((pleat) => (
                  <button
                    key={pleat.id}
                    onClick={() => setSelectedPleat(pleat)}
                    className={`p-2.5 rounded-2xl border text-left transition-all text-xs font-semibold cursor-pointer ${
                      selectedPleat.id === pleat.id
                        ? "bg-[#B35C37]/20 border-[#B35C37] text-stone-900 shadow-sm"
                        : "bg-white/80 border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900">{pleat.name}</span>
                    </div>
                    <span className="text-[10px] text-stone-500 block mt-0.5">{pleat.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Outdoor Light Condition */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                4. Outdoor Light Condition
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLightMode("day")}
                  className={`py-2.5 px-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                    lightMode === "day"
                      ? "bg-amber-100/90 border-amber-400 text-amber-900 shadow-sm"
                      : "bg-white/80 border-stone-200 text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Sun className="w-4 h-4 text-amber-600" />
                  Daylight
                </button>

                <button
                  onClick={() => setLightMode("sunset")}
                  className={`py-2.5 px-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                    lightMode === "sunset"
                      ? "bg-orange-100/90 border-orange-400 text-orange-900 shadow-sm"
                      : "bg-white/80 border-stone-200 text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Sunset className="w-4 h-4 text-orange-600" />
                  Sunset
                </button>

                <button
                  onClick={() => setLightMode("night")}
                  className={`py-2.5 px-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                    lightMode === "night"
                      ? "bg-indigo-100/90 border-indigo-400 text-indigo-900 shadow-sm"
                      : "bg-white/80 border-stone-200 text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Moon className="w-4 h-4 text-indigo-600" />
                  Night
                </button>
              </div>
            </div>

            {/* 5. Somfy Motorized Track Controls & Drape Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#B35C37]" />
                  5. Somfy® Smart Motorized Track
                </span>
                <span className="text-stone-800 font-mono font-bold">{drapeOpenPercent}% Open</span>
              </div>

              {/* Quick Motorized Action Trigger Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <button
                  onClick={() => setMotorState("opening")}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    motorState === "opening"
                      ? "bg-[#B35C37] text-white border-[#B35C37] animate-pulse"
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  Auto Open
                </button>
                <button
                  onClick={() => setMotorState("idle")}
                  className="py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 bg-white border-stone-200 text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  <Square className="w-3 h-3 fill-current text-stone-500" />
                  Pause
                </button>
                <button
                  onClick={() => setMotorState("closing")}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    motorState === "closing"
                      ? "bg-[#B35C37] text-white border-[#B35C37] animate-pulse"
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current rotate-180" />
                  Auto Close
                </button>
              </div>

              <input
                type="range"
                min="0"
                max="90"
                value={drapeOpenPercent}
                onChange={(e) => {
                  setMotorState("idle");
                  setDrapeOpenPercent(Number(e.target.value));
                }}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B35C37]"
              />
            </div>

            {/* Spec Sheet Pill Highlights */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <Volume2 className="w-4 h-4 text-[#B35C37] shrink-0" />
                <div>
                  <span className="block text-[10px] text-stone-500 uppercase font-semibold">Sound Absorbing</span>
                  <span className="font-bold text-stone-900">{selectedFabric.soundAbsorption}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Shield className="w-4 h-4 text-[#B35C37] shrink-0" />
                <div>
                  <span className="block text-[10px] text-stone-500 uppercase font-semibold">Thermal Rating</span>
                  <span className="font-bold text-stone-900">{selectedFabric.thermalRating}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Canvas Rendering Preview (Right Column) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-[36px] overflow-hidden glass-card-bronze p-6 border border-[#B35C37]/35 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
              
              {/* Top Bar inside Canvas */}
              <div className="relative z-20 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-200 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#B35C37] animate-ping" />
                  <span className="text-xs font-bold text-stone-900 tracking-wide">
                    {selectedFabric.name} — {selectedColor.name}
                  </span>
                </div>
                <div className="text-[11px] text-stone-600 font-mono flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#B35C37]" />
                  <span>{selectedPleat.name} ({selectedPleat.fullness})</span>
                </div>
              </div>

              {/* Dynamic Room Window Canvas Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-[#F5F0E6]">
                
                {/* Outdoor Light Layer */}
                {lightMode === "day" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent" />
                )}
                {lightMode === "sunset" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-300/40 via-amber-200/25 to-purple-200/20" />
                )}
                {lightMode === "night" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/40 to-slate-950/70" />
                )}

                {/* Translucent Sunlight Rays Overlay */}
                {lightMode === "day" && selectedFabric.opacity < 60 && (
                  <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent" />
                )}

                {/* Architectural Motorized Track Rail Header at Top */}
                <div className="absolute top-4 inset-x-6 h-3 bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400 rounded-full shadow-md z-10 flex items-center justify-between px-2">
                  <div className="w-2 h-2 rounded-full bg-[#B35C37]" />
                  <span className="text-[8px] font-mono font-bold tracking-widest text-stone-600 uppercase">Somfy® Quiet Glide Track</span>
                  <div className="w-2 h-2 rounded-full bg-[#B35C37]" />
                </div>

                {/* Window Architectural Grid Frame */}
                <div className="absolute inset-8 top-12 border-4 border-stone-400/40 rounded-xl flex justify-between pointer-events-none shadow-inner">
                  <div className="w-1/3 h-full border-r-2 border-stone-300/40" />
                  <div className="w-1/3 h-full border-r-2 border-stone-300/40" />
                </div>

                {/* Curtains Draping Container */}
                <div className="absolute inset-x-6 top-14 bottom-6 flex justify-between transition-all duration-700">
                  
                  {/* Left Curtain Drape Panel */}
                  <div
                    className={`h-full rounded-b-2xl shadow-2xl transition-all duration-700 relative overflow-hidden bg-gradient-to-r ${selectedColor.gradient}`}
                    style={{
                      width: `${(100 - drapeOpenPercent) / 2}%`,
                      opacity: selectedFabric.opacity > 50 ? 0.98 : 0.75,
                    }}
                  >
                    {/* Fold Texture Ribbed Lines based on Pleat Style */}
                    <div className="absolute inset-0 flex justify-between opacity-30">
                      {selectedPleat.pattern === "pinch" && (
                        <>
                          <div className="w-1/8 h-full bg-white/40 shadow-sm" />
                          <div className="w-1/8 h-full bg-black/30" />
                          <div className="w-1/8 h-full bg-white/40 shadow-sm" />
                          <div className="w-1/8 h-full bg-black/30" />
                        </>
                      )}
                      {selectedPleat.pattern === "sfold" && (
                        <>
                          <div className="w-1/4 h-full bg-white/30 rounded-full blur-[1px]" />
                          <div className="w-1/4 h-full bg-black/25 rounded-full blur-[1px]" />
                          <div className="w-1/4 h-full bg-white/30 rounded-full blur-[1px]" />
                        </>
                      )}
                      {selectedPleat.pattern === "grommet" && (
                        <>
                          <div className="w-1/6 h-full bg-white/50" />
                          <div className="w-1/6 h-full bg-black/40" />
                          <div className="w-1/6 h-full bg-white/50" />
                        </>
                      )}
                      {selectedPleat.pattern === "box" && (
                        <>
                          <div className="w-1/5 h-full bg-black/20" />
                          <div className="w-3/5 h-full bg-white/20 border-x border-white/40" />
                          <div className="w-1/5 h-full bg-black/20" />
                        </>
                      )}
                    </div>

                    {/* Sheen / Reflection highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />
                  </div>

                  {/* Right Curtain Drape Panel */}
                  <div
                    className={`h-full rounded-b-2xl shadow-2xl transition-all duration-700 relative overflow-hidden bg-gradient-to-r ${selectedColor.gradient}`}
                    style={{
                      width: `${(100 - drapeOpenPercent) / 2}%`,
                      opacity: selectedFabric.opacity > 50 ? 0.98 : 0.75,
                    }}
                  >
                    <div className="absolute inset-0 flex justify-between opacity-30">
                      {selectedPleat.pattern === "pinch" && (
                        <>
                          <div className="w-1/8 h-full bg-black/30" />
                          <div className="w-1/8 h-full bg-white/40 shadow-sm" />
                          <div className="w-1/8 h-full bg-black/30" />
                          <div className="w-1/8 h-full bg-white/40 shadow-sm" />
                        </>
                      )}
                      {selectedPleat.pattern === "sfold" && (
                        <>
                          <div className="w-1/4 h-full bg-black/25 rounded-full blur-[1px]" />
                          <div className="w-1/4 h-full bg-white/30 rounded-full blur-[1px]" />
                          <div className="w-1/4 h-full bg-black/25 rounded-full blur-[1px]" />
                        </>
                      )}
                      {selectedPleat.pattern === "grommet" && (
                        <>
                          <div className="w-1/6 h-full bg-white/50" />
                          <div className="w-1/6 h-full bg-black/40" />
                          <div className="w-1/6 h-full bg-white/50" />
                        </>
                      )}
                      {selectedPleat.pattern === "box" && (
                        <>
                          <div className="w-1/5 h-full bg-black/20" />
                          <div className="w-3/5 h-full bg-white/20 border-x border-white/40" />
                          <div className="w-1/5 h-full bg-black/20" />
                        </>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />
                  </div>

                </div>
              </div>

              {/* Bottom Canvas Footer Controls */}
              <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200 shadow-md gap-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#B35C37] shrink-0" />
                  <span className="text-xs text-stone-700 font-serif font-semibold">
                    Config: {selectedPleat.name} with double blackout lining.
                  </span>
                </div>
                
                {onOpenConsultation ? (
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B35C37] to-[#D97E59] hover:brightness-110 text-white text-xs font-bold tracking-wide shadow-md transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order Free Swatch (#{selectedFabric.id.toUpperCase()})</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#8A3D1E]">
                      Swatch Code: #{selectedFabric.id.toUpperCase()}-{selectedColor.id.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
