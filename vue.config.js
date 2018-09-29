/**
 * 配置参考: https://cli.vuejs.org/zh/config/
 */
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
  },
  devServer: {
    open: true,
    port: 8001,
    overlay: {
      errors: true,
      warnings: true
    }
  }
}
