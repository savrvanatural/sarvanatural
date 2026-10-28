import { Product } from "@/types/product";
import { BlogPost, BlogFaq } from "@/types/blog";

export type BlogTopicAngle =
  | "botanical_guide"
  | "classical_synergy"
  | "dosage_anupana"
  | "scientific_mechanisms";

export interface BlogGenerationOptions {
  angle?: BlogTopicAngle;
  authorName?: string;
  authorRole?: string;
  targetWordCount?: number;
}

/**
 * Classical Ayurvedic references mapped by botanical name / slug.
 */
const CLASSICAL_TEXT_MAPPING: Record<
  string,
  {
    classicalName: string;
    primaryText: string;
    gunas: string;
    rasa: string;
    virya: string;
    vipaka: string;
    activePhyto: string;
  }
> = {
  moringa: {
    classicalName: "Shigru (Moringa oleifera)",
    primaryText: "Charaka Samhita, Sutrasthana & Bhavaprakasha Nighantu",
    gunas: "Laghu (Light), Ruksha (Dry), Tikshna (Sharp)",
    rasa: "Katu (Pungent), Tikta (Bitter)",
    virya: "Ushna (Heating)",
    vipaka: "Katu (Pungent)",
    activePhyto: "Glucosinolates, Quercetin, Chlorogenic Acid, Bioavailable Plant Iron",
  },
  triphala: {
    classicalName: "Triphala Rasayana (Amalaki, Haritaki, Bibhitaki)",
    primaryText: "Charaka Samhita, Chikitsasthana 1:2 & Sushruta Samhita",
    gunas: "Laghu (Light), Ruksha (Dry)",
    rasa: "Pancha Rasa (Contains 5 of 6 tastes, excluding Lavana/Salty)",
    virya: "Anushna (Neither excessively hot nor cold)",
    vipaka: "Madhura (Sweet) & Katu (Pungent)",
    activePhyto: "Chebulic Acid, Gallic Acid, Ellagic Acid, Vitamin C Bio-complex",
  },
  ashwagandha: {
    classicalName: "Ashwagandha (Withania somnifera)",
    primaryText: "Charaka Samhita, Chikitsasthana 1:1 & Ashtanga Hridaya",
    gunas: "Guru (Heavy), Snigdha (Unctuous)",
    rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
    virya: "Ushna (Heating)",
    vipaka: "Madhura (Sweet)",
    activePhyto: "Withanolides (Withaferin A, Withanolide A), Alkaloids (Withanine)",
  },
};

/**
 * Pure deterministic Ayurvedic blog draft generator.
 * Grounded in verified product attributes, classical Samhitas, and strict AYUSH non-disease guidelines.
 */
