import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { getBlogsByProductId } from "@/data/blogs";
import { ProductGallery } from "@/components/product-detail/ProductGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { ProductDetailsAccordion } from "@/components/product-detail/ProductDetailsAccordion";
import { RelatedProducts } from "@/components/product-detail/RelatedProducts";
import { ArrowLeft, BookOpen, Clock, ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { SITE_CONFIG } from "@/lib/seo/config";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildPageMetadata({
    title: `${product.name} (${product.sanskritName})`,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.images[0] || SITE_CONFIG.defaultOgImage,
  });
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = getProductSchema(product);
  const relatedBlogs = getBlogsByProductId(product.id);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: product.categoryLabel, path: "/collections/all-products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  return (
    <div className="bg-ayur-cream min-h-screen py-6 sm:py-12 border-b border-ayur-border/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-1.5 sm:gap-2 text-xs text-ayur-muted font-sans mb-4 sm:mb-8 truncate"
        >
          <Link href="/" className="hover:text-ayur-primary transition-colors flex-shrink-0">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/collections/all-products?category=${product.category}`}
            className="hover:text-ayur-primary transition-colors flex-shrink-0"
          >
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-ayur-primary font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Back Link on Mobile */}
        <div className="mb-4 sm:hidden">
          <Link
            href="/collections/all-products"
            className="inline-flex items-center gap-1.5 text-xs text-ayur-primary font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <ProductGallery
              images={product.images}
              productName={product.name}
              isBestseller={product.isBestseller}
            />
          </div>

          {/* Product Purchasing Info Column */}
          <div className="lg:col-span-6">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Classical Formulation Accordion (Ingredients, Dosage, Lab Certs) */}
        <ProductDetailsAccordion product={product} />

        {/* Contextual Botanical Guides & Ayurvedic Research */}
        {relatedBlogs.length > 0 && (
          <section
            aria-label="Ayurvedic Botanical Research & Doctor Guides"
            className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-ayur-border/80"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div className="flex items-center gap-2 text-ayur-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-ayur-gold" />
                  <span>Botanical Science &amp; Clinical Insights</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark">
                  Ayurvedic Guides for {product.name}
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-ayur-primary hover:underline flex items-center gap-1"
              >
                <span>View All Journal Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {relatedBlogs.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/blog/${guide.slug}`}
                  className="bg-white rounded-xl p-5 border border-ayur-border/80 shadow-xs hover:shadow-card hover:border-ayur-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-ayur-muted mb-2 font-sans">
                      <span className="px-2 py-0.5 rounded bg-ayur-parchment text-ayur-primary font-semibold text-[11px]">
                        {guide.category}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-ayur-gold" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ayur-dark group-hover:text-ayur-primary transition-colors leading-snug mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-ayur-muted font-medium">By {guide.author.name}</span>
                    <span className="font-bold text-ayur-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Read Guide</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related / Frequently Paired Formulations */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
}
