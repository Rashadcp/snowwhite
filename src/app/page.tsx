"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CollectionShowcase from "@/components/sections/CollectionShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import AutomatedCurtainShowcase from "@/components/sections/AutomatedCurtainShowcase";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ConsultationModal from "@/components/modals/ConsultationModal";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, Mail } from "lucide-react";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#1C1917] selection:bg-[#B35C37] selection:text-white relative">
      {/* Top Header Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 2. About Section */}
        <AboutSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 3. Bespoke Workroom Gallery Showcase */}
        <CollectionShowcase limit={3} onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 4. Services & Drapery Yardage Studio */}
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 5. Automated Motorized Curtains & Blinds Interactive Showcase */}
        <AutomatedCurtainShowcase onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 6. Interactive Contact Form Section */}
        <ContactFormSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Private Consultation & Swatch Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
