const { IMAGES_MANIFEST } = require('next/dist/shared/lib/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
}

module.exports = nextConfig
