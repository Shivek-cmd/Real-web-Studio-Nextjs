# Content Update Workflow — RealWebStudio

## The Plan

The Notion doc is the **single source of truth** for all website copy. Every page on the live website has its current content documented there. The workflow has three steps:

1. **Developer extracts current copy** — All existing copy from the website is documented section-by-section in the Notion doc under **02 — Content** (same format as the homepage). Each section has a "✏️ Updated Copy" field left empty.

2. **SEO person updates the doc** — The SEO person opens the live website alongside the Notion doc, reads the current copy, and writes improved SEO-optimized copy into the "✏️ Updated Copy" fields. They do not touch code.

3. **Developer implements approved copy** — Once the SEO person finishes, the developer pulls the updated copy from Notion and applies it to the corresponding components in the codebase.

## Notion Doc

**URL:** https://www.notion.so/368459c2b80b80c787c9c619019bd4b7

The doc is structured as:
- **01 — SEO** — Meta titles, meta descriptions, and keywords for every page/route
- **02 — Content** — Section-by-section copy for every page on the website

## Pages Covered

| Page | Path | Component Files |
|------|------|-----------------|
| Home | `/` | `src/app/page.tsx` + `src/components/home/` |
| About | `/about` | `src/app/about/page.tsx` + `src/components/about/` |
| Pricing | `/pricing` | `src/components/pricing/PricingPlans.tsx`, `PricingFAQ.tsx` |
| Contact | `/contact` | `src/components/contact/ContactHero.tsx`, `ContactForm.tsx`, `ContactMap.tsx` |
| Portfolio | `/portfolio` | `src/lib/portfolio.ts` (all copy lives here) |
| Blog | `/blog` | `src/lib/blog.ts` (post data), `src/components/blog/BlogListing.tsx` |
| Privacy Policy | `/privacy-policy` | `src/app/privacy-policy/page.tsx` (copy inline) |
| Terms of Service | `/terms-of-service` | `src/app/terms-of-service/page.tsx` (copy inline) |
| Thank You | `/thank-you` | `src/app/thank-you/page.tsx` (copy inline) |
| Portfolio Case Studies | `/portfolio/[slug]` | `src/lib/portfolio.ts` per item |

## Notes for the SEO Person

- Open the live site at **realwebstudio.com** alongside the Notion doc while editing
- Focus on improving H1s, H2s, body copy, CTAs, and bullet points for SEO and conversions
- Do NOT change the structure/layout — just the words inside each field
- Fill in all empty **Meta Title**, **Meta Description**, and **Meta Keywords** fields in the 01 — SEO section too
- Target keywords: Canadian small business website, web design Canada, Edmonton web design, local SEO Canada

## Notes for the Developer

- After SEO person marks a page as done in Notion, copy the "✏️ Updated Copy" content into the correct component file
- The mapping table above shows which file to edit for each section
- Most homepage/about content is in `src/components/home/` and `src/components/about/` subdirectories
- Pricing copy is in `src/components/pricing/PricingPlans.tsx` (the PLANS and FEATURES arrays) and `PricingFAQ.tsx` (the FAQS array)
- Portfolio copy is entirely in `src/lib/portfolio.ts`
