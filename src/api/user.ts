/*
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:58:59
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:28:42
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\api\user.ts
 */
import request from '@/utils/request';
/**
 * 登陆
 * @param data
 */
export function login(data: any) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  });
}
/**
 * 获取用户信息
 * @param data
 */
export function getUserInfo() {
  return request({
    url: '/api/user/userInfo',
    method: 'get',
  });
}
/**
 * 退出
 * @param data
 */
export function logout(data: any) {
  return request({
    url: '/api/user/logout',
    method: 'POST',
    data: data,
  });
}
