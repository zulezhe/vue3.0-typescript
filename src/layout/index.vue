<template>
  <a-layout class="layout">
    <layout-header></layout-header>
  </a-layout>
</template>

<script lang="ts">
  import LayoutHeader from './header.vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Layout',
    components: {
      LayoutHeader,
    },
    setup() {
      const collapsed = ref<boolean>(false);
      return {
        collapsed,
      };
    },
  });
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    overflow: hidden;
    height: 100vh;
    .ant-layout {
      overflow: hidden;
    }

    .layout-content {
      flex: none;
    }
  }
</style>
