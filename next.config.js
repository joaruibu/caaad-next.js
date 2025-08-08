/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dwsa2s0pn/**",
      },
    ],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
