/*
 * @Author: wangchaoxu
 * @Date: 2020-12-22 16:51:18
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:04:02
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\mock\user.ts
 */
import Mock from 'mockjs';

const Random = Mock.Random;

let userInfo = [];
for (let i = 0; i < 10; i++) {
  let template = {
    name: Random.cname(),
    age: Random.natural(22, 40),
    date: Random.date('yyyy-MM-dd'),
    address: Random.county(true),
  };
  userInfo.push(template);
}

export default {
  'get|/api/user/getUser': (option) => {
    return {
      status: 200,
      message: 'success',
      data: userInfo,
    };
  },
  'post|/api/user/login': (option) => {
    return {
      status: 200,
      message: 'success',
      data: {
        username: 'admin',
        password: '123456',
      },
    };
  },

  'get|/api/user/getString': (option) => {
    return {
      status: 200,
      message: 'success',
      data: '第二个方法',
    };
  },
};
