const webpack = require('webpack')

module.exports = {
  publicPath: process.env.BASE_URL + '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'photo-sphere-viewer vue3.0 Demo'
        return args
      })
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
}
