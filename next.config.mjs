/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '', // Only once
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
