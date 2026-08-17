"use client";

import React from "react";

interface CurtainWaveDividerProps {
  flip?: boolean;
}

export default function CurtainWaveDivider({ flip = false }: CurtainWaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none py-4 ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 text-[#B35C37]/20 animate-curtain-wave"
      >
        <path
          d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
          fill="currentColor"
        />
        <path
          d="M0,20 C200,100 400,-20 600,70 C800,140 1000,20 1200,60"
          stroke="#B35C37"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
