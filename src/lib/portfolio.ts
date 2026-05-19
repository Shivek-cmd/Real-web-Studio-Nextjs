export type PortfolioDetailSection = {
  label: string;
  title: string;
  body?: string;
  bullets: string[];
  images?: {
    src: string;
    alt: string;
    wide?: boolean;
  }[];
};

export type PortfolioItem = {
  id: string;
  client: string;
  industry: string;
  result: string;
  description: string;
  image: string;
  tags: string[];
  website?: string;
  service: string;
  duration: string;
  heroAlt: string;
  overview: string;
  deliverables: string[];
  sections: PortfolioDetailSection[];
};

const planningImages = [
  {
    src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Team reviewing a website strategy together",
  },
  {
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Business team working through a launch plan",
  },
];

const workshopImage = {
  src: "https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1400",
  alt: "Team workshop with notes on a glass wall",
  wide: true,
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "protrucktraining",
    client: "Pro Truck Training",
    industry: "Trades & Education",
    result: "Intake fully booked in 30 days",
    description:
      "Edmonton's leading Class 1 truck training school had a reputation that did not match their online presence. A mobile-first site targeting high-intent keywords filled their next full intake within 30 days of going live.",
    image: "/portfolio/protrucktraining/screenshot_1.5x_postspark_2026-05-20_00-26-40.png",
    tags: ["Web Design", "Local SEO", "Mobile-First", "Lead Generation", "Google Rankings"],
    website: "https://protrucktraining.ca",
    service: "Website + Local SEO",
    duration: "30 days",
    heroAlt: "Professional truck driver training on the road",
    overview:
      "Pro Truck Training needed a website that made the school feel credible, local, and easy to contact from a phone. We rebuilt the experience around course clarity, proof, and high-intent Edmonton searches.",
    deliverables: [
      "Mobile-first course pages",
      "Local SEO landing structure",
      "Conversion-focused inquiry flow",
      "Trust signals and licensing content",
      "Performance and technical SEO setup",
      "Analytics and call tracking guidance",
    ],
    sections: [
      {
        label: "Features",
        title: "A cleaner path from search to enrollment",
        body:
          "The page experience was shaped around the information future students need before they call: training options, timelines, proof, location, and next steps.",
        bullets: [
          "Course information was reorganized into scannable blocks for Class 1 training intent.",
          "Phone and form CTAs were placed where mobile visitors naturally pause.",
          "Location and trust content was expanded to support Edmonton-area organic visibility.",
        ],
        images: [
          {
            src: "/portfolio/protrucktraining/screenshot-1.png",
            alt: "Pro Truck Training homepage screenshot showing course and enrollment content",
          },
          {
            src: "/portfolio/protrucktraining/screenshot-2.png",
            alt: "Pro Truck Training website screenshot showing licensing and training details",
          },
        ],
      },
      {
        label: "Result",
        title: "The next full intake was booked within 30 days",
        bullets: [
          "Organic landing pages matched the searches students were already making.",
          "The lead path reduced hesitation by making costs, timing, and eligibility easier to understand.",
          "The school gained a stronger web presence without losing its practical, local personality.",
        ],
        images: [
          {
            src: "/portfolio/protrucktraining/screenshot-3.png",
            alt: "Pro Truck Training website screenshot showing trust and contact sections",
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: "bizbull",
    client: "BizBull.ai",
    industry: "Tech & SaaS",
    result: "3x demo bookings at launch",
    description:
      "A brand-new AI platform needed a site as sharp as its product. We built a conversion-focused landing page with clear product messaging and a seamless demo booking flow, live in 48 hours and outperforming their MVP page from day one.",
    image: "/portfolio/bizbull/screenshot_1.5x_postspark_2026-05-20_00-30-14.png",
    tags: ["Web Design", "Brand Launch", "Conversion", "Landing Page", "AI Platform"],
    website: "https://bizbull.ai",
    service: "SaaS Landing Page",
    duration: "48 hours",
    heroAlt: "Developer working on an AI SaaS platform",
    overview:
      "BizBull.ai needed a launch page that translated a technical AI product into a simple business promise. The page was built to clarify the value fast, create momentum, and move qualified visitors into a demo request.",
    deliverables: [
      "Launch positioning",
      "Landing page design",
      "Demo booking CTA system",
      "Product benefit hierarchy",
      "Responsive build",
      "Launch analytics checks",
    ],
    sections: [
      {
        label: "Strategy",
        title: "From feature-heavy product copy to a crisp buyer story",
        body:
          "We shaped the page around what the buyer needed to believe before booking: what the product does, who it is for, why it is different, and what happens next.",
        bullets: [
          "The hero moved from broad AI language to a specific outcome-led promise.",
          "Feature blocks were rewritten as benefits tied to daily business workflows.",
          "The demo CTA appeared after each proof point to keep momentum high.",
        ],
        images: [
          {
            src: "/portfolio/bizbull/screenshot-1.png",
            alt: "BizBull.ai website screenshot showing AI lead response messaging",
          },
          {
            src: "/portfolio/bizbull/screenshot-2.png",
            alt: "BizBull.ai website screenshot showing product benefits and lead handling",
          },
        ],
      },
      {
        label: "Outcome",
        title: "A sharper launch experience that tripled demo intent",
        bullets: [
          "The first screen made the product category and value clear without extra explanation.",
          "The booking journey reduced unnecessary clicks between interest and action.",
          "The page created a more credible first impression for early-stage sales conversations.",
        ],
        images: [
          {
            src: "/portfolio/bizbull/screenshot-3.png",
            alt: "BizBull.ai website screenshot showing lead capture and AI human help positioning",
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: "optiwaysimmigration",
    client: "Optiways Immigration",
    industry: "Immigration Services",
    result: "#1 Google for immigration consultant Edmonton",
    description:
      "RCIC-certified consultants with a 99% visa approval rate but near-zero visibility on Google. Targeted local SEO and a trust-forward redesign pushed them to the top position for their highest-value search terms.",
    image: "/portfolio/optiwaysimmigration/screenshot_1.5x_postspark_2026-05-20_00-22-38.png",
    tags: ["Local SEO", "Web Design", "Trust Design", "Google Rankings", "RCIC Certified"],
    website: "https://optiwaysimmigration.com",
    service: "Website + SEO",
    duration: "90 days",
    heroAlt: "Immigration consultant reviewing documents with a client",
    overview:
      "Optiways had real credentials and strong outcomes, but the old site did not communicate authority or rank for valuable local searches. We rebuilt the site around trust, service clarity, and local search relevance.",
    deliverables: [
      "Trust-led website redesign",
      "Local SEO architecture",
      "Service landing pages",
      "Consultation CTA flow",
      "Proof and credential sections",
      "Technical SEO cleanup",
    ],
    sections: [
      {
        label: "Trust",
        title: "Making expertise visible before the first consultation",
        body:
          "Immigration decisions are high-stakes, so the page had to feel clear, responsible, and credible from the first few seconds.",
        bullets: [
          "Credential and approval-rate proof was moved into prominent decision points.",
          "Service pages were structured around the questions applicants ask before contacting a consultant.",
          "Local relevance was strengthened through Edmonton-focused content and internal links.",
        ],
        images: [
          {
            src: "/portfolio/optiwaysimmigration/screenshot-1.png",
            alt: "Optiways Immigration website screenshot showing consultation and immigration services",
          },
          {
            src: "/portfolio/optiwaysimmigration/screenshot-2.png",
            alt: "Optiways Immigration website screenshot showing trust and service content",
          },
        ],
      },
      {
        label: "Search",
        title: "A stronger local footprint for high-value searches",
        bullets: [
          "The site was mapped to specific service and location intent.",
          "Page titles and content were rewritten to match how clients search.",
          "The new structure supported both organic rankings and paid traffic quality.",
        ],
        images: [
          {
            src: "/portfolio/optiwaysimmigration/screenshot-3.png",
            alt: "Optiways Immigration website screenshot showing immigration service positioning",
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: "getsetvisa",
    client: "Get Set Visa",
    industry: "Immigration & Visas",
    result: "+240% consultant bookings in 60 days",
    description:
      "A marketplace connecting 600+ CICC-certified consultants with visa applicants had a confusing user journey. We rebuilt the booking flow with clear steps and trust signals, doubling monthly bookings within two months.",
    image:
      "https://images.pexels.com/photos/4427616/pexels-photo-4427616.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tags: ["Web Design", "Lead Gen", "UX Design", "Booking Flow", "Marketplace"],
    website: "https://www.getsetvisa.com",
    service: "UX + Booking Flow",
    duration: "60 days",
    heroAlt: "Visa applicant preparing travel and application documents",
    overview:
      "Get Set Visa needed the marketplace to feel easier and safer for applicants choosing an immigration consultant. We redesigned the journey around step-by-step clarity, consultant trust, and booking completion.",
    deliverables: [
      "Marketplace journey redesign",
      "Consultant discovery flow",
      "Booking CTA improvements",
      "Trust signal system",
      "Mobile UX cleanup",
      "Conversion review",
    ],
    sections: [
      {
        label: "Journey",
        title: "Reducing confusion in a multi-step decision",
        body:
          "The main challenge was helping users understand how to choose a consultant and why they could trust the platform.",
        bullets: [
          "The booking path was broken into smaller, clearer decisions.",
          "Consultant credibility cues were placed before high-commitment actions.",
          "Repeated CTA language helped users understand exactly what would happen next.",
        ],
        images: planningImages,
      },
      {
        label: "Conversion",
        title: "More users moved from research to booked consultations",
        bullets: [
          "The user flow gave applicants confidence before asking them to book.",
          "Mobile screens were simplified for easier comparison and action.",
          "The updated page hierarchy supported both marketplace discovery and direct conversion.",
        ],
        images: [workshopImage],
      },
    ],
  },
  {
    id: "oilcityreadymix",
    client: "Oil City Ready Mix",
    industry: "Construction & Trades",
    result: "3x quote requests in 45 days",
    description:
      "A concrete supplier with a proven product and zero digital presence. A project-focused site with instant quote forms and targeted Google Ads tripled inbound quote requests from Edmonton's construction market within 6 weeks.",
    image:
      "/portfolio/oilcityreadymix/screenshot_1.5x_postspark_2026-05-20_00-18-44.png",
    tags: ["Web Design", "Google Ads", "Quote Forms", "Construction", "Edmonton Market"],
    website: "https://oilcityreadymix.com",
    service: "Website + Google Ads",
    duration: "45 days",
    heroAlt: "Construction crew working around a concrete project",
    overview:
      "Oil City Ready Mix needed a practical web presence that made quoting concrete jobs fast. We built the site around service areas, product clarity, and direct quote requests from contractors and homeowners.",
    deliverables: [
      "Project-focused website",
      "Quote request forms",
      "Google Ads landing flow",
      "Service area content",
      "Construction image direction",
      "Conversion tracking setup",
    ],
    sections: [
      {
        label: "Quote Flow",
        title: "Turning construction traffic into actionable requests",
        body:
          "For this market, speed and clarity mattered more than polish alone. The site needed to get visitors from project need to quote request quickly.",
        bullets: [
          "Forms were kept direct and focused on the details needed to quote a job.",
          "Service area content helped Edmonton-area searches land on relevant pages.",
          "Ad traffic was routed into pages built around quote intent instead of general browsing.",
        ],
        images: [
          {
            src: "/portfolio/oilcityreadymix/screenshot-1.png",
            alt: "Oil City Ready Mix website screenshot showing ready-mix concrete services",
          },
          {
            src: "/portfolio/oilcityreadymix/screenshot-2.png",
            alt: "Oil City Ready Mix website screenshot showing concrete delivery and service details",
          },
        ],
      },
      {
        label: "Growth",
        title: "A stronger digital presence for a proven local supplier",
        bullets: [
          "The new site created a credible destination for paid and organic traffic.",
          "Quote CTAs were placed around project intent and service details.",
          "The company moved from little online visibility to a repeatable inquiry engine.",
        ],
        images: [
          {
            src: "/portfolio/oilcityreadymix/screenshot-3.png",
            alt: "Oil City Ready Mix website screenshot showing service and quote content",
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: "jerhrgroup",
    client: "JER HR Group",
    industry: "HR & Consulting",
    result: "+185% qualified leads in 90 days",
    description:
      "40+ senior HR consultants, 500+ national clients, and a website that buried all of it. A content-led redesign built around their deep expertise positioned JER as the go-to authority, driving a surge in high-value inbound inquiries.",
    image:
      "/portfolio/jerhrgroup/screenshot_1.5x_postspark_2026-05-20_00-15-18.png",
    tags: ["Web Redesign", "Content Strategy", "Lead Gen", "HR Consulting", "National"],
    website: "https://jerhrgroup.com",
    service: "Redesign + Content",
    duration: "90 days",
    heroAlt: "HR consultants collaborating in a boardroom",
    overview:
      "JER HR Group had deep experience and strong client proof, but the site did not communicate their authority quickly. We rebuilt the content hierarchy to make expertise, services, and national credibility easier to understand.",
    deliverables: [
      "Content-led website redesign",
      "Service architecture",
      "Consultant credibility sections",
      "Lead generation pathways",
      "National client proof",
      "SEO content guidance",
    ],
    sections: [
      {
        label: "Authority",
        title: "Making senior expertise easier to buy",
        body:
          "The redesign centered the reasons a company would trust JER with sensitive HR work: experience, depth, national reach, and practical service clarity.",
        bullets: [
          "Service pages were reorganized around buyer problems instead of internal categories.",
          "Consultant depth and client proof were brought higher into the page experience.",
          "Lead paths separated general inquiries from higher-intent consulting requests.",
        ],
        images: [
          {
            src: "/portfolio/jerhrgroup/screenshot-1.png",
            alt: "JER HR Group website screenshot showing HR consulting services",
          },
          {
            src: "/portfolio/jerhrgroup/screenshot-2.png",
            alt: "JER HR Group website screenshot showing consultant expertise and service content",
          },
        ],
      },
      {
        label: "Leads",
        title: "More qualified conversations from a clearer offer",
        bullets: [
          "The page helped prospects self-identify the right service before contacting the team.",
          "The content tone balanced executive credibility with practical next steps.",
          "The new structure supported ongoing content and search growth.",
        ],
        images: [
          {
            src: "/portfolio/jerhrgroup/screenshot-3.png",
            alt: "JER HR Group website screenshot showing lead generation and consulting content",
            wide: true,
          },
        ],
      },
    ],
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.id === slug);
}
