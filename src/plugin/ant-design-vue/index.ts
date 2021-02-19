/*
 * @Author: your name
 * @Date: 2020-11-26 16:34:47
 * @LastEditTime: 2021-02-19 14:56:23
 * @LastEditors: zulezhe
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\plugin\ant-design-vue\index.ts
 */
// Load on demand
// This module only introduces components globally before login
// https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
import type { App } from 'vue';

import {
  // need
  Form,
  Input,
  Row,
  Col,
  Spin,
  ConfigProvider,
  Layout,
  InputNumber,
  Button,
  Tooltip,
  Checkbox,
  Dropdown,
  Menu,
  DatePicker 
} from 'ant-design-vue';

export function setupAntd(app: App<Element>) {
  // need
  // Here are the components required before registering and logging in
  app.use(Form).use(Input).use(Row).use(Col).use(Spin).use(ConfigProvider).use(Layout).use(InputNumber).use(Button).use(Tooltip).use(Checkbox).use(Dropdown).use(Menu).use(DatePicker);
}
