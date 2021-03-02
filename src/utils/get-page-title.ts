/*
 * @Author: wangchaoxu
 * @Date: 2020-12-18 16:57:53
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-03-02 18:25:09
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\utils\get-page-title.ts
 */
const title = process.env.VUE_APP_TITLE || 'Project';

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} | ${title} `;
  }
  return `${title}`;
}
