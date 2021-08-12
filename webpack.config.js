/* eslint-disable class-methods-use-this */
const path = require('path');
const fs = require('fs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = () => {
  const SOURCE_DIR = path.join(__dirname, './src/');
  const TARGET_DIR = path.join(__dirname, './dist/');

  const filename = 'index.js';
  const entry = path.join(SOURCE_DIR, 'index.ts');

  const plugins = [];

  return {
    node: {
      global: false,
      __filename: false,
      __dirname: false,
    },
    mode,
    devtool: 'source-map',
    entry,
    target: 'node',
    resolve: {
      extensions: ['.mjs', '.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          /* options: see below */
        }),
      ],
    },
    output: {
      libraryTarget: 'commonjs2',
      path: TARGET_DIR,
      filename,
    },
    module: {
      rules: [
        {
          type: 'javascript/auto',
          test: /\.mjs$/,
          // resolve: {
          //   fullySpecified: false,
          // },
        },
        {
          test: /.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
              },
            },
          ],
        },
      ],
    },
    plugins,
    optimization: {
      minimize: false,
    },
  };
};
