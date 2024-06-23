const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  //   performance: {
  //     hints: false,
  //     maxEntrypointSize: 512000,
  //     maxAssetSize: 512000,
  //   },
});
