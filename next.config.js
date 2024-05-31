/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  serverRuntimeConfig: {
    port: 8080,
  },
  publicRuntimeConfig: {
    port: 8080,
  },
}

module.exports = nextConfig
