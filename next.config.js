/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = {
  basePath: '/osrs-tracker',
  assetPrefix: '/osrs-tracker/', // assetPrefix requires the trailing slash
}