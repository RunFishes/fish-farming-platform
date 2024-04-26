import { post, get } from '@/config/http.config';

export const getPond = (params) => {
  return post('POND', params);
};

export const addPond = (params) => {
  console.log(param);
  return post('ADD_POND', params);
};

export const updatePond = (params) => {
  return post('UPDATE_POND', params);
};

export const deletePond = (params) => {
  return post('DELETE_POND', params);
};

export const getFishList = () => {
  return get('FISH_LIST');
};

export const getAllPond = () => {
  return post('GET_ALL_POND');
};
