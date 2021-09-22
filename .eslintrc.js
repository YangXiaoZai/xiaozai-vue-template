module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  // plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'prettier/prettier': 'error',
    'no-tabs': 'off', // 禁用tab 关闭
    'no-multi-assign': 'off', // 禁止连续赋值 关闭
  },
  globals: {
    // 高德地图
    AMap: true,
    Loca: true,
  },
};
