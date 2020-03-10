const { resolve, join } = require('path');
const merge = require('webpack-merge');

const root = resolve(__dirname);

const path = {
  root(...args) {
    return join(root, ...args);
  },

  source(...args) {
    return join(root, 'src', ...args);
  },

  dist(...args) {
    return join(root, 'dist', ...args);
  }
};


module.exports = (env = {}) => {
  const mode = env.dev ? 'development' : 'production';

  process.env.NODE_ENV = mode;

  const config = {
    entry: {
      app: [path.source('index')]
    },
    output: {
      path: path.dist(),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader' },
      ],
    },
  };

  return env.dev
    ? merge(config, {
        cache: true,
        mode,
        devtool: 'inline-source-map',
        devServer: {
          contentBase: path.dist(),
          inline: true,
          hot: true,
          host: 'localhost',
          port: 3000,
        },
      })
    : merge(config, {
        cache: false,
        mode,
        devtool: 'inline-source-map',
      });
};
