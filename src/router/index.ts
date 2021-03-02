/*
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:19:42
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-03-02 18:21:48
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index/index.vue'),
        meta: { title: '综合监测', needLogin: false /*需要加校检判断的路由*/ },
      },
      {
        path: '/tjfx',
        component: () => import('@/views/tjfx/index.vue'),
        meta: { title: '统计分析', needLogin: false /*需要加校检判断的路由*/ },
      },
      {
        path: '/qxfw',
        component: () => import('@/views/qxfw/index.vue'),
        meta: { title: '气象服务', needLogin: false /*需要加校检判断的路由*/ },
      },
      {
        path: '/fzjz',
        component: () => import('@/views/fzjz/index.vue'),
        meta: { title: '防灾减灾', needLogin: false /*需要加校检判断的路由*/ },
      },
      {
        path: '/xtgl',
        component: () => import('@/views/xtgl/index.vue'),
        meta: { title: '系统管理', needLogin: false /*需要加校检判断的路由*/ },
      },
    ],
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
