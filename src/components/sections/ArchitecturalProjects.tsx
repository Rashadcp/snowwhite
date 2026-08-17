"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Maximize2,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  FileText,
  X,
  ChevronRight
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "penthouse" | "estate" | "villa" | "manor";
  categoryLabel: string;
  location: string;
  architect: string;
  completionYear: string;
  dropHeight: string;
  draperyType: string;
  fabricUsed: string;
  trackSystem: string;
  imageGradient: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  quote: string;
  quoteAuthor: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "coastal-waterfront-penthouse",
    title: "Waterfront Sky Penthouse",
    category: "penthouse",
    categoryLabel: "Waterfront Sky Penthouse",
    location: "Coastal Penthouse Residence",
    architect: "Menezes & Associates Architects",
    completionYear: "2025",
    dropHeight: "16.5 FT Double Height Drop",
    draperyType: "Automated Dual S-Fold Ripplefold",
    fabricUsed: "Belgian Sheer Linen & Velvet Thermal Layer",
    trackSystem: "Somfy® Glydea Ultra Dual Motorized Track",
    imageGradient: "from-[#2A1D17] via-[#5C3422] to-[#B35C37]",
    summary:
      "A grand 9,500 sq.ft duplex penthouse, engineered with 16.5-foot motorized acoustic and sheer drapery for tropical sun protection.",
    highlights: [
      "Custom curved Somfy® track contoured around 180° glass bay balcony",
      "Concealed flush ceiling recess pockets engineered for humid coastal environment",
      "Double-lined acoustic velvet reducing wind glare & ambient port noise",
      "Integrated smart home automated daylight harvesting routines"
    ],
    metrics: [
      { label: "Continuous Span", value: "54 Feet" },
      { label: "Motor Sound Level", value: "< 38 dBA" },
      { label: "Acoustic Shield", value: "NRC 0.85" },
      { label: "Solar UV Rejection", value: "98.5%" }
    ],
    quote:
      "Snow White's atelier team executed the 16.5-foot drop with absolute flawlessness. The wave rhythm framing the waterfront is breathtaking.",
    quoteAuthor: "Ar. Rajesh Varma, Lead Architect"
  },
  {
    id: "contemporary-luxury-villa",
    title: "Contemporary Luxury Villa",
    category: "estate",
    categoryLabel: "Outstation Luxury Villa",
    location: "Regional Contemporary Estate",
    architect: "Urban Edge Design Studio",
    completionYear: "2025",
    dropHeight: "15.0 FT Floor-to-Ceiling",
    draperyType: "French Pinch Pleat Couture",
    fabricUsed: "Venetian Rose Gold Silk Jacquard",
    trackSystem: "Silent Gliss® Flush Recessed Motorized Track",
    imageGradient: "from-[#1C2026] via-[#384353] to-[#8C94A0]",
    summary:
      "Outstation turnkey project for a private 12,000 sq.ft residence, featuring hand-pleated metallic silk drapes with smart automation.",
    highlights: [
      "Triple-hand-pinned French pleat headers with hand-sewn lead weights",
      "Turnkey outstation measurement and installation crew dispatched from atelier",
      "Custom dyed rose bronze silk thread matching teak wood paneling",
      "Seamless wireless integration with Lutron HomeWorks QSX"
    ],
    metrics: [
      { label: "Ceiling Recess Depth", value: "7.5 Inches" },
      { label: "Silk Fabric Weight", value: "410 gsm" },
      { label: "Fullness Ratio", value: "3.0x Luxe" },
      { label: "Warranty Period", value: "15 Years" }
    ],
    quote:
      "We brought Snow White's team for our outstation project because no one else could handle 15-foot silk pleating with this level of artistry.",
    quoteAuthor: "Siddharth Rao, Homeowner"
  },
  {
    id: "lakefront-sanctuary-estate",
    title: "Lakefront Sanctuary Estate",
    category: "villa",
    categoryLabel: "Backwater Sanctuary",
    location: "Lakefront Luxury Estate",
    architect: "Tropical Atelier Design",
    completionYear: "2024",
    dropHeight: "14.2 FT High Bay",
    draperyType: "Motorized S-Fold Sheer Wave",
    fabricUsed: "100% Pure Organic French Flax Linen",
    trackSystem: "Somfy® Irismo WireFree Lithium Smart Track",
    imageGradient: "from-[#1A2E2B] via-[#2D544E] to-[#D97E59]",
    summary:
      "Lakefront luxury retreat requiring humidity-resistant organic linen drapes to preserve sweeping water views while diffusing afternoon tropical heat.",
    highlights: [
      "Marine-grade anodized aluminum tracks resistant to waterfront moisture",
      "UV-stabilized natural flax linen preventing sun fade in tropical humidity",
      "Automatic solar sensors closing drapes during peak 2 PM glare",
      "Custom weighted lead-free bottom hems for steady breeze drape"
    ],
    metrics: [
      { label: "Glare Reduction", value: "85%" },
      { label: "Track Length", value: "48 Feet" },
      { label: "Air Permeability", value: "High Breathable" },
      { label: "Battery Standby", value: "365 Days" }
    ],
    quote:
      "Filtering the harsh lakefront light without blocking water views was essential. Snow White achieved the ideal balance of sheer warmth.",
    quoteAuthor: "Anish Kurien, Estate Owner"
  },
  {
    id: "grand-cathedral-manor",
    title: "Grand Cathedral Manor",
    category: "manor",
    categoryLabel: "Outstation Manor",
    location: "Regional Private Estate",
    architect: "Horizon Luxury Designs",
    completionYear: "2024",
    dropHeight: "18.0 FT Grand Cathedral Drop",
    draperyType: "Heavy Thermal Velvet Backed Drapes",
    fabricUsed: "Imperial Gold Velvet Blend",
    trackSystem: "Somfy® Heavy-Duty Tandem Motorized System",
    imageGradient: "from-[#2B1B17] via-[#5C2B1E] to-[#A84A37]",
    summary:
      "Turnkey outstation installation for a private cathedral estate. Installed 18-foot heavy thermal velvet panels to reject intense heat and retain cooling.",
    highlights: [
      "Dual tandem motor drive delivering 120kg weight capacity for 18ft drops",
      "Interlined thermal barrier fabric improving room cooling efficiency by 38%",
      "Specialized outstation measurement and installation team sent from atelier",
      "Custom brass finials hand-forged for bespoke luxury aesthetic"
    ],
    metrics: [
      { label: "Window Height", value: "18 Feet" },
      { label: "Thermal Protection", value: "Solar Shield" },
      { label: "Fabric Weight", value: "520 gsm" },
      { label: "Load Capacity", value: "120 kg" }
    ],
    quote:
      "Snow White's team executed our 18-foot villa drapery with exceptional craftsmanship and precision.",
    quoteAuthor: "Dr. K. Rahim, Villa Owner"
  }
];

