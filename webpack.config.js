const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts', './src/index.scss'],
  output: {
    filename: 'dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({}),
  ],
};
