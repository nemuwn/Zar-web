const path = require('path');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');

/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
};

module.exports = withPlugins(
  [
    [
      withOffline,
      {
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /.(png|jpe?g)$/,
              handler: 'CacheFirst',
            },
          ],
        },
      },
    ],
  ],
  {
    experimental: {
      scrollRestoration: true,
    },
    
    webpack: (config) => {
      config.resolve.alias['@'] = path.join(__dirname, 'src');
      return config;
    },
    reactStrictMode: true,
  },
);