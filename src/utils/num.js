/**
 * 格式化数字 （保留几位小数）
 *  0 => 0.00
 *  3.1415 => 3.14
 * @param {number} num // 数字
 * @param {number} digits // 小数点保留几位
 */
export const formatFloat = (num, digits = 2) => {
  let f = parseFloat(num);

  if (isNaN(f)) {
    return num;
  }

  f = Math.round(num * 10 ** digits) / 10 ** digits; // digits 幂
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + digits) {
    s += '0';
  }
  return s;
};

/**
 * 格式化数字 （小数点前和小数点后字体大小不同）
 *  0 => 0.00
 * @param {number} num // 数字
 * @param {number} f1 // 小数点前数字的font-size大小
 * @param {number} f2 // 小数点后数字的font-size大小
 */
export const splitFloatFontSize = (num, f1 = 16, f2 = 14) => {
  const splitNum = formatFloat(num).split('.');
  return `<span style='font-size:${f1}px;line-heigh:1'>${splitNum[0]}.</span><span style='font-size:${f2}px;line-heigh:1}'>${splitNum[1]}</span>`;
};

/**
 * 随机生成整数型数字(默认1~100)
 *  return => 23
 * @param {number} n // 最小范围的值
 * @param {number} m // 最大范围的值
 *
 * @return {number} num // 返回值 (n <= num <= m)
 *
 */
export const getRandomInt = (n = 1, m = 100) => {
  let num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
};

/**
 * 随机生成浮点型数字(默认1~100)
 * return => 42.31
 * @param {number} n // 最小范围的值
 * @param {number} m // 最大范围的值
 *
 * @return {number} num // 返回值 (n <= num <= m)
 *
 */
export const getRandomFloat = (n = 1, m = 100, point = 2) => {
  let num = (Math.random() * (m - n) + n).toFixed(point);
  return num;
};
