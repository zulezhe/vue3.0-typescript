/*
 * @Author: wangchaoxu
 * @Date: 2020-12-22 16:43:24
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:09:20
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\mock\index.ts
 */
//index.js

// 首先引入Mock
import Mock from 'mockjs';

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600',
});

let configArray: any[] = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require['context']('.', true, /\.js$/);
files.keys().forEach((key: string) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  console.log(item);
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    console.log(new RegExp('^' + protocol[1]), protocol[0], target);
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});
