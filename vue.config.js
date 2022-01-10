const path = require('path');
const defaultSettings = require('./src/settings.js');
const createThemeColorReplacerPlugin = require('./src/layout/components/Settings/themeColor/plugin.config.js');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = defaultSettings.title;

module.exports = {
  configureWebpack: {
    name,
    plugins: [createThemeColorReplacerPlugin()],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
};
