import React from "react";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions of service for SARVA NATURAL.",
  path: "/pages/terms-of-service",
});

export default function TermsOfServicePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/pages/terms-of-service" },
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
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-ayur-primary font-sans block mb-1">
            Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ayur-dark">
            Terms of Service
          </h1>
          <p className="text-xs text-stone-500 mt-2 font-mono">Last Updated: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <h2 className="font-serif text-xl font-bold text-ayur-dark">1. Acceptance of Terms</h2>
          <p>
            By accessing or ordering from SARVA NATURAL (sarvanatural.com), you acknowledge and agree to be bound by these Terms of Service and all applicable laws and regulations in India.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">2. Ayurvedic Educational Notice</h2>
          <p>
            The herbal dietary supplements and classical formulations (Moringa, Triphala, Ashwagandha) offered on this site are formulated in accordance with the Ayurvedic Pharmacopoeia. They are intended for nutritional and traditional wellness support. Content provided on this website is for educational purposes and should not be used as a substitute for professional medical diagnosis or treatment by a qualified healthcare physician.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">3. Product Pricing &amp; Orders</h2>
          <p>
            All prices are listed in Indian Rupees (₹) inclusive of GST. We reserve the right to modify prices or discontinue products at our discretion without prior notice.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">4. Intellectual Property</h2>
          <p>
            All trademarks, logos, visual marks, product copy, and imagery on this platform are the exclusive property of SARVA NATURAL. Unauthorized reproduction or commercial distribution without written consent is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
