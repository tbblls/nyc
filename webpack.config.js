var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {'app': './src/scripts/app.js',
          'audio': './src/scripts/audio.js',},
  output: {
    path: './dist',
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new CopyWebpackPlugin([

      {
        from: './src/index.html'
      },

      {
        from: './src/assets',
        to: 'assets'
      },

      {
        from: './src/talks',
        to: 'talks'
      }
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
};
