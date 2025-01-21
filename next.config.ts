/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Sanity's image CDN hostname
  },
};

module.exports = nextConfig;
