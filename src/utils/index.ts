/*
 * @Author: wangchaoxu
 * @Date: 2020-08-10 15:56:22
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-20 18:36:06
 * @Description: 公用工具库
 */
/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).Format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).Format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */

export function timeFormat(time: string | Date | number, fmt = 'yyyy-MM-dd HH:mm:ss') {
  time = new Date(time);
  enum o {
    'M+' = time.getMonth() + 1, //月份
    'd+' = time.getDate(), //日
    'h+' = time.getHours() % 12 == 0 ? 12 : time.getHours() % 12, //小时
    'H+' = time.getHours(), //小时
    'm+' = time.getMinutes(), //分
    's+' = time.getSeconds(), //秒
    'q+' = Math.floor((time.getMonth() + 3) / 3), //季度
    S = time.getMilliseconds(), //毫秒
  }
  const week = ['/u65e5', '/u4e00', '/u4e8c', '/u4e09', '/u56db', '/u4e94', '/u516d'];

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') +
        week[time.getDay()]
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
}

/**
 * @description: 判断是否有对应的class名
 * @param {HTMLElement} ele dom对象
 * @param {String} className class名
 * @return {Booble} 返回true/false
 * @author: wangchaoxu
 */
export const hasClass = (ele: HTMLElement, className: string) => {
  return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

/**
 * @description: 给元素添加class
 * @param {HTMLElement} ele dom对象
 * @param {String} className class名
 * @author: wangchaoxu
 */
export const addClass = (ele: HTMLElement, className: string) => {
  if (!hasClass(ele, className)) ele.className += ' ' + className;
};

/**
 * @description: 移除元素class
 */
export const removeClass = (ele: HTMLElement, className: string) => {
  if (hasClass(ele, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
};

/**
 * @description: 切换元素class
 */
export const toggleClass = (ele: HTMLElement, className: string) => {
  if (!ele || !className) {
    return;
  }
  let classString = ele.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += '' + className;
  } else {
    classString =
      classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  ele.className = classString;
};

import dayjs from 'dayjs';

/**
 * @description 随机生成颜色
 * @param {string} type
 * @return {string}
 */
export const randomColor = (type: 'rgb' | 'hex' | 'hsl'): string => {
  switch (type) {
    case 'rgb':
      return window.crypto.getRandomValues(new Uint8Array(3)).toString();
    case 'hex':
      return (
        '#' +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, `${Math.random() * 10}`)
      );
    case 'hsl':
      // 在25-95%范围内具有饱和度，在85-95%范围内具有亮度
      return [360 * Math.random(), 100 * Math.random() + '%', 100 * Math.random() + '%'].toString();
  }
};

/**
 * 复制文本
 * @param text
 */
export const copyText = (text: string) => {
  return new Promise((resolve, reject) => {
    const copyInput = document.createElement('input'); //创建一个input框获取需要复制的文本内容
    copyInput.value = text;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand('copy');
    copyInput.remove();
    resolve(true);
  });
};

/**
 * @description 判断字符串是否是base64
 * @param {string} str
 */
export const isBase64 = (str: string): boolean => {
  if (str === '' || str.trim() === '') {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
};
// 对象转JSON
export const toJSON = (obj: 'object') => {
  return JSON.stringify(obj, (key, value) => {
    switch (true) {
      case typeof value === 'undefined':
        return 'undefined';
      case typeof value === 'symbol':
        return value.toString();
      case typeof value === 'function':
        return value.toString();
      default:
        break;
    }
    return value;
  });
};

/***
 *  是否是生产环境
 */
export const isDev = process.env.NODE_ENV == 'development';

/***
 *  格式化日期
 * @param time
 */
export const formatDate = (time: any) => dayjs(time).format('YYYY-MM-DD HH:mm:ss');

/**
 *   将一维数组转成树形结构数据
 * @param items
 * @param id
 * @param link
 */
export const generateTree = (items, id = 0, link = 'parent') => {
  return items
    .filter((item) => item[link] == id)
    .map((item) => ({
      ...item,
      slots: { title: 'name' },
      children: generateTree(items, item.departmentid),
    }));
};

/***
 *  原生加密明文
 * @param {string} plaintext
 */
export const encryption = (plaintext: string) =>
  isBase64(plaintext) ? plaintext : window.btoa(window.encodeURIComponent(plaintext));

/**
 *  原生解密
 * @param {string} ciphertext
 */
export const decryption = (ciphertext: string) =>
  isBase64(ciphertext) ? window.decodeURIComponent(window.atob(ciphertext)) : ciphertext;
