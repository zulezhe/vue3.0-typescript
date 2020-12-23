<!--
 * @Date: 2020-11-27 16:39:55
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-12-22 17:41:57
 * @FilePath: \vue3-ts\src\views\login\form\index.vue
-->
<template>
  <div class="login-box">
    <a-form layout="horizontal" :model="formInline" @submit="handleSubmit" @submit.prevent>
      <a-form-item class="title-item">
        <h1>登 录</h1>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="formInline.username" size="large" placeholder="请输入用户名">
          <template v-slot:prefix><user-outlined type="user"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="formInline.password"
          size="large"
          :type="passwoldType"
          placeholder="请输入密码"
          autocomplete="new-password"
        >
          <template v-slot:prefix><lock-outlined type="user"/></template>
          <template #suffix>
            <EyeInvisibleOutlined
              v-show="!isShowPasswold"
              style="color: rgba(0,0,0,.45)"
              @click="handleViewPassword()"
            />
            <EyeOutlined
              v-show="isShowPasswold"
              style="color: rgba(0,0,0,.45)"
              @click="handleViewPassword()"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item class="auth-code-item">
        <a-input
          class="auth-code"
          v-model:value="formInline.authCode"
          size="large"
          autocomplete="off"
          placeholder="请输入验证码"
        ></a-input>
        <canvas id="s-canvas" class="s-canvas"></canvas>
      </a-form-item>
      <a-form-item class="remember-item">
        <a-checkbox cv-model="formInline.remember" @change="handleRemember"> 记住密码</a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="loading" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted } from 'vue';
  import {
    UserOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
  } from '@ant-design/icons-vue';
  import { message } from 'ant-design-vue';
  import VerifcCode from '@/components/Verifc/canvas.ts';
  import { createStorage } from '@/utils/storage.ts';
  import { useRouter } from 'vue-router';
  // import { useStore } from 'vuex';
  export default defineComponent({
    name: 'login',
    components: { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined },
    setup() {
      const state = reactive({
        loading: false,
        formInline: {
          username: 'admin',
          password: '123456',
          authCode: '',
          remember: null,
        },
        isShowPasswold: false,
        passwoldType: 'password',
      });
      // const store = useStore();
      const router = useRouter();
      // const route = useRoute();
      onMounted(() => {
        new VerifcCode('s-canvas', { contentWidth: 100, contentHeight: 40 });
      });
      const handleSubmit = async () => {
        console.log('提交');
        const params = {
          username: state.formInline.username,
          password: state.formInline.password,
        };
        if (params.username === 'admin' && params.password === '123456') {
          router.replace('/');
          // params.password = md5(password)
          // const { code, result, message: msg } = await store
          //   .dispatch('user/Login', params)
          //   .finally(() => {
          //     console.log(result);
          //     state.loading = false;
          //     message.destroy();
          //   });
          // if (code == 0) {
          //   const toPath = decodeURIComponent((route.query?.redirect || '/') as string);
          //   message.success('登录成功！');
          //   router.replace(toPath).then((_) => {
          //     if (route.name == 'login') {
          //       router.replace('/');
          //     }
          //   });
          // } else {
          //   message.info(msg || '登录失败');
          // }
        } else {
          message.error('账号或密码不对');
        }
      };
      const handleViewPassword = async () => {
        state.isShowPasswold = !state.isShowPasswold;
        if (state.isShowPasswold) {
          state.passwoldType = 'txt';
        } else {
          state.passwoldType = 'password';
        }
        console.log(state.isShowPasswold);
      };
      const storage = createStorage();
      const handleRemember = async () => {
        storage.set('userInfo', state.formInline);
      };
      return {
        ...toRefs(state),
        handleSubmit,
        handleViewPassword,
        handleRemember,
      };
    },
  });
</script>

<style lang="less" scoped>
  .login-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding-top: 240px;
    flex-direction: column;
    align-items: center;
    background-size: 100%;
    ::v-deep(.ant-form) {
      width: 500px;
      height: 70%;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 5px 5px 20px rgba(126, 124, 124, 0.1), -5px -5px 20px rgba(255, 255, 255, 1);
      transition: all 0.2s ease-out;
      .ant-col {
        width: 100%;
      }
      .ant-form-item {
        margin-top: 30px;
        .ant-form-item-label {
          padding-right: 6px;
        }
      }
      .title-item {
        h1 {
          margin-bottom: 0;
          color: #fff;
          text-align: center;
        }
      }
      .auth-code-item {
        .ant-form-item-control-wrapper {
          .ant-form-item-control {
            .ant-form-item-children {
              width: 100%;
              height: 40px;
              display: inline-block;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .auth-code {
                width: 70%;
              }
              .s-canvas {
                cursor: pointer;
              }
            }
          }
        }
      }
      .remember-item {
        * {
          color: #fff;
        }
      }
    }
  }
</style>
