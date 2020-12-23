/*
 * @Author: wangchaoxu
 * @Date: 2020-12-21 14:18:32
 * @LastEditTime: 2020-12-21 17:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\views\login\form\check.ts
 */

export const validatePass = (rule: string, value: string, callback: Function) => {
  console.log(rule);
  const reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  if (!value) {
    callback('请输入密码');
  } else if (!reg.test(value)) {
    callback(new Error('密码必须是6-20位字母数字集合'));
  } else {
    callback();
  }
};
