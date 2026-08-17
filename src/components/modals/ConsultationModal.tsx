"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle, Send } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "home-measurement",
    fabricPreference: "velvet",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-md">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-card-bronze p-5 sm:p-8 rounded-3xl border border-[#B35C37]/40 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-500 hover:text-stone-900 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C37]/15 text-xs font-bold text-[#8A3D1E] uppercase border border-[#B35C37]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#B35C37]" />
                <span>Complimentary Atelier Service</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Book Private Consultation & Swatches
              </h3>
              <p className="text-stone-600 text-xs font-normal">
                An interior specialist will bring custom fabric swatch binders directly to your residence or schedule a virtual laser measurement.
              </p>
            </div>

            <div className="space-y-4">
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
                    placeholder="e.g. Lady Genevieve"
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
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
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
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
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                    Requested Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  >
                    <option value="home-measurement">In-Home Laser Measurement</option>
                    <option value="sample-box">Free Fabric Swatch Box</option>
                    <option value="motorized">Motorized Smart Automation Consultation</option>
                    <option value="designer-trade">Architect / Designer Trade Account</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                    Primary Fabric Interest
                  </label>
                  <select
                    value={formData.fabricPreference}
                    onChange={(e) => setFormData({ ...formData, fabricPreference: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                  >
                    <option value="velvet">Belgian Plush Velvet</option>
                    <option value="linen">French Sheer Linen</option>
                    <option value="silk">Venetian Silk Jacquard</option>
                    <option value="blackout">Thermal Blackout Satin</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                  Project Notes or Window Count
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 5 double-height living room windows requiring motorized tracks."
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2 text-xs text-stone-900 font-semibold focus:outline-none focus:border-[#B35C37] shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#B35C37] via-[#D97E59] to-[#B35C37] hover:shadow-xl hover:shadow-[#B35C37]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Appointment Request</span>
            </button>
          </form>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#B35C37]/15 border border-[#B35C37] mx-auto flex items-center justify-center text-[#B35C37]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-stone-900">
              Request Confirmed
            </h3>
            <p className="text-stone-700 text-xs max-w-md mx-auto font-normal">
              Thank you, <span className="text-[#8A3D1E] font-bold">{formData.name}</span>. Senior Drapery Consultant will contact you at <span className="text-stone-900 font-mono font-bold">{formData.phone}</span> within 2 hours to confirm your swatch shipment and appointment schedule.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-[#B35C37] hover:bg-[#8A3D1E] transition-colors cursor-pointer"
            >
              Back to Studio
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
