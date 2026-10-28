# Strategic SEO & AI Search Page Plan — SARVA NATURAL
**Target Domain:** https://www.sarvanatural.com  
**Objective:** Maximum search discoverability across Google Search, Google Shopping, AI Overviews, ChatGPT Search, and Perplexity  
**Status:** Approved for Implementation (Non-Visual UI Freeze Compliant)  

---

## 1. Intent Gap Analysis & Strategic Rationale

Sarva Natural's commercial product catalog is deliberately focused on **three classical Ayurvedic formulations**:
1. Moringa Capsules (*Shigru* — Whole-Food Nutrition & Plant Iron)
2. Triphala Capsules (*Triphala Rasayana* — Equal 1:1:1 Colon Cleanse & Motility)
3. Ashwagandha Capsules (*Withania somnifera* — Cortisol Modulation & Restorative Sleep)

### The Organic & AI Search Dilemma:
While product detail pages capture high-intent transactional search queries (e.g., *"buy moringa capsules"*), **over 70% of organic search volume in the Ayurvedic wellness vertical begins with informational and investigative queries**:
- *"What is Shigru in Charaka Samhita?"*
- *"Triphala 1:1:1 equal ratio benefits vs churna"*
- *"Withanolide percentage in standardized Ashwagandha"*
- *"Difference between vegetarian HPMC capsules and animal gelatin in Ayurveda"*
- *"How do classical slow kwath decoctions preserve botanical heat-sensitive bioflavonoids?"*

AI search engines (Google AI Overviews, ChatGPT Search, Perplexity, Claude) heavily favor authoritative, factual, well-structured botanical reference content that cites classical Samhitas and connects directly to purchasable lab-tested formulations.

---

## 2. Prioritized Page Implementation Plan

| Page Route | Page Purpose & Search Intent | Target Keywords | Implementation Status |
| :--- | :--- | :--- | :--- |
| **`/pages/botanicals`** | **Classical Botanical Reference & Sourcing Guide:** Comprehensive breakdown of Shigru, Amalaki, Haritaki, Bibhitaki, and Withania somnifera. Details classical Sanskrit origins, active phytochemical markers, Dosha impact, and testing benchmarks. Links contextually to the 3 purchasable formulations. | `classical ayurvedic botanicals`, `shigru moringa pharmacology`, `triphala 1:1:1 ratio`, `withania somnifera standardized extract`, `ayurvedic herb monograph` | **PHASE D (IMPLEMENTING NOW)** |
| **`/product-feed.xml`** | **Google Merchant Center XML Feed:** Automated RSS 2.0 product catalog delivering real-time pricing, stock status, titles, image links, and Google product taxonomy. | Google Shopping organic free listings & Merchant Center synchronization | **PHASE C (IMPLEMENTING NOW)** |

---

## 3. Strict Compliance Guardrails for New Pages

1. **Design System Reuse:** Reuses existing Tailwind color variables (`bg-ayur-cream`, `text-ayur-dark`, `border-ayur-border`, `ayur-gold`, `ayur-primary`), Cormorant Garamond font headings, and Plus Jakarta Sans body typography.
2. **Zero Modification to Existing Pages:** No existing component, heading, description, or route will be altered.
3. **Medical & Regulatory Compliance:**
   - Adheres to the Ministry of AYUSH and Drug & Cosmetics Act (Schedule T) guidelines.
   - States explicitly that botanical dietary supplements are traditional classical formulations and not intended to diagnose, mitigate, prevent, treat, or cure any specific disease.
   - Recommends consultation with certified Vaidyas before starting herbal regimens.
4. **Structured Data:** Injects Schema.org `Article`, `ItemPage`, and `BreadcrumbList` schemas.
