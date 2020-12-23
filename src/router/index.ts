/*
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:19:42
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 15:09:43
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    meta: { title: '首页', needLogin: false /*需要加校检判断的路由*/ },
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', needLogin: false /*需要加校检判断的路由*/ },
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(''),
  routes,
});

export default router;
