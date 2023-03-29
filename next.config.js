/** @type {import('next').NextConfig} */

const nextConfig = {
  // extends: ['next', 'prettier'],
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // reactStrictModse: true,
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'cdn.dribbble.com',
      'encrypted-tbn0.gstatic.com',
      'res.cloudinary.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
module.exports = nextConfig;
