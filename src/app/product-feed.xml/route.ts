import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/lib/seo/config";

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const itemsXml = PRODUCTS.flatMap((product) =>
    product.variants.map((variant) => {
      const fullTitle = `${product.name} - ${variant.title}`;
      const productLink = `${baseUrl}/products/${product.slug}`;
      const imageUrl = product.images[0].startsWith("http")
        ? product.images[0]
        : `${baseUrl}${product.images[0]}`;
      const shippingPrice = variant.price >= 399 ? "0.00 INR" : "50.00 INR";
      const availability = variant.inStock ? "in_stock" : "out_of_stock";

      return `    <item>
      <g:id>${escapeXml(`${product.id}-${variant.id}`)}</g:id>
      <g:title>${escapeXml(fullTitle)}</g:title>
      <g:description>${escapeXml(product.shortDescription)}</g:description>
      <g:link>${escapeXml(productLink)}</g:link>
      <g:image_link>${escapeXml(imageUrl)}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>${availability}</g:availability>
      <g:price>${variant.price}.00 INR</g:price>
      <g:brand>${escapeXml(SITE_CONFIG.name)}</g:brand>
      <g:google_product_category>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition &gt; Vitamins &amp; Supplements</g:google_product_category>
      <g:product_type>Ayurvedic Supplements &gt; Herbal Wellness Capsules</g:product_type>
      <g:mpn>${escapeXml(`${product.slug.toUpperCase()}-${variant.id.toUpperCase()}`)}</g:mpn>
      <g:shipping>
        <g:country>IN</g:country>
        <g:service>Standard Express</g:service>
        <g:price>${shippingPrice}</g:price>
      </g:shipping>
    </item>`;
    })
  ).join("\n");

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} Google Merchant Center Product Feed</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>${escapeXml(SITE_CONFIG.defaultDescription)}</description>
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(feedXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
