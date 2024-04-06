import { post, get } from '@/config/http.config';

export const getFishPro = async (params) => {
  return post('GET_FISH_PRO', params);
};

export const addFishPro = async (params) => {
  return post('ADD_FISH_PRO', params);
};

export const deleteFishPro = async (params) => {
  return post('DELETE_FISH_PRO', params);
};

export const updateFishPro = async (params) => {
  return post('UPDATE_FISH_PRO', params);
};
