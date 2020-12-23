/*
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:25:53
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-23 14:34:49
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\vue.config.js
 */
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin'); //gzip压缩
const TerserPlugin = require('terser-webpack-plugin');
const productionGzipExtensions = ['js', 'css', 'json', 'txt'];
function resolve(dir) {
  return path.join(__dirname, dir);
}
console.log(process.env.VUE_APP_BASE_API, process.env.VUE_APP_BASE_URL);
console.log(`=======开发环境${process.env.NODE_ENV}=======`);
module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    host: '127.0.0.1',
    open: false,
    hot: true,
    port: 9001,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        logLevel: 'debug',
        // ws: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '/api/v1',
        },
      },
    },
    before: process.env.NODE_ENV == 'development' ? require('./mock/mock-server.js') : '',
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development',
    loaderOptions: { less: { javascriptEnabled: true } },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/mixin.less'),
        path.resolve(__dirname, 'src/styles/variables.less'),
      ],
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
        }),
        new TerserPlugin({
          extractComments: true,
          cache: true,
          parallel: true,
          // sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            extractComments: 'all',
            compress: {
              drop_console: true,
            },
          },
        })
      );
    } else {
      config.devtool = 'source-map';
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
    if (process.env.NODE_ENV === 'production') {
      config.plugins.delete('prefetch');
      config.plugins.delete('preload');
    } else {
      config.devtool('eval-cheap-source-map');
    }
    config.resolve.alias.set('@', resolve('src'));
  },
};
