/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    domains: ['your-s3-bucket.s3.amazonaws.com']
  }
}
export default nextConfig
