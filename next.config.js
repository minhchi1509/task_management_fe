const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/themes')]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          assert: false,
          path: false,
          fs: false,
          events: false,
          process: false,
          child_process: false
        }
      };
    }

    return config;
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
module.exports = nextConfig;
