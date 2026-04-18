import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/CORCsite',
  assetPrefix: '/CORCsite',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
