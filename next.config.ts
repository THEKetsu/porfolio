import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
  /* config options here */
  basePath: '/portfolio',
};

export default nextConfig;
