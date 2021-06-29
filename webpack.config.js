let path = './';
let output_path = __dirname + '/public/assets';
let path_obj = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
      'app' : path + 'app.js',
  },
  output: {
    path: output_path,
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.p5js$/,
        exclude: /node_modules/,
        loader: path_obj.resolve('./loaders/p5js-loader.js')
      },
  ]
  },

  devServer: {
    contentBase: path_obj.join(__dirname, 'public/assets'),
    compress: true,
    port: 9000,
  },
}
