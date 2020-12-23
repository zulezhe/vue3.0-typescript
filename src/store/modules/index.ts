/*
 * @Author: wangchaoxu
 * @Date: 2020-11-27 14:52:00
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:40:08
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\store\modules\index.ts
 */
/**
 * 引入文件夹内部的所有文件
 */

import path from 'path';

const file = require['context']('./', true, /\.ts/);
const modules = {};
file.keys().forEach((key: any) => {
  const name = path.basename(key, '.ts');
  console.log(name);
  modules[name] = file(key).default || file(key);
});

export default modules;
