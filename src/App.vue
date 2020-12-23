<!--
 * @Author: wangchaoxu
 * @Date: 2020-11-26 15:19:42
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-23 14:03:16
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\App.vue
-->
<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import EnUs from 'ant-design-vue/es/locale/zh_CN';
  export default defineComponent({
    name: 'App',
    setup() {
      const state = reactive({
        locale: EnUs,
      });
      return {
        ...toRefs(state),
      };
    },
  });
</script>
<style scopd lang="less">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>
