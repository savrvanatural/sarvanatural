import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPublishedBlogs, getBlogBySlug } from "@/data/blogs";
import { PRODUCTS } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/seo/structured-data";
import {
  Clock,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  AlertCircle,
} from "lucide-react";

export async function generateStaticParams() {
  const publishedBlogs = getAllPublishedBlogs();
  return publishedBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.featuredImage,
  });
}

export default function BlogPostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);

  // Strict isolation: drafts or non-existent slugs return 404
  if (!post) {
    notFound();
  }

  const linkedProduct = PRODUCTS.find((p) => p.id === post.productId);

  const blogSchema = getBlogPostingSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ayurvedic Journal", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? getFAQSchema(post.faqs.map((f) => ({ q: f.question, a: f.answer })))
      : null;

  return (
    <div className="bg-ayur-cream min-h-screen py-6 sm:py-12 border-b border-ayur-border/60">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-1.5 sm:gap-2 text-xs text-ayur-muted font-sans mb-6 truncate"
        >
          <Link href="/" className="hover:text-ayur-primary transition-colors flex-shrink-0">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ayur-primary transition-colors flex-shrink-0">
            Ayurvedic Journal
          </Link>
          <span>/</span>
          <span className="text-ayur-primary font-medium truncate">
            {post.title}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-ayur-primary font-semibold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 sm:mb-10 text-left">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-ayur-primary/10 text-ayur-primary text-xs font-semibold uppercase tracking-wider rounded-full border border-ayur-primary/20">
              {post.category}
            </span>
            <span className="text-xs text-ayur-muted font-sans flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-ayur-gold" />
              {post.readTime}
            </span>
            <span className="text-stone-300">&bull;</span>
            <span className="text-xs text-ayur-muted font-sans flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-ayur-muted" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ayur-dark tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed border-l-4 border-ayur-gold pl-4 py-1 italic bg-ayur-parchment/40 rounded-r">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="mt-6 flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-ayur-border/80">
            <div className="w-11 h-11 rounded-full bg-ayur-primary text-ayur-gold font-serif font-bold text-base flex items-center justify-center flex-shrink-0 shadow-xs border border-ayur-gold/40">
              {post.author.name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="text-sm font-bold text-ayur-dark flex items-center gap-1.5">
                <span>{post.author.name}</span>
                <span className="text-[11px] font-normal text-ayur-muted">
                  ({post.author.credentials})
                </span>
              </div>
              <div className="text-xs text-ayur-muted mt-0.5">
                {post.author.role} &bull; Medically &amp; Ethnobotanically Reviewed
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full bg-ayur-parchment rounded-2xl overflow-hidden border border-ayur-border/80 shadow-card mb-10">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <main className="bg-white rounded-2xl p-6 sm:p-10 border border-ayur-border/80 shadow-sm text-stone-800 font-sans leading-relaxed mb-10">
          <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-ayur-dark prose-headings:tracking-tight prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:border-b prose-h2:border-stone-100 prose-h2:pb-3 prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg sm:prose-h3:text-xl prose-h3:text-ayur-primary prose-p:text-stone-700 prose-p:leading-relaxed prose-li:text-stone-700 prose-strong:text-ayur-dark">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark tracking-tight border-b border-stone-200/80 pb-3 mt-8 mb-4 first:mt-0"
                  >
                    {trimmed.replace(/^## /, "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="font-serif text-lg sm:text-xl font-bold text-ayur-primary mt-6 mb-2"
                  >
                    {trimmed.replace(/^### /, "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("---")) {
                return <hr key={idx} className="my-8 border-stone-200" />;
              }

              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 my-4 text-stone-700">
                    {items.map((it, itemIdx) => {
                      const cleanText = it.replace(/^- /, "");
                      return (
                        <li key={itemIdx} className="leading-relaxed">
                          {cleanText}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              if (/^\d+\.\s/.test(trimmed)) {
                const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
                return (
                  <ol key={idx} className="list-decimal pl-5 space-y-2 my-4 text-stone-700">
                    {items.map((it, itemIdx) => (
                      <li key={itemIdx} className="leading-relaxed">
                        {it.replace(/^\d+\.\s*/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p key={idx} className="text-stone-700 leading-relaxed mb-4 text-sm sm:text-base">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </main>

        {/* Contextual Linked Product Card */}
        {linkedProduct && (
          <section
            aria-label="Related Classical Formulation"
            className="bg-gradient-to-br from-white to-ayur-parchment/60 rounded-2xl p-6 sm:p-8 border-2 border-ayur-gold/40 shadow-card mb-10"
          >
            <div className="flex items-center gap-2 text-ayur-primary font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-ayur-gold" />
              <span>Authentic Formulation Recommended In This Guide</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 relative aspect-square bg-white rounded-xl overflow-hidden border border-ayur-border/80 shadow-xs">
                <Image
                  src={linkedProduct.images[0]}
                  alt={linkedProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-ayur-muted font-serif">
                    {linkedProduct.sanskritName}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ayur-dark leading-tight mt-0.5 mb-2">
                    {linkedProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans mb-3 line-clamp-2">
                    {linkedProduct.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {linkedProduct.attributes.slice(0, 3).map((attr, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-200/80">
                  <div>
                    <span className="text-xs text-ayur-muted block">Starting from</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-ayur-dark font-serif">
                        ₹{linkedProduct.variants[0].price}
                      </span>
                      <span className="text-xs text-ayur-muted line-through">
                        ₹{linkedProduct.variants[0].mrp}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Save {linkedProduct.variants[0].discountPercent}%
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/products/${linkedProduct.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-ayur-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-ayur-primaryDark transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4 text-ayur-gold" />
                    <span>View Formulation &amp; Order</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Frequently Asked Questions Section */}
        {post.faqs && post.faqs.length > 0 && (
          <section
            aria-label="Frequently Asked Questions"
            className="bg-white rounded-2xl p-6 sm:p-10 border border-ayur-border/80 shadow-sm mb-10"
          >
            <div className="flex items-center gap-2 text-ayur-primary font-bold text-xs uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4 text-ayur-gold" />
              <span>Doctor &amp; Vaidya Insights</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ayur-dark mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {post.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group rounded-xl border border-stone-200 p-4 transition-colors hover:border-ayur-primary/50 open:bg-ayur-parchment/30"
                >
                  <summary className="font-serif text-base sm:text-lg font-bold text-ayur-dark cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="ml-3 text-ayur-primary group-open:rotate-180 transition-transform">
                      &darr;
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed pt-2 border-t border-stone-100">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* AYUSH Medical Disclaimer Callout */}
        <aside className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 mb-10 text-xs text-amber-900 leading-relaxed font-sans flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold uppercase tracking-wider block mb-1 text-amber-950">
              Regulatory &amp; Botanical Disclaimer (AYUSH Guidelines)
            </span>
            <p>{post.disclaimer}</p>
          </div>
        </aside>

        {/* Article Tags */}
        <div className="flex flex-wrap items-center gap-2 pb-12 border-b border-ayur-border/80">
          <span className="text-xs font-semibold text-ayur-muted">Topics:</span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs bg-white text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
