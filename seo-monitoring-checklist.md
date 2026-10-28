# Google Search Console & Technical SEO Monitoring Checklist
**Target Property:** `https://www.sarvanatural.com`  
**Execution Horizon:** Immediate Post-Deployment, 7-Day, 30-Day, and 90-Day Cadence  

---

## 1. Immediate Post-Deployment Verification Steps

### Step 1: Google Search Console Domain & URL-Prefix Properties
- [ ] **Verify Property Coverage:** Ensure both the Domain Property (`sarvanatural.com`) and the URL-prefix Property (`https://www.sarvanatural.com`) are verified in Google Search Console.
- [ ] **Preserve Existing DNS Verification:** Do not delete or overwrite existing `google-site-verification` TXT records on GoDaddy DNS.
- [ ] **Preferred Hostname Check:** Confirm that Search Console displays `https://www.sarvanatural.com` as the canonical destination.

### Step 2: XML Sitemap Submission
- [ ] **Navigate to:** Search Console > Indexing > **Sitemaps**.
- [ ] **Submit New Sitemap:** Enter `https://www.sarvanatural.com/sitemap.xml` and click **Submit**.
- [ ] **Verify Status:** Confirm that Status returns **Success** with **20 discovered pages**.
- [ ] **Remove Deprecated Sitemaps:** If any previous sitemap referencing non-www `sarvanatural.com` was submitted, click on it and select "Remove sitemap".

### Step 3: Googlebot URL Inspection & Live Test
For each of the following priority URLs, run **URL Inspection** in Google Search Console, click **Test Live URL**, and verify:
- [ ] **Homepage:** `https://www.sarvanatural.com/` (Status: URL is available to Google | Canonical: `https://www.sarvanatural.com`)
- [ ] **Moringa Product:** `https://www.sarvanatural.com/products/moringa` (Rich Results: Product, Merchant Listings, Breadcrumbs detected)
- [ ] **Triphala Product:** `https://www.sarvanatural.com/products/triphala` (Rich Results: Product, Merchant Listings, Breadcrumbs detected)
- [ ] **Ashwagandha Product:** `https://www.sarvanatural.com/products/ashwagandha` (Rich Results: Product, Merchant Listings, Breadcrumbs detected)
- [ ] **All Products Collection:** `https://www.sarvanatural.com/collections/all-products`
- [ ] **FAQs Page:** `https://www.sarvanatural.com/pages/faqs` (Rich Results: FAQ, Breadcrumbs detected)
- [ ] **Contact Us:** `https://www.sarvanatural.com/pages/contact-us`
- [ ] **Consultation:** `https://www.sarvanatural.com/consultation`
- [ ] Click **"Request Indexing"** on the 3 product URLs and homepage to expedite initial crawling.

### Step 4: Robots.txt Live Fetch Verification
- [ ] Inspect `https://www.sarvanatural.com/robots.txt` via Search Console robots.txt report or direct browser request.
- [ ] Verify that Googlebot is allowed on `/` and disallowed on `/cart` and `/account`.

---

## 2. 7-Day Indexing & Crawl Diagnostic Review

- [ ] **Page Indexing Report:** Monitor the **Pages** section in Search Console.
  - Verify that indexed pages increase towards the 20 canonical pages.
  - Confirm **0 pages** under "Page with redirect in sitemap" (previously caused by non-www baseUrl).
  - Confirm **0 soft-404 errors**.
  - Confirm `/cart` and `/account` appear under **"Excluded by 'noindex' tag"** (Desired state).
- [ ] **Merchant Listings & Product Snippets:**
  - Check the **Shopping** / **Merchant Listings** tab in Search Console.
  - Verify that all 3 products are recognized without critical schema syntax errors.
- [ ] **Security & Manual Actions:**
  - Check Search Console > Security & Manual Actions > **Manual actions** (Should report "No issues detected").
  - Check Security & Manual Actions > **Security issues** (Should report "No issues detected").

---

## 3. Core Web Vitals & Real-User Performance Monitoring

Google evaluates Core Web Vitals at the 75th percentile of real-user visits (CrUX report) over 28-day rolling windows.

### Target Performance Thresholds:
| Metric | Full Form | Good Threshold | Current Architecture State |
| :--- | :--- | :--- | :--- |
| **LCP** | Largest Contentful Paint | **≤ 2.5 seconds** | High priority Hero `<Image priority>` with next/image responsive srcsets |
| **INP** | Interaction to Next Paint | **≤ 200 ms** | Clean React 18 event handlers; zero heavy main-thread blocking loops |
| **CLS** | Cumulative Layout Shift | **≤ 0.1** | Fixed aspect-ratio containers on all images, zero font shift (`display: swap`) |

### Core Web Vitals Ongoing Inspection:
- [ ] **Lighthouse Lab Audit:** Run Chrome DevTools Lighthouse (Mobile emulation, Navigation) on homepage and product detail pages monthly.
- [ ] **Icon Payload Verification:** Confirm `icon.png` (<58 KB) and `apple-icon.png` (<52 KB) remain cached with `Cache-Control: public, max-age=31536000, immutable`.
- [ ] **Next/Image Optimization:** Ensure future product images added to `public/images/products/` remain under 200 KB in size and utilize WebP/AVIF formats automatically served by Next.js.

---

## 4. 30 / 60 / 90-Day Cadence Routine

### Monthly (Every 30 Days):
1. **Search Console Queries & Impressions:** Track organic clicks, impressions, CTR, and average position for target terms (`sarva natural`, `moringa capsules`, `triphala capsules`, `ashwagandha capsules`).
2. **Coverage & Crawl Stats:** Review Search Console > Settings > **Crawl stats** to ensure Googlebot crawl requests are healthy without 5xx server spikes.
3. **Broken Link Audit:** Confirm internal links in Header and Footer resolve to 200 OK without intermediate 301/308 redirects.

### Quarterly (Every 90 Days):
1. **Competitor & E-E-A-T Review:** Check whether Google has introduced new rich result features for Ayurvedic supplements or dietary products in India.
2. **Schema.org Review:** Ensure structured data attributes remain in sync with any updated product variants, pricing changes, or formulation details.
3. **Security Headers Check:** Verify security headers via `securityheaders.com` to maintain an A+ grade.
