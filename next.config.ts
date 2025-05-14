import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds for now
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during production builds for now
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
