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
    name: 'login',
    component: LoginVue,
  },
  {
    path: '/visualization',
    name: 'visualization',
    component: VisualizationVue,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeVue,
    redirect: '/home/fishProcurement',
    children: [
      {
        //鱼苗采购
        path: 'fishProcurement',
        name: 'fishProcurement',
        component: () => import('../pages/Home/views/fishProcurement.vue'),
      },
      {
        //鱼苗库存管理
        path: 'fishManagement',
        name: 'fishManagement',
        component: () => import('../pages/Home/views/fishManagement.vue'),
      },
      {
        //鱼苗质量
        path: 'fishQuality',
        name: 'fishQuality',
        component: () => import('../pages/Home/views/fishQuality.vue'),
      },
      //水质模块
      {
        //水质监测数据采集
        path: 'waterCollection',
        name: 'waterCollection',
        component: () => import('../pages/Home/views/waterCollection.vue'),
      },
      {
        //水质指标分析与展示
        path: 'waterIndicate',
        name: 'waterIndicate',
        component: () => import('../pages/Home/views/waterIndicate.vue'),
      },
      {
        //水质异常报警
        path: 'waterAlarm',
        name: 'waterAlarm',
        component: () => import('../pages/Home/views/waterAlarm.vue'),
      },
      //饲料管理模块
      {
        //饲料采购与库存管理
        path: 'feedManagement',
        name: 'feedManagement',
        component: () => import('../pages/Home/views/feedManagement.vue'),
      },
      {
        //饲料投喂记录
        path: 'feedRecord',
        name: 'feedRecord',
        component: () => import('../pages/Home/views/feedRecord.vue'),
      },
      {
        //饲料成本统计
        path: 'feedStatistics',
        name: 'feedStatistics',
        component: () => import('../pages/Home/views/feedStatistics.vue'),
      },
      //环境模块
      {
        //温度、光照等环境参数监测
        path: 'monitor',
        name: 'monitor',
        component: () => import('../pages/Home/views/monitor.vue'),
      },
      {
        //环境参数历史数据查询
        path: 'environmentalHistory',
        name: 'environmentalHistory',
        component: () => import('../pages/Home/views/environmentalHistory.vue'),
      },
      //生长情况监测模块
      {
        //鱼群生长数据采集
        path: 'growCollection',
        name: 'growCollection',
        component: () => import('../pages/Home/views/growCollection.vue'),
      },
      {
        //生长曲线分析
        path: 'growAnalysis',
        name: 'growAnalysis',
        component: () => import('../pages/Home/views/growAnalysis.vue'),
      },
      {
        //生长状态报告生成
        path: 'growDoc',
        name: 'growDoc',
        component: () => import('../pages/Home/views/growDoc.vue'),
      },
      //销售与营销模块
      {
        //鱼类销售管理
        path: 'fishSell',
        name: 'fishSell',
        component: () => import('../pages/Home/views/growDoc.vue'),
      },
      {
        //客户信息管理
        path: 'custom',
        name: 'custom',
        component: () => import('../pages/Home/views/growDoc.vue'),
      },
      {
        //销售数据统计与分析
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import('../pages/Home/views/growDoc.vue'),
      },
    ],
  },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('../pages/Permission/Index.vue'),
  },
];

export default routes;
