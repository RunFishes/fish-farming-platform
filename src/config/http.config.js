import service from '../utils/request';

const baseURL = {
  prd: 'http://localhost:8001/',
  dev: 'http://localhost:8001/',
};

const httpList = {
  PERMISSIONS: '/permissions',
  LOGIN: '/login',
  REGISTER: '/register',
  SEND_EMAIL_CODE: '/send/emailCode',
  POND: '/pond',
  ADD_POND: '/addPond',
  UPDATE_POND: '/updatePond',
  DELETE_POND: '/deletePond',
  FISH: '/fish',
  ADD_FISH: '/addFish',
  UPDATE_FISH: '/updateFish',
  DELETE_FISH: '/deleteFish',
  FISH_LIST: '/getFishList',
  ADMIN: '/getAdmin',
  UPDATE_PERMISSIONS: '/updatePermissions',
  GET_PERMISSIONS: '/getPermissions',
  GET_FISH_PRO: '/getFishProcurement',
  DELETE_FISH_PRO: '/deleteFishProcurement',
  UPDATE_FISH_PRO: '/updateFishProcurement',
  ADD_FISH_PRO: '/addFishProcurement',
  GET_FISH_QUA,
};

export const post = async (url, params = {}) => {
  return service.post(httpList[url] || '', params);
};

export const get = async (url, params) => {
  return service.get(httpList[url] || '', {
    ...params,
  });
};
