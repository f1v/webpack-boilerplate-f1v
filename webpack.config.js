var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: ['./src/js/main.js', './src/css/main.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' }, // translates CSS into CommonJS
            { loader: 'sass-loader' } // compiles Sass to CSS
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/app.bundle.css',
      allChunks: true,
    }),
    new StyleLintPlugin({}),
  ],
};
