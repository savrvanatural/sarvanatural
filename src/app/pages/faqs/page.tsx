import React from "react";
import { Metadata } from "next";
import { FaqsClient } from "./FaqsClient";
import { FAQ_CATEGORIES } from "@/data/faqs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions — Moringa, Triphala & Ashwagandha",
  description:
    "Everything you need to know about SARVA NATURAL's classical trio of Moringa, Triphala, and Ashwagandha: dosage, vegetarian certification, testing, and shipping.",
  path: "/pages/faqs",
});

export default function FaqsPage() {
  const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.items);
  const faqSchema = getFAQSchema(allFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/pages/faqs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FaqsClient />
    </>
  );
}
