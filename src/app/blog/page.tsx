import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = seoConfig.blog;

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title={
          <>
            Practical Growth Ideas for{" "}
            <span className="text-orange">Canadian Businesses</span>
          </>
        }
        subtitle="Web design, local SEO, automation, and AI growth strategies written for owners who want clear next steps, not marketing noise."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Team planning website and marketing strategy"
        imagePosition="50% 42%"
      />
      <BlogListing />
    </>
  );
}
