/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './public/loader.js',
  },
}

module.exports = nextConfig