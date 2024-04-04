import { post, get } from '@/config/http.config';

export const getAdminInfo = async (params) => {
  return post('ADMIN', params);
};

export const updatePermissions = async (params) => {
  return post('UPDATE_PERMISSIONS', params);
};

export const getPermissions = async () => {
  return get('GET_PERMISSIONS');
};
