import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aqualine.like-themes.com',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
