module.exports = {
  // Export the configuration object for Webpack in a Next.js project.
  webpack(config, { isServer }) {
    // The `config` parameter contains the existing Webpack configuration provided by Next.js.
    // The `{ isServer }` destructured parameter tells us if the current build is for the server-side (SSR).

    // Add a custom rule for processing `.js` files.
    config.module.rules.push({
      // Match files with the `.js` extension.
      test: /\.js$/,

      // Specify the loader to use for these files.
      use: {
        // Use the `babel-loader` to transpile the `.js` files.
        loader: "babel-loader",

        // Pass options to the `babel-loader`.
        options: {
          // Use the Next.js-provided Babel preset to ensure compatibility
          // with all features required by Next.js.
          presets: ["next/babel"],
        },
      },
    });

    // Return the updated Webpack configuration object.
    return config;
  },
};
