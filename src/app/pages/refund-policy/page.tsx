import React from "react";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Refund & Cancellation Policy",
  description: "Return, replacement, refund, and order cancellation guidelines for SARVA NATURAL.",
  path: "/pages/refund-policy",
});

export default function RefundPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Refund & Cancellation Policy", path: "/pages/refund-policy" },
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
            Customer Assurance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ayur-dark">
            Returns, Refunds &amp; Cancellations
          </h1>
          <p className="text-xs text-stone-500 mt-2 font-mono">Last Updated: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <h2 className="font-serif text-xl font-bold text-ayur-dark">1. Damage in Transit Guarantee</h2>
          <p>
            We take extreme care in packaging our amber glass and recyclable PET bottles. In the unlikely event that your parcel arrives broken, leaked, or with a broken seal, please notify us within <strong>48 hours of delivery</strong> at <a href="mailto:care@sarvanatural.com" className="text-ayur-primary underline font-semibold">care@sarvanatural.com</a> with photographs of the outer carton and damaged bottle. We will dispatch an immediate free replacement with no return shipping cost to you.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">2. Order Cancellations</h2>
          <p>
            Orders can be cancelled free of charge at any time prior to courier dispatch (typically within 4 hours of placing the order). Once an order has been picked up by the logistics courier and assigned an AWB tracking number, it cannot be cancelled in transit.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">3. Hygiene &amp; Ingestion Return Exemption</h2>
          <p>
            Due to strict AYUSH dietary and pharmaceutical hygiene regulations, opened bottles or supplements cannot be returned once unsealed. If you are unsatisfied with your formulation or have dosage questions, our Vaidyas are available to guide you on timing and anupana adjustments.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">4. Refund Timeline</h2>
          <p>
            Approved refunds are credited back to the original source payment method (UPI, Net Banking, or Card) within <strong>5 to 7 business days</strong> following confirmation by our accounts desk.
          </p>
        </div>
      </div>
    </div>
  );
}
