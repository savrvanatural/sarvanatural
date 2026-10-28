import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Leaf, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { SITE_CONFIG } from "@/lib/seo/config";

export const metadata: Metadata = buildPageMetadata({
  title: "Classical Ayurvedic Botanical Guide — Shigru, Triphala & Ashwagandha",
  description:
    "Explore the classical pharmacology, Charaka Samhita commentary, and laboratory testing benchmarks for Sarva Natural's signature botanicals: Moringa, Triphala, and Ashwagandha.",
  path: "/pages/botanicals",
});

export default function BotanicalsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Botanical Guide", path: "/pages/botanicals" },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Classical Ayurvedic Botanical Guide: Shigru, Triphala, and Ashwagandha",
    description:
      "A comprehensive Ayurvedic treatise exploring classical Samhita principles, active phytochemical markers, and analytical purity standards of pure botanical formulations.",
    image: [SITE_CONFIG.defaultOgImage],
    datePublished: "2026-10-26T00:00:00.000Z",
    dateModified: "2026-10-26T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.baseUrl}/pages/botanicals`,
    },
  };

  return (
    <div className="bg-ayur-cream min-h-screen py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 text-xs text-ayur-muted font-sans mb-8 truncate"
        >
          <Link href="/" className="hover:text-ayur-primary transition-colors flex-shrink-0">
            Home
          </Link>
          <span>/</span>
          <span className="text-ayur-primary font-medium">Botanical Sourcing Guide</span>
        </nav>

        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ayur-sageSubtle text-ayur-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-ayur-primary" />
            <span>Classical Ayurvedic Monograph</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            The Three Pillars of Botanical Nutrition
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-3 max-w-xl mx-auto leading-relaxed font-sans">
            A comprehensive reference on the classical pharmacology, active botanical markers, and clinical purity benchmarks of Moringa, Triphala, and Ashwagandha.
          </p>
          <div className="w-16 h-0.5 bg-ayur-gold mx-auto my-4" />
        </div>

        {/* Executive Summary Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-ayur-border shadow-soft mb-12 font-sans text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-ayur-dark">
            The Principle of Single-Origin Integrity
          </h2>
          <p>
            In the ancient treatise <em>Charaka Samhita</em> (Sutra Sthana, Chapter 26), the classical Vaidyas observed that botanical potency depends entirely on three ecological factors: <strong>Desha</strong> (habitat of origin), <strong>Kala</strong> (season and maturity of harvest), and <strong>Samskara</strong> (non-destructive extraction methodology).
          </p>
          <p>
            Rather than combining diluted blends of dozens of herbs, SARVA NATURAL dedicates its entire analytical testing infrastructure to three foundational botanicals that together address the core physiological needs of modern life: <strong>Posha</strong> (vital whole-food nutrition), <strong>Shodhana</strong> (daily digestive detox), and <strong>Rasayana</strong> (neuroendocrine rejuvenation).
          </p>
        </div>

        {/* Monograph 1: Moringa (Shigru) */}
        <section id="shigru-moringa" className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft mb-10 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100 mb-6">
            <div>
              <span className="text-[11px] font-mono text-ayur-primary font-semibold uppercase tracking-wider block">
                Botanical Monograph 01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark">
                Moringa oleifera — शिग्रु (Shigru)
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 w-fit">
              Superfood &bull; Daily Ojas Booster
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-serif text-lg font-bold text-ayur-dark">Classical Ayurvedic Profile</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ayur-parchment/40 rounded-lg text-xs">
              <div>
                <strong className="block text-ayur-dark">Rasa (Taste):</strong>
                <span>Katu (Pungent), Tikta (Bitter)</span>
              </div>
              <div>
                <strong className="block text-ayur-dark">Virya (Potency):</strong>
                <span>Ushna (Warming)</span>
              </div>
              <div>
                <strong className="block text-ayur-dark">Vipaka (Post-Digestive):</strong>
                <span>Katu (Pungent)</span>
              </div>
              <div>
                <strong className="block text-ayur-dark">Dosha Karma:</strong>
                <span>Balances Vata &amp; Kapha</span>
              </div>
            </div>

            <p>
              In classical texts, Moringa leaves (<em>Shigru Patra</em>) are classified as both <strong>Deepana</strong> (kindling metabolic agni) and <strong>Medohara</strong> (clearing sluggish metabolic stagnation). Shade-dried leaves preserve an exceptional natural density of bioactive micronutrients:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 pl-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>90+ verified plant-derived nutrients</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>46 natural antioxidant polyphenols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Bioavailable non-heme plant iron</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Natural Vitamin C and bioflavonoids</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                <strong>Optimal Anupana (Co-Drink):</strong> Lukewarm water or fresh coconut water after morning breakfast.
              </p>
              <Link
                href="/products/moringa"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-ayur-primary text-white text-xs font-semibold rounded hover:bg-ayur-secondary transition-colors"
              >
                <span>View Moringa Capsules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Monograph 2: Triphala */}
        <section id="triphala-rasayana" className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft mb-10 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100 mb-6">
            <div>
              <span className="text-[11px] font-mono text-ayur-primary font-semibold uppercase tracking-wider block">
                Botanical Monograph 02
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark">
                Triphala Rasayana — त्रिफला (Equal 1:1:1 Ratio)
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 w-fit">
              Digestive Detox &bull; Non-Habit Forming
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-serif text-lg font-bold text-ayur-dark">The Classical Tridoshic Triad</h3>
            <p>
              Triphala is not a single botanical, but an equal 1:1:1 volumetric synergy of three sacred Indian myrobalan fruits celebrated by Maharishi Charaka as an eternal guardian of digestion:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-3">
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="block text-ayur-dark text-xs mb-1">Amalaki (33.3%)</strong>
                <span className="text-[11px] text-stone-500 block mb-1"><em>Phyllanthus emblica</em></span>
                <p className="text-xs text-stone-600">Pacifies Pitta dosha. Cools gastric heat, protects mucosal tissue, and provides natural tannins.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="block text-ayur-dark text-xs mb-1">Haritaki (33.3%)</strong>
                <span className="text-[11px] text-stone-500 block mb-1"><em>Terminalia chebula</em></span>
                <p className="text-xs text-stone-600">Pacifies Vata dosha. Known as the King of Medicine, it regulates smooth colon peristalsis without dependency.</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <strong className="block text-ayur-dark text-xs mb-1">Bibhitaki (33.3%)</strong>
                <span className="text-[11px] text-stone-500 block mb-1"><em>Terminalia bellirica</em></span>
                <p className="text-xs text-stone-600">Pacifies Kapha dosha. Liquefies deep digestive mucous, clears Ama (metabolic toxins), and balances lipids.</p>
              </div>
            </div>

            <p>
              Unlike commercial laxatives containing senna or synthetic bisacodyl which irritate the intestinal mucosa and create severe muscular dependency, classical Triphala tonifies the involuntary musculature of the colon wall, fostering healthy, effortless morning bowel motility.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                <strong>Optimal Anupana (Co-Drink):</strong> Lukewarm water or warm milk at bedtime, 30 minutes before sleep.
              </p>
              <Link
                href="/products/triphala"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-ayur-primary text-white text-xs font-semibold rounded hover:bg-ayur-secondary transition-colors"
              >
                <span>View Triphala Capsules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Monograph 3: Ashwagandha */}
        <section id="withania-ashwagandha" className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft mb-12 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100 mb-6">
            <div>
              <span className="text-[11px] font-mono text-ayur-primary font-semibold uppercase tracking-wider block">
                Botanical Monograph 03
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark">
                Withania somnifera — अश्वगंधा (Medhya Rasayana)
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200 w-fit">
              Cortisol Balance &bull; Restorative Sleep
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-serif text-lg font-bold text-ayur-dark">Adaptogenic Neuroendocrine Resilience</h3>
            <p>
              Celebrated in the <em>Bhavaprakasha</em> as <strong>Balya</strong> (strength provider) and <strong>Rasayana</strong> (longevity rejuvenator), Ashwagandha root extract acts primarily on the nervous system (<em>Majja Dhatu</em>).
            </p>
            <p>
              Standardized full-spectrum root extract provides bioactive Withanolides and Withaferin A that support the hypothalamic-pituitary-adrenal (HPA) axis, mitigating stress-induced serum cortisol spikes without inducing daytime brain fog or sedative grogginess.
            </p>

            <div className="p-4 bg-ayur-cream/80 rounded-lg border border-ayur-border">
              <strong className="block text-ayur-dark text-xs mb-1">Analytical Standardization Benchmark:</strong>
              <p className="text-xs text-stone-600">
                Purified full-spectrum root extraction preserves natural withanolide glycosides in synergistic equilibrium. Zero chemical solvents, zero petroleum distillates.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                <strong>Optimal Anupana (Co-Drink):</strong> Warm water or warm milk in the evening after dinner.
              </p>
              <Link
                href="/products/ashwagandha"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-ayur-primary text-white text-xs font-semibold rounded hover:bg-ayur-secondary transition-colors"
              >
                <span>View Ashwagandha Capsules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quality Testing Benchmark Box */}
        <div className="bg-ayur-dark text-white p-8 sm:p-10 rounded-2xl shadow-elevated mb-12">
          <div className="flex items-center gap-2 text-ayur-gold text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Analytical Lab Safety Guarantee</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            ICP-MS Validated Purity Across Every Lot
          </h3>
          <p className="text-xs sm:text-sm text-ayur-sand/80 leading-relaxed mb-6">
            Wild-harvested botanicals are vulnerable to environmental soil contamination. SARVA NATURAL subjects every incoming harvest to Inductively Coupled Plasma Mass Spectrometry (ICP-MS) screening for heavy metals, testing far below Ayurvedic Pharmacopoeia of India maximum permissible thresholds.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <strong className="block text-white">Lead (Pb)</strong>
              <span className="text-emerald-400">&lt; 10 ppm (Safe)</span>
            </div>
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <strong className="block text-white">Arsenic (As)</strong>
              <span className="text-emerald-400">&lt; 3 ppm (Safe)</span>
            </div>
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <strong className="block text-white">Cadmium (Cd)</strong>
              <span className="text-emerald-400">&lt; 0.3 ppm (Safe)</span>
            </div>
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <strong className="block text-white">Mercury (Hg)</strong>
              <span className="text-emerald-400">&lt; 1 ppm (Safe)</span>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-5 rounded-lg bg-white border border-stone-200 text-[11px] text-stone-500 leading-relaxed space-y-2">
          <p>
            <strong>Regulatory &amp; Compliance Statement:</strong> Formulations presented are classical Ayurvedic dietary supplements manufactured in accordance with Schedule T GMP compliance licensed by the Ministry of AYUSH, Government of India.
          </p>
          <p>
            Traditional botanical information cited is derived from ancient authoritative treatises (<em>Charaka Samhita</em>, <em>Sushruta Samhita</em>, <em>Bhavaprakasha</em>) and contemporary phytochemistry research. These products are not intended to diagnose, treat, mitigate, or cure any clinical condition. Consult a certified Vaidya or your physician before commencing any botanical regimen.
          </p>
        </div>
      </div>
    </div>
  );
}
