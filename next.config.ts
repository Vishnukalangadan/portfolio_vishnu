/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 👈 disable Turbopack explicitly
  },
};

module.exports = nextConfig;