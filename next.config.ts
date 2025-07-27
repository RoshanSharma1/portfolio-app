import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
