/*
 * @Author: wangchaoxu
 * @Date: 2020-12-22 17:20:12
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:21:15
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\store\getter.ts
 */

const getters = {
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  nickname: (state: any) => state.user.name,
  roles: (state: any) => state.user.roles,
  userInfo: (state: any) => state.user.info,
  menus: (state: any) => state['async-router'].menus,
  // accessMap: ({ accesses }) => accesses.reduce((map, access) => ({ // 当前用户权限映射
  //             ...map,
  //             [access['access']]: access
  // }), {})
};

export default getters;
