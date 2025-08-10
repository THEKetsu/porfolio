import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "porfolio"; // nom exact de ton repo

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons']
  },
  compiler: {
    removeConsole: isProd,
  },
};

export default nextConfig;
