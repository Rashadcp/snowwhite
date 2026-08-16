"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/modals/ConsultationModal";
import { Sparkles, MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, Navigation } from "lucide-react";

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "In-Home Laser Measurement",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How does the in-home 3D laser measurement process work?",
      a: "Our senior drapery specialist arrives directly at your residence with 3D digital laser equipment and physical fabric swatch trunks. We measure ceiling recess depth, drop height, and structural bracket mounting points to millimeter precision.",
    },
    {
      q: "Can motorized drapes integrate with existing smart home setups?",
      a: "Yes. Our Somfy® motorized track systems natively interface with Control4, Crestron, Lutron, Apple HomeKit, Google Home, and Amazon Alexa via RF remote or Wi-Fi smart bridges.",
    },
    {
      q: "Do you handle outstation & neighboring state projects?",
      a: "Yes! While our main showroom and workroom is located in Melmuri, Malappuram, our master measurement and turnkey installation crews regularly execute outstation luxury villa and resort projects across neighboring states.",
    },
    {
      q: "What is the typical lead time for custom hand-stitched curtains?",
      a: "Standard lead time is 2 to 3 weeks from fabric selection to white-glove installation. Express 10-day workroom turnaround is available for urgent architectural deadlines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#1C1917]">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-grow">
        {/* Full-Width Edge-to-Edge Top Banner with Curved Bottom Sides featuring work4.jpeg */}
        <section className="relative w-full h-[450px] sm:h-[580px] lg:h-[650px] overflow-hidden bg-stone-900 group rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-[#B35C37]/30">
          {/* Banner Background Image */}
          <Image
            src="/curtain_hero_minimal_sand.jpg"
            alt="Snow White Master Atelier Showroom & Consultation Showcase"
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
                <span>Personalized Atelier Concierge</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
                Contact <span className="text-[#D97E59]">Snow White Decor</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Direct Founders Quick Dial Cards */}
        <section className="pb-12 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Founder 1 Card */}
              <div className="glass-card-bronze p-6 rounded-3xl border border-[#B35C37]/30 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-[#B35C37]/40 relative">
                    <Image src="/owner1.png" alt="Firoskhan" fill sizes="56px" className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-lg">Firoskhan</h4>
                    <p className="text-xs text-[#8A3D1E] font-bold uppercase">Co-Founder & Managing Partner</p>
                  </div>
                </div>
                <a
                  href="tel:9539437537"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-white text-xs font-bold uppercase tracking-wider hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>

              {/* Founder 2 Card */}
              <div className="glass-card-bronze p-6 rounded-3xl border border-[#B35C37]/30 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-[#B35C37]/40 relative">
                    <Image src="/owner2.png" alt="Sharafudheen" fill sizes="56px" className="object-cover object-center" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-lg">Sharafudheen</h4>
                    <p className="text-xs text-[#8A3D1E] font-bold uppercase">Co-Founder & Managing Partner</p>
                  </div>
                </div>
                <a
                  href="tel:+919744044819"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B35C37] to-[#D97E59] text-white text-xs font-bold uppercase tracking-wider hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Details & Form Grid */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Official Business Address Details */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl font-bold text-stone-900">
                    Visit Our <span className="bronze-gradient-text">Melmuri Showroom</span>
                  </h2>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Explore our physical fabric swatch trunks, motorized Somfy® track displays, and custom drapery samples at our flagship Malappuram store.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Official Address */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl glass-card-bronze border border-[#B35C37]/40 shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-[#B35C37] text-white flex items-center justify-center shrink-0 shadow-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-lg">Snow White Decor</h4>
                      <p className="text-stone-800 text-xs font-semibold mt-1 leading-relaxed">
                        Opposite Ma'din Public School,<br />
                        Melmuri (P.O), Malappuram (Dist.),<br />
                        Kerala, PIN: 676514
                      </p>
                      <a
                        href="https://maps.google.com/?q=Ma'din+Public+School+Melmuri+Malappuram+Kerala+676514"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#B35C37] hover:underline mt-2"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Directions on Google Maps</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-base">Direct Phone Numbers</h4>
                      <p className="text-stone-600 text-xs mt-1">Firoskhan: +91 95394 37537<br />Sharafudheen: +91 97440 44819</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-base">Email Inquiry</h4>
                      <p className="text-stone-600 text-xs mt-1">contact@snowwhitecurtains.com<br />projects@snowwhitecurtains.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#B35C37]/15 border border-[#B35C37]/30 flex items-center justify-center text-[#B35C37] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-base">Store & Showroom Hours</h4>
                      <p className="text-stone-600 text-xs mt-1">Mon - Sat: 9:00 AM - 7:30 PM<br />Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 glass-card-bronze p-8 sm:p-10 rounded-3xl border border-[#B35C37]/30 shadow-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        Send a Direct Inquiry
                      </h3>
                      <p className="text-stone-600 text-xs mt-1">
                        Fill in your details below to schedule an in-home measurement or consult on a project.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Nair"
                          className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                        Service Requested
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                      >
                        <option value="In-Home Laser Measurement">In-Home 3D Laser Measurement</option>
                        <option value="Automated Motorized Curtains">Automated Motorized Curtains & Blinds (Somfy®)</option>
                        <option value="Bespoke Hand-Pleated Drapery">Bespoke Hand-Pleated Drapery Couture</option>
                        <option value="Architect & Trade Account">Architect & Interior Designer Trade Partnership</option>
                        <option value="Outstation Project">Outstation Project Engineering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                        Project Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your window project, approximate dimensions, location, or fabric preferences..."
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Direct Inquiry</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#B35C37]/15 border border-[#B35C37] mx-auto flex items-center justify-center text-[#B35C37]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-stone-900">
                      Inquiry Received
                    </h3>
                    <p className="text-stone-700 text-xs max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-[#8A3D1E]">{formData.name}</span>. Our founder team will review your project details and connect with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-[#B35C37] hover:bg-[#8A3D1E] transition-colors cursor-pointer shadow-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Embedded Google Maps Section */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-2xl space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#B35C37]/15 text-[#B35C37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">Store & Showroom Location Map</h3>
                    <p className="text-xs text-stone-600">Snow White Decor • Opp. Ma'din Public School, Melmuri (P.O), Malappuram</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Ma'din+Public+School+Melmuri+Malappuram+Kerala+676514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold tracking-wider hover:bg-[#B35C37] transition-colors shadow-sm flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D97E59]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Google Maps iFrame */}
              <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-inner border border-stone-300">
                <iframe
                  title="Snow White Decor Location Map"
                  src="https://maps.google.com/maps?q=Ma'din%20Public%20School,%20Melmuri,%20Malappuram,%20Kerala%20676514&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client FAQ Section */}
        <section className="py-20 bg-transparent border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Frequently Asked <span className="bronze-gradient-text">Questions</span>
              </h2>
              <p className="text-stone-600 text-sm">
                Everything you need to know about measuring, motorization, and lead times.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B35C37] transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-xs text-stone-700 font-normal leading-relaxed border-t border-stone-200/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
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
