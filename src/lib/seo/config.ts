/**
 * SARVA NATURAL - Centralized SEO Configuration
 * Strictly adheres to canonical hostname: https://www.sarvanatural.com
 */

export const SITE_CONFIG = {
  name: "SARVA NATURAL",
  legalName: "SARVA NATURAL AYURVEDA",
  tagline: "Earth • Health • Wellness",
  baseUrl: "https://www.sarvanatural.com",
  defaultTitle: "SARVA NATURAL | Earth • Health • Wellness — Classical Formulations",
  titleTemplate: "%s | SARVA NATURAL",
  defaultDescription:
    "SARVA NATURAL — Earth • Health • Wellness. Pure, authentic Ayurvedic capsules: Moringa, Triphala, and Ashwagandha crafted from sustainably harvested wild botanicals.",
  keywords: [
    "SARVA NATURAL",
    "Sarva Natural Ayurveda",
    "Earth Health Wellness",
    "Ayurvedic Capsules",
    "Organic Moringa Capsules",
    "Classical Triphala Capsules",
    "Shuddha Ashwagandha Capsules",
    "Vegetarian HPMC Capsules",
    "GMP Certified Ayurveda",
    "Heavy Metal Tested Herbs",
    "Charaka Samhita Formulations",
    "Ayurvedic Doctor Consultation",
  ],
  defaultOgImage: "https://www.sarvanatural.com/images/sarva-natural-emblem.png",
  logoUrl: "https://www.sarvanatural.com/images/sarva-natural-logo.png",
  emblemUrl: "https://www.sarvanatural.com/images/sarva-natural-emblem.png",
  contact: {
    phone: "+91 82333 87011",
    tollFree: "+91 (0) 1800-SARVA-NATURAL",
    email: "care@sarvanatural.com",
    address: {
      streetAddress: "Sarva Natural Processing Facility",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
  },
} as const;
