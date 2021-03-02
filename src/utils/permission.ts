/*
 * @Author: your name
 * @Date: 2020-10-26 20:27:30
 * @LastEditTime: 2021-03-02 18:07:07
 * @LastEditors: zulezhe
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\utils\permission.ts
 */
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css';
import getPageTitle from '@/utils/get-page-title';
import router from '@/router';
import store from '@/store';
let lock = true;
router.beforeEach(async (to: any, from: any, next: any) => {
  if (lock) {
    console.info(to, from);
  }
  lock = false;
  NProgress.start(); // 加载进度条
  document.title = getPageTitle(to.meta.title); // 设置document title
  const hasUserToKen = store.getters.token; //判断用户是否登陆
  if (hasUserToKen) {
    next();
  } else {
    if (!to.meta.needLogin) {
      next();
    } else {
      NProgress.done();
      // store.commit('doRemove');
      next('/login');
    }
  }
});
// 路由跳转完成后
router.afterEach(() => {
  NProgress.done();
});
