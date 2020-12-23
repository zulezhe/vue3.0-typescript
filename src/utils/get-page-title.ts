/*
 * @Author: wangchaoxu
 * @Date: 2020-12-18 16:57:53
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 15:14:27
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\utils\get-page-title.ts
 */
const title = process.env.VUE_APP_TITLE || 'Project';

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${title} - ${pageTitle} `;
  }
  return `${title}`;
}
