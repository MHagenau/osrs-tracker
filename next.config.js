/** @type {import('next').NextConfig} */
const nextConfig = {
  /* basePath: '/osrs-tracker', */
  /* assetPrefix: '/osrs-tracker/', */
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig