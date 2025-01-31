module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  devServer: {
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9090 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  },
  pwa: {
    name: 'Nome do Meu APP',
    themeColor: '#47a5ae',
    msTileColor: '#ed479b',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'icons/favicon-32x32.png',
      favicon16: 'icons/favicon-16x16.png',
      appleTouchIcon: 'icons/apple-icon-152x152.png',
      msTileImage: 'icons/ms-icon-144x144.png'
    }
  },
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    externals: {
    }
  }
}
