const webpack = require('webpack')

module.exports = {
  publicPath: process.env.BASE_URL + '/',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
}
