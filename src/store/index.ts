/*
 * @Author: your name
 * @Date: 2020-11-26 15:19:42
 * @LastEditTime: 2020-12-22 17:35:24
 * @LastEditors: wangchaoxu
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\store\index.ts
 */
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from '@/store/modules';
export default createStore({
  state: {
    test: '测试持久化',
  },
  modules,
  plugins: [
    // createPersistedState(),
    createPersistedState({
      reducer(val) {
        return {
          // 只储存state中的token
          test: val.test,
        };
      },
    }),
  ],
});
