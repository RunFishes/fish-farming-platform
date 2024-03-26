<template>
  <ElForm
    class="register-form"
    ref="registerRef"
    :model="registerParam"
    :rules="registerRules"
  >
    <h1 class="register-title">注册</h1>
    <ElFormItem prop="username">
      <ElInput
        placeholder="请输入账号"
        :prefix-icon="User"
        v-model="registerParam.username"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        placeholder="请输入密码"
        show-password
        :prefix-icon="Lock"
        v-model="registerParam.password"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem prop="email">
      <ElInput
        placeholder="请输入邮箱"
        :prefix-icon="Message"
        v-model="registerParam.email"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem prop="emailCode">
      <ElInput
        placeholder="请输入邮箱验证码"
        :prefix-icon="Crop"
        v-model="registerParam.emailCode"
        size="large"
      >
        <template #append>
          <ElButton
            type="primary"
            :disabled="emailCodeButton.disabled"
            @click="sendEmailCode(registerRef)"
          >
            {{
              emailCodeButton.time === 0
                ? '发送验证码'
                : `${emailCodeButton.time}秒后重新发送`
            }}
          </ElButton>
        </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        class="register-btn"
        style="color: skyblue"
        size="large"
        @click="submit(registerRef)"
      >
        注册
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { User, Lock, Message, Crop } from '@element-plus/icons-vue';
import { ElForm, ElFormItem, ElButton, ElInput } from 'element-plus';
import { post } from '../../../config/http.config';

const registerParam = reactive({
  username: '',
  password: '',
  email: '',
  emailCode: '',
});
const registerRef = ref();
const registerRules = reactive({
  username: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      required: true,
      message: '密码是9~15位',
      min: 9,
      max: 15,
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      required: true,
      message: '密码是6~20位',
      min: 9,
      max: 20,
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '请输入有效的邮箱地址',
      trigger: 'blur',
    },
  ],
  emailCode: [
    { required: true, message: '邮箱验证码不能为空', trigger: 'blur' },
    {
      min: 4,
      max: 4,
      message: '请输入有效的邮箱验证码',
      trigger: 'blur',
    },
  ],
});
const submit = (formEl) => {
  if (!formEl) {
    return false;
  }
  formEl.validate(async (validate) => {
    if (validate) {
      console.log({
        username: registerParam.username,
        email: registerParam.email,
        password: registerParam.password,
        emailCode: registerParam.emailCode,
      });
      const res = await post('REGISTER', {
        username: registerParam.username,
        email: registerParam.email,
        password: registerParam.password,
        emailCode: registerParam.emailCode,
      });
      console.log(res);
    } else {
      return false;
    }
  });
};

const emailCodeButton = ref({
  time: 0,
  disabled: false,
});

const sendEmailCode = (formEl) => {
  if (!formEl) {
    return;
  }
  formEl.validateField('email').then(async (validate) => {
    if (validate) {
      emailCodeButton.value.disabled = true;
      emailCodeButton.value.time = 60;
      const timer = setInterval(() => {
        emailCodeButton.value.time--;
        if (emailCodeButton.value.time === 0) {
          clearInterval(timer);
          emailCodeButton.value.disabled = false;
        }
      }, 1000);
      const res = await post('SEND_EMAIL_CODE', {
        email: registerParam.email,
        emailCode: registerParam.emailCode,
      });
      window.location.reload();
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.register-form {
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  transition: 1s ease-in-out;
  /* 上下 | 左右 */
  padding: 1% 25%;
  z-index: 0;
}

.register-form.sign-up-model {
  opacity: 1;
  transition: 1s ease-in-out;
  transition-delay: 0.5s;
  z-index: 1;
}

.register-title {
  text-align: center;
  color: #444;
}
.register-btn {
  width: 100%;
  font-size: 18px;
}
</style>
