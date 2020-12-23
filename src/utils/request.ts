/*
 * @Author: your name
 * @Date: 2020-10-25 14:45:14
 * @LastEditTime: 2020-12-22 17:02:28
 * @LastEditors: wangchaoxu
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\utils\request.ts
 */
import axios from 'axios';
import { message as Message } from 'ant-design-vue';
import { createStorage } from '@/utils/storage';
const storeage = createStorage();
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'production' ? '' : '',
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config: { headers: { [x: string]: any } }) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const token = storeage.getCookie('token');
    console.log(token);
    if (token) {
      config.headers['X-Access-Token'] = token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: { data: any }) => {
    const res = response.data;
    if (res.code !== 20000) {
      Message.error(res.message);
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        storeage.clearCookie();
        location.reload(); // To prevent bugs from vue-router
      }
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return response.data;
    }
  },
  (error: { message: any }) => {
    Message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
