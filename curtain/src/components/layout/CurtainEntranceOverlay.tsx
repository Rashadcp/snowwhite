"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

interface CurtainEntranceProps {
  onOpeningComplete?: () => void;
}

export default function CurtainEntranceOverlay({ onOpeningComplete }: CurtainEntranceProps) {
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const isUnlockedRef = useRef(false);

  const completeUnveil = useCallback(() => {
    if (isUnlockedRef.current) return;
    isUnlockedRef.current = true;
    setIsUnlocked(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    if (onOpeningComplete) onOpeningComplete();
  }, [onOpeningComplete]);

  // Gentle, elegant unveil glide animation
  const handleUnveilClick = useCallback(() => {
    if (isUnlockedRef.current) return;
    let startTimestamp: number | null = null;
    const duration = 1000; // 1.0s silky smooth unveil

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const fraction = Math.min(1, elapsed / duration);
      
      // Smooth ease-out cubic
      const easeP = 1 - Math.pow(1 - fraction, 3);
      setProgress(easeP);

      if (fraction < 1 && !isUnlockedRef.current) {
        requestAnimationFrame(step);
      } else {
        completeUnveil();
      }
    };

    requestAnimationFrame(step);
  }, [completeUnveil]);

  useEffect(() => {
    // If page is already scrolled down on reload, bypass overlay immediately
    if (window.scrollY > 40) {
      completeUnveil();
      return;
    }

    if (isUnlocked) return;

    // Pin body scroll during entrance curtain animation
    document.body.style.overflow = "hidden";

    // Automatic 1.5-second timer to unveil smoothly
    const autoOpenTimer = setTimeout(() => {
      handleUnveilClick();
    }, 1500);

    // Hard Failsafe Safety Timer (2.5 seconds max) - GUARANTEES scroll un-pin even if tab was backgrounded
    const failsafeTimer = setTimeout(() => {
      completeUnveil();
    }, 2500);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(autoOpenTimer);
      handleUnveilClick();
    };

    const handleTouchStart = () => {
      clearTimeout(autoOpenTimer);
      handleUnveilClick();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "Space"].includes(e.code)) {
        e.preventDefault();
        clearTimeout(autoOpenTimer);
        handleUnveilClick();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(autoOpenTimer);
      clearTimeout(failsafeTimer);
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isUnlocked, completeUnveil, handleUnveilClick]);

  if (isUnlocked) return null;

  // Parallel curtain translation
  const leftTranslateX = -progress * 105;
  const rightTranslateX = progress * 105;
  const fabricGatherScale = 1 - progress * 0.35;

  const centerOpacity = Math.max(0, 1 - progress * 2.2);
  const centerScale = 1 - progress * 0.2;
  const ambientOpacity = Math.max(0, 1 - progress * 1.5);

  return (
    <div
      onClick={handleUnveilClick}
      className={`fixed inset-0 z-[100] h-[100dvh] overflow-hidden flex items-center justify-center select-none cursor-pointer touch-none ${
        progress > 0.8 ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
      } transition-opacity duration-300`}
    >
      {/* Warm Ambient Soft Cream Spotlight Overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.45)_0%,_rgba(110,98,86,0.35)_100%)] z-30 pointer-events-none transition-opacity duration-200"
        style={{ opacity: ambientOpacity }}
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
          className="flex justify-between w-1/2 pr-4 transition-transform duration-75"
          style={{ transform: `translate3d(${leftTranslateX * 0.9}%, 0, 0)` }}
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
          className="flex justify-between w-1/2 pl-4 transition-transform duration-75"
          style={{ transform: `translate3d(${rightTranslateX * 0.9}%, 0, 0)` }}
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
        className="absolute z-40 flex flex-col items-center justify-center group"
        style={{
          opacity: centerOpacity,
          transform: `scale(${centerScale})`,
        }}
      >
        <Image
          src="/logo.png"
          alt="Snow White Logo"
          width={320}
          height={320}
          priority
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Left Light Pearl White/Cream Wing */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-20 overflow-hidden shadow-2xl"
        style={{
          transformOrigin: "top left",
          transform: `translate3d(${leftTranslateX}%, 0, 0) scaleX(${fabricGatherScale})`,
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
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
          style={{ transform: `translate3d(${progress * 40}%, 0, 0)` }}
        />

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
        className="absolute top-0 bottom-0 right-0 w-1/2 z-20 overflow-hidden shadow-2xl"
        style={{
          transformOrigin: "top right",
          transform: `translate3d(${rightTranslateX}%, 0, 0) scaleX(${fabricGatherScale})`,
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
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
          style={{ transform: `translate3d(${-progress * 40}%, 0, 0)` }}
        />

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
