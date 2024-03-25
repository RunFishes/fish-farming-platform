import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: 'https://api.imooc-web.lgdsunday.club/api',
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'input you icode';
    return config; // 必须返回配置
  },
  (error) => {
    ElMessage({
      type: 'warning',
      message: error || '接口报错',
    });
  },
);

// 响应拦截器
service.interceptors.response.use((response) => {
  try {
    const { success, message, data } = response.data;
    //   要根据success的成功与否决定下面的操作
    if (success) {
      ElMessage({
        type: 'success',
        message,
      });
      return data;
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
