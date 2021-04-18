module.exports = {
  configureWebpack: {
    // 通过 CDN 引入
    externals: {
      vue: 'Vue',
      vant: 'vant'
    }
  }
}
