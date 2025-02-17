module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { async_hooks: require.resolve("async_hooks") };
    return config;
  },
  };
