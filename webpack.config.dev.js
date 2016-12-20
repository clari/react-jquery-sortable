const common = require('./webpack.config.common');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    './src/entrypoint',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: common.resolve,
  module: {
    loaders: [
      common.module.loaders.js,
      common.module.loaders.css,
    ],
  },
  externals: common.externals,
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  postcss: common.postcss,
};
