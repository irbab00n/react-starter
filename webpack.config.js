const path = require('path');
/*
  NOTE:

  Webpack is not recommending the usage of 'extract-text-webpack-plugin' for css if using Webpack 4.
  However, given the plugins ability to produce a single bundled css file, it suits the needs of this
  project and will be used despite the warning.

  SOURCE:
    https://webpack.js.org/plugins/extract-text-webpack-plugin/
*/ 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const _PUBLIC = path.join(__dirname, '/public');
const _SOURCE = path.join(__dirname, '/client/src');
const _MODULES = path.join(__dirname, '/node_modules');

const _OUTPUT_CONFIG = {
  filename: 'bundle.js',
  path: _PUBLIC,
  publicPath: '/'
};

const _JS_JSX_RULES = {
  test: /\.(js||jsx)?/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: ['@babel/env', '@babel/react']
  }
};

const _SASS_CSS_RULES = {
  test: /\.(s*)css$/,
  exclude: '/node_modules/',
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
};

const _IMAGE_RULES = {
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: '25000'
  }
};

module.exports = {
  entry: `${_SOURCE}/index.jsx`,
  output: _OUTPUT_CONFIG,
  module: {
    rules: [
      _JS_JSX_RULES,
      _SASS_CSS_RULES,
      _IMAGE_RULES
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css'})
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
    modules: [_MODULES]
  }
}
