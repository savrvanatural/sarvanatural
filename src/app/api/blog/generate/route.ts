import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { generateBlogDraftForProduct, BlogTopicAngle } from "@/lib/blog/generator";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminSecret = process.env.SARVA_ADMIN_API_KEY;

    // Optional admin verification if configured in production
    if (adminSecret && authHeader !== `Bearer ${adminSecret}`) {
      return NextResponse.json(
        { error: "Unauthorized access to blog generator" },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { slug, productId, angle } = body as {
      slug?: string;
      productId?: string;
      angle?: BlogTopicAngle;
    };

    let targetProduct = slug ? getProductBySlug(slug) : undefined;
    if (!targetProduct && productId) {
      targetProduct = PRODUCTS.find((p) => p.id === productId);
    }

    // Default to first product if none specified
    if (!targetProduct) {
      targetProduct = PRODUCTS[0];
    }

    const draft = await generateBlogDraftForProduct(targetProduct, {
      angle: angle || "botanical_guide",
    });

    return NextResponse.json({
      success: true,
      message: "Blog post draft successfully generated and placed in draft queue.",
      draft,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: "Failed to generate blog draft", details: message },
      { status: 500 }
    );
  }
}
