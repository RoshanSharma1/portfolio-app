import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-app',
  images: {
    unoptimized: true,
  },
  siteUrl: 'https://roshansharma1.github.io',
  generateRobotsTxt: true,
};

export default nextConfig;
