import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us — Earth • Health • Wellness",
  description:
    "Learn about SARVA NATURAL's commitment to classical Ayurvedic formulations, 100% vegetarian capsules, and pure botanical sourcing.",
  path: "/pages/about-us",
});

export default function AboutUsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/pages/about-us" },
  ]);

  return (
    <div className="bg-ayur-cream min-h-screen py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 h-16 rounded-full bg-ayur-parchment overflow-hidden border-2 border-ayur-gold/40 shadow-sm mx-auto mb-4 flex items-center justify-center">
            <Image
              src="/images/sarva-natural-emblem.png"
              alt="SARVA NATURAL"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-ayur-primary font-sans block mb-1">
            Our Purpose &amp; Lineage
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Earth &bull; Health &bull; Wellness
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-3 max-w-xl mx-auto leading-relaxed font-sans">
            SARVA NATURAL was established on a radical standard in modern wellness: rejecting commercial shortcuts to formulate only pure, classical Ayurvedic botanicals tested for absolute purity.
          </p>
        </div>

        {/* Narrative */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-sm text-stone-700 leading-relaxed font-sans mb-10">
          <h2 className="font-serif text-2xl font-bold text-ayur-dark">
            The Philosophy of Restraint
          </h2>
          <p>
            In today&apos;s commercial landscape, wellness brands race to release dozens of trendy products every season—often diluting active ingredients with synthetic excipients, silicon dioxide, and bovine gelatin capsules.
          </p>
          <p>
            SARVA NATURAL takes the opposite path: <strong>The discipline of focus</strong>. We formulate and produce exactly three classical remedies:
          </p>
          <ul className="space-y-2.5 my-4 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Moringa (Shigru):</strong> Pure whole-food bioavailable nutrition, iron, and cellular Ojas.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Triphala:</strong> Classical 1:1:1 ratio for gentle overnight colon cleanse and digestive fire (Deepana).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Ashwagandha:</strong> Standardized root extract for cortisol balance, restful sleep, and vitality.
              </span>
            </li>
          </ul>
          <p>
            By channeling our entire testing and manufacturing resources into these three master formulations, we achieve an unmatched standard of potency, consistency, and therapeutic efficacy.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-ayur-border shadow-soft">
            <span className="font-serif text-3xl font-bold text-ayur-gold/60 block mb-2">01</span>
            <h3 className="font-serif text-lg font-bold text-ayur-dark mb-2">100% Vegetarian</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We encapsulate exclusively in plant-cellulose HPMC shells. Completely free from bovine gelatin, bone char, and artificial shellacs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-ayur-border shadow-soft">
            <span className="font-serif text-3xl font-bold text-ayur-gold/60 block mb-2">02</span>
            <h3 className="font-serif text-lg font-bold text-ayur-dark mb-2">Lab-Certified Purity</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every production lot undergoes rigorous ICP-MS testing for heavy metals (Lead, Cadmium, Arsenic, Mercury) and pathogen screening.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-ayur-border shadow-soft">
            <span className="font-serif text-3xl font-bold text-ayur-gold/60 block mb-2">03</span>
            <h3 className="font-serif text-lg font-bold text-ayur-dark mb-2">Zero Chemical Binders</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              No talc, no magnesium stearate, and no synthetic preservatives. Pure standardized herbal extracts and nothing else.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-ayur-dark text-white p-8 rounded-2xl text-center shadow-card">
          <h3 className="font-serif text-2xl font-bold mb-2">Experience Classical Ayurveda</h3>
          <p className="text-xs text-ayur-sand/80 max-w-md mx-auto mb-6">
            Begin with our trio of pure botanicals crafted for natural vitality, smooth digestion, and restorative sleep.
          </p>
          <Link
            href="/collections/all-products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ayur-gold hover:bg-ayur-goldMuted text-ayur-dark font-semibold text-xs uppercase tracking-wider rounded transition-colors"
          >
            <span>Explore All Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
