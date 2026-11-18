"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

interface CurtainCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hex: string;
  badge: string;
  desc: string;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards: CurtainCardItem[] = [
    {
      id: "white-grand-sheer",
      title: "Pure White Grand Sheers",
      subtitle: "Double-Height Daylight Salon",
      image: "/curtain_hero_8.png",
      hex: "#FFFFFF",
      badge: "Pure White • Motorized Wave",
      desc: "Ceiling-recessed ethereal pure white sheer drapes creating soft diffused lighting in double-height living salons.",
    },
    {
      id: "venetian-gold",
      title: "Venetian Gold Silk Jacquard",
      subtitle: "Champagne Damask Weave",
      image: "/curtain_hero_5.png",
      hex: "#D4AF37",
      badge: "Venetian Gold Silk • Metallic Thread",
      desc: "Metallic-threaded champagne gold Venetian silk jacquard with intricate damask patterns.",
    },
    {
      id: "offwhite-pearl-linen",
      title: "Pearl Off-White Sheer Linen",
      subtitle: "French Flax Sun Filter",
      image: "/curtain_hero_7.png",
      hex: "#FAF6EE",
      badge: "Off-White • 100% French Flax",
      desc: "Featherweight pearl off-white flax linen that diffuses daylight into soft ambient golden illumination.",
    },
    {
      id: "warm-sand-beige",
      title: "Sand Beige Minimalist Wave",
      subtitle: "Luxury Neutral Atelier Weave",
      image: "/curtain_hero_minimal_sand.jpg",
      hex: "#D6C7B2",
      badge: "Warm Beige • Minimalist Wave",
      desc: "Floor-to-ceiling sand beige and cream wave drapery designed to bring serene architectural warmth to modern living rooms.",
    },
    {
      id: "ivory-cream-drapery",
      title: "Ivory Cream Velvet Curtains",
      subtitle: "Plush Acoustic Living Room",
      image: "/hero_drapery_interior.png",
      hex: "#F5F0E6",
      badge: "Ivory Cream • 520 gsm Heavy Drape",
      desc: "Ultra-soft ivory cream velvet drapes with lead-weighted corners & gentle acoustic insulation.",
    },
    {
      id: "charcoal-grey-blackout",
      title: "Architectural Slate Grey Curtains",
      subtitle: "Heavy Blackout Velvet",
      image: "/curtain_hero_left.png",
      hex: "#4A4E54",
      badge: "Slate Grey • 99% Daylight Blackout",
      desc: "Hand-stitched heavy slate grey plush velvet with lead-weighted corners & high acoustic absorption.",
    },
    {
      id: "light-ash-sheer",
      title: "Light Ash Minimalist Sheer",
      subtitle: "Panoramic High-Rise Wave",
      image: "/curtain_hero_light_ash.jpg",
      hex: "#D2D6D9",
      badge: "Light Ash • Somfy® Motor Track",
      desc: "Breathtaking floor-to-ceiling light ash sheer curtains gracefully filtering skyline panoramic views.",
    },
    {
      id: "master-bedroom-sanctuary",
      title: "Sand Beige Bedroom Sanctuary",
      subtitle: "Dual-Layer Acoustic Blackout",
      image: "/curtain_bedroom_suite.jpg",
      hex: "#D6C7B2",
      badge: "100% Thermal Blackout • Dual Track",
      desc: "Dual-motorized curtain combination with thermal blackout sand beige drapes paired with translucent ivory linen.",
    },
  ];

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    setTouchStartX(null);
    setIsAutoPlaying(true);
  };

  const handleNext = useCallback(() => {
    setActiveCardIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setActiveCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  // Auto-play timer for 3D continuous rotation (Right -> Center -> Left)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500); // Rotate every 4.5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const activeCard = cards[activeCardIndex];

  return (
    <section className="relative min-h-0 flex flex-col justify-between pt-24 sm:pt-28 pb-6 overflow-hidden bg-transparent text-stone-900 selection:bg-[#234E3F] selection:text-white transition-colors duration-700">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto flex flex-col items-center">
        

        {/* 2. Overlapping 3D Rotating 7-Card Stage */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-6xl h-[300px] sm:h-[400px] lg:h-[460px] flex items-center justify-center my-2 py-2 overflow-hidden"
        >
          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 lg:left-8 z-50 p-2.5 sm:p-3 rounded-full bg-white/95 shadow-xl border border-stone-200 text-stone-800 hover:bg-[#1E3E34] hover:text-white transition-all cursor-pointer hover:scale-110"
            aria-label="Previous Curtain"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 lg:right-8 z-50 p-2.5 sm:p-3 rounded-full bg-white/95 shadow-xl border border-stone-200 text-stone-800 hover:bg-[#1E3E34] hover:text-white transition-all cursor-pointer hover:scale-110"
            aria-label="Next Curtain"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Render Cards with 3D Depth Offset Placement */}
          {cards.map((card, idx) => {
            // Offset math relative to active card
            const total = cards.length;
            const half = Math.floor(total / 2);
            let offset = idx - activeCardIndex;
            if (offset > half) offset -= total;
            if (offset < -half) offset += total;

            let styleTransform = "";
            let zIndex = 10;
            let opacity = 0;

            if (offset === 0) {
              // CENTER SPOTLIGHT CARD
              styleTransform = "translateX(0%) scale(1)";
              zIndex = 40;
              opacity = 1;
            } else if (offset === 1) {
              // IMMEDIATE RIGHT CARD
              styleTransform = "translateX(50%) scale(0.86)";
              zIndex = 30;
              opacity = 0.85;
            } else if (offset === 2) {
              // OUTER RIGHT CARD
              styleTransform = "translateX(92%) scale(0.74)";
              zIndex = 20;
              opacity = 0.45;
            } else if (offset === -1) {
              // IMMEDIATE LEFT CARD
              styleTransform = "translateX(-50%) scale(0.86)";
              zIndex = 30;
              opacity = 0.85;
            } else if (offset === -2) {
              // OUTER LEFT CARD
              styleTransform = "translateX(-92%) scale(0.74)";
              zIndex = 20;
              opacity = 0.45;
            } else {
              // BACKSTAGE HIDDEN LOOP CARDS (offset === 3 or -3)
              styleTransform = offset > 0 ? "translateX(130%) scale(0.6)" : "translateX(-130%) scale(0.6)";
              zIndex = 10;
              opacity = 0;
            }

            return (
              <div
                key={card.id}
                onClick={() => {
                  setActiveCardIndex(idx);
                  if (offset === 0) onOpenConsultation();
                }}
                className={`absolute w-[220px] sm:w-[290px] lg:w-[330px] aspect-[3/4] rounded-[30px] sm:rounded-[38px] overflow-hidden border-4 border-white transition-all duration-700 ease-in-out cursor-pointer group ${
                  offset === 0
                    ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.02]"
                    : "shadow-lg hover:opacity-100 hover:scale-95"
                }`}
                style={{
                  transform: styleTransform,
                  zIndex: zIndex,
                  opacity: opacity,
                  transition: "transform 0.75s cubic-bezier(0.34, 1.25, 0.64, 1), opacity 0.6s ease, z-index 0.6s ease",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 290px, 330px"
                  priority={offset === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Non-center card text label */}
                {offset !== 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white text-xs sm:text-sm font-bold font-serif">{card.title}</span>
                  </div>
                )}

                {/* Inner highlight ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[38px] pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Clear & Easy-to-Understand Brand Statement with SEO H1 Heading */}
        <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-4 mb-4 pt-2 sm:pt-0 px-4">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-3 leading-tight">
            Snow White | Luxury Curtains &amp; Motorized Blinds in <span className="text-[#B35C37]">Malappuram</span>
          </h1>
          <p className="font-serif text-stone-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed tracking-wide max-w-3xl mx-auto">
            <strong className="font-semibold text-stone-900">Snow White</strong> transforms your living spaces with custom hand-tailored luxury curtains, silent motorized smart blinds, and premium interior fabrics—crafted with millimeter precision for luxury residences across Kerala.
          </p>
        </div>

      </div>

    </section>
  );
}
