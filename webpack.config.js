var webpack = require('webpack'),
    path = require('path'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  entry: {
    main: './src/app/index.js',
  },
  output: {
    path: path.join(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=env&presets[]=react'],
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.otf$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-otf',
        name: './fonts/[name].[ext]',
        publicPath: './',
      }
    }, {
      test: /\.(jpe?g|gif|png|svg)$/,
      loader: 'file-loader?publicPath=./&name=./images/[hash].[ext]',
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
  ]
};

