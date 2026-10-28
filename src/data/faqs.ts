export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface FaqCategory {
  name: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    name: "General & Brand Philosophy",
    items: [
      {
        id: "gen-1",
        q: "Why does SARVA NATURAL only make Moringa, Triphala, and Ashwagandha?",
        a: "Rather than mass-producing dozens of diluted products, we focus our entire sourcing and laboratory resources exclusively on three cornerstone botanicals: Moringa for whole-food vitality and plant nutrition, Triphala for digestive detoxification, and Ashwagandha for deep rest and adrenal resilience. This ensures every capsule delivers maximum therapeutic potency.",
      },
      {
        id: "gen-2",
        q: "Are all SARVA NATURAL formulations 100% vegetarian?",
        a: "Yes. All our capsules use premium plant-derived HPMC (Hydroxypropyl Methylcellulose) vegetarian capsules. We never use animal gelatin, bovine byproducts, or synthetic shellac coatings.",
      },
      {
        id: "gen-3",
        q: "Where are the products manufactured?",
        a: "Manufactured in a certified GMP (Schedule T) climate-controlled facility licensed by the Ministry of AYUSH in Rajasthan, India.",
      },
    ],
  },
  {
    name: "Product & Dosage Specifics",
    items: [
      {
        id: "prod-1",
        q: "Can I take Moringa, Triphala, and Ashwagandha simultaneously?",
        a: "Yes, they form a harmonious classical regimen. Take Moringa in the morning after breakfast for natural whole-food vitality; take Ashwagandha in the evening after dinner for stress reduction; and take Triphala before bedtime with warm water for gentle overnight colon cleansing.",
      },
      {
        id: "prod-2",
        q: "How many capsules come in a bottle, and what is the shelf life?",
        a: "Each bottle contains 60 vegetarian capsules, providing a 30 to 60 day supply depending on your dosage protocol (1 to 2 capsules daily). The shelf life is 24 months from the manufacturing date.",
      },
      {
        id: "prod-3",
        q: "Is Triphala habit-forming like chemical laxatives?",
        a: "No. Triphala is a gentle classical Rasayana. Unlike senna, bisacodyl, or synthetic laxatives that irritate colon nerve endings and cause dependency, classical Triphala tones the intestinal musculature and supports natural peristalsis safely for long-term use.",
      },
      {
        id: "prod-4",
        q: "Will Ashwagandha make me drowsy during daytime work?",
        a: "No. Ashwagandha is an adaptogen, not a tranquilizer. It balances cortisol levels and nervous exhaustion, offering calm mental clarity during the day and facilitating deep restorative REM sleep at night.",
      },
    ],
  },
  {
    name: "Orders, Shipping & Returns",
    items: [
      {
        id: "ship-1",
        q: "What is your shipping fee and delivery timeline?",
        a: "We offer FREE express shipping across India on all orders above ₹399. Orders below ₹399 have a nominal flat delivery fee of ₹50. Standard delivery timeline is 2 to 4 business days for metros and 3 to 6 days for tier 2/3 locations.",
      },
      {
        id: "ship-2",
        q: "What payment methods are supported?",
        a: "We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, major Credit & Debit Cards, and Cash on Delivery (COD).",
      },
      {
        id: "ship-3",
        q: "What if my package arrives damaged?",
        a: "If your parcel arrives damaged or tampered with, email photos to care@sarvanatural.com within 48 hours and we will dispatch a replacement at zero additional charge.",
      },
    ],
  },
];
