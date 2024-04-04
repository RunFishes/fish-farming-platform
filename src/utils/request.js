import axios from 'axios';
import { ElMessage } from 'element-plus';
import storage from './storage';

const baseURL = {
  prd: 'http://localhost:8001/',
  dev: 'http://localhost:8001/',
};

let base = '';
if (import.meta.env.DEV) {
  base = baseURL.dev;
} else {
  base = baseURL.prd;
}

const service = axios.create({
  baseURL: base,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = storage.get('login') || '';
    config.headers.token = token;
    return config; // 必须返回配置
  },
  (error) => {
    ElMessage({
      type: 'warning',
      message: error || '接口报错',
    });
  }
);

// 响应拦截器
service.interceptors.response.use((response) => {
  try {
    const { success, message, data } = response.data;
    //   要根据success的成功与否决定下面的操作
    if (success) {
      if (message)
        ElMessage({
          type: 'success',
          message,
        });
      return data;
    } else if (message === '登录失败') {
      ElMessage({
        type: 'warning',
        message,
      });
      if (window.location.pathname !== '/login')
        window.location.href = window.location.origin + '/login';
    } else {
      throw message;
    }
  } catch (e) {
    ElMessage({
      type: 'warning',
      message: e || '接口报错',
    });
  }
});

export default service;
