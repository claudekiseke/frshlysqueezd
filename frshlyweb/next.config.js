/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './Loader.js',
  },
}

module.exports = nextConfig