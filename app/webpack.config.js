var path = require('path')

var config = {
  entry: './app.js',
  output: {
    path: path.resolve('../server'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('../server'),
    historyApiFallback: true
  }
}

module.exports = config