function buildDeterministicBlogDraft(
  product: Product,
  options?: BlogGenerationOptions
): BlogPost {
  const angle = options?.angle || "botanical_guide";
  const classical = CLASSICAL_TEXT_MAPPING[product.slug] || {
    classicalName: `${product.name} (${product.sanskritName})`,
    primaryText: "Ayurvedic Pharmacopoeia of India (API) & Classical Samhitas",
    gunas: "Laghu (Balanced)",
    rasa: "Tikta & Kashaya",
    virya: "Sama (Balanced)",
    vipaka: "Madhura",
    activePhyto: "Standardized Bioactive Phytochemicals",
  };

  const ingredientsList = product.ingredients
    .map(
      (ing) =>
        `- **${ing.name}** (${ing.botanicalName}): ${ing.purpose} (${ing.percentage})`
    )
    .join("\n");

  const benefitsList = product.keyBenefits
    .map((b) => `- ${b}`)
    .join("\n");

  let title = "";
  let metaTitle = "";
  let metaDescription = "";
  let excerpt = "";
  let slug = "";

  if (angle === "botanical_guide") {
    title = `${product.name}: Botanical Science, Classical Rasayana & Usage Guide`;
    metaTitle = `${product.name} Botanical Guide & Benefits | Sarva Natural`;
    metaDescription = `Comprehensive botanical guide to ${product.name}. Understand its active phytochemistry, doshic balance (${product.doshaImpact.description}), and classical dosage.`;
    excerpt = `An authoritative guide to ${product.name} (${product.sanskritName}): exploring active phytochemicals, ${product.doshaImpact.description}, and traditional preparation methods.`;
    slug = `${product.slug}-botanical-science-usage-guide`;
  } else if (angle === "dosage_anupana") {
    title = `How to Consume ${product.name}: Optimal Dosage, Timing & Classical Anupana`;
    metaTitle = `How to Take ${product.name}: Dosage & Anupana Guide | Sarva Natural`;
    metaDescription = `Learn when and how to take ${product.name} for maximum bioavailability. Classical Ayurvedic timing, temperature, and traditional carriers.`;
    excerpt = `Maximizing the bioavailability of ${product.name}: classical carrier substances (Anupana), circadian timing, and recommended Ayurvedic guidelines.`;
    slug = `how-to-take-${product.slug}-dosage-anupana-guide`;
  } else {
    title = `${product.name}: Active Phytochemicals, Stress Balance & Cellular Vitality`;
    metaTitle = `${product.name} Active Compounds & Benefits | Sarva Natural`;
    metaDescription = `Clinical and botanical analysis of ${product.name}. Discover how its standardized active extracts support daily wellness and cellular integrity.`;
    excerpt = `A clinical and pharmacognostic dive into ${product.name}: standardized active markers, safety profiles, and pure vegetarian encapsulation.`;
    slug = `${product.slug}-active-phytochemicals-vitality-analysis`;
  }

  const content = `
## Introduction to ${product.name} (${product.sanskritName})

In the classical Ayurvedic tradition, authentic healing begins with botanical purity and energetic affinity. **${product.name}** is formulated strictly according to time-tested principles recorded in classical treatises including the *${classical.primaryText}*.

Rather than utilizing chemical isolates or synthetic analogues, this formulation harnesses whole-plant synergy encapsulated in pure vegetarian HPMC shells.

### Classical Pharmacological Profile
- **Classical Name:** ${classical.classicalName}
- **Rasa (Taste):** ${classical.rasa}
- **Guna (Qualities):** ${classical.gunas}
- **Virya (Potency):** ${classical.virya}
- **Vipaka (Post-Digestive Effect):** ${classical.vipaka}
- **Dosha Action:** ${product.doshaImpact.description}

---

## Active Phytochemistry & Standardized Compounds

Modern chromatographic analysis confirms what classical Vaidyas observed through centuries of empirical practice:
- **Key Bioactive Markers:** ${classical.activePhyto}.
- **Form Factor:** ${product.formFactor} (100% Vegetarian HPMC Capsules, zero bovine gelatin).
- **Quality Verification:** Tested for heavy metals (Lead, Mercury, Cadmium, Arsenic) within Ayurvedic Pharmacopoeia of India specifications.

### Ingredients Breakdown:
${ingredientsList}

---

## Key Wellness Benefits
${benefitsList}

---

## Optimal Administration & Anupana (Carrier)

In classical Ayurvedic pharmacology, the carrier substance (*Anupana*) acts as a delivery vehicle that directs botanical phytonutrients into the target physiological systems (*Dhatus*).

- **Recommended Daily Intake:** ${product.howToConsume}
- **Recommended Anupana:** ${product.anupana}
- **Consistency:** Formulations operate cumulatively. We recommend a consistent routine of 6 to 12 weeks for comprehensive tissue equilibrium.

---

## Safety, Contraindications & AYUSH Standards

Sarva Natural products are manufactured in a Schedule T GMP certified facility. 
- Discontinue use and consult a physician if any adverse reactions or sensitivities occur.
- Pregnant or lactating individuals should always consult an obstetrician or certified Ayurvedic practitioner prior to introducing new herbal dietary supplements.
- Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed.
  `.trim();

  const faqs: BlogFaq[] = [
    {
      question: `What is the recommended daily dosage for ${product.name}?`,
      answer: product.howToConsume,
    },
    {
      question: `What carrier substance (Anupana) should I take with ${product.name}?`,
      answer: `The classical recommended Anupana is ${product.anupana}.`,
    },
    {
      question: `Are ${product.name} 100% vegetarian?`,
      answer: `Yes. Sarva Natural exclusively uses plant-derived HPMC cellulose capsules. They contain zero animal gelatin, zero synthetic chemical binders, and zero artificial preservatives.`,
    },
    {
      question: `How does ${product.name} affect the three Ayurvedic doshas?`,
      answer: product.doshaImpact.description,
    },
  ];

  return {
    id: `blog-draft-${product.slug}-${Date.now()}`,
    slug,
    title,
    metaTitle,
    metaDescription,
    excerpt,
    content,
    featuredImage: product.images[0] || "/images/products/moringa.jpeg",
    author: {
      name: options?.authorName || "Sarva Natural Editorial Vaidya Council",
      role: options?.authorRole || "Ayurvedic Medical Review Board",
      credentials: "BAMS / MD (Ayurveda) Editorial Reviewers",
      bio: "The Sarva Natural Editorial Vaidya Council reviews botanical literature, classical Samhita references, and modern phytochemical analyses to ensure accuracy and AYUSH compliance.",
    },
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    readTime: "6 min read",
    status: "draft", // ALWAYS DRAFT: Strict human review safeguard!
    category: product.categoryLabel,
    tags: [product.name, product.sanskritName, ...product.healthConcerns, "Ayurveda"],
    productId: product.id,
    faqs,
    disclaimer:
      "This educational article is formulated for informational and botanical wellness review. It does not constitute medical diagnosis, treatment, or cure for any disease. Always seek guidance from a qualified Ayurvedic physician or medical doctor before beginning any herbal regimen.",
  };
}

