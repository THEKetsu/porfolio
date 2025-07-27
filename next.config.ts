import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "porfolio"; // nom exact de ton repo

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
