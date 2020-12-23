/*
 * @Author: wangchaoxu
 * @Date: 2020-12-18 10:23:10
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 10:54:32
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\components\index.ts
 */
import * as components from '@/components';
import type { App } from 'vue';
export default {
  ...components,
  install(Vue:App) {
    Object.keys(components).forEach(name => Vue.use(components[name]));
  },
};