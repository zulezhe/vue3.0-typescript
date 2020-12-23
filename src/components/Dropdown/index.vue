<!--
 * @Author: wangchaoxu
 * @Date: 2020-12-22 18:53:33
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-23 11:31:51
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\components\Dropdown\index.vue
-->
<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">切换语言<DownOutlined /> </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(item, index) in items" :key="index">
          <a href="http://www.alipay.com/">{{ item.title }}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
  import { DownOutlined } from '@ant-design/icons-vue';
  import { defineComponent, reactive, toRefs } from 'vue';
  //
  export default defineComponent({
    name: 'WDropdown',
    components: {
      DownOutlined,
    },
    setup() {
      const state = reactive({
        items: [
          {
            title: '中文',
            href: 'javascript:;',
          },
          {
            title: '英文',
            href: 'javascript:;',
          },
        ],
        title: '切换语言',
        isActive: false,
      });
      function clickTitle() {
        state.isActive = !state.isActive;
      }
      return {
        ...toRefs(state),
        clickTitle,
      };
    },
  });
</script>

<style lang="less" scoped>
  @item-length: 10; // Should be no less than items.length
  @transition-time: 0.1s;

  .share-dropdown-menu {
    width: 250px;
    position: relative;
    z-index: 1;
    height: auto !important;

    &-title {
      width: 100%;
      display: block;
      cursor: pointer;
      background: black;
      color: white;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      z-index: 2;
      transform: translate3d(0, 0, 0);
    }

    &-wrapper {
      position: relative;
    }

    &-item {
      text-align: center;
      position: absolute;
      width: 100%;
      background: #e0e0e0;
      color: black;
      line-height: 60px;
      height: 60px;
      cursor: pointer;
      font-size: 18px;
      overflow: hidden;
      opacity: 1;
      transition: transform 0.28s ease;

      &:hover {
        background: black;
        color: white;
      }

      // @for $i from 1 through $item-length {
      //   &:nth-of-type(#{$i}) {
      //     z-index: -1;
      //     transition-delay: $i * $transition-time;
      //     transform: translate3d(0, -60px, 0);
      //   }
      // }
    }

    &.active {
      .share-dropdown-menu-wrapper {
        z-index: 1;
      }

      .share-dropdown-menu-item {
        // @for $i from 1 through $item-length {
        //   &:nth-of-type(#{$i}) {
        //     transition-delay: ($item-length - $i) * $transition-time;
        //     transform: translate3d(0, ($i - 1) * 60px, 0);
        //   }
        // }
      }
    }
  }
</style>
