import React from "react";
import { Metadata } from "next";
import { ConsultationClient } from "./ConsultationClient";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Book Free Vaidya Consultation — Ayurvedic Doctor Call",
  description:
    "Schedule a complimentary 15-minute consultation with certified Ayurvedic Vaidyas. Personalized advice on Dosha balancing, Dinacharya, Moringa, Triphala, and Ashwagandha.",
  path: "/consultation",
});

export default function ConsultationPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ayurvedic Consultation", path: "/consultation" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ConsultationClient />
    </>
  );
}
