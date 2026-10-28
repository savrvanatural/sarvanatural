import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Story — Roots, Heritage & Botanical Lineage",
  description:
    "The journey of SARVA NATURAL: How our quest for unadulterated Ayurvedic botanicals led to our signature trio of Moringa, Triphala, and Ashwagandha.",
  path: "/pages/our-story",
});

export default function OurStoryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/pages/our-story" },
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
            Roots &amp; Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Our Story: Rediscovering Pure Potency
          </h1>
          <div className="w-16 h-0.5 bg-ayur-gold mx-auto my-4" />
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-sm text-stone-700 leading-relaxed font-sans mb-10">
          <h2 className="font-serif text-2xl font-bold text-ayur-dark">
            The Quest for Authentic Botanical Purity
          </h2>
          <p>
            The story of <strong>SARVA NATURAL</strong> began with a disheartening realization. While visiting herbal processing units across North India, our founders observed a troubling trend: ancient Ayurvedic preparations were being stripped of their therapeutic integrity. Herbs were blended with chemical anti-caking agents, scorched under rapid hot-air drying to reduce processing times, and encapsulated in cheap animal-derived gelatin shells.
          </p>
          <p>
            Traditional texts like the <em>Charaka Samhita</em> and <em>Bhavaprakasha</em> are unequivocal: herbs must be harvested at the correct biological maturity, shade-dried to safeguard volatile phytochemicals, and administered without adulteration.
          </p>
          <p>
            In response, we set out to build a lineage-first formulation house: a sanctuary where ancient classical wisdom meets rigorous modern laboratory standards.
          </p>

          <h2 className="font-serif text-2xl font-bold text-ayur-dark pt-4">
            Why Only Three Formulations?
          </h2>
          <p>
            Modern commerce encourages companies to launch fifty variations of the same product to dominate shelf space. At SARVA NATURAL, we deliberately resist this trend.
          </p>
          <p>
            Ayurveda teaches that holistic vitality rests upon three core physiological pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-lg bg-ayur-cream/60 border border-ayur-border">
              <span className="font-serif text-lg font-bold text-ayur-primary block mb-1">Posha (Nutrition)</span>
              <p className="text-xs text-stone-600">Moringa provides whole-food plant nutrition, iron, and antioxidant vitality.</p>
            </div>
            <div className="p-4 rounded-lg bg-ayur-cream/60 border border-ayur-border">
              <span className="font-serif text-lg font-bold text-ayur-primary block mb-1">Shodhana (Cleanse)</span>
              <p className="text-xs text-stone-600">Triphala cleanses deep colon Ama and gently regulates overnight peristalsis.</p>
            </div>
            <div className="p-4 rounded-lg bg-ayur-cream/60 border border-ayur-border">
              <span className="font-serif text-lg font-bold text-ayur-primary block mb-1">Rasayana (Rejuvenation)</span>
              <p className="text-xs text-stone-600">Ashwagandha restores neuroendocrine resilience and induces restorative sleep.</p>
            </div>
          </div>
          <p>
            By dedicating our entire supply chain, analytical testing, and extraction processes exclusively to Moringa, Triphala, and Ashwagandha, we guarantee that every capsule delivered to your home represents the pinnacle of purity and classical potency.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/pages/quality"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ayur-primary hover:text-ayur-secondary transition-colors"
          >
            <span>Learn about our laboratory testing and quality certifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
