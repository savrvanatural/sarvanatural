import React from "react";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and personal data protection principles of SARVA NATURAL.",
  path: "/pages/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/pages/privacy-policy" },
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
            Legal &amp; Trust
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ayur-dark">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-500 mt-2 font-mono">Last Updated: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <h2 className="font-serif text-xl font-bold text-ayur-dark">1. Commitment to Personal Privacy</h2>
          <p>
            At SARVA NATURAL, we treat your personal and health information with the utmost confidentiality. This policy outlines how we collect, utilize, and protect your information when you browse our storefront, consult our Vaidyas, or purchase our classical formulations.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">2. Information We Collect</h2>
          <p>
            We collect personal information necessary to fulfill orders, provide Ayurvedic health guidance, and improve our formulations. This includes your name, delivery address, phone number, email address, and voluntary details shared during consultation assessments.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">3. Payment &amp; Financial Security</h2>
          <p>
            All online transactions are securely encrypted using 256-bit SSL protocols. We do not store, log, or have access to your full credit card numbers, debit card PINs, or UPI security pins.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">4. Zero Data Commercialization</h2>
          <p>
            We adhere to a strict non-disclosure guarantee: <strong>We do not sell, rent, or lease your personal information to third-party advertisers, data brokers, or marketing networks.</strong>
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">5. Contact Our Privacy Officer</h2>
          <p>
            For questions regarding data privacy or to request the deletion of your customer record, contact our compliance team at{" "}
            <a href="mailto:care@sarvanatural.com" className="text-ayur-primary font-semibold hover:underline">
              care@sarvanatural.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
