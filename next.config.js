/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
