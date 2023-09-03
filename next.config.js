/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    reactStrictMode: true,
    output: 'export',
    distDir: '_static',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
    unoptimized: true,
  },
}
