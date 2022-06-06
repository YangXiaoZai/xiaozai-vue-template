const path = require('path');
const defaultSettings = require('./src/settings.js');
const createThemeColorReplacerPlugin = require('./src/layout/components/Settings/themeColor/plugin.config.js');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = defaultSettings.title;

module.exports = {
  publicPath: './', // 默认情况部署到根目录，如需要部署到/app/目录下，则设置为/app/
  outputDir: 'dist', //build之后打包到的目录,
  assetsDir: 'static', //打包后的静态资源的目录，放在outputDir目录下,
  lintOnSave: process.env.NODE_ENV === 'development', //仅在develop环境中
  productionSourceMap: false, //生产环境取消source map,加快构建速度
  devServer: {
    // 解决跨域
    proxy: {
      '/api': {
        // 目标路径
        target: 'https://space.bilibili.com/',
        // 允许跨域
        changeOrigin: true,
        // 重写路径
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.join(__dirname, 'src/styles/*.less')],
    },
  },
  configureWebpack: {
    name,
    plugins: [createThemeColorReplacerPlugin()],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  chainWebpack(config) {
    // 开启预加载
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    // 关闭资源预读取
    config.plugins.delete('prefetch');

    // 雪碧图
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // 仅打包最初依赖的第三方
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // 可以自定义您的规则
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });

      config.optimization.runtimeChunk('single');
    });
  },
};
