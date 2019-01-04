const path = require('path');

const _public = path.join(__dirname, '/public');
const _source = path.join(__dirname, '/client/src');
const _modules = path.join(__dirname, '/node_modules');
/*
  NOTE:

  Webpack is not recommending the usage of 'extract-text-webpack-plugin' for css if using Webpack 4.
  https://webpack.js.org/plugins/extract-text-webpack-plugin/
*/ 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${_source}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: _public,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(s*)css$/,
        exclude: '/node_modules/',
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '25000'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css'})
    // new webpack.DefinePlugin(envKeys)
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
    modules: [_modules]
  }
}
