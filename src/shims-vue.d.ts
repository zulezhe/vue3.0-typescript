declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare module '*.gif' {
  export const gif: any;
}
// 如果引入less文件的时候找不到less文件使用这种方法声明一下就行了
declare module '*.less' {
  const less: any;
  export default less;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module 'axios';
declare global {
  interface Window {
    propName: MyInterface;
  }
}
