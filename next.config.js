/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPO_URL: 'https://github.com/wahid-ari/next-invitation',
    // WEB_URL: 'https://next-invitation.vercel.app',
    WEB_URL: 'http://localhost:3000',
    // API_URL: "https://next-13-pages.vercel.app",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
