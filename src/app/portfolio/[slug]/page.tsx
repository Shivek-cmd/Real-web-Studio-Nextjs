import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioItems } from "@/lib/portfolio";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    return {
      title: "Case Study Not Found | RealWebStudio",
    };
  }

  return {
    title: `${item.client} Case Study | RealWebStudio`,
    description: item.description,
    alternates: {
      canonical: `https://realwebstudio.com/portfolio/${item.id}`,
    },
    openGraph: {
      title: `${item.client} Case Study | RealWebStudio`,
      description: item.description,
      url: `https://realwebstudio.com/portfolio/${item.id}`,
      siteName: "RealWebStudio",
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.heroAlt,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="bg-white text-site-text">
      <section className="border-b border-site-border px-side-gap py-14 lg:py-18">
        <div className="mx-auto max-w-270">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2px] text-orange transition-colors duration-200 hover:text-orange-dark"
          >
            <span aria-hidden="true">←</span>
            Back to Portfolio
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-4 text-[12px] font-extrabold uppercase tracking-[2.5px] text-orange">
                {item.industry}
              </p>
              <h1 className="max-w-170 text-[42px] font-extrabold leading-[1.04] tracking-[-1px] text-site-text sm:text-[58px] lg:text-[72px]">
                {item.client}
              </h1>
            </div>
            <p className="max-w-120 text-[15px] leading-[1.8] text-gray lg:justify-self-end">
              {item.description}
            </p>
          </div>

          <div className="mt-10 grid border-y border-site-border text-[13px] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Client", item.client],
              ["Service", item.service],
              ["Duration", item.duration],
              ["Industry", item.industry],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-site-border py-5 sm:border-r sm:px-5 sm:last:border-r-0 lg:border-b-0"
              >
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[1.8px] text-orange">
                  {label}
                </p>
                <p className="font-semibold text-site-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-[360px] overflow-hidden bg-gray-light sm:h-[520px] lg:h-[680px]">
        <Image
          src={item.image}
          alt={item.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <section className="px-side-gap pt-[96px] pb-[88px] lg:pt-[120px] lg:pb-[110px]">
        <div className="mx-auto grid max-w-270 gap-8 border-t border-site-border pt-8 lg:grid-cols-[170px_1fr] lg:gap-12">
          <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-orange">
            About Project
          </p>
          <div>
            <p className="max-w-180 text-[24px] font-semibold leading-[1.35] tracking-[-0.4px] text-site-text lg:text-[32px]">
              {item.overview}
            </p>
            <div className="mt-8 grid gap-x-12 gap-y-3 sm:grid-cols-2">
              {item.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-center gap-3 text-[14px] text-gray"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  {deliverable}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {item.sections.map((section) => (
        <section
          key={section.label}
          className="px-side-gap pt-[18px] pb-[88px] lg:pt-[22px] lg:pb-[112px]"
        >
          <div className="mx-auto grid max-w-270 gap-8 border-t border-site-border pt-8 lg:grid-cols-[170px_1fr] lg:gap-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-orange">
              {section.label}
            </p>
            <div>
              <h2 className="max-w-160 text-[30px] font-extrabold leading-[1.12] tracking-[-0.7px] text-site-text lg:text-[44px]">
                {section.title}
              </h2>
              {section.body && (
                <p className="mt-5 max-w-190 text-[15px] leading-[1.85] text-gray">
                  {section.body}
                </p>
              )}
              <div className="mt-9 space-y-5">
                {section.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex gap-3 text-[14px] leading-[1.7] text-gray"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              {section.images && (
                <div className="mt-16 grid gap-6 sm:grid-cols-2">
                  {section.images.map((image) => (
                    <div
                      key={image.src}
                      className={`relative overflow-hidden rounded-[14px] bg-gray-light ${
                        image.wide
                          ? "h-[300px] sm:col-span-2 lg:h-[430px]"
                          : "h-[260px] lg:h-[360px]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={
                          image.wide
                            ? "(max-width: 1024px) 90vw, 900px"
                            : "(max-width: 640px) 90vw, 440px"
                        }
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-site-border bg-gray-light px-side-gap py-[88px] lg:py-[104px]">
        <div className="mx-auto flex max-w-270 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2px] text-orange">
              Ready for your version?
            </p>
            <h2 className="max-w-150 text-[34px] font-extrabold leading-[1.12] tracking-[-0.6px] text-site-text lg:text-[46px]">
              Let&apos;s build a website that turns attention into action.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-7 py-3.5 text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              Start a Project
            </Link>
            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-site-border bg-white px-7 py-3.5 text-[14px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
              >
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
