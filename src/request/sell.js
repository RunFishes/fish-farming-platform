import { post, get } from '@/config/http.config';

export const getSell = async (params) => {
  return post('GET_SELL', params);
};

export const updateSell = async (params) => {
  return post('UPDATE_SELL', params);
};

export const deleteSell = async (params) => {
  return post('DELETE_SELL', params);
};

export const addSell = async (params) => {
  return post('ADD_SELL', params);
};

export const getSellByFishType = async (params) => {
  return post('GET_SELL_BY_FISH_TYPE', params);
};
