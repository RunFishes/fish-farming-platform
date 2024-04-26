import { post, get } from '@/config/http.config';

export const getEncyclopediaList = async (params) => {
  return post('GET_ENCYCLOPEDIA_LIST', params);
};

export const getEncyclopediaDetail = async (params) => {
  return post('GET_ENCYCLOPEDIA_DETAIL', params);
};
