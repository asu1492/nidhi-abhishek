/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Conditionally set the base path
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
