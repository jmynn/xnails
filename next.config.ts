import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      }
    ],
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
};

export default nextConfig;
