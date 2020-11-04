module.exports = {
  // publicPath: '',
  publicPath: './',   // 直接打开
  productionSourceMap: false,
  devServer: {
    // open: true,
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'link-color': '#1890ff',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
}
