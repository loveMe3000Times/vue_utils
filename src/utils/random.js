/*****************************************************
 * 获取一个范围内的随机整数 [min, max]
 * @param {Number} min 随机数最小值（默认值: 0）
 * @param {Number} max 随机数最大值 （默认值：10）
 * @returns {Number}
 ******************************************************/
export function getRandomNum(min = 0, max = 10) {
  let differ = max - min + 1;
  let random = Math.ceil(Math.random() * differ) + min - 1;

  return random;
}



/****************************************************
 * 获取一个随机字符串
 * @param {Number} len 字符串长度
 * @param {String} str 提供的生成的源字符串（可选）
 * @returns {String}
 ******************************************************/
export function getRandomStr(len, str = "") {
  if (!str) {
    str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';  // 去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    // var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  // 所有英文 + 数字
  }

  let result = "";
  let strLen = str.length;

  for (let i = 0; i < len; i++) {
    let index = Math.ceil(Math.random() * strLen) - 1;
    result += str[index];
  }

  return result;
}