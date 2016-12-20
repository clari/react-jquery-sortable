const assign = require('lodash/assign');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'react-jquery-sortable.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactJQuerySortable',
    libraryTarget: 'umd',
  },
  externals: assign({
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  }, common.externals),
  resolve: common.resolve,
  module: {
    loaders: [
      common.module.loaders.js,
    ],
  },
};
