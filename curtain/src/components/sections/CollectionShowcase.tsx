"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Maximize2, ShieldCheck, Cpu, X, Eye } from "lucide-react";

interface GalleryWorkItem {
  id: string;
  image: string;
  category: "all" | "living" | "dining" | "bedroom" | "motorized" | "sheer";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  fabricType: string;
  trackType: string;
  tag: string;
}

const GALLERY_WORKS: GalleryWorkItem[] = [
  {
    id: "work-1",
    image: "/work1.jpeg",
    category: "living",
    categoryLabel: "Master Living Suite",
    title: "Double-Height Recessed S-Fold Drapes",
    subtitle: "Custom Ceiling Recess Integration",
    description: "Millimeter-precise floor-to-ceiling drapery tailored with concealed motorized track channels.",
    fabricType: "Belgian Sheer & Linen Layer",
    trackType: "Concealed Somfy® Motor Track",
    tag: "Workroom Showcase 01",
  },
  {
    id: "work-2",
    image: "/work2.jpeg",
    category: "sheer",
    categoryLabel: "Acoustic Sheer Wave",
    title: "S-Fold Sheer Wave Installation",
    subtitle: "Diffused Architectural Daylight",
    description: "Soft continuous S-fold wave sheer creating gentle daylight diffusion with privacy.",
    fabricType: "100% French Organic Flax Linen",
    trackType: "Ultra-Quiet S-Fold Wave Track",
    tag: "Workroom Showcase 02",
  },
  {
    id: "work-3",
    image: "/curtain_dining_grand.jpg",
    category: "motorized",
    categoryLabel: "Smart Automation",
    title: "Motorized Smart Track Dining Drapes",
    subtitle: "Whisper-Quiet Remote & App Control",
    description: "Automated smart drapery system integrated with app remote control & touch override.",
    fabricType: "Thermal Lined Champagne Gold & Cream",
    trackType: "Somfy® Glydea Heavy-Duty Motor",
    tag: "Workroom Showcase 03",
  },
  {
    id: "work-4",
    image: "/curtain_hero_minimal_sand.jpg",
    category: "living",
    categoryLabel: "Minimalist Lounge",
    title: "Sand Beige Architectural Ripplefold Drapes",
    subtitle: "Floor-to-Ceiling Ambient Solar Diffusion",
    description: "Serene floor-to-ceiling sand beige and off-white wave drapery framing luxury modern living rooms.",
    fabricType: "Belgian Sand Linen & Sheer Voile",
    trackType: "Architectural Concealed Recessed Track",
    tag: "Workroom Showcase 04",
  },
  {
    id: "work-5",
    image: "/work5.jpeg",
    category: "bedroom",
    categoryLabel: "Master Bedroom Suite",
    title: "Acoustic Blackout & Sheer Pair",
    subtitle: "Dual Layer Total Darkness System",
    description: "Dual track installation combining blackout velvet with translucent inner sheers.",
    fabricType: "Triple-Weave Blackout & Fine Silk Sheer",
    trackType: "Dual Tandem Recessed Track System",
    tag: "Workroom Showcase 05",
  },
  {
    id: "work-6",
    image: "/curtain_hero_5.png",
    category: "dining",
    categoryLabel: "Venetian Gold Dining",
    title: "Venetian Champagne Gold Silk Jacquard",
    subtitle: "Metallic Damask Weave",
    description: "Opulent champagne gold silk jacquard drapes tailored with custom interlining for dramatic volume.",
    fabricType: "Venetian Silk & Metallic Threading",
    trackType: "Ceiling-Mounted Anodized Gold Track",
    tag: "Workroom Showcase 06",
  },
  {
    id: "work-7",
    image: "/hero_drapery_interior.png",
    category: "motorized",
    categoryLabel: "Architectural Villa",
    title: "Panoramic Ivory Cream Facade Drapes",
    subtitle: "Automatic Sun Tracking System",
    description: "Automated dual drapery spanning 45 feet of floor-to-ceiling glass wall.",
    fabricType: "French Sheer & Silk Blend",
    trackType: "Somfy® Smart Motorized Dual Track",
    tag: "Workroom Showcase 07",
  },
  {
    id: "work-8",
    image: "/curtain_hero_light_ash.jpg",
    category: "living",
    categoryLabel: "Skyline Penthouse",
    title: "Light Ash Minimalist Sheer Wave",
    subtitle: "Concealed Motor Channel",
    description: "Continuous light ash S-fold wave sheer curtain filtering bright skyline sunlight.",
    fabricType: "Light Ash Flax Linen",
    trackType: "Architectural Recessed Channel",
    tag: "Workroom Showcase 08",
  },
  {
    id: "work-9",
    image: "/curtain_hero_left.png",
    category: "bedroom",
    categoryLabel: "Master Suite",
    title: "Architectural Slate Grey Blackout Velvet",
    subtitle: "Complete Sleeping Darkness",
    description: "Heavy slate grey plush velvet with lead-weighted corners & high acoustic absorption.",
    fabricType: "520 gsm Belgian Cotton Velvet",
    trackType: "Ultra-Quiet S-Fold Wave Track",
    tag: "Workroom Showcase 09",
  },
  {
    id: "work-10",
    image: "/curtain_hero_7.png",
    category: "sheer",
    categoryLabel: "Daylight Lounge",
    title: "Pearl Off-White French Flax Sheers",
    subtitle: "Luminous Solar Diffusion",
    description: "Featherweight pearl off-white flax linen that diffuses daylight into soft ambient golden illumination.",
    fabricType: "100% French Flax Sheer",
    trackType: "Somfy® Wave Track Rail",
    tag: "Workroom Showcase 10",
  },
  {
    id: "work-11",
    image: "/curtain_hero_8.png",
    category: "living",
    categoryLabel: "Double-Height Grand Salon",
    title: "Double-Height Architectural Sheer Wave",
    subtitle: "Ceiling-Recessed Panoramic Glazing",
    description: "Soaring custom ceiling-recessed grand sheer wave drapes filtering abundant sunlight across luxury double-height living salons.",
    fabricType: "Pure European Flax Sheer Voile",
    trackType: "Concealed Motorized Heavy-Drop Track",
    tag: "Workroom Showcase 11",
  },
  {
    id: "work-12",
    image: "/curtain_dining_grand.jpg",
    category: "dining",
    categoryLabel: "Grand Dining Hall",
    title: "Champagne Gold & Cream Drapery Suite",
    subtitle: "Floor-to-Ceiling Grand Banquet Glazing",
    description: "Exquisite tailored champagne gold silk and cream sheer drapery framing grand marble dining halls with soaring natural light.",
    fabricType: "Venetian Silk & Belgian Sheer Voile",
    trackType: "Architectural Concealed Motor Track",
    tag: "Workroom Showcase 12",
  },
  {
    id: "work-13",
    image: "/curtain_bedroom_suite.jpg",
    category: "bedroom",
    categoryLabel: "Master Bedroom Suite",
    title: "Sand Beige Blackout & Linen Sheer Layer",
    subtitle: "Dual Track Bedroom Sanctuary",
    description: "Dual-motorized curtain combination featuring 100% thermal blackout sand beige drapes paired with translucent ivory linen.",
    fabricType: "Thermal Sand Beige Velvet & Pure Linen",
    trackType: "Dual Tandem Somfy® Silent Glide",
    tag: "Workroom Showcase 13",
  },
  {
    id: "work-14",
    image: "/curtain_dining_sheer.jpg",
    category: "dining",
    categoryLabel: "Dining Salon",
    title: "Light Ash S-Fold Dining Wave",
    subtitle: "Minimalist Panoramic Glass Glazing",
    description: "Delicate floor-length light ash wave curtains framing modern dining salons with elegant ambient daylight filtration.",
    fabricType: "Light Ash French Flax Sheer",
    trackType: "Ceiling Recessed Wave Track Rail",
    tag: "Workroom Showcase 14",
  },
  {
    id: "work-15",
    image: "/curtain_bedroom_tied_back.jpg",
    category: "bedroom",
    categoryLabel: "Master Suite Sanctuary",
    title: "Tailored Warm Sand & Sheer Bedroom Suite",
    subtitle: "Architectural Cove Light & French Pinch Pleat",
    description: "Opulent warm sand drapery with tailored tie-backs framing floor-to-ceiling sheer curtains and warm ambient ceiling illumination.",
    fabricType: "Belgian Heavy Sand Weave & Translucent Voile",
    trackType: "Dual Tandem Recessed Channel Track",
    tag: "Workroom Showcase 15",
  },
  {
    id: "work-16",
    image: "/curtain_bedroom_sunlit_sheer.jpg",
    category: "bedroom",
    categoryLabel: "Sunlit Bedroom Retreat",
    title: "Continuous Pearl Sheer Ripplefold Wave",
    subtitle: "Soft Morning Daylight Solar Diffusion",
    description: "Continuous ceiling-to-floor pearl off-white ripplefold wave sheer diffusing natural sunlight across modern minimalist master bedrooms.",
    fabricType: "100% French Flax Organic Sheer Voile",
    trackType: "Ultra-Quiet S-Fold Ceiling Wave Rail",
    tag: "Workroom Showcase 16",
  },
];