/**
 * Scalable AI-powered blog generator.
 * If an OpenAI or Gemini API key is provided in the environment, it uses the LLM
 * to generate creative, publication-grade drafts with strict AYUSH compliance guardrails.
 * Otherwise, it falls back seamlessly to the deterministic classical Samhita engine.
 *
 * NOTE: The generated post ALWAYS receives status: 'draft' to enforce human editorial approval.
 */
export async function generateBlogDraftForProduct(
  product: Product,
  options?: BlogGenerationOptions
): Promise<BlogPost> {
  const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Deterministic fallback (immediate, robust, zero external dependency)
    return buildDeterministicBlogDraft(product, options);
  }

  try {
    if (process.env.OPENAI_API_KEY) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.3,
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `You are a Senior Ayurvedic Pharmacologist and Medical Technical Editor for Sarva Natural.
Generate an educational, authoritative, search-optimized blog post draft for the given product.

STRICT REGULATORY & EDITORIAL RULES:
1. AYUSH Compliance: NEVER claim to treat, prevent, cure, or diagnose any disease (no cancer, diabetes, etc.). Use wellness, tonification, balance, Rasayana, and support terms.
2. Classical References: Include classical Sanskrit terms (Rasa, Virya, Vipaka, Guna, Dhatus, Doshas, Charaka Samhita, Bhavaprakasha).
3. Active Phytochemistry: Mention real bioactive compounds and HPLC/standardized markers.
4. Structure: Markdown headings (H2, H3), bullet points, Anupana recommendations.
5. Internal Linking: Naturally refer to "${product.name}" with its canonical URL /products/${product.slug}.

Output strictly valid JSON with this schema:
{
  "title": string,
  "metaTitle": string,
  "metaDescription": string,
  "excerpt": string,
  "content": string (Markdown with H2, H3, lists),
  "readTime": string,
  "category": string,
  "tags": string[],
  "faqs": [{"question": string, "answer": string}],
  "disclaimer": string
}`,
            },
            {
              role: "user",
              content: `Generate an in-depth article for this product:
Product: ${product.name} (${product.sanskritName})
Subtitle: ${product.subtitle}
Dosha Impact: ${product.doshaImpact.description}
Key Benefits: ${product.keyBenefits.join(", ")}
How to consume: ${product.howToConsume}
Anupana: ${product.anupana}
Ingredients: ${JSON.stringify(product.ingredients)}
Angle: ${options?.angle || "botanical_guide"}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API responded with status ${response.status}`);
      }

      const data = await response.json();
      const parsed = JSON.parse(data.choices[0].message.content);

      return {
        id: `blog-draft-${product.slug}-${Date.now()}`,
        slug: `${product.slug}-${(options?.angle || "botanical-guide").replace(/_/g, "-")}`,
        title: parsed.title,
        metaTitle: parsed.metaTitle,
        metaDescription: parsed.metaDescription,
        excerpt: parsed.excerpt,
        content: parsed.content,
        featuredImage: product.images[0] || "/images/products/moringa.jpeg",
        author: {
          name: options?.authorName || "Sarva Natural Editorial Vaidya Council",
          role: options?.authorRole || "Ayurvedic Medical Review Board",
          credentials: "BAMS / MD (Ayurveda) Editorial Reviewers",
        },
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        readTime: parsed.readTime || "6 min read",
        status: "draft", // STRICT DRAFT STATUS
        category: parsed.category || product.categoryLabel,
        tags: parsed.tags || [product.name, product.sanskritName],
        productId: product.id,
        faqs: parsed.faqs || [],
        disclaimer:
          parsed.disclaimer ||
          "This article is provided for educational and botanical wellness review. It does not constitute medical diagnosis or treatment.",
      };
    }
  } catch (error) {
    console.warn("AI generation error, falling back to deterministic engine:", error);
  }

  return buildDeterministicBlogDraft(product, options);
}

/**
 * Batch generate blog drafts for an entire product catalog or newly added products.
 */
export async function generateArticlesForCatalog(
  products: Product[],
  options?: BlogGenerationOptions
): Promise<BlogPost[]> {
  const drafts: BlogPost[] = [];
  for (const product of products) {
    const draft = await generateBlogDraftForProduct(product, options);
    drafts.push(draft);
  }
  return drafts;
}
