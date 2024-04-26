import { post, get } from '@/config/http.config';

export const getFishQuality = async (params) => {
  return post('GET_FISH_QUALITY', params);
};

export const addFishQuality = async (params) => {
  return post('ADD_FISH_QUALITY', params);
};

export const deleteFishQuality = async (params) => {
  return post('DELETE_FISH_QUALITY', params);
};

export const updateFishQuality = async (params) => {
  return post('UPDATE_FISH_QUALITY', params);
};
