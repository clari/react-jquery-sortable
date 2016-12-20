const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: {
      js: {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loaders: ['babel', 'eslint'],
      },
      css: {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        loaders: ['style', 'css?localIdentName=react-jquery-sortable-[name]-[local]&modules', 'postcss', 'sass'],
      },
    },
  },
  externals: {
    jquery: 'jQuery',
  },
  postcss: [autoprefixer],
};
