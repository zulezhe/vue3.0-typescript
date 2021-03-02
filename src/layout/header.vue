<!--
 * @Author: wangchaoxu
 * @Date: 2020-11-27 16:00:50
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-03-02 18:30:23
 * @Description: In User Settings Edit
 * @FilePath: \font-end-project-vue3-ts\src\layout\header.vue
-->
<template>
  <div class="layout-header">
    <div class="logo-title">
      <p class="title">哈密市气象服务一体化平台</p>
      <p class="small-title">Hami meteorological service integration platform</p>
    </div>
    <div class="center">
      <div class="router-item-con">
        <router-link
          to="/index"
          class="router-link animated"
          active-class="router-link-active pulse"
        >
          <a href="javascript:;" :class="['router-item']">综合监测</a>
        </router-link>
        <router-link
          to="/tjfx"
          class="router-link animated"
          active-class="router-link-active pulse"
        >
          <a href="javascript:;" :class="['router-item']">统计分析</a>
        </router-link>
        <router-link
          to="/qxfw"
          class="router-link animated"
          active-class="router-link-active pulse"
        >
          <a href="javascript:;" :class="['router-item']">气象服务产品</a>
        </router-link>
        <router-link
          to="/fzjz"
          class="router-link animated"
          active-class="router-link-active pulse"
        >
          <a href="javascript:;" :class="['router-item']">防灾减灾</a>
        </router-link>
        <router-link
          to="/xtgl"
          class="router-link animated"
          active-class="router-link-active pulse"
        >
          <a href="javascript:;" :class="['router-item']">系统管理</a>
        </router-link>
      </div>
      <div class="handle-con">
        <div class="warn-con">
          <a-popover title="Title" trigger="click">
            <template #content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <a-badge :count="99" :overflow-count="10">
              <i class="iconfont iconjinggao"></i>
            </a-badge>
          </a-popover>
        </div>
        <div class="date-con">
          <p class="time">12:20:35</p>
          <p class="date">2018-05-01</p>
        </div>
        <div class="sign-out-con">
          <a-avatar size="small" :src="avatar"></a-avatar>
          <a class="user-name">{{ username }}</a>
          <a class="sign-out" href="javascript:;" @click="handleSignout">
            退出
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Avatar, Badge } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import WDropdown from '@/components/Dropdown/index.vue';
  export default defineComponent({
    name: 'Layout',
    components: {
      WDropdown,
      AAvatar: Avatar,
      ABadge: Badge,
    },
    setup() {
      const username = '昵称';
      const msg = '头部组件';
      const avatar = require('@/assets/images/avatar.jpg');
      const popoverData = {
        value: 3,
        data: [
          {
            date: '2016-05-02',
            name: '王小虎',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
          },
        ],
      };
      return {
        msg,
        avatar,
        popoverData,
        username,
      };
    },
  });
</script>

<style lang="less" scoped>
  .layout-header {
    height: 83px;
    width: 100%;
    display: flex;
    .center {
      width: 1343px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: url('~@/assets/images/layerout/header-right.png') no-repeat;
      .router-item-con {
        width: 60%;
        margin: 24px 0 0 30px;
        .router-link {
          display: inline-block;
          width: 180px;
          height: 43px;
          background: url('~@/assets/images/layerout/router-item-bg.png') no-repeat;
          background-position: 0;
          background-size: 100%;
          margin-left: -33px;
        }
        .router-link-active .router-item {
          color: #ffd15c;
          background: url('~@/assets/images/layerout/router-item-bg-active.png') no-repeat;
        }
        .router-item {
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          width: 100%;
          height: 100%;
          .flex();
        }
      }
      .handle-con {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        .warn-con {
          width: 50px;
          height: 30px;
          .flex();
          border-right: 1px solid #056b9e;
        }
        .date-con {
          width: 80px;
          height: 30px;
          .flex();
          flex-direction: column;
          .time {
            font-weight: 800;
          }
          .date {
            font-size: 12px;
            margin-top: 5px;
          }
        }
        .sign-out-con {
          width: 160px;
          height: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-left: 1px solid #056b9e;
          .user-name {
            color: #fff;
            margin-left: -20px;
            font-size: 12px;
          }
          .sign-out {
            color: #fff;
          }
        }
      }
    }
    .logo-title {
      width: 567px;
      height: 100%;
      padding: 20px 35px;
      color: #fff;
      box-sizing: border-box;
      background: url('~@/assets/images/layerout/header-left.png') no-repeat;
      .title {
        width: 420px;
        height: 26px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 14px;
        box-sizing: border-box;
      }
      .small-title {
        width: 380px;
        height: 26px;
        font-size: 12px;
        letter-spacing: 2px;
      }
    }
  }
</style>
