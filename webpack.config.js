import { resolve, dirname, join } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

let path = "./";
let output_path = join(__dirname, "public/assets");

export default {
  mode: "development",
  watch: true,
  entry: {
    app: path + "app.js",
  },
  output: {
    path: output_path,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.p5js$/,
        exclude: /node_modules/,
        loader: resolve("./loaders/p5js-loader.js"),
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: resolve("./loaders/custom-loader.js"),
      },
    ],
  },
  devServer: {
    contentBase: output_path,
    compress: true,
    port: 9000,
  },
};
