module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended', // eslint 官方推荐
    'plugin:vue/recommended', // vue 官方推荐
    'plugin:prettier/recommended', // 使用 prettier
  ],
  plugins: ['vue'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {},
  globals: {
    // 高德地图
    AMap: true,
    Loca: true,
    map: true,
  },
};
