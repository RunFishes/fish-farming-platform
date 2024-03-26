import service from '../utils/request';

const baseURL = {
  prd: 'http://localhost:8001/',
  dev: 'http://localhost:8001/',
};

const httpList = {
  LOGIN: '/login',
  REGISTER: '/register',
  SEND_EMAIL_CODE: '/send/emailCode',
  POND: '/pond',
};

export const post = async (url, params = {}) => {
  console.log(httpList[url]);
  return service.post(httpList[url] || '', params);
};

export const get = async (url, params) => {
  return service.get(httpList[url] || '', {
    ...params,
  });
};
