import { blogPosts, type BlogPost } from "@/lib/blog";
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio";
import { type City } from "@/lib/cities";
import { absoluteUrl, BUSINESS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    description: SITE_DESCRIPTION,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-CA",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return [
    breadcrumbSchema(
      path === "/"
        ? [{ name: "Home", url: "/" }]
        : [
            { name: "Home", url: "/" },
            { name, url: path },
          ],
    ),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(path)}#webpage`,
      name,
      description,
      url: absoluteUrl(path),
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-CA",
    },
  ];
}

export function homePageSchema() {
  return [
    ...webPageSchema({
      name: "RealWebStudio",
      description: SITE_DESCRIPTION,
      path: "/",
    }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/#website-service`,
      name: "Custom Website Design for Canadian Small Businesses",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      serviceType: "Website design, local SEO, and digital marketing",
      offers: {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
      },
    },
  ];
}

export function pricingPageSchema() {
  return [
    ...webPageSchema({
      name: "Pricing",
      description:
        "Simple, transparent pricing for Canadian small business websites, local SEO, and growth services.",
      path: "/pricing",
    }),
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/pricing#offers`,
      name: "RealWebStudio Website Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Basic Website Plan",
          price: "9.99",
          priceCurrency: "CAD",
          url: `${SITE_URL}/pricing`,
          itemOffered: {
            "@type": "Service",
            name: "Basic small business website",
          },
        },
        {
          "@type": "Offer",
          name: "Growth Website and Marketing Plan",
          price: "249.99",
          priceCurrency: "CAD",
          url: `${SITE_URL}/pricing`,
          itemOffered: {
            "@type": "Service",
            name: "Website, local SEO, and digital marketing",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there really no setup fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Correct - zero setup fees, ever. You pay only the monthly plan price from day one.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. There are no lock-in contracts. Cancel with 30 days' notice and we will hand over your files.",
          },
        },
      ],
    },
  ];
}

export function blogListingSchema() {
  return [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "RealWebStudio Blog",
      description:
        "Practical web design, local SEO, and AI growth insights for Canadian small businesses.",
      url: `${SITE_URL}/blog`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(post.href),
        datePublished: post.sortDate,
        dateModified: post.updatedDate ?? post.sortDate,
        author: { "@type": "Person", name: post.author },
        image: absoluteUrl(post.heroImage),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(post.href),
        name: post.title,
      })),
    },
  ];
}

export function blogPostSchema(post: BlogPost) {
  return [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: post.href },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(post.href)}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absoluteUrl(post.href),
      },
      headline: post.title,
      description: post.seoDescription,
      image: [absoluteUrl(post.heroImage)],
      datePublished: post.sortDate,
      dateModified: post.updatedDate ?? post.sortDate,
      author: {
        "@type": "Person",
        name: post.author,
        image: absoluteUrl(post.authorAvatar),
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      articleSection: post.category,
      keywords: post.tags.join(", "),
      inLanguage: "en-CA",
    },
  ];
}

export function portfolioListingSchema() {
  return [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/portfolio#collection`,
      name: "RealWebStudio Portfolio",
      description:
        "Case studies and project results from Canadian small business websites built by RealWebStudio.",
      url: `${SITE_URL}/portfolio`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: portfolioItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/portfolio/${item.id}`),
          name: `${item.client} Case Study`,
        })),
      },
    },
  ];
}

export function cityPageSchema(city: City) {
  const path = `/web-design/${city.slug}`;
  const name = `Web Design ${city.name}`;
  const description = `Professional web design in ${city.name}, ${city.provinceName}. RealWebStudio builds fast, modern websites for ${city.name} small businesses starting at $9.99/mo.`;
  return [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Web Design", url: "/web-design" },
      { name: city.name, url: path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(path)}#webpage`,
      name,
      description,
      url: absoluteUrl(path),
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name: `Web Design Services in ${city.name}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "Province",
          name: city.provinceName,
          containedInPlace: { "@type": "Country", name: "Canada" },
        },
      },
      serviceType: "Website design and digital marketing",
      url: absoluteUrl(path),
      offers: {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `How much does web design cost in ${city.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `RealWebStudio offers professional web design in ${city.name} starting at $9.99/month — all-inclusive with hosting, SSL, and ongoing support. No setup fees, no lock-in contracts.`,
          },
        },
        {
          "@type": "Question",
          name: `How long does it take to launch a website in ${city.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Most ${city.name} websites are live within 72 hours of you submitting your business information. Complex sites may take 5–7 business days.`,
          },
        },
        {
          "@type": "Question",
          name: `Do you serve businesses in ${city.name}, ${city.provinceName}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes! RealWebStudio serves businesses across ${city.provinceName} and all of Canada, including ${city.name}. Our service is 100% remote — no in-person meetings needed.`,
          },
        },
      ],
    },
  ];
}

export function portfolioCaseStudySchema(item: PortfolioItem) {
  return [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: item.client, url: `/portfolio/${item.id}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${absoluteUrl(`/portfolio/${item.id}`)}#case-study`,
      name: `${item.client} Case Study`,
      description: item.description,
      url: absoluteUrl(`/portfolio/${item.id}`),
      image: absoluteUrl(item.image),
      creator: { "@id": `${SITE_URL}/#organization` },
      about: item.industry,
      keywords: item.tags.join(", "),
    },
  ];
}
