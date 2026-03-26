/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  devIndicators: false,
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  }
}

export default nextConfig
