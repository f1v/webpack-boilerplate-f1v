const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: ['./src/js/main.js', './src/css/main.scss'],
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
