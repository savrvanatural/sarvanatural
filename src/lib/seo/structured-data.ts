import { SITE_CONFIG } from "./config";
import { Product } from "@/types/product";
import { BlogPost } from "@/types/blog";

/**
 * Organization Schema (Homepage / Knowledge Graph)
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.baseUrl,
    logo: SITE_CONFIG.logoUrl,
    image: SITE_CONFIG.emblemUrl,
    description: SITE_CONFIG.defaultDescription,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.streetAddress,
      addressLocality: SITE_CONFIG.contact.address.addressLocality,
      addressRegion: SITE_CONFIG.contact.address.addressRegion,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressCountry: SITE_CONFIG.contact.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.contact.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

/**
 * WebSite Schema (Homepage)
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    url: SITE_CONFIG.baseUrl,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      "@id": `${SITE_CONFIG.baseUrl}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Product Schema (Product Detail Pages)
 */
export function getProductSchema(product: Product) {
  const absoluteImages = product.images.map((img) =>
    img.startsWith("http") ? img : `${SITE_CONFIG.baseUrl}${img}`
  );
  const primaryVariant = product.variants[0];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_CONFIG.baseUrl}/products/${product.slug}/#product`,
    name: product.name,
    description: product.shortDescription,
    image: absoluteImages,
    sku: product.id,
    mpn: product.slug.toUpperCase(),
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      url: `${SITE_CONFIG.baseUrl}/products/${product.slug}`,
      priceCurrency: "INR",
      price: primaryVariant.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: 0,
          currency: "INR",
        },
        shippingDestination: [
          {
            "@type": "DefinedRegion",
            addressCountry: "IN",
          },
        ],
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "d",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * BreadcrumbList Schema (All Hierarchical Pages)
 */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_CONFIG.baseUrl}${item.path}`,
    })),
  };
}

/**
 * FAQPage Schema
 */
export function getFAQSchema(
  faqs: { q: string; a: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Collection / ItemList Schema
 */
export function getCollectionSchema(
  collection: { name: string; description: string; slug: string },
  products: Product[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_CONFIG.baseUrl}/collections/${collection.slug}/#collection`,
    name: `${collection.name} | SARVA NATURAL`,
    description: collection.description,
    url: `${SITE_CONFIG.baseUrl}/collections/${collection.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_CONFIG.baseUrl}/products/${product.slug}`,
        name: product.name,
      })),
    },
  };
}

/**
 * BlogPosting / Article Schema (Blog Post Detail)
 */
export function getBlogPostingSchema(blog: BlogPost) {
  const imageUrl = blog.featuredImage.startsWith("http")
    ? blog.featuredImage
    : `${SITE_CONFIG.baseUrl}${blog.featuredImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_CONFIG.baseUrl}/blog/${blog.slug}/#article`,
    headline: blog.title,
    description: blog.excerpt,
    image: [imageUrl],
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author.name,
      jobTitle: blog.author.role,
      description: blog.author.credentials,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.baseUrl}/blog/${blog.slug}`,
    },
    keywords: blog.tags.join(", "),
  };
}

/**
 * Blog Index Collection Schema
 */
export function getBlogIndexSchema(blogs: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_CONFIG.baseUrl}/blog/#collection`,
    name: "Ayurvedic Journal & Botanical Wellness Blog | SARVA NATURAL",
    description:
      "Explore classical Ayurvedic medicine, botanical pharmacology, and herbal guides written by certified Vaidyas and botanical researchers.",
    url: `${SITE_CONFIG.baseUrl}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_CONFIG.baseUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

