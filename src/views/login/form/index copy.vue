<!--
 * @Author: your name
 * @Date: 2020-11-27 16:39:55
 * @LastEditTime: 2020-12-21 18:46:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\views\login\form\index.vue
-->
<template>
  <div class="login_container">
    <a-form
      class="login"
      name="custom-validation"
      ref="ruleForm"
      :model="ruleForm"
      @submit="handleSubmit"
      @submit.prevent
    >
      <a-form-item class="login__header login__item">
        <span class="title">登陆</span>
      </a-form-item>
      <a-form-item class="login__username login__item" label="用户名">
        <a-input v-model:value="ruleForm.userName" />
      </a-form-item>
      <a-form-item class="login__password login__item" label="密码">
        <a-input v-model:value="ruleForm.password" :type="passwoldType">
          <template #suffix>
            <EyeInvisibleOutlined
              v-show="!isShowPasswold"
              style="color: rgba(0,0,0,.45)"
              @click="handleViewPassword(false)"
            />
            <EyeOutlined
              v-show="isShowPasswold"
              style="color: rgba(0,0,0,.45)"
              @click="handleViewPassword(true)"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item class="login__authCode login__item" label="验证码">
        <a-input v-model:value="ruleForm.authCode" />
        <canvas id="s-canvas"></canvas>
      </a-form-item>
      <a-form-item class="login__remember login__item">
        <a-checkbox v-model:checked="ruleForm.remember" @change="onChange">
          记住密码
        </a-checkbox>
      </a-form-item>
      <a-form-item class="login__btn login__item" :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="login__submit" type="primary" html-type="submit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted } from 'vue';
  import VerifcCode from '@/components/Verifc/canvas.ts';
  import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
  // import { isPassword } from '@/utils/validate.ts';
  export default defineComponent({
    name: 'login-form',
    components: { EyeOutlined, EyeInvisibleOutlined },
    setup(props, context) {
      const state = reactive({
        loading: false,
        ruleForm: {
          userName: '',
          password: '',
          authCode: '',
          remember: true,
        },
        // rules: {
        //   password: [{ required: true, validator: isPassword, trigger: 'change' }],
        //   userName: [{ required: true, type: 'string', message: '请输入用户名', trigger: 'blur' }],
        //   authCode: [{ required: true, trigger: 'change' }],
        // },
        isShowPasswold: false,
        passwoldType: 'password',
      });
      onMounted(() => {
        new VerifcCode('s-canvas', { contentWidth: 100, contentHeight: 50 });
      });
      function handleSubmit() {
        console.log(props, context);
      }
      function resetForm() {
        console.log('重置');
      }
      function onChange() {
        console.log('是否记住密码', state.ruleForm.remember);
        console.log(state.ruleForm);
      }
      function handleViewPassword() {
        state.isShowPasswold = !state.isShowPasswold;
        if (state.isShowPasswold) {
          state.passwoldType = 'txt';
        } else {
          state.passwoldType = 'password';
        }
        console.log(state.isShowPasswold);
      }
      return {
        ...toRefs(state),
        handleSubmit,
        resetForm,
        handleViewPassword,
        onChange,
      };
    },
  });
</script>

<style lang="less" scoped>
  .login_container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    .login {
      width: 30%;
      height: 60%;
      border: 1px solid #ccc;
      border-radius: 20px;
      box-shadow: 18px 18px 30px rgba(126, 124, 124, 0.1), -18px -18px 30px rgba(255, 255, 255, 1);
      transition: all 0.2s ease-out;
      &__item {
        width: 100%;
        height: 60px;
        padding: 0 30px;
        margin: 20px auto;
        :deep.ant-form-item-label {
          width: 100px;
          height: 60px;
          line-height: 60px;
        }
        :deep .ant-form-item-control-wrapper {
          height: 60px;
          .ant-form-item-control {
            height: 60px;
            line-height: 60px;
            .ant-input {
              width: 250px;
              padding: 0;
              height: 40px;
            }
          }
        }
      }
      &__header {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 32px;
        }
      }
      &__authCode {
        :deep.ant-form-item-children {
          display: block;
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          .ant-input {
            width: 250px;
            padding: 0;
            height: 40px;
            margin-right: 20px;
          }
        }
      }
      &__btn {
        width: 100%;
        :deep.ant-form-item-control-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          .ant-form-item-control {
            display: flex;
            justify-content: center;
            align-items: center;
            .login__submit {
              width: 150px;
            }
          }
        }
      }
    }
  }
</style>
