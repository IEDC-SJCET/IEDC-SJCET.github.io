/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  basePath: '/IEDC-SJCET.github.io',
  assetPrefix: '/IEDC-SJCET.github.io',
};

module.exports = nextConfig;