import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.cdn.filesafe.space" },
      { hostname: "storage.googleapis.com" },
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/canadian-small-business-website-2025",
        destination: "/blog/canadian-small-business-website-2026",
        permanent: true,
      },
      {
        source: "/blog/edmonton-trades-ai-leads-2025",
        destination: "/blog/edmonton-trades-ai-leads-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
