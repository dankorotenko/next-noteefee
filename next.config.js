/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/noteefee',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/notifications',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
