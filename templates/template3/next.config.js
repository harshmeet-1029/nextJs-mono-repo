module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
        },
      },
    });

    return config;
  },
};