interface ArchitecturalProjectsProps {
  onOpenConsultation: () => void;
}

export default function ArchitecturalProjects({ onOpenConsultation }: ArchitecturalProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeTab === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeTab);

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      {/* Background Decorative Ambient Watermark */}
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-[#B35C37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#D97E59]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-bronze text-xs font-bold tracking-widest text-[#8A3D1E] uppercase border border-[#B35C37]/30">
              <Building2 className="w-3.5 h-3.5 text-[#B35C37]" />
              <span>Architectural Case Studies</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Featured Luxury <span className="bronze-gradient-text">Estate Projects</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              Explore how Snow White Atelier collaborates with world-renowned architects, interior directors, and estate owners to engineer custom motorized drapery systems for soaring ceiling heights and complex glass facades.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F5F0E6] p-1.5 rounded-2xl border border-stone-300/70 shrink-0">
            {[
              { id: "all", label: "All Projects" },
              { id: "estate", label: "Private Estates" },
              { id: "penthouse", label: "Penthouses" },
              { id: "villa", label: "Coastal Villas" },
              { id: "manor", label: "Alpine Manors" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#B35C37] text-white shadow-md"
                    : "text-stone-700 hover:text-stone-900 hover:bg-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Showcase Hero Card (First Filtered Case Study) */}
        {filteredStudies.length > 0 && (
          <div className="mb-12 glass-card-bronze rounded-3xl border border-[#B35C37]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            {/* Visual Canvas Banner */}
            <div
              className={`lg:col-span-7 bg-gradient-to-br ${filteredStudies[0].imageGradient} p-8 sm:p-12 min-h-[380px] lg:min-h-[480px] flex flex-col justify-between relative overflow-hidden text-white`}
            >
              {/* Subtle Silk Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/30">
                  Featured Master Project
                </span>
                <span className="flex items-center gap-1.5 text-xs text-amber-200 font-medium bg-black/40 px-3 py-1 rounded-full border border-amber-200/20">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  {filteredStudies[0].location}
                </span>
              </div>

              <div className="relative z-10 space-y-3 pt-12">
                <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
                  {filteredStudies[0].categoryLabel} • {filteredStudies[0].completionYear}
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                  {filteredStudies[0].title}
                </h3>
                <p className="text-stone-200 text-sm max-w-xl line-clamp-2 leading-relaxed">
                  {filteredStudies[0].summary}
                </p>
              </div>

              {/* Bottom Quick Badges */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-6 border-t border-white/20">
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/15">
                  📐 Drop: {filteredStudies[0].dropHeight}
                </span>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/15">
                  ⚙️ Track: {filteredStudies[0].trackSystem.split(" ")[0]} Motorized
                </span>
              </div>
            </div>

            {/* Content & Specs Sidebar */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white/90">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A3D1E] mb-1">
                    Architectural Specs
                  </h4>
                  <p className="font-serif text-xl font-bold text-stone-900">
                    {filteredStudies[0].draperyType}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-stone-200">
                  {filteredStudies[0].metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                        {m.label}
                      </span>
                      <span className="font-serif text-lg font-bold text-stone-900">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Atelier Engineering Highlights
                  </h5>
                  <ul className="space-y-2">
                    {filteredStudies[0].highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B35C37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architect Quote */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 italic text-xs text-stone-700 space-y-1">
                  <p>&ldquo;{filteredStudies[0].quote}&rdquo;</p>
                  <p className="font-bold not-italic text-[11px] text-[#8A3D1E]">
                    — {filteredStudies[0].quoteAuthor}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModalStudy(filteredStudies[0])}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8A3D1E] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Spec Sheet</span>
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3.5 rounded-xl border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider hover:border-stone-800 transition-colors cursor-pointer bg-white"
                >
                  Book Measurement
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.slice(1).map((study) => (
            <div
              key={study.id}
              className="glass-card-bronze p-6 rounded-3xl border border-[#B35C37]/30 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div className="space-y-4">
                {/* Visual Header Badge */}
                <div
                  className={`h-40 rounded-2xl bg-gradient-to-tr ${study.imageGradient} p-5 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {study.location.split(",")[0]}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-mono text-stone-300 block">
                      Drop Height: {study.dropHeight}
                    </span>
                    <h4 className="font-serif text-xl font-bold leading-tight group-hover:text-amber-200 transition-colors">
                      {study.title}
                    </h4>
                  </div>
                </div>

                <p className="text-stone-700 text-xs leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Key Details Pills */}
                <div className="space-y-2 pt-2 border-t border-stone-200/80">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500 font-semibold">Architect:</span>
                    <span className="text-stone-900 font-medium">{study.architect}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500 font-semibold">Fabric:</span>
                    <span className="text-stone-900 font-medium truncate max-w-[170px] text-right">
                      {study.fabricUsed}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500 font-semibold">Track System:</span>
                    <span className="text-[#8A3D1E] font-bold">{study.trackSystem.split(" ")[0]} Smart</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 flex items-center justify-between gap-3 border-t border-stone-200">
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="text-xs font-bold text-[#8A3D1E] hover:text-[#B35C37] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Specs & Photos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="p-2 rounded-full bg-stone-100 hover:bg-[#B35C37] hover:text-white transition-colors cursor-pointer"
                  title="Schedule Consultation for similar project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Callout Banner */}
        <div className="mt-16 glass-card-bronze p-8 sm:p-10 rounded-3xl border border-[#B35C37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Have a Custom Architectural Window Project?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm max-w-2xl">
              Our engineering workroom provides CAD drawings, motorized track recess details, and laser site measurements for architects and luxury homeowners worldwide.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all cursor-pointer"
            >
              Book Architect Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Detail Spec Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#B35C37]/30 shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C37]/15 text-[11px] font-bold text-[#8A3D1E] uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>{activeModalStudy.categoryLabel} Spec Sheet</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900">
                {activeModalStudy.title}
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                {activeModalStudy.location} • Architect: {activeModalStudy.architect} (Completed {activeModalStudy.completionYear})
              </p>
            </div>

            {/* Overview Box */}
            <div className="p-5 rounded-2xl bg-[#F5F0E6] border border-stone-300/80 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">Project Executive Summary</h4>
              <p className="text-xs text-stone-700 leading-relaxed">{activeModalStudy.summary}</p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeModalStudy.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-stone-200 text-center">
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">{m.label}</span>
                  <span className="font-serif text-lg font-bold text-[#8A3D1E] block mt-1">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Detailed System Specifications */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Technical System Specifications</h4>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex justify-between p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-bold text-stone-600">Drapery Style & Pleat:</span>
                  <span className="font-semibold text-stone-900">{activeModalStudy.draperyType}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-bold text-stone-600">Fabric Composition:</span>
                  <span className="font-semibold text-stone-900">{activeModalStudy.fabricUsed}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-bold text-stone-600">Motorized Track Hardware:</span>
                  <span className="font-semibold text-[#8A3D1E]">{activeModalStudy.trackSystem}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-white border border-stone-200">
                  <span className="font-bold text-stone-600">Max Vertical Drop:</span>
                  <span className="font-semibold text-stone-900">{activeModalStudy.dropHeight}</span>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Custom Engineering Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalStudy.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700 p-3 rounded-xl bg-white border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B35C37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setActiveModalStudy(null)}
                className="px-6 py-3 rounded-xl border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider hover:border-stone-800 transition-colors cursor-pointer bg-white"
              >
                Close Spec Sheet
              </button>
              <button
                onClick={() => {
                  setActiveModalStudy(null);
                  onOpenConsultation();
                }}
                className="px-6 py-3 rounded-xl bg-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8A3D1E] transition-colors cursor-pointer shadow-md"
              >
                Request Architectural Spec Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