interface CollectionShowcaseProps {
  onOpenConsultation: () => void;
  limit?: number;
  hideHeader?: boolean;
}

export default function CollectionShowcase({ onOpenConsultation, limit, hideHeader = false }: CollectionShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImageModal, setSelectedImageModal] = useState<GalleryWorkItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "living", label: "Living Suites" },
    { id: "dining", label: "Dining Halls" },
    { id: "bedroom", label: "Bedrooms & Suites" },
    { id: "motorized", label: "Motorized Smart Tracks" },
    { id: "sheer", label: "Acoustic Sheers" },
  ];

  const baseItems = activeFilter === "all"
    ? GALLERY_WORKS
    : GALLERY_WORKS.filter((item) => item.category === activeFilter);

  const displayedItems = limit ? baseItems.slice(0, limit) : baseItems;

  return (
    <section id="gallery" className="py-12 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Only if not hidden) */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
              <span>Master Atelier Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Bespoke <span className="bronze-gradient-text">Workroom Portfolio</span>
            </h2>
            <p className="text-stone-600 text-sm font-normal leading-relaxed">
              Explore our real completed installations showcasing custom S-fold waves, hand-pleated velvets, and Somfy® motorized smart track systems.
            </p>
          </div>
        )}

        {/* Category Filter Tabs Bar (Only when not limited) */}
        {!limit && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white shadow-md"
                    : "glass-card text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group glass-card rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B35C37]/50 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative w-full overflow-hidden bg-stone-900 aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {item.tag}
                    </span>
                    <button
                      onClick={() => setSelectedImageModal(item)}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-stone-900 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-md"
                      title="Enlarge Project Details"
                    >
                      <Maximize2 className="w-4 h-4 text-[#B35C37]" />
                    </button>
                  </div>

                  {/* Bottom Category Pill */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-white/90 drop-shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Narrative & Specs */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#B35C37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-stone-200/80 space-y-1.5 text-[11px] text-stone-700">
                    <div className="flex justify-between">
                      <span className="text-stone-500 font-medium">Fabric:</span>
                      <span className="font-bold text-stone-900">{item.fabricType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500 font-medium">Track:</span>
                      <span className="font-bold text-[#8A3D1E]">{item.trackType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Clean CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-stone-100 group-hover:bg-gradient-to-r group-hover:from-[#B35C37] group-hover:to-[#D97E59] text-stone-900 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book Fitting</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link (when limit is active) */}
        {limit && (
          <div className="mt-14 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Full Portfolio Gallery ({GALLERY_WORKS.length} Projects)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImageModal(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-stone-950 rounded-3xl border border-white/20 p-4 sm:p-6 overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden bg-black shrink-0">
              <Image
                src={selectedImageModal.image}
                alt={selectedImageModal.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4 text-white text-left w-full md:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#B35C37] text-[10px] font-bold uppercase tracking-wider">
                {selectedImageModal.tag}
              </div>
              <h3 className="font-serif text-2xl font-bold">{selectedImageModal.title}</h3>
              <p className="text-stone-300 text-xs leading-relaxed">{selectedImageModal.description}</p>
              
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Fabric Specification</span>
                  <span className="font-bold text-white">{selectedImageModal.fabricType}</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Track Mechanism</span>
                  <span className="font-bold text-[#D97E59]">{selectedImageModal.trackType}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedImageModal(null);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-white font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
              >
                Book Custom Fitting for this Design
              </button>
            </div>

            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
