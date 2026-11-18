"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface CurtainEntranceProps {
  onOpeningComplete?: () => void;
}

export default function CurtainEntranceOverlay({ onOpeningComplete }: CurtainEntranceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const triggerOpen = useCallback(() => {
    setIsOpen(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    // Remove from DOM completely after 1.1s animation finishes
    setTimeout(() => {
      setIsRemoved(true);
      if (onOpeningComplete) onOpeningComplete();
    }, 1100);
  }, [onOpeningComplete]);

  useEffect(() => {
    // If page is already scrolled down, don't show curtain
    if (window.scrollY > 40) {
      setIsRemoved(true);
      return;
    }

    // Pin scroll during initial brief entrance
    document.body.style.overflow = "hidden";

    // Auto-open smoothly after 500ms
    const autoOpenTimer = setTimeout(() => {
      triggerOpen();
    }, 600);

    // Hard failsafe (max 1.5s) to guarantee unpin
    const failsafeTimer = setTimeout(() => {
      triggerOpen();
    }, 1500);

    const handleInteraction = () => {
      clearTimeout(autoOpenTimer);
      triggerOpen();
    };

    window.addEventListener("wheel", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });

    return () => {
      clearTimeout(autoOpenTimer);
      clearTimeout(failsafeTimer);
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [triggerOpen]);

  if (isRemoved) return null;

  return (
    <div
      onClick={triggerOpen}
      className={`fixed inset-0 z-[100] h-[100dvh] overflow-hidden flex items-center justify-center select-none cursor-pointer transition-opacity duration-500 ${
        isOpen ? "pointer-events-none opacity-0 delay-500" : "pointer-events-auto opacity-100"
      }`}
    >
      {/* Warm Ambient Soft Cream Spotlight Overlay */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.45)_0%,_rgba(110,98,86,0.35)_100%)] z-30 pointer-events-none transition-opacity duration-700 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Top Architectural Warm Champagne Gold Curtain Rod & Finials */}
      <div className="absolute top-0 inset-x-0 h-4 z-40 bg-gradient-to-r from-[#7A6C5D] via-[#C4B7A6] via-[#F7F3EB] via-[#C4B7A6] to-[#7A6C5D] border-b border-amber-200/40 shadow-xl flex items-center justify-between px-2 pointer-events-none">
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#9C8B7A] via-[#F7F3EB] to-[#FFFFFF] border border-amber-200/80 shadow-md shrink-0" />
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#9C8B7A] via-[#F7F3EB] to-[#FFFFFF] border border-amber-200/80 shadow-md shrink-0" />
      </div>

      {/* Sliding Brass Curtain Rings */}
      <div className="absolute top-1 inset-x-4 h-5 z-40 flex justify-between pointer-events-none px-4">
        {/* Left Wing Rings */}
        <div
          className="flex justify-between w-1/2 pr-4 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isOpen ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)" }}
        >
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 rounded-full border-2 border-amber-200/90 bg-stone-700/30 shadow-sm"
            />
          ))}
        </div>
        {/* Right Wing Rings */}
        <div
          className="flex justify-between w-1/2 pl-4 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isOpen ? "translate3d(100%, 0, 0)" : "translate3d(0, 0, 0)" }}
        >
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 rounded-full border-2 border-amber-200/90 bg-stone-700/30 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Center Brand Emblem - Logo Only */}
      <div
        className="absolute z-40 flex flex-col items-center justify-center transition-all duration-500 ease-out"
        style={{
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? "scale(0.85)" : "scale(1)",
        }}
      >
        <Image
          src="/logo.png"
          alt="Snow White Logo"
          width={320}
          height={320}
          priority
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Left Light Pearl White/Cream Wing */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-20 overflow-hidden shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformOrigin: "top left",
          transform: isOpen ? "translate3d(-105%, 0, 0) scaleX(0.75)" : "translate3d(0, 0, 0) scaleX(1)",
          willChange: "transform",
        }}
      >
        {/* French Pinch-Pleat Header Tape Band */}
        <div className="absolute top-0 inset-x-0 h-10 z-30 bg-[#6E6256] border-b border-amber-100/50 flex justify-between items-center px-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-6 rounded-full bg-gradient-to-b from-amber-100/90 to-amber-400/30 shadow-inner" />
          ))}
        </div>

        {/* Velvet Texture Base */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-20"
          style={{ backgroundImage: "url('/luxury_velvet_curtain.png')" }}
        />

        {/* Ultra Light Pearl Cream Color Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BDB0A4] via-[#E8E2D8] via-[#FAF7F2] via-[#FFFFFF] to-[#FFFFFF] opacity-98" />

        {/* Shimmering Dynamic Velvet Specular Light Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

        {/* Pleat Vertical Shadows */}
        <div className="absolute inset-0 flex justify-between pointer-events-none pt-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full flex"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-white/60 via-white/20 to-transparent border-r border-stone-400/10 shadow-inner" />
              <div className="w-1/2 h-full bg-gradient-to-r from-stone-800/15 via-stone-800/05 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Light Pearl White/Cream Wing */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2 z-20 overflow-hidden shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformOrigin: "top right",
          transform: isOpen ? "translate3d(105%, 0, 0) scaleX(0.75)" : "translate3d(0, 0, 0) scaleX(1)",
          willChange: "transform",
        }}
      >
        {/* French Pinch-Pleat Header Tape Band */}
        <div className="absolute top-0 inset-x-0 h-10 z-30 bg-[#6E6256] border-b border-amber-100/50 flex justify-between items-center px-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-6 rounded-full bg-gradient-to-b from-amber-100/90 to-amber-400/30 shadow-inner" />
          ))}
        </div>

        {/* Velvet Texture Base */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-20"
          style={{ backgroundImage: "url('/luxury_velvet_curtain.png')" }}
        />

        {/* Ultra Light Pearl Cream Color Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] via-[#FAF7F2] via-[#E8E2D8] to-[#BDB0A4] opacity-98" />

        {/* Shimmering Dynamic Velvet Specular Light Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

        {/* Pleat Vertical Shadows */}
        <div className="absolute inset-0 flex justify-between pointer-events-none pt-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full flex"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-stone-800/15 via-stone-800/05 to-transparent border-r border-white/40" />
              <div className="w-1/2 h-full bg-gradient-to-r from-white/60 via-white/20 to-transparent border-r border-stone-400/10 shadow-inner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
