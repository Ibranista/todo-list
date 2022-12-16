/* eslint-disable linebreak-style */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import { resolve } from 'path';

export const mode = 'development';
export const entry = {
  index: './src/index.js',
};
export const devServer = {
  static: './dist',
};
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
  assetModuleFilename: 'images/[name][ext]',
};
export const module = {
  rules: [
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [_loader, 'css-loader'],
    },
    {
      test: /\.js$/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Webpack Setup',
    template: resolve(__dirname, 'src', 'index.html'),
  }),
  new MiniCssExtractPlugin(),
];
export const devtool = 'inline-source-map';
export const optimization = {
  runtimeChunk: 'single',
};