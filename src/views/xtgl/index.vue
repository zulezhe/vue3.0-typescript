<!--
 * @Author: zulezhe
 * @Date: 2021-03-02 18:04:11
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-03-02 18:04:32
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\views\xtgl\index.vue
-->
<template>
  <div class="container">
    <h1>系统管理</h1>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    name: '',
    components: {},
    setup() {
      const state = reactive({
        account: '内容',
      });
      return {
        ...toRefs(state),
      };
    },
  });
</script>
<style lang="less" scoped>
  .container {
    width: 100vw;
    height: 100%;
  }
</style>
