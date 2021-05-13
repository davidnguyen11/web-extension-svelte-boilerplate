const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const sveltePreprocess = require('svelte-preprocess');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: true
            },
            emitCss: false,
            hotReload: true,
            preprocess: sveltePreprocess({ sourceMap: true })
          }
        }
      },
    ],
  },
});
