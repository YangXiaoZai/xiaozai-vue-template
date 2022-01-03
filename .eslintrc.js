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
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-param-reassign': 'off', 	// 禁止对 function 的参数进行重新赋值
    'dot-notation': 'off', // 强制尽可能地使用点号,
    'new-cap': 'off',
    'no-restricted-globals': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
  },
  globals: {
    // 高德地图
    AMap: true,
    Loca: true,
    map: true,
  },
};
