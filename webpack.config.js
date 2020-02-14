/* eslint-disable */
// const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require('path');

const TSConfPathPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './frontend/index.tsx',
  output: {
    path: resolve(__dirname, 'public', 'javascript'),
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /(\.ts(x?))$/,
        // exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.webpack.json',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals:
    process.env.NODE_ENV == 'production'
      ? {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-admin': ['Admin'],
        }
      : {},
  plugins: [new CleanWebpackPlugin()],
};
