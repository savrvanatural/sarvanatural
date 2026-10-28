"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_CATEGORIES } from "@/data/faqs";

export function FaqsClient() {
  const [openItem, setOpenItem] = useState<string | null>("gen-1");

  return (
    <div className="bg-ayur-cream min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ayur-sageSubtle text-ayur-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-ayur-gold" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-lg mx-auto leading-relaxed">
            Everything you need to know about SARVA NATURAL&apos;s classical trio of Moringa, Triphala, and Ashwagandha.
          </p>
        </div>

        <div className="space-y-10">
          {FAQ_CATEGORIES.map((cat, cIdx) => (
            <div key={cIdx} className="bg-white p-6 sm:p-8 rounded-xl border border-ayur-border shadow-soft">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-ayur-dark mb-4 pb-2 border-b border-stone-100">
                {cat.name}
              </h2>

              <div className="space-y-3">
                {cat.items.map((item) => {
                  const isOpen = openItem === item.id;
                  return (
                    <div
                      key={item.id}
                      className="border border-stone-200/80 rounded-lg overflow-hidden transition-all bg-ayur-parchment/10"
                    >
                      <button
                        onClick={() => setOpenItem(isOpen ? null : item.id)}
                        className="w-full flex items-center justify-between p-4 text-left font-serif text-sm sm:text-base font-bold text-ayur-dark hover:text-ayur-primary transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-ayur-primary flex-shrink-0 transition-transform duration-200 ml-3 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-ayur-parchment/60 rounded-xl border border-ayur-border">
          <h3 className="font-serif text-xl font-bold text-ayur-dark mb-1">
            Still Have Questions About Your Health Concerns?
          </h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto mb-4">
            Our certified Ayurvedic Vaidyas offer complimentary 15-minute consultations to help align your daily routine and Dosha type.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pages/contact-us"
              className="px-5 py-2.5 bg-white border border-ayur-primary text-ayur-primary font-semibold text-xs uppercase tracking-wider rounded hover:bg-ayur-primary hover:text-white transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/consultation"
              className="px-5 py-2.5 bg-ayur-primary text-white font-semibold text-xs uppercase tracking-wider rounded hover:bg-ayur-secondary transition-colors"
            >
              Consult a Vaidya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
