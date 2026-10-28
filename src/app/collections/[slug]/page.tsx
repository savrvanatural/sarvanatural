import React, { Suspense } from "react";
import { CatalogView } from "@/components/catalog/CatalogView";
import { Metadata } from "next";
import { COLLECTIONS } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getCollectionSchema } from "@/lib/seo/structured-data";

export async function generateStaticParams() {
  return [
    { slug: "all-products" },
    { slug: "bestsellers" },
    { slug: "herbal-wellness" },
    { slug: "daily-wellness" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const collection = COLLECTIONS.find((c) => c.slug === params.slug);
  const formattedTitle =
    params.slug === "all-products"
      ? "All Classical Ayurvedic Formulations"
      : collection
      ? collection.name
      : params.slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

  const description = collection
    ? collection.description
    : `Browse authentic classical Ayurvedic ${formattedTitle.toLowerCase()} handcrafted from wild herbs by SARVA NATURAL.`;

  return buildPageMetadata({
    title: formattedTitle,
    description,
    path: `/collections/${params.slug}`,
  });
}

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = COLLECTIONS.find((c) => c.slug === params.slug) || {
    name: params.slug === "all-products" ? "All Formulations" : params.slug,
    description: "Browse authentic Ayurvedic formulations by SARVA NATURAL.",
    slug: params.slug,
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: collection.name, path: `/collections/${params.slug}` },
  ]);
  const collectionSchema = getCollectionSchema(collection, PRODUCTS);

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
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <Suspense
        fallback={
          <div className="py-20 text-center text-xs text-ayur-muted">
            Loading Ayurvedic formulations...
          </div>
        }
      >
        <CatalogView initialSlug={params.slug} />
      </Suspense>
    </>
  );
}
