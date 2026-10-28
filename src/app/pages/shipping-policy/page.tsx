import React from "react";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Shipping & Delivery Policy",
  description: "Shipping timelines, delivery rates, and courier coverage for SARVA NATURAL orders.",
  path: "/pages/shipping-policy",
});

export default function ShippingPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Shipping Policy", path: "/pages/shipping-policy" },
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
            Dispatch Guidelines
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ayur-dark">
            Shipping &amp; Delivery Policy
          </h1>
          <p className="text-xs text-stone-500 mt-2 font-mono">Last Updated: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-ayur-border shadow-soft space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <h2 className="font-serif text-xl font-bold text-ayur-dark">1. Free Shipping Threshold</h2>
          <p>
            We provide <strong>FREE express delivery</strong> on all orders with a subtotal of <strong>₹399 or higher</strong> across all serviceable PIN codes in India. For orders under ₹399, a nominal flat delivery charge of ₹50 is added at checkout.
          </p>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">2. Dispatch &amp; Transit Timelines</h2>
          <p>
            Orders placed Monday through Saturday before 2:00 PM IST are inspected, bubble-wrapped, and handed over to our express logistics partners (BlueDart, Delhivery, DTDC) within 24 hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-ayur-dark text-xs mb-1">Metropolitan Cities</strong>
              <p className="text-xs text-stone-600">Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune: <strong>2 – 3 business days</strong>.</p>
            </div>
            <div className="p-4 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-ayur-dark text-xs mb-1">Tier 2, Tier 3 &amp; Rest of India</strong>
              <p className="text-xs text-stone-600">All other towns and regional districts: <strong>3 – 6 business days</strong>.</p>
            </div>
          </div>

          <h2 className="font-serif text-xl font-bold text-ayur-dark">3. Consignment Tracking</h2>
          <p>
            Once your parcel is handed to the courier, you will receive an SMS and email notification with your AWB tracking number. You can also track your shipment live at any time on our <a href="/pages/order-tracking" className="text-ayur-primary underline font-semibold">Track Order Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
