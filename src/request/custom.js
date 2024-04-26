import { post, get } from '@/config/http.config';

export const getCustom = async (params) => {
  return await post('GET_CUSTOM', params);
};

export const addCustom = async (params) => {
  return await post('ADD_CUSTOM', params);
};

export const updateCustom = async (params) => {
  return await post('UPDATE_CUSTOM', params);
};

export const deleteCustom = async (params) => {
  return await post('DELETE_CUSTOM', params);
};

export const getCustomList = async (params) => {
  return await post('GET_ALL_CUSTOM', params);
};
