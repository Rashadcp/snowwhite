"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Sparkles, Phone, Mail, MapPin } from "lucide-react";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "In-Home Laser Measurement",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
            <span>Personalized Concierge Request</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Transform Your Space With <span className="bronze-gradient-text">Snow White</span>
          </h2>
          <p className="text-stone-600 text-sm font-normal leading-relaxed">
            Schedule a complimentary measurement appointment or send an inquiry to our master workroom team.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="glass-card-bronze p-8 sm:p-12 rounded-3xl border border-[#B35C37]/30 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-white/90 border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/90 border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-white/90 border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/90 border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  >
                    <option value="In-Home Laser Measurement">In-Home Laser Measurement</option>
                    <option value="Automated Motorized Curtains & Blinds">Automated Motorized Curtains & Blinds</option>
                    <option value="Custom Hand-Pleated Drapery">Custom Hand-Pleated Drapery</option>
                    <option value="Architect & Trade Partnership">Architect & Trade Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                  Project Details / Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your window sizes, location, or preferred drapery styles..."
                  className="w-full bg-white/90 border border-stone-300 rounded-xl px-4 py-3 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl transition-all cursor-pointer shadow-md inline-flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Submit Inquiry Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900">
                Inquiry Received
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Snow White Atelier! Our senior concierge will review your request and reach out within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider hover:bg-stone-300 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
