import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "i.pinimg.com",
      "imgs.pexels.com",
      "cdn.shopifycdn.net",
    ],
  },
};

export default nextConfig;
