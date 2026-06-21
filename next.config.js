/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // ✅ 添加这个配置，跳过构建时的 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig