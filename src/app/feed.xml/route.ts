import { blogPosts } from "@/lib/blog";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = blogPosts
    .map((post) => {
      const url = absoluteUrl(post.href);

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${new Date(post.sortDate).toUTCString()}</pubDate>
          <category>${escapeXml(post.category)}</category>
          <author>${escapeXml(`support@realwebstudio.com (${post.author})`)}</author>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${SITE_NAME} Blog</title>
        <link>${SITE_URL}/blog</link>
        <description>Web design, local SEO, automation, and AI growth insights for Canadian small businesses.</description>
        <language>en-CA</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
