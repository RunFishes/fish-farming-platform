import { post, get } from '@/config/http.config';

export const getEnviromentList = async (params) => {
  return post('GET_ENVIROMENT_LIST', params);
};

export const addEnviroment = async (params) => {
  return post('ADD_ENVIROMENT', params);
};

export const updateEnviroment = async (params) => {
  return post('UPDATE_ENVIROMENT', params);
};

export const deleteEnviroment = async (params) => {
  return post('DELETE_ENVIROMENT', params);
};

export const getEnviromentDetail = async (params) => {
  return post('GET_ENVIROMENT_DETAIL', params);
};
