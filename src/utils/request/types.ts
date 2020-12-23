/*
 * @Author: wangchaoxu
 * @Date: 2020-12-22 11:07:54
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 12:02:04
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\utils\axios\types.ts
 */
import { AxiosRequestConfig } from 'axios';
import { AxiosTransform } from './axiosTransform';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  //  是否处理请求结果
  isTransformRequestResult?: boolean;
  // 是否解析成JSON
  isParseToJson?: boolean;
  // 是否提示自定义信息
  isShowMessage?: boolean;
  // 成功的文本信息
  successMessageText?: string;
  // 错误的文本信息
  errorMessageText?: string;
  // 是否加入url
  joinPrefix?: boolean;
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string;
  // 错误消息提示类型
  errorMessageMode?: 'none' | 'modal';
}

export interface Result<T = any> {
  code: number;
  type?: 'success' | 'error' | 'warning';
  message: string;
  result?: T;
}
