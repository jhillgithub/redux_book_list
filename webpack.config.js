var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public/'
  },
  devtool: "inline-source-map"
};
