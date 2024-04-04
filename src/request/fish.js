import { post, get } from '@/config/http.config';

export const getFishInfo = async (params) => {
  return post('FISH', params);
};

export const addFishInfo = async (params) => {
  return post('ADD_FISH', params);
};

export const updateFish = async (params) => {
  return post('UPDATE_FISH', params);
};

export const deleteFish = async (params) => {
  return post('DELETE_FISH', params);
};
