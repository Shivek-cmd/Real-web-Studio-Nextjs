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
};

export default nextConfig;
