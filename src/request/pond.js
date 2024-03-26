import { post, get } from '@/config/http.config';

export const getPond = (params) => {
  console.log(params);
  return post('POND', params);
};
