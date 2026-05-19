# SEO Setup

This document explains how SEO is organized for the RealWebStudio website. It is written as a map, not a code guide, so you can quickly understand what each file does and where to make future SEO updates.

## High-Level Setup

The website uses the Next.js App Router metadata system plus structured data, sitemap generation, robots rules, RSS feed output, social sharing images, and redirects.

The SEO setup has five main layers:

1. Page metadata: titles, descriptions, canonical URLs, robots tags, Open Graph, and Twitter cards.
2. Structured data: JSON-LD schemas for business identity, pages, blog posts, portfolio case studies, breadcrumbs, pricing, and lists.
3. Discovery files: sitemap, robots, and RSS feed.
4. Social sharing assets: generated Open Graph and Twitter images.
5. URL protection: redirects for old URLs that should not break.

## File Structure

### `src/lib/site.ts`

This is the shared source for global site/business information.

It stores the main website URL, site name, business description, business contact details, address, logo URL, and helper logic for creating absolute URLs.

Use this file when:

- The production domain changes.
- The business name changes.
- Phone, email, address, or logo path changes.
- You need one central place for information reused by metadata, schema, sitemap, RSS, and robots.

### `src/lib/seo.config.ts`

This is the main page metadata file.

It controls static metadata for the main pages:

- Homepage
- About
- Contact
- Portfolio listing
- Pricing
- Blog listing
- Privacy Policy
- Terms of Service
- Thank You

Each page metadata object can include:

- SEO title
- Meta description
- Canonical URL
- Robots indexing rule
- Open Graph title, description, URL, image
- Twitter card title, description, image

Use this file when:

- You want to update a page title or meta description.
- You want to change the canonical URL for a static page.
- You want to update Open Graph/Twitter sharing text for main pages.
- You want to noindex or index a static page.

Important note: dynamic blog and portfolio detail pages do not get all metadata from this file. They generate their metadata in their own route files because each post/case study has unique content.

### `src/lib/schema.ts`

This file builds structured data for the site.

It creates JSON-LD data for:

- Organization / local business identity
- Website identity
- Breadcrumbs
- Generic web pages
- Homepage service information
- Pricing offers
- Blog listing
- Blog posts
- Portfolio listing
- Portfolio case studies

Use this file when:

- You want to add or improve structured data.
- You add a new page type that needs schema.
- You want to adjust breadcrumbs.
- You want Google to better understand business identity, article data, offers, or portfolio case studies.

### `src/components/seo/JsonLd.tsx`

This is a small reusable component that prints JSON-LD structured data into the page.

You do not usually need to edit this file. It exists so pages can include schema in a consistent way.

Use this file only if:

- The way JSON-LD is injected needs to change globally.
- There is a security or formatting issue with structured data output.

## Global SEO Files

### `src/app/layout.tsx`

This file contains site-wide metadata and schema.

It sets:

- The metadata base URL.
- The default site title.
- The title template behavior.
- The default description.
- RSS feed discovery link.
- Favicon/icon references.
- Global Organization and WebSite schema.

Use this file when:

- The production domain changes.
- You want to change global title behavior.
- You want to add/remove global site-level metadata.
- You want to adjust icons.
- You want to change global site identity schema placement.

### `src/app/sitemap.ts`

This generates `/sitemap.xml`.

It includes:

- Static routes like homepage, pricing, portfolio, blog, about, contact, privacy, and terms.
- All blog post URLs from `src/lib/blog.ts`.
- All portfolio case study URLs from `src/lib/portfolio.ts`.

It intentionally excludes the thank-you page because that page is noindex.

Use this file when:

- You add a new public page that should be indexed.
- You add a new dynamic content source that should be listed.
- You want to adjust priorities or change frequencies.
- You need to exclude a page from search discovery.

### `src/app/robots.ts`

This generates `/robots.txt`.

It currently:

- Allows crawlers to access the site.
- Disallows `/thank-you`.
- Points crawlers to `/sitemap.xml`.
- Declares the host URL.

Use this file when:

- A page or section should be blocked from crawling.
- The sitemap URL changes.
- You need special crawler rules.

### `src/app/feed.xml/route.ts`

This generates `/feed.xml`.

It creates an RSS feed using the blog posts from `src/lib/blog.ts`.

Use this file when:

- You want to change RSS feed title/description.
- Blog feed fields need adjustment.
- You add more blog data and want it reflected in RSS.

## Social Sharing Images

### `src/app/opengraph-image.tsx`

This generates the default Open Graph image used when links are shared on platforms like Facebook, LinkedIn, Slack, and other preview systems.

Use this file when:

- You want to change the default social preview image design.
- You want to update the default social preview messaging.
- You want to change image dimensions or visual branding.

### `src/app/twitter-image.tsx`

This reuses the default Open Graph image for Twitter/X cards.

Use this file when:

- Twitter/X needs a separate image from the normal Open Graph image.
- You want different social preview messaging for Twitter/X.

## Blog SEO

### `src/lib/blog.ts`

This is the data source for blog posts.

Each blog post includes SEO-relevant fields such as:

- Slug
- Title
- SEO title
- SEO description
- Excerpt
- Author
- Publish date
- Sort/date value
- Optional updated date
- Images
- Tags
- Category
- URL path
- Article sections

This data feeds:

- Blog listing page
- Blog detail pages
- Blog metadata
- Blog schema
- Sitemap blog URLs
- RSS feed
- Related posts

Use this file when:

- Adding a new blog post.
- Updating a post title or SEO title.
- Updating meta description.
- Changing publish or modified dates.
- Changing tags/categories.
- Updating blog images or alt text.
- Changing a blog URL path.

### `src/app/blog/page.tsx`

This is the blog listing page.

