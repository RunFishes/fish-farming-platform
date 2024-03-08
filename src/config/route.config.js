import LoginVue from '../pages/Login/Index.vue';
import VisualizationVue from '../pages/Visualization/Index.vue';
import HomeVue from '../pages/Home/Index.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: '登陆页',
    component: LoginVue,
  },
  {
    path: '/visualization',
    name: '数据展示页',
    component: VisualizationVue,
  },
  {
    path: '/home',
    name: '主页',
    component: HomeVue,
    redirect: '/home/culture',
    children: [
      {
        path: 'sell',
        name: '淡海水鱼产出记录',
        component: () => import('../pages/Home/views/Sell.vue'),
      },
      {
        path: 'culture',
        name: '淡海水养殖记录',
        component: () => import('../pages/Home/views/Culture.vue'),
      },
    ],
  },
  {
    path: '/permission',
    name: '权限展示页面',
    component: () => import('../pages/Permission/Index.vue'),
  },
];

export default routes;
