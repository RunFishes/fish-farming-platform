<template>
  <ElForm
    class="login-form"
    ref="loginRef"
    :model="loginParam"
    :rules="loginRules"
  >
    <h1 class="login-title">登录</h1>
    <ElFormItem prop="username">
      <ElInput
        placeholder="请输入账号"
        :prefix-icon="User"
        v-model="loginParam.username"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        placeholder="请输入密码"
        show-password
        :prefix-icon="Lock"
        v-model="loginParam.password"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        class="login-btn"
        size="large"
        @click="submit(loginRef)"
        style="color: skyblue"
      >
        登录
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElFormItem, ElButton, ElInput, ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { post } from '../../../config/http.config';
import storage from '../../../utils/storage';

const router = useRouter();
const loginRef = ref();

const loginParam = reactive({
  username: undefined,
  password: undefined,
});

const loginRules = reactive({
  username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
});

const submit = (loginRef) => {
  if (!loginRef) {
    return false;
  }
  loginRef.validate(async (validate) => {
    if (validate) {
      const isRight = await cetificate({
        username: loginParam.username,
        password: loginParam.password,
      });
      if (isRight) {
        // router.push('/home');
        const res = await post('LOGIN', {
          username: loginParam.username,
          password: loginParam.password,
        });
        if (res.token) {
          storage.save('login', res.token);
          router.push('/home');
        }
      } else {
        ElMessage({
          type: 'error',
          messae: '账号密码错误',
        });
      }
    } else {
      return false;
    }
    console.log('到这里了');
  });
};

const cetificate = (params) => {
  return params;
};
</script>

<style lang="scss" scoped>
.login-form {
  grid-column: 1;
  grid-row: 1;
  opacity: 1;
  transition: 1s ease-in-out;
  transition-delay: 0.5s;
  /* 上下 | 左右 */
  padding: 1% 25%;
  z-index: 1;
}

.login-form.sign-up-model {
  opacity: 0;
  transition: 1s ease-in-out;
  z-index: 0;
}

.login-title {
  text-align: center;
  color: #444;
}

.login-btn {
  width: 100%;
  font-size: 18px;
}
</style>
