import { post, get } from '@/config/http.config';

export const getPermissions = () => {
  return post('PERMISSIONS');
};
