<!--
 * @Author: wangchaoxu
 * @Date: 2020-11-27 16:00:50
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-23 09:55:32
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\layout\header.vue
-->
<template>
  <div class="layout-header">
    <a-row>
      <a-col :span="4">我是左侧是的logo</a-col>
      <a-col :span="16">我是标题</a-col>
      <a-col :span="4"><w-dropdown></w-dropdown> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import WDropdown from '@/components/Dropdown/index.vue';
  export default defineComponent({
    name: 'Layout',
    components: {
      WDropdown,
    },
    setup() {
      const msg = '头部组件';
      return {
        msg,
      };
    },
  });
</script>

<style lang="less" scoped>
  .layout-header {
    height: 100px;
    width: 100%;
    .border();
  }
</style>
