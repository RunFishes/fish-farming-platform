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
  GET_ALL_POND: '/getAllPond',
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
  GET_FISH_QUALITY: '/getFishQuality',
  UPDATE_FISH_QUALITY: '/updateFishQuality',
  DELETE_FISH_QUALITY: '/deleteFishQuality',
  ADD_FISH_QUALITY: '/addFishQuality',
  GET_FEED_MANAGEMENT: '/getFeedManagement',
  ADD_FEED_MANAGEMENT: '/addFeedManagement',
  DELETE_FEED_MANAGEMENT: '/deleteFeedManagement',
  UPDATED_FEED_MANAGEMENT: '/updateFeedManagement',
  GET_FEED_RECORD: '/getFeedRecord',
  ADD_FEED_RECORD: '/addFeedRecord',
  DELETE_FEED_RECORD: '/deleteFeedRecord',
  UPDATE_FEED_RECORD: '/updateFeedRecord',
  GET_ENVIROMENT_LIST: '/getEnviromentList',
  ADD_ENVIROMENT: '/addEnviroment',
  UPDATE_ENVIROMENT: '/updateEnviroment',
  DELETE_ENVIROMENT: '/deleteEnviroment',
  GET_ENVIROMENT_DETAIL: '/getEnviromentDetail',
  GET_ENCYCLOPEDIA_LIST: '/getEncyclopediaList',
  GET_ENCYCLOPEDIA_DETAIL: '/getEncyclopediaDetail',
  GET_CUSTOM: '/getCustom',
  ADD_CUSTOM: '/addCustom',
  UPDATE_CUSTOM: '/updateCustom',
  DELETE_CUSTOM: '/deleteCustom',
  GET_ALL_CUSTOM: '/getAllCustom',
  GET_SELL: '/getSell',
  UPDATE_SELL: '/updateSell',
  DELETE_SELL: '/deleteSell',
  GET_SELL_BY_FISH_TYPE: 'getSellByFishType',
  ADD_SELL: '/addSell',
  GET_CHINA: '/getChina',
};

export const post = async (url, params = {}) => {
  return service.post(httpList[url] || '', params);
};

export const get = async (url, params) => {
  return service.get(httpList[url] || '', {
    ...params,
  });
};
