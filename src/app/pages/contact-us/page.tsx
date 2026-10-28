import React from "react";
import { Metadata } from "next";
import { ContactUsClient } from "./ContactUsClient";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { SITE_CONFIG } from "@/lib/seo/config";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Customer Care & Vedic Support",
  description:
    "Get in touch with SARVA NATURAL for questions about Ayurvedic formulations, dosage instructions, quality certifications, or order tracking.",
  path: "/pages/contact-us",
});

export default function ContactUsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/pages/contact-us" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SARVA NATURAL",
    url: `${SITE_CONFIG.baseUrl}/pages/contact-us`,
    description:
      "Customer care and Ayurvedic consultation support desk for SARVA NATURAL.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.contact.address.streetAddress,
        addressLocality: SITE_CONFIG.contact.address.addressLocality,
        addressRegion: SITE_CONFIG.contact.address.addressRegion,
        postalCode: SITE_CONFIG.contact.address.postalCode,
        addressCountry: SITE_CONFIG.contact.address.addressCountry,
      },
    },
  };

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
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <ContactUsClient />
    </>
  );
}
