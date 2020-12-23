function is(value: any, rule: any) {
  return rule.test(value);
}
function type(value: any) {
  const type = typeof value;
  if (type !== 'object') return type;
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
}
export const isString = (value: any) => type(value) === 'String';
export const isNumber = (value: any) => type(value) === 'Number';
export const isObject = (value: any) => type(value) === 'Object';
export const isFunction = (value: any) => type(value) === 'function';
export const isArray = (value: any) => type(value) === 'Array';
export const isNull = (value: any) => type(value) === 'Null';
export const isUndefined = (value: any) => type(value) === 'Undefined';
export const isTrue = (value: any) => type(value) !== 'Null' && type(value) !== 'Undefined';
export const isPhone = (value: any) => is(value, /^1[3|4|5|7|8][0-9]\d{8}$/);
/**
 * 验证密码
 * @param value 6-20位字母数字集合
 */
export const isPassword = async (_rule: string, value: string) => {
  const reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  if (!value) {
    return Promise.reject('请输入密码');
  } else if (!reg.test(value)) {
    return Promise.reject('密码必须是6-20位字母数字集合');
  } else {
    return Promise.resolve();
  }
};

/**
 * 验证昵称
 * @param _rule
 * @param value
 * @param callback
 */
export function isNickName(
  _rule: any,
  value: string,
  callback: (arg0?: Error | undefined) => void
) {
  const reg1 = /^[\u4E00-\u9FA5]+$/;
  const reg2 = /^[\u4E00-\u9FA5]{2,18}$/;
  if (!value) {
    callback(new Error('请输入用户名'));
  } else if (!reg1.test(value)) {
    callback(new Error('用户名必须为汉字'));
  } else if (!reg2.test(value)) {
    callback(new Error('最少2个字符,最多18个字符'));
  } else {
    callback();
  }
}
// 验证用户名是否合法，必须是以字母开头，只能包含字母数字下划线和减号，4到16位
export function isAccount(_rule: any, value: string, callback: (arg0?: Error | undefined) => void) {
  const reg = /^[a-zA-Z]\w{2,15}$/;
  if (!value) {
    callback(new Error('请输入账户'));
  } else if (!reg.test(value)) {
    callback(new Error('以字母开头，只能包含字母数字下划线和减号，3到14位'));
  } else {
    callback();
  }
}
/**
 * 验证是否是经度
 * @param _rule
 * @param value
 * @param callback
 */
export function isLng(_rule: any, value: string, callback: (arg0?: Error | undefined) => void) {
  //验证经度
  const reg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,10})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,10}|180)$/;
  if (!value) {
    callback(new Error('请输入经度'));
  } else if (!reg.test(value)) {
    callback(new Error('经度整数部分为0-180,小数部分为0到10位!'));
  } else {
    callback();
  }
}
/**
 * 验证是否是纬度
 * @param _rule
 * @param value
 * @param callback
 */
export function isLat(_rule: any, value: string, callback: (arg0?: Error | undefined) => void) {
  const reg = /^(-|\+)?([0-8]?\d{1}\.\d{0,10}|90\.0{0,10}|[0-8]?\d{1}|90)$/;

  if (!value) {
    callback(new Error('请输入经度'));
  } else if (!reg.test(value)) {
    callback(new Error('纬度整数部分为0-90,小数部分为0到10位!'));
  } else {
    callback();
  }
}
/**
 * @Description:   价格验证，正则（小数点前8位，小数点后5位）
 */
export function isPrice(_rule: any, value: string, callback: (arg0?: Error | undefined) => void) {
  const reg = /^(?:0\.\d{0,1}[1-9]|(?!0)\d{1,8}(?:\.\d{0,4}[1-9])?)$/;
  if (!value) {
    return callback(new Error('请输入价格'));
  } else if (!reg.test(value)) {
    callback(new Error('整数部分最大8位，小数部分最多保留5位'));
  } else {
    callback();
  }
}
/**
 * 验证是否是整数
 * @param {any} _rule
 * @param {string} value
 * @param {function} callback
 * @return {*}
 */
export function isInteger(_rule: any, value: string, callback: (arg0?: Error | undefined) => void) {
  if (!value) {
    return callback(new Error('输入不可以为空'));
  }
  if (!Number(value)) {
    callback(new Error('请输入正整数'));
  } else {
    const re = /^[0-9]*[1-9][0-9]*$/;
    const rsCheck = re.test(value);
    if (!rsCheck) {
      callback(new Error('请输入正整数'));
    } else {
      callback();
    }
  }
}
