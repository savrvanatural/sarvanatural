"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, MessageCircle, ExternalLink } from "lucide-react";
import { buildContactUsWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/whatsapp";

export function ContactUsClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ayur-cream min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-ayur-primary font-sans block mb-1">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Contact SARVA NATURAL
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-lg mx-auto leading-relaxed">
            Have questions about our botanical sourcing, dosage instructions, or an existing order? Our wellness advisors are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-ayur-border shadow-soft space-y-4 text-xs font-sans text-stone-700">
              <h3 className="font-serif text-xl font-bold text-ayur-dark">Customer Care &amp; Support</h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ayur-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ayur-dark">Headquarters &amp; Processing:</strong>
                  <span>Jaipur, Rajasthan 302001, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-ayur-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ayur-dark">Toll-Free Helpline:</strong>
                  <span>+91 (0) 1800-SARVA-NATURAL</span>
                  <span className="block text-stone-400 text-[11px]">+91 82333 87011</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-ayur-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ayur-dark">Email Inquiries:</strong>
                  <span>care@sarvanatural.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-ayur-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ayur-dark">Operating Hours:</strong>
                  <span>Monday – Saturday: 9:00 AM – 6:00 PM IST</span>
                  <span className="block text-stone-400 text-[11px]">Sunday: Closed (Vedic Observance)</span>
                </div>
              </div>

              {/* Dedicated WhatsApp Support Card */}
              <div className="pt-3 border-t border-stone-200">
                <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <div>
                      <strong className="block text-xs text-emerald-950 font-semibold">WhatsApp Care Desk:</strong>
                      <span className="text-[11px] text-emerald-800 font-mono">{WHATSAPP_CONFIG.displayNumber}</span>
                    </div>
                  </div>
                  <a
                    href={buildContactUsWhatsAppUrl({
                      name: formData.name,
                      subject: formData.subject,
                      message: "Namaste SARVA NATURAL, I would like assistance with an inquiry.",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-[11px] font-semibold transition-colors flex items-center gap-1 shadow-xs flex-shrink-0"
                  >
                    <span>Chat Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-ayur-sageSubtle border border-ayur-sage/30 text-xs text-ayur-primary">
              <strong className="block font-semibold mb-1">Doctor Consultations:</strong>
              Looking for tailored Ayurvedic guidance regarding your Dosha type? You can schedule a 15-minute consultation directly through our website.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-ayur-border shadow-soft">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ayur-dark mb-2">
                    Message Received
                  </h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto mb-6">
                    Namaste, {formData.name || "Patron"}. Thank you for contacting SARVA NATURAL. Our team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildContactUsWhatsAppUrl({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        subject: formData.subject,
                        message: formData.message || "Following up on my submitted inquiry.",
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "Product Inquiry", message: "" });
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-ayur-parchment hover:bg-ayur-sand/80 text-ayur-dark border border-ayur-sand rounded text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-ayur-dark mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-stone-500 mb-4">
                    Fill out the form below and our Ayurvedic support team will respond promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-3.5 py-2 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-3.5 py-2 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary bg-white"
                      >
                        <option value="Product Inquiry">Product Inquiry (Moringa / Triphala / Ashwagandha)</option>
                        <option value="Order Tracking">Order &amp; Delivery Tracking</option>
                        <option value="Quality & Lab Testing">Quality &amp; Lab Testing Inquiries</option>
                        <option value="Bulk Order">Bulk / Practitioner Order</option>
                        <option value="Other">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share how we can assist you..."
                      className="w-full px-3.5 py-2 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-ayur-primary text-white font-semibold text-xs uppercase tracking-wider rounded hover:bg-ayur-secondary transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </button>
                    <a
                      href={buildContactUsWhatsAppUrl({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        subject: formData.subject,
                        message: formData.message || "Namaste, I have an inquiry for SARVA NATURAL.",
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
