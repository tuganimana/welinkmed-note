/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://welink.up.railway.app',
  },
}

module.exports = nextConfig

