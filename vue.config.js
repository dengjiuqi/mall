module.exports = {
  assetsDir:'static',
  parallel:false,
  publicPath:"/mailtest",//这是打包文件的引文资源目录，对应服务器目录
  configureWebpack: {
      resolve:{
        extensions:[],
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'view':'@/view',
          'store':'@/store'
        }
      }
  }}