It uses static metadata from `src/lib/seo.config.ts` and adds blog listing structured data from `src/lib/schema.ts`.

Use this file when:

- The blog listing page needs a different SEO schema.
- You change how the listing page should identify itself to search engines.

### `src/app/blog/[slug]/page.tsx`

This is the blog detail page template.

It dynamically creates metadata for each blog post, including:

- Title
- Description
- Canonical URL
- Robots rule
- Author
- Category
- Keywords/tags
- Open Graph article data
- Published time
- Modified time
- Twitter card data

It also adds:

- BlogPosting schema
- Breadcrumb schema
- Semantic date markup using `time`

Use this file when:

- You want to change metadata rules for all blog detail pages.
- You want to add article metadata fields.
- You want to adjust blog post schema behavior.
- You want to change how dates/authors/categories are exposed on article pages.

## Portfolio SEO

### `src/lib/portfolio.ts`

This is the data source for portfolio case studies.

Each portfolio item includes SEO-relevant fields such as:

- Client name
- Industry
- Result
- Description
- Main image
- Tags
- Website URL
- Service
- Duration
- Alt text
- Overview
- Deliverables
- Case study sections

This data feeds:

- Portfolio listing page
- Portfolio detail pages
- Portfolio schema
- Sitemap portfolio URLs
- Case study metadata

Use this file when:

- Adding a new portfolio case study.
- Updating a case study title/client name.
- Updating description/meta description.
- Changing images or alt text.
- Changing tags, services, industries, or results.

### `src/app/portfolio/page.tsx`

This is the portfolio listing page.

It uses static metadata from `src/lib/seo.config.ts` and adds portfolio listing structured data.

Use this file when:

- The portfolio listing page needs different structured data.
- You change how the case study collection should appear to search engines.

### `src/app/portfolio/[slug]/page.tsx`

This is the portfolio detail page template.

It dynamically creates metadata for each case study, including:

- Title
- Description
- Canonical URL
- Robots rule
- Keywords/tags
- Open Graph data
- Twitter card data

It also adds:

- Case study schema
- Breadcrumb schema

Use this file when:

- You want to change SEO behavior for all portfolio detail pages.
- You want to improve case study structured data.
- You want to adjust canonical or sharing rules for portfolio items.

## Main Page SEO

The following pages use static metadata from `src/lib/seo.config.ts` and page-level schema from `src/lib/schema.ts`:

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/pricing/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms-of-service/page.tsx`

The thank-you page uses metadata from `src/lib/seo.config.ts`, but it is noindex and excluded from the sitemap.

## Redirects

### `next.config.ts`

This file contains permanent redirects for old blog URLs.

Currently, old 2025 blog URLs redirect to the updated 2026 URLs.

Use this file when:

- A page URL changes.
- A blog slug changes.
- A portfolio URL changes.
- You remove or rename a public page.

Important: when changing an indexed URL, always add a permanent redirect from the old URL to the new URL.

## Current SEO Flow

When a visitor or crawler loads a page:

1. Next.js reads global metadata from `src/app/layout.tsx`.
2. The route adds its own static or dynamic metadata.
3. The page renders JSON-LD schema through `JsonLd`.
4. Search engines can discover the page through internal links and `/sitemap.xml`.
5. Blog posts are also discoverable through `/feed.xml`.
6. Social platforms use Open Graph/Twitter metadata and generated image routes for previews.

## Adding a New Static Page

When adding a new static page, update:

1. `src/lib/seo.config.ts` with title, description, canonical, robots, Open Graph, and Twitter metadata.
2. The page file with page schema using `JsonLd`.
3. `src/app/sitemap.ts` if the page should be indexed.
4. Navigation/internal links if the page should be discoverable by users.
5. `src/app/robots.ts` only if the page should be blocked from crawling.

## Adding a New Blog Post

When adding a new blog post, update:

1. `src/lib/blog.ts` with the full post data.
2. Make sure the slug and `href` match.
3. Add a strong `seoTitle` and `seoDescription`.
4. Use a real `sortDate` in `YYYY-MM-DD` format.
5. Add `updatedDate` if the article was updated after publishing.
6. Add useful tags and category.
7. Add descriptive image alt text.

The sitemap, RSS feed, blog listing schema, and blog detail metadata will automatically use this data.

## Adding a New Portfolio Case Study

When adding a new portfolio item, update:

1. `src/lib/portfolio.ts` with the full case study data.
2. Make sure the `id` is the desired URL slug.
3. Add a clear description because it is used for metadata.
4. Add descriptive image alt text.
5. Add useful tags, service, industry, and result.

The sitemap, portfolio listing schema, and portfolio detail metadata will automatically use this data.

## Changing a URL

When changing any public URL:

1. Update the data source or page route.
2. Update internal links.
3. Add a permanent redirect in `next.config.ts`.
4. Confirm the old URL redirects to the new URL.
5. Confirm the new URL appears in `/sitemap.xml`.

## Verification Checklist

After making SEO changes, run:

- Production build
- Sitemap check
- Robots check
- Feed check
- Social preview check
- Google Rich Results Test for JSON-LD

The most important generated URLs to inspect are:

- `/sitemap.xml`
- `/robots.txt`
- `/feed.xml`
- `/opengraph-image`
- `/twitter-image`
- One blog detail page
- One portfolio detail page

## Important Notes

- Do not add duplicate metadata manually in random components.
- Keep page metadata in `src/lib/seo.config.ts` unless the page is dynamic.
- Keep dynamic blog SEO tied to `src/lib/blog.ts`.
- Keep dynamic portfolio SEO tied to `src/lib/portfolio.ts`.
- Use redirects when changing URLs.
- Keep the thank-you page noindex.
- Keep sitemap limited to pages that should be indexed.
