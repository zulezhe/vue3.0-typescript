<!--
 * @Author: zulezhe
 * @Date: 2020-11-27 09:50:59
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-19 15:20:28
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\layout\index.vue
-->
<template>
  <a-layout class="layout">
    <layout-header @changeLocale="changeLocale"></layout-header>
    <div class="main-container">
      <ConfigProvider :locale="locale === 'en' ? EnUs : zhCN">
        <a-date-picker class="a-date-picker" />
      </ConfigProvider>
    </div>
  </a-layout>
</template>

<script lang="ts">
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import EnUs from 'ant-design-vue/es/locale/en_US';
  import LayoutHeader from './header.vue';
  import { defineComponent, reactive, ref, toRefs } from 'vue';
  export default defineComponent({
    name: 'Layout',
    components: {
      LayoutHeader,
    },
    setup() {
      const state = reactive({
        locale: ref(EnUs.locale),
      });
      const collapsed = ref<boolean>(false);
      const changeLocale = (val: string) => {
        state.locale = val;
      };
      return {
        ...toRefs(state),
        collapsed,
        zhCN,
        EnUs,
        changeLocale,
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
    .main-container {
      width: 100%;
      height: 100%;
      .a-date-picker {
        height: 50px;
        width: 200px;
        border: 1px solid red;
      }
    }
  }
</style>
