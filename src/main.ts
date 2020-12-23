/*
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:19:42
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-23 14:29:15
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/utils/permission';
import '@/locales/index';
import { setupAntd } from './plugin/ant-design-vue';

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock');
  mockXHR();
}
const app = createApp(App);
app.use(router);
app.use(store);
setupAntd(app);
router.isReady().then(() => app.mount('#app'));
