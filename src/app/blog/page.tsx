import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPublishedBlogs } from "@/data/blogs";
import { PRODUCTS } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getBlogIndexSchema } from "@/lib/seo/structured-data";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Ayurvedic Journal & Botanical Guides",
    description:
      "Explore classical Ayurvedic science, botanical pharmacology, and herbal guides for Moringa, Triphala, and Ashwagandha written by certified Vaidyas.",
    path: "/blog",
  }),
};

export default function BlogIndexPage() {
  const publishedBlogs = getAllPublishedBlogs();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ayurvedic Journal", path: "/blog" },
  ]);

  const blogIndexSchema = getBlogIndexSchema(publishedBlogs);

  return (
    <div className="bg-ayur-cream min-h-screen py-8 sm:py-14 border-b border-ayur-border/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogIndexSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 text-xs text-ayur-muted font-sans mb-6"
        >
          <Link href="/" className="hover:text-ayur-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-ayur-primary font-medium">Ayurvedic Journal</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ayur-primary/10 text-ayur-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-ayur-gold" />
            <span>Classical Ayurvedic Science &amp; Research</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ayur-dark tracking-tight leading-tight mb-4">
            Ayurvedic Journal &amp; Botanical Guides
          </h1>
          <p className="text-sm sm:text-base text-ayur-muted leading-relaxed font-sans">
            Grounded in ancient Samhitas and verified by modern botanical pharmacology.
            Authoritative, doctor-reviewed guides to daily vitality, digestive harmony, and restorative rest.
          </p>
        </div>

        {/* Published Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {publishedBlogs.map((post) => {
            const linkedProduct = PRODUCTS.find((p) => p.id === post.productId);

            return (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-ayur-border/80 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                {/* Article Image Container */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[16/10] bg-ayur-parchment overflow-hidden block"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-ayur-primary text-[11px] font-semibold tracking-wide uppercase rounded-full shadow-xs border border-ayur-primary/20">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Info: Reading Time & Date */}
                    <div className="flex items-center gap-3 text-xs text-ayur-muted font-sans mb-2.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-ayur-gold" />
                        {post.readTime}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-ayur-muted" />
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-ayur-dark leading-snug group-hover:text-ayur-primary transition-colors mb-3">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Contextual Linked Product Badge */}
                    {linkedProduct && (
                      <div className="mb-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-medium text-ayur-muted">
                          Featured Formulation:
                        </span>
                        <Link
                          href={`/products/${linkedProduct.slug}`}
                          className="font-semibold text-ayur-primary hover:underline flex items-center gap-1"
                        >
                          <span>{linkedProduct.name}</span>
                          <Sparkles className="w-3 h-3 text-ayur-gold" />
                        </Link>
                      </div>
                    )}

                    {/* Footer: Author Byline & Read More */}
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <div className="text-left">
                        <div className="text-xs font-semibold text-ayur-dark">
                          {post.author.name}
                        </div>
                        <div className="text-[10px] text-ayur-muted">
                          {post.author.role}
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-ayur-primary group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Educational Banner */}
        <div className="bg-ayur-parchment/80 rounded-2xl p-6 sm:p-10 border border-ayur-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-ayur-primary font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-ayur-gold" />
              <span>AYUSH Certified Formulations &bull; Classical Standards</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ayur-dark mb-2">
              Ready to experience authentic Ayurvedic botanicals?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Our Moringa, Triphala, and Ashwagandha formulations are encapsulated in 100% vegetarian capsules with zero synthetic binders or preservatives.
            </p>
          </div>
          <Link
            href="/collections/all-products"
            className="px-6 py-3 bg-ayur-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-ayur-primaryDark transition-colors shadow-sm whitespace-nowrap flex items-center gap-2"
          >
            <span>Explore All 3 Formulations</span>
            <ArrowRight className="w-4 h-4 text-ayur-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
