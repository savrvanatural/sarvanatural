import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { BestsellerSection } from "@/components/home/BestsellerSection";
import { ShopByConcern } from "@/components/home/ShopByConcern";
import { ManufacturingTrust } from "@/components/home/ManufacturingTrust";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VaidyaBanner } from "@/components/home/VaidyaBanner";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/structured-data";

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <HeroSection />
      <BrandStorySection />
      <BestsellerSection />
      <ShopByConcern />
      <ManufacturingTrust />
      <HomeFaqSection />
      <TestimonialsSection />
      <VaidyaBanner />
      <NewsletterSection />
    </div>
  );
}
