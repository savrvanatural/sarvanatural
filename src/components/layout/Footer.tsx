"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf, ShieldCheck, Award, Heart, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { buildContactUsWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ayur-dark text-ayur-cream border-t border-ayur-primary/30 mt-auto">
      {/* Upper Quality Badges strip */}
      <div className="border-b border-white/10 py-6 sm:py-8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ayur-primary/60 border border-ayur-gold/30 flex items-center justify-center text-ayur-gold flex-shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Wild-Harvested Herbs</h4>
                <p className="text-xs text-ayur-sand/70 mt-0.5">Sourced from Pratapgarh & Himalayan foothills</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ayur-primary/60 border border-ayur-gold/30 flex items-center justify-center text-ayur-gold flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">GMP Certified Unit</h4>
                <p className="text-xs text-ayur-sand/70 mt-0.5">Manufactured under strict AYUSH license</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ayur-primary/60 border border-ayur-gold/30 flex items-center justify-center text-ayur-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Zero Synthetic Additives</h4>
                <p className="text-xs text-ayur-sand/70 mt-0.5">No artificial colors, added sugar or parabens</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ayur-primary/60 border border-ayur-gold/30 flex items-center justify-center text-ayur-gold flex-shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Traditional Kwath Method</h4>
                <p className="text-xs text-ayur-sand/70 mt-0.5">16-hour slow copper simmering process</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ayur-primary/60 border-2 border-ayur-gold/40 overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/sarva-natural-emblem.png"
                  alt="SARVA NATURAL"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                  SARVA NATURAL
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-ayur-gold font-bold">
                  EARTH &bull; HEALTH &bull; WELLNESS
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-ayur-sand/80 max-w-sm mb-6">
              Rooted in ancient classical texts of Charaka and Sushruta Samhitas. We produce unadulterated cold-pressed juices, classical kashayams, and medicated tailas with pure intent, wild-harvested botanicals, and zero synthetic dilution.
            </p>
            <div className="flex flex-col gap-2 text-xs text-ayur-sand/70 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-ayur-gold flex-shrink-0" />
                <span>Pratapgarh & Rajasthan Ayurvedic Manufacturing Facilities, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ayur-gold flex-shrink-0" />
                <span>+91 (0) 1800-SARVA-NATURAL (Demo Helpline: 9 AM - 7 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-ayur-gold flex-shrink-0" />
                <span>care@sarvanatural.com</span>
              </div>
            </div>
          </div>

          {/* The 3 Formulations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ayur-gold mb-4 font-sans">
              Our Formulations
            </h4>
            <ul className="space-y-2.5 text-xs text-ayur-sand/80">
              <li>
                <Link href="/products/moringa" className="hover:text-white transition-colors">
                  Organic Moringa Capsules
                </Link>
              </li>
              <li>
                <Link href="/products/triphala" className="hover:text-white transition-colors">
                  Classical Triphala Capsules
                </Link>
              </li>
              <li>
                <Link href="/products/ashwagandha" className="hover:text-white transition-colors">
                  Shuddha Ashwagandha Capsules
                </Link>
              </li>
              <li>
                <Link href="/collections/all-products" className="text-ayur-gold hover:underline inline-block mt-1">
                  Shop All 3 Products &rarr;
                </Link>
              </li>
              <li>
                <Link href="/collections/bestsellers" className="hover:text-white transition-colors">
                  Bestsellers Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Trust */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ayur-gold mb-4 font-sans">
              About &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-ayur-sand/80">
              <li>
                <Link href="/pages/about-us" className="hover:text-white transition-colors">
                  About SARVA NATURAL
                </Link>
              </li>
              <li>
                <Link href="/pages/our-story" className="hover:text-white transition-colors">
                  Our Founding Story
                </Link>
              </li>
              <li>
                <Link href="/pages/quality" className="hover:text-white transition-colors">
                  Quality &amp; Lab Standards
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Ayurvedic Journal &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/pages/order-tracking" className="hover:text-white transition-colors">
                  Track Consignment
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Patron Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Consultation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ayur-gold mb-4 font-sans">
              Support &amp; Care
            </h4>
            <ul className="space-y-2.5 text-xs text-ayur-sand/80">
              <li>
                <a
                  href={buildContactUsWhatsAppUrl({
                    name: "Patron",
                    subject: "General Inquiry",
                    message: "Namaste SARVA NATURAL, I would like assistance with an inquiry.",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp: {WHATSAPP_CONFIG.displayNumber}</span>
                </a>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-white transition-colors">
                  Book Vaidya Call
                </Link>
              </li>
              <li>
                <Link href="/pages/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/pages/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pages/shipping-policy" className="hover:text-white transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/pages/refund-policy" className="hover:text-white transition-colors">
                  Returns &amp; Replacements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Disclaimer & Legal */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="p-4 rounded bg-white/5 border border-white/10 text-[11px] text-ayur-sand/70 leading-relaxed space-y-2">
            <p>
              <strong className="text-ayur-gold font-semibold uppercase tracking-wider">
                Production-Ready Storefront Architecture:
              </strong>{" "}
              SARVA NATURAL exclusively formulates and dispatches authentic Moringa, Triphala, and Ashwagandha in 100% vegetarian capsules. Zero animal gelatin, no chemical binders, and laboratory tested for purity.
            </p>
            <p>
              <strong className="text-white font-medium">Ayurvedic Regulatory Disclaimer:</strong> Formulations presented are traditional Ayurvedic dietary supplements and classical herbal capsules formulated in accordance with the Ayurvedic Pharmacopoeia of India. They are not intended to diagnose, mitigate, prevent, treat, or cure any specific disease. Always consult a certified Ayurvedic practitioner or healthcare provider before commencing any herbal regimen.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ayur-sand/60 gap-4">
            <p>&copy; {new Date().getFullYear()} SARVA NATURAL. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px]">
              <Link href="/pages/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/pages/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/pages/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
              <span>•</span>
              <Link href="/pages/refund-policy" className="hover:text-white transition-colors">Refund &amp; Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
