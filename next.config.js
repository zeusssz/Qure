/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove experimental.appDir as it's no longer needed in Next.js 14
  swcMinify: true
};

module.exports = nextConfig;