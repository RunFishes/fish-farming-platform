import LoginVue from '../pages/Login/Index.vue';
import VisualizationVue from '../pages/Visualization/Index.vue';
import HomeVue from '../pages/Home/Index.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
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
    redirect: '/home/fish',
    children: [
      //总模块
      {
        //鱼管理
        path: 'fish',
        name: 'fish',
        component: () => import('../pages/Home/views/all/fish.vue'),
      },
      {
        //池塘管理
        path: 'pond',
        name: 'pond',
        component: () => import('../pages/Home/views/all/pond.vue'),
      },
      {
        //鱼苗采购
        path: 'fishProcurement',
        name: 'fishProcurement',
        component: () =>
          import('../pages/Home/views/fishFry/fishProcurement.vue'),
      },
      {
        //鱼苗质量
        path: 'fishQuality',
        name: 'fishQuality',
        component: () => import('../pages/Home/views/fishFry/fishQuality.vue'),
      },
      //水质模块
      // {
      //   //水质监测数据采集
      //   path: 'waterCollection',
      //   name: 'waterCollection',
      //   component: () => import('../pages/Home/views/waterCollection.vue'),
      // },
      // {
      //   //水质指标分析与展示
      //   path: 'waterIndicate',
      //   name: 'waterIndicate',
      //   component: () => import('../pages/Home/views/waterIndicate.vue'),
      // },
      // {
      //   //水质异常报警
      //   path: 'waterAlarm',
      //   name: 'waterAlarm',
      //   component: () => import('../pages/Home/views/waterAlarm.vue'),
      // },
      //饲料管理模块
      {
        //饲料采购与库存管理
        path: 'feedManagement',
        name: 'feedManagement',
        component: () => import('../pages/Home/views/feed/feedManagement.vue'),
      },
      {
        //饲料投喂记录
        path: 'feedRecord',
        name: 'feedRecord',
        component: () => import('../pages/Home/views/feed/feedRecord.vue'),
      },
      {
        //饲料成本统计
        path: 'feedStatistics',
        name: 'feedStatistics',
        component: () => import('../pages/Home/views/feed/feedStatistics.vue'),
      },
      //环境模块
      {
        //温度、光照等环境参数监测
        path: 'monitor',
        name: 'monitor',
        component: () => import('../pages/Home/views/enviroment/monitor.vue'),
      },
      {
        //环境参数历史数据查询
        path: 'environmentalHistory',
        name: 'environmentalHistory',
        component: () =>
          import('../pages/Home/views/enviroment/environmentalHistory.vue'),
      },
      //生长情况监测模块
      {
        //鱼群生长数据采集
        path: 'growCollection',
        name: 'growCollection',
        component: () => import('../pages/Home/views/grow/growCollection.vue'),
      },
      {
        //生长曲线分析
        path: 'growAnalysis',
        name: 'growAnalysis',
        component: () => import('../pages/Home/views/grow/growAnalysis.vue'),
      },
      {
        //生长状态报告生成
        path: 'growDoc',
        name: 'growDoc',
        component: () => import('../pages/Home/views/grow/growDoc.vue'),
      },
      //销售与营销模块
      {
        //鱼类销售管理
        path: 'fishSell',
        name: 'fishSell',
        component: () => import('../pages/Home/views/grow/growDoc.vue'),
      },
      {
        //客户信息管理
        path: 'custom',
        name: 'custom',
        component: () => import('../pages/Home/views/grow/growDoc.vue'),
      },
      {
        //销售数据统计与分析
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import('../pages/Home/views/grow/growDoc.vue'),
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
