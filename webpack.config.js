var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './src/main.js',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/js/[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0'], plugins: ['transform-decorators-legacy']})], exclude: /node_modules/ },
      { test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/, loader: 'imports?define=>false&this=>window' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
    ]
  },
  plugins: [ignore],
  devServer: {
    host: '0.0.0.0',
    proxy: {},
    historyApiFallback: true,
  }
};
