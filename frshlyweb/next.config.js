/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  loader: 'custom',
  loaderFile: './Loader.js'
}

module.exports = nextConfig
