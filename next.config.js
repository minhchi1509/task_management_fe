const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      include: path.resolve(__dirname, 'src'),
      use: ['@svgr/webpack']
    });

    return config;
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
