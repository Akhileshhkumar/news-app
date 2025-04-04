/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Helps catch potential issues in React
  swcMinify: true,        // Enables SWC for faster builds
  experimental: {
    appDir: true,         // Enable if using Next.js 13+ App Router
  },
  images: {
    domains: ["your-image-domain.com"], // Add any external image domains used
  },
};

module.exports = nextConfig;
