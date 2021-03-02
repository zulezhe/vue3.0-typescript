<!--
 * @Author: zulezhe
 * @Date: 2021-03-02 18:03:12
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-03-02 18:03:41
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\views\fzjz\index.vue
-->
<template>
  <div class="container">
    <h1>
      防灾减灾
    </h1>
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
