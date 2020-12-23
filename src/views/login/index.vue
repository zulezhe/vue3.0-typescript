<!--
 * @Author: your name
 * @Date: 2020-11-27 16:39:55
 * @LastEditTime: 2020-12-21 17:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\views\login\index.vue
-->
<template>
  <div class="container">
    <w-canvas></w-canvas>
    <w-form></w-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import WCanvas from '@/components/Particle/index.vue';
  import WForm from './form/index.vue';
  export default defineComponent({
    name: '',
    components: { WForm, WCanvas },
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
