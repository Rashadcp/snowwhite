"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CollectionShowcase from "@/components/sections/CollectionShowcase";
import ConsultationModal from "@/components/modals/ConsultationModal";
import { Sparkles, Box } from "lucide-react";

export default function GalleryPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#1C1917]">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-grow">
        {/* Full-Width Edge-to-Edge Top Banner with Curved Bottom Sides featuring work5.jpeg */}
        <section className="relative w-full h-[450px] sm:h-[580px] lg:h-[650px] overflow-hidden bg-stone-900 group rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-[#B35C37]/30">
          {/* Banner Background Image */}
          <Image
            src="/work5.jpeg"
            alt="Snow White Master Atelier Workroom Portfolio Gallery Showcase"
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
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20">
            <div className="space-y-4 max-w-4xl text-center text-white z-10 mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase border border-white/20 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D97E59]" />
                <span>Couture Draperie Showcase</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
                Workroom Portfolio <span className="text-[#D97E59]">Gallery</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Full Filterable Collection Showcase */}
        <CollectionShowcase onOpenConsultation={() => setIsConsultationOpen(true)} hideHeader={true} />

        {/* Swatch Sample Box Banner */}
        <section className="py-16 bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card-bronze p-8 sm:p-12 rounded-3xl border border-[#B35C37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase">
                  <Box className="w-4 h-4 text-[#B35C37]" />
                  <span>Complimentary Sample Box</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Touch & Experience Real Fabric Swatches
                </h3>
                <p className="text-stone-700 text-xs sm:text-sm font-normal">
                  Order a curated binder containing Belgian plush velvet, pure French flax linen, and Venetian silk jacquard swatches delivered to your door.
                </p>
              </div>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-xl transition-all cursor-pointer shrink-0 shadow-md"
              >
                Order Free Swatch Binder
              </button>
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
