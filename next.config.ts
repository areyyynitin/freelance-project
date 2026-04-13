import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Allows all paths under the hostname
      },
       {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // Allows all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
