import localInfo from './storage';
import { getPermissions } from '@/request/home';

const noPermit = (next) => {
  next({
    path: '/permission',
    query: {
      type: '401',
    },
  });
};

export const permission = async (to, next) => {
  if (localInfo.get('login')) {
    const data = await getPermissions();
    const permissions = data?.permissions || [];
    window.auth = {};
    window.auth.permissions = permissions;
    if (permissions.includes(to.name) || permissions.includes('all')) {
      next();
      return;
    }
    noPermit(next);
  } else {
    noPermit(next);
  }
};
