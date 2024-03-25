import service from '../utils/request';

const baseURL = {
  prd: 'http://localhost:8001/',
  dev: 'http://localhost:8001/',
};

const httpList = {
  LOGIN: 'login',
  REGISTER: 'register',
  SEND_EMAIL_CODE: 'send/emailCode',
};

export const post = async (url, params = {}) => {
  let base = '';
  if (import.meta.env.DEV) {
    base = baseURL.dev;
  } else {
    base = baseURL.prd;
  }
  return service.post(httpList[url] ? base + httpList[url] : '', params);
};

export const get = async (url, params) => {
  let base = '';
  if (import.meta.env.DEV) {
    base = baseURL.dev;
  } else {
    base = baseURL.prd;
  }
  return service.get(base + httpList[url] || '', {
    ...params,
  });
};
