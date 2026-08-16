"use client";

import React, { useEffect, useState } from "react";

export default function CurtainBackgroundAnimation() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable mouse cursor tracking on desktop screens to prevent mobile GPU fill-rate throttling
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* 1. Interactive Mouse Spotlight Glow (Desktop Only) */}
      {isDesktop && (
        <div
          className="absolute w-[450px] h-[450px] rounded-full bg-radial from-[#B35C37]/20 via-[#D97E59]/10 to-transparent blur-[90px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x - 225}px, ${mousePos.y - 225}px, 0)`,
            willChange: "transform",
          }}
        />
      )}

      {/* 2. Top Somfy Motorized Track & Glider Runner */}
      <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B35C37]/30 to-transparent">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 animate-active-glide flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-md bg-[#8A3D1E] border border-white/60 shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D97E59] animate-ping" />
            </div>
            <div className="w-24 h-12 bg-gradient-to-r from-[#B35C37]/20 to-transparent blur-md transform -skew-x-12" />
          </div>
        </div>
      </div>

      {/* 3. Soft Ambient Warm Terracotta & Rose Bronze Background Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full bg-[#B35C37]/12 blur-[100px] sm:blur-[180px] animate-ambient-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-[#D97E59]/12 blur-[100px] sm:blur-[190px] animate-ambient-pulse delay-1000" />
      <div className="absolute top-2/3 left-1/4 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-[#F5D0A9]/15 blur-[90px] sm:blur-[170px] animate-ambient-pulse delay-500" />

      {/* 4. Active Swaying Left & Right Sheer Curtain Silhouettes (Desktop Only for GPU Optimization) */}
      <div className="hidden md:block absolute top-0 -left-16 w-80 h-[1400px] opacity-25 pointer-events-none animate-curtain-sway-left origin-top-left">
        <svg viewBox="0 0 300 1200" fill="none" className="w-full h-full">
          <g filter="url(#active-curtain-blur)">
            <path d="M 0 0 C 70 300 130 600 70 1200 L 0 1200 Z" fill="url(#active-pleat-dark)" />
            <path d="M 70 0 C 130 300 190 600 130 1200 L 70 1200 Z" fill="url(#active-pleat-light)" />
            <path d="M 130 0 C 190 300 250 600 190 1200 L 130 1200 Z" fill="url(#active-pleat-dark)" />
          </g>
          <defs>
            <linearGradient id="active-pleat-dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A3D1E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B35C37" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="active-pleat-light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97E59" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F8EFEA" stopOpacity="0.05" />
            </linearGradient>
            <filter id="active-curtain-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="hidden md:block absolute top-0 -right-16 w-80 h-[1400px] opacity-25 pointer-events-none animate-curtain-sway-right origin-top-right">
        <svg viewBox="0 0 300 1200" fill="none" className="w-full h-full">
          <g filter="url(#active-curtain-blur-r)">
            <path d="M 300 0 C 230 300 170 600 230 1200 L 300 1200 Z" fill="url(#active-r-dark)" />
            <path d="M 230 0 C 170 300 110 600 170 1200 L 230 1200 Z" fill="url(#active-r-light)" />
            <path d="M 170 0 C 110 300 50 600 110 1200 L 170 1200 Z" fill="url(#active-r-dark)" />
          </g>
          <defs>
            <linearGradient id="active-r-dark" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8A3D1E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B35C37" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="active-r-light" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D97E59" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F8EFEA" stopOpacity="0.05" />
            </linearGradient>
            <filter id="active-curtain-blur-r" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>

    </div>
  );
}
