import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This disables image optimization for GitHub Pages
  },
  /* config options here */
};

export default nextConfig;
