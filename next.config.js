const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

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

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
