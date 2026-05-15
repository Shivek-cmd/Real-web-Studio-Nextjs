export type CategoryColor = "bg-orange" | "bg-green" | "bg-purple";

export type BlogSection = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  category: string;
  categoryColor: CategoryColor;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  sortDate: string;
  readTime: string;
  image: string;
  heroImage: string;
  alt: string;
  href: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "canadian-small-business-website-2025",
    category: "Web Design",
    categoryColor: "bg-orange",
    title: "Why Every Canadian Small Business Needs a Website in 2026",
    seoTitle: "Why Canadian Small Businesses Need a Website in 2026",
    seoDescription:
      "Learn why every Canadian small business needs a professional website in 2026, what customers expect, and how to turn your site into a lead engine.",
    excerpt:
      "Customers search online before calling anyone. If your business is not there, a competitor is. Here is what you are missing and how to fix it fast.",
    author: "Sarah Mitchell",
    authorAvatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "May 10, 2026",
    sortDate: "2026-05-10",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Web design planning for Canadian small businesses",
    href: "/blog/canadian-small-business-website-2025",
    tags: ["Small Business", "Website Strategy", "Canada"],
    intro:
      "A website is no longer a digital brochure. For Canadian small businesses, it is the place where trust is built, questions are answered, and serious buyers decide whether to call you or keep scrolling.",
    sections: [
      {
        id: "why-it-matters",
        title: "Why a website still matters",
        subtitle: "Your website is often the first real proof that your business is legitimate.",
        paragraphs: [
          "Most customers will look you up before they call, visit, book, or request a quote. Even when they hear about you through a referral, they still want to see your services, photos, reviews, location, and a clear next step.",
          "Social media can help people discover you, but it does not replace a website. Platforms change, posts disappear, and profiles rarely answer the practical questions buyers have when they are ready to act.",
        ],
        bullets: [
          "What services you offer and where you offer them",
          "Why customers should trust you",
          "How to contact, book, or request a quote",
          "What makes your business different from nearby competitors",
        ],
      },
      {
        id: "customer-expectations",
        title: "What Canadian customers expect now",
        subtitle: "Speed, clarity, and trust signals decide whether the visit turns into a lead.",
        paragraphs: [
          "Modern buyers expect a website to load quickly, look professional on mobile, and answer their main questions without making them hunt. If the page feels old, confusing, or unfinished, that doubt transfers to the business itself.",
          "For local service companies, the basics matter most: service pages, city coverage, testimonials, photos, pricing guidance when possible, and a call-to-action that is visible without feeling pushy.",
        ],
      },
      {
        id: "seo-advantage",
        title: "The local SEO advantage",
        subtitle: "A good website gives Google more reasons to recommend you.",
        paragraphs: [
          "Your website helps search engines understand your business, service area, expertise, and reputation. A thin one-page site gives Google very little to work with. A structured site with useful pages can rank for the exact searches customers use when they need help.",
          "For Canadian small businesses, local search terms often include city names, neighborhood names, service categories, and urgent intent. A strong website can capture that traffic long before a customer ever sees your ad.",
        ],
        bullets: [
          "Create dedicated pages for high-value services",
          "Mention real service areas naturally",
          "Add proof through reviews, project examples, and FAQs",
          "Keep page titles and descriptions specific to your market",
        ],
      },
      {
        id: "conversion-basics",
        title: "How your site turns traffic into leads",
        subtitle: "Organic traffic only matters when visitors know what to do next.",
        paragraphs: [
          "A conversion-focused website removes friction. It tells people they are in the right place, gives them enough confidence to act, and makes the next step simple on every screen size.",
          "The strongest small business websites do not overwhelm visitors with clever copy. They use plain language, visible contact options, strong proof, and short forms that respect the buyer's time.",
        ],
      },
      {
        id: "what-to-build",
        title: "What to build first",
        subtitle: "Start with the pages that can create revenue soonest.",
        paragraphs: [
          "You do not need a huge website to compete. You need the right foundation: a clear homepage, service pages for your biggest offers, a contact page, trust-building proof, and enough SEO structure to help search engines understand your business.",
          "Once that foundation is live, you can add blog posts, local landing pages, booking tools, automation, and deeper resources over time. The goal is not to look bigger than you are. The goal is to make it easy for good customers to choose you.",
        ],
      },
    ],
  },
  {
    id: "post-2",
    slug: "google-business-profile-local-seo",
    category: "Local SEO",
    categoryColor: "bg-green",
    title: "Your Google Business Profile Is Your Most Underrated Marketing Asset",
    seoTitle: "Google Business Profile Local SEO Guide for Small Businesses",
    seoDescription:
      "Learn how to improve your Google Business Profile, earn more local visibility, and turn searchers into calls, bookings, and quote requests.",
    excerpt:
      "Most business owners set it up once and forget it. The ones who treat it like a living tool are pulling in customers every single week for free.",
    author: "James Okafor",
    authorAvatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Apr 28, 2026",
    sortDate: "2026-04-28",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Google Business Profile local SEO dashboard",
    href: "/blog/google-business-profile-local-seo",
    tags: ["Google Business", "Local Rankings", "Lead Generation"],
    intro:
      "Your Google Business Profile can be the difference between a quiet week and a full calendar. It is one of the highest-intent places your business can appear because people are already searching for help nearby.",
    sections: [
      {
        id: "why-profile-matters",
        title: "Why your profile matters",
        subtitle: "It shows up when local buyers are closest to taking action.",
        paragraphs: [
          "When someone searches for a service near them, Google often shows map results before traditional website results. That means your profile can become the first impression, the trust check, and the call button all at once.",
          "A complete profile helps customers understand what you do, where you operate, when you are open, and whether other people trust you. An incomplete profile quietly sends leads elsewhere.",
        ],
      },
      {
        id: "foundation",
        title: "Get the foundation right",
        subtitle: "Accuracy and completeness are ranking signals and trust signals.",
        paragraphs: [
          "Start with the basics: business name, categories, address or service area, phone number, website, hours, services, and description. Every detail should match the information on your website and major directories.",
          "Choose your primary category carefully. It has a major influence on the searches where your business can appear. Add secondary categories only when they truly match your services.",
        ],
        bullets: [
          "Use a real local phone number when possible",
          "List every core service with clear descriptions",
          "Add accurate hours and holiday updates",
          "Connect the profile to a strong local landing page",
        ],
      },
      {
        id: "reviews",
        title: "Build a review engine",
        subtitle: "Reviews influence rankings, clicks, and conversion.",
        paragraphs: [
          "Reviews are not just social proof. They help customers understand your quality, reliability, and service experience. They also give Google fresh signals about your business.",
          "The best review strategy is simple and consistent. Ask happy customers soon after the work is complete, make the link easy to use, and reply to every review with a professional tone.",
        ],
      },
      {
        id: "photos-posts",
        title: "Use photos and updates",
        subtitle: "Fresh visual proof makes the business feel active.",
        paragraphs: [
          "Photos help customers picture what it is like to hire you. For trades, clinics, restaurants, cleaning companies, consultants, and local services, real photos often outperform polished stock images.",
          "Posts and updates are useful for promotions, seasonal reminders, new services, and project highlights. You do not need to post daily. You need to show that the business is alive and attentive.",
        ],
      },
      {
        id: "track-results",
        title: "Track what matters",
        subtitle: "Rankings are useful, but calls and bookings pay the bills.",
        paragraphs: [
          "Watch how many calls, website visits, direction requests, bookings, and messages your profile generates. Compare those numbers with the updates you make so you can learn what creates movement.",
          "Your profile works best when it is connected to a strong website. The profile earns the click. The website turns that click into a lead.",
        ],
      },
    ],
  },
  {
    id: "post-3",
    slug: "edmonton-trades-ai-leads-2025",
    category: "AI & Growth",
    categoryColor: "bg-purple",
    title: "How Edmonton Trades Businesses Are Getting More Leads With AI",
    seoTitle: "AI Lead Generation for Edmonton Trades Businesses",
    seoDescription:
      "See how Edmonton trades businesses can use AI chat, automation, and better follow-up to capture more leads from their website.",
    excerpt:
      "Plumbers, electricians, and contractors are quietly using AI chatbots and automation to capture leads while their competitors sleep. Here is how.",
    author: "Priya Sharma",
    authorAvatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Apr 15, 2026",
    sortDate: "2026-04-15",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "AI lead generation meeting for trades businesses",
    href: "/blog/edmonton-trades-ai-leads-2025",
    tags: ["AI Automation", "Trades", "Edmonton"],
    intro:
      "AI is not just for big tech companies. For Edmonton trades businesses, the practical win is simple: respond faster, qualify better, and stop losing good leads after hours.",
    sections: [
      {
        id: "lead-speed",
        title: "Speed wins more jobs",
        subtitle: "The first helpful reply often gets the conversation.",
        paragraphs: [
          "Homeowners and property managers rarely contact one contractor only. They compare availability, trust, and response time. If your business replies hours later, you may already be out of the running.",
          "AI-assisted chat and automated follow-up can collect details immediately, answer basic questions, and notify your team when a serious lead is ready for a call.",
        ],
      },
      {
        id: "what-ai-can-handle",
        title: "What AI should handle",
        subtitle: "Use AI for repeatable tasks, not for replacing expertise.",
        paragraphs: [
          "The best AI setups do not pretend to be a licensed technician. They help with intake, routing, FAQs, appointment requests, missed-call follow-up, and simple next steps.",
          "This keeps your team focused on quoting, scheduling, and doing the work while your website captures the details that usually get lost.",
        ],
        bullets: [
          "Collect name, phone, address, service type, and urgency",
          "Ask qualifying questions before a quote request",
          "Send after-hours leads to email or SMS",
          "Trigger reminders when a lead has not been contacted",
        ],
      },
      {
        id: "website-integration",
        title: "Connect AI to your website",
        subtitle: "Automation works best when the website is built for conversion.",
        paragraphs: [
          "An AI chat tool on a weak website will not fix unclear messaging. Your service pages still need to explain what you do, where you work, and why people should trust you.",
          "Once the website is clear, AI becomes a helpful layer. It can guide visitors to the right service, capture details, and reduce the number of abandoned inquiries.",
        ],
      },
      {
        id: "local-seo-support",
        title: "Support local SEO",
        subtitle: "AI can help turn organic visitors into booked work.",
        paragraphs: [
          "If your website ranks for Edmonton service terms, you need a fast way to convert those visitors. AI chat and smart forms can help collect useful information from people who are not ready to call yet.",
          "This is especially useful for emergency services, seasonal work, and jobs where customers need a quick answer before deciding who to hire.",
        ],
      },
      {
        id: "start-small",
        title: "Start with one workflow",
        subtitle: "A simple automation that works beats a complex system nobody uses.",
        paragraphs: [
          "Begin with the lead moment that currently leaks money. That might be after-hours messages, missed calls, unqualified quote requests, or slow follow-up.",
          "Build one reliable workflow, measure it, then expand. AI should make the business feel more responsive and organized, not more complicated.",
        ],
      },
    ],
  },
  {
    id: "post-4",
    slug: "service-business-website-conversions",
    category: "Web Design",
    categoryColor: "bg-orange",
    title: "What Makes a Service Business Website Actually Convert?",
    seoTitle: "What Makes a Service Business Website Convert?",
    seoDescription:
      "Learn the conversion principles every service business website needs: clear messaging, trust proof, service pages, CTAs, forms, and mobile UX.",
    excerpt:
      "Pretty pages are not enough. The strongest service websites answer the right questions, reduce hesitation, and make the next step impossible to miss.",
    author: "Sarah Mitchell",
    authorAvatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Mar 31, 2026",
    sortDate: "2026-03-31",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Service business website conversion planning",
    href: "/blog/service-business-website-conversions",
    tags: ["Conversion", "Service Business", "UX"],
    intro:
      "A high-converting service business website is not built around decoration. It is built around buyer confidence, clear information, and a frictionless path from interest to action.",
    sections: [
      {
        id: "clear-positioning",
        title: "Start with clear positioning",
        subtitle: "Visitors should understand your offer in seconds.",
        paragraphs: [
          "The hero section has one job: tell people what you do, who you help, where you work, and what to do next. If visitors need to decode your headline, the page is already making them work too hard.",
          "Service businesses should avoid vague promises and lead with specific outcomes. Clear beats clever when the visitor is trying to solve a real problem.",
        ],
      },
      {
        id: "trust-proof",
        title: "Add trust where doubt appears",
        subtitle: "Every buyer has objections. Your page should answer them before they ask.",
        paragraphs: [
          "People want to know whether you are reliable, experienced, local, insured, responsive, and fairly priced. Trust proof should appear throughout the page, not only near the bottom.",
          "Use reviews, project photos, certifications, service guarantees, years in business, and recognizable client types to make the decision feel safer.",
        ],
      },
      {
        id: "service-pages",
        title: "Build service-specific pages",
        subtitle: "Generic pages struggle to rank and convert.",
        paragraphs: [
          "A single services page is usually too broad. Each important service deserves its own page with details, process, FAQs, proof, and a focused call-to-action.",
          "This helps organic search because each page can target a specific service and location. It also helps conversion because visitors land on a page that matches their exact need.",
        ],
        bullets: [
          "One page per high-value service",
          "Clear explanation of what is included",
          "Photos or examples where possible",
          "FAQs based on real customer questions",
        ],
      },
      {
        id: "forms-and-ctas",
        title: "Make action easy",
        subtitle: "The best CTA is obvious, specific, and low-friction.",
        paragraphs: [
          "Calls-to-action should use language that matches the buyer's intent: request a quote, book a consultation, schedule service, or ask a question. Avoid generic buttons when a specific next step is clearer.",
          "Forms should collect enough information to qualify the lead without feeling like paperwork. Every extra field should earn its place.",
        ],
      },
      {
        id: "mobile-first",
        title: "Design for mobile first",
        subtitle: "Many local service decisions happen from a phone.",
        paragraphs: [
          "Mobile visitors need fast loading, readable text, clear buttons, sticky contact options when appropriate, and forms that are easy to complete with thumbs.",
          "If your desktop design looks polished but the mobile version feels cramped, slow, or confusing, you are losing a large part of your organic traffic.",
        ],
      },
    ],
  },
  {
    id: "post-5",
    slug: "local-seo-basics-canada",
    category: "Local SEO",
    categoryColor: "bg-green",
    title: "Local SEO Basics Canadian Businesses Should Fix First",
    seoTitle: "Local SEO Basics for Canadian Small Businesses",
    seoDescription:
      "A practical local SEO checklist for Canadian small businesses covering Google Business Profile, service pages, reviews, citations, and city signals.",
    excerpt:
      "A practical checklist for cleaning up listings, reviews, service pages, and city signals before you spend another dollar on ads.",
    author: "James Okafor",
    authorAvatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Mar 18, 2026",
    sortDate: "2026-03-18",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Local SEO checklist for Canadian businesses",
    href: "/blog/local-seo-basics-canada",
    tags: ["SEO Checklist", "Canada", "Reviews"],
    intro:
      "Local SEO can feel technical, but the first wins are usually practical. Fix your business information, strengthen your pages, build review momentum, and make it easy for Google to understand where and how you serve customers.",
    sections: [
      {
        id: "business-data",
        title: "Clean up your business data",
        subtitle: "Consistency helps search engines trust your business.",
        paragraphs: [
          "Your business name, address, phone number, website, and hours should match across your website, Google Business Profile, social profiles, and major directories.",
          "Small inconsistencies may not destroy rankings, but messy information can create confusion for both customers and search engines. Start by making the important details accurate everywhere you control.",
        ],
      },
      {
        id: "google-profile",
        title: "Improve your Google Business Profile",
        subtitle: "Your profile is often the front door for local search.",
        paragraphs: [
          "Choose the right categories, list services clearly, add photos, answer questions, update hours, and keep your profile active. A neglected profile makes your business look less reliable than competitors who show current proof.",
          "Connect your profile to a useful website page that matches the searcher's intent. If the profile promises one thing and the page says another, leads drop off.",
        ],
      },
      {
        id: "service-location-pages",
        title: "Create service and location signals",
        subtitle: "Show Google what you do and where you do it.",
        paragraphs: [
          "Your website should have strong pages for your main services and natural references to the cities or areas you serve. Avoid copy-paste city pages with thin content. They rarely build trust.",
          "Better local pages include useful service details, local context, proof, FAQs, and a clear way to contact you.",
        ],
        bullets: [
          "Mention real neighborhoods or service areas naturally",
          "Add examples of local projects when possible",
          "Use descriptive page titles",
          "Include FAQs based on local customer questions",
        ],
      },
      {
        id: "reviews-and-reputation",
        title: "Build reviews steadily",
        subtitle: "Review quality and consistency matter more than sudden bursts.",
        paragraphs: [
          "A steady review process can improve click-through and trust. Ask customers when the experience is fresh, make the review link easy to use, and reply with care.",
          "Do not chase fake reviews or awkward incentives. The long-term value comes from real customer language that helps future buyers feel confident.",
        ],
      },
      {
        id: "measure-improvements",
        title: "Measure improvements monthly",
        subtitle: "Local SEO compounds when you keep improving the right things.",
        paragraphs: [
          "Track calls, form submissions, Google Business Profile interactions, ranking movement, and organic traffic to service pages. Look for patterns instead of reacting to one good or bad day.",
          "Local SEO is not a one-time setup. It is a repeatable system of better pages, better proof, better information, and better follow-up.",
        ],
      },
    ],
  },
  {
    id: "post-6",
    slug: "website-automations-save-time",
    category: "AI & Growth",
    categoryColor: "bg-purple",
    title: "Simple Website Automations That Save Owners Hours Every Week",
    seoTitle: "Website Automations That Save Small Business Owners Time",
    seoDescription:
      "Discover simple website automations for small businesses, including lead routing, missed-call follow-up, booking reminders, and review requests.",
    excerpt:
      "From missed-call follow-up to quote routing, these small automations make your website feel like a real part of the team.",
    author: "Priya Sharma",
    authorAvatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Feb 27, 2026",
    sortDate: "2026-02-27",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Website automation workflow for small business",
    href: "/blog/website-automations-save-time",
    tags: ["Automation", "Operations", "Lead Generation"],
    intro:
      "The best small business automations are not flashy. They quietly prevent missed leads, reduce manual follow-up, and help owners spend less time chasing admin work.",
    sections: [
      {
        id: "lead-routing",
        title: "Route leads automatically",
        subtitle: "Every inquiry should land in the right place fast.",
        paragraphs: [
          "When a form submission sits in a generic inbox, response time suffers. Lead routing sends quote requests, booking requests, and support questions to the right person or system immediately.",
          "Even a simple setup can save hours and prevent missed opportunities. The key is matching form fields to the way your team actually works.",
        ],
      },
      {
        id: "missed-call-follow-up",
        title: "Follow up on missed calls",
        subtitle: "A missed call does not need to become a lost customer.",
        paragraphs: [
          "Many small businesses lose leads because calls arrive while the owner is driving, serving a customer, or working on-site. Automated missed-call text messages can acknowledge the customer and collect basic details.",
          "The message should feel helpful, not robotic. A simple prompt like asking what service they need and when they need it can keep the conversation alive.",
        ],
      },
      {
        id: "booking-reminders",
        title: "Send booking reminders",
        subtitle: "Reminders reduce no-shows and back-and-forth messages.",
        paragraphs: [
          "Appointment reminders are useful for consultations, service visits, estimates, classes, and calls. They can confirm time, location, preparation steps, and cancellation rules.",
          "This improves the customer experience because people know what to expect. It also protects your schedule from preventable gaps.",
        ],
      },
      {
        id: "review-requests",
        title: "Automate review requests",
        subtitle: "Happy customers are most likely to respond right after a good experience.",
        paragraphs: [
          "A review request workflow can send a polite message after a job, appointment, or purchase. It should be simple, respectful, and easy to complete.",
          "Reviews support local SEO, conversion, and reputation. Automating the request makes the process consistent without adding another task to your week.",
        ],
      },
      {
        id: "start-simple",
        title: "Start simple and measure",
        subtitle: "Automation should remove friction, not create a maze.",
        paragraphs: [
          "Pick one repetitive task that currently costs time or loses leads. Build a small workflow, test it, and track whether it improves response time, booked calls, or completed reviews.",
          "The right automation feels invisible. Customers get faster answers, your team gets cleaner information, and owners get a little more of their week back.",
        ],
      },
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((item) => item.id !== post.id)
    .map((item) => ({
      post: item,
      score:
        (item.category === post.category ? 3 : 0) +
        item.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
