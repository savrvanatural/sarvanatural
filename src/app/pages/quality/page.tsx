import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Leaf, FileCheck, ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Quality & Lab Standards — Heavy Metal Tested & GMP Certified",
  description:
    "Explore SARVA NATURAL's rigorous quality framework: ICP-MS heavy metal testing, AYUSH GMP facility compliance, and 100% vegetarian HPMC capsules.",
  path: "/pages/quality",
});

export default function QualityPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Quality & Standards", path: "/pages/quality" },
  ]);

  const testingProtocols = [
    {
      title: "ICP-MS Heavy Metal Spectrometry",
      desc: "Inductively Coupled Plasma Mass Spectrometry screening for Lead, Mercury, Arsenic, and Cadmium to ensure all levels fall well below the permissible Ayurvedic Pharmacopoeia of India limits.",
    },
    {
      title: "Microbiological Pathogen Assay",
      desc: "Complete screening for Salmonella, E. coli, Pseudomonas aeruginosa, and total fungal count to guarantee microbial safety across every lot.",
    },
    {
      title: "Active Marker Compound Assay",
      desc: "Standardized active withanolide assay for Ashwagandha and polyphenol/tannin verification for Triphala and Moringa.",
    },
    {
      title: "Zero Synthetic Excipients Guarantee",
      desc: "Zero talc, zero magnesium stearate, zero artificial coloring, and zero chemical flow agents. Encapsulated in 100% vegetarian plant cellulose.",
    },
  ];

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Testing Standards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Purity Without Compromise
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-3 max-w-xl mx-auto leading-relaxed font-sans">
            We believe that wellness products should be transparent. Discover the scientific benchmarks, laboratory testing, and manufacturing rigor behind every SARVA NATURAL capsule.
          </p>
        </div>

        {/* Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-xl border border-ayur-border text-center shadow-soft">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
            <h3 className="font-serif text-sm font-bold text-ayur-dark">GMP Certified</h3>
            <p className="text-[11px] text-stone-500 mt-1">Schedule T Compliance</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-ayur-border text-center shadow-soft">
            <Leaf className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
            <h3 className="font-serif text-sm font-bold text-ayur-dark">100% Veg HPMC</h3>
            <p className="text-[11px] text-stone-500 mt-1">Zero Animal Gelatin</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-ayur-border text-center shadow-soft">
            <FileCheck className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
            <h3 className="font-serif text-sm font-bold text-ayur-dark">Heavy Metal Tested</h3>
            <p className="text-[11px] text-stone-500 mt-1">ICP-MS Validated</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-ayur-border text-center shadow-soft">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
            <h3 className="font-serif text-sm font-bold text-ayur-dark">AYUSH Licensed</h3>
            <p className="text-[11px] text-stone-500 mt-1">Government Approved</p>
          </div>
        </div>

        {/* Protocols Detailed */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-8 font-sans mb-12">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ayur-dark mb-2">
              Four-Stage Analytical Testing Protocol
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every production batch undergoes mandatory analytical validation before clearance for encapsulation.
            </p>
          </div>

          <div className="space-y-6">
            {testingProtocols.map((protocol, i) => (
              <div key={i} className="border-l-2 border-ayur-gold pl-4 sm:pl-6 space-y-1">
                <span className="text-[10px] font-mono text-ayur-gold uppercase tracking-wider font-semibold">
                  Stage 0{i + 1}
                </span>
                <h3 className="font-serif text-base font-bold text-ayur-dark">{protocol.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <Link
            href="/collections/all-products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ayur-primary hover:bg-ayur-secondary text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors"
          >
            <span>Shop Pure Tested Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
