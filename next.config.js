/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // For static export support
  },
  trailingSlash: true, // Better for static hosting
  poweredByHeader: false, // Remove the X-Powered-By header
};

module.exports = nextConfig;
