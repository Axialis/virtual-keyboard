const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve:
    {
      extensions: ['.js', '.css', '.json'],
    },
  optimization:
    {
      splitChunks: {
        chunks: 'all',
      },
    },
  devServer:
    {
      port: 4000,
    },
  plugins:
        [
          new HTMLWebpackPlugin({
            template: './index.html',
          }),
          new CleanWebpackPlugin(),
        ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: ['file-loader'],
      },

    ],
  },
};
