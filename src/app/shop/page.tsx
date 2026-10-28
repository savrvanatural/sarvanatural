import React, { Suspense } from "react";
import { CatalogView } from "@/components/catalog/CatalogView";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Shop All Ayurvedic Formulations",
    description:
      "Browse authentic single-origin Moringa, Triphala, and Ashwagandha pure herbal capsules crafted by SARVA NATURAL.",
    path: "/collections/all-products", // Canonical point to primary collection URL
  }),
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-xs text-ayur-muted">
          Loading formulations...
        </div>
      }
    >
      <CatalogView initialSlug="all-products" />
    </Suspense>
  );
}
