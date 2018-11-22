const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const targets = {
  development: {
    devtool: 'source-map',
    filename: '[name].js',
    transpileOnly: true,
  },
  production: {
    devtool: false,
    filename: '[name].[hash].bundle.js',
    transpileOnly: false,
  },
};

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  }),
];

// set mode depending on NODE_ENV, defaulting to production if not set
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const config = targets[mode];

if (config.transpileOnly) {
  plugins.push(
    new ForkTsCheckerWebpackPlugin()
  );
}

module.exports = {
  devtool: config.devtool,
  devServer: {
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
  },
  entry: {
    main: './src',
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
              transpileOnly: config.transpileOnly,
            },
          },
        ],
      }
    ],
  },
  output: {
    filename: config.filename,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins,
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js'],
  },
};
