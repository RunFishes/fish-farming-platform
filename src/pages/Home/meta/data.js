import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export const menuList = [
  {
    name: '池塘-仓库-鱼类中央管理',
    icon: ElementPlusIconsVue.Tools,
    index: 'all',
    children: [
      {
        name: '鱼类管理',
        icon: ElementPlusIconsVue.Coin,
        index: 'fish',
      },
      {
        name: '池塘管理',
        icon: ElementPlusIconsVue.Umbrella,
        index: 'pond',
      },
      {
        name: '权限管理',
        icon: ElementPlusIconsVue.User,
        index: 'admin',
      },
      // {
      //   name: '仓库管理',
      //   icon: ElementPlusIconsVue.PriceTag,
      //   index: 'warehouse',
      // },
    ],
  },
  {
    name: '鱼苗管理模块',
    icon: ElementPlusIconsVue.Paperclip,
    index: 'fishFry',
    children: [
      {
        name: '鱼苗采购',
        icon: ElementPlusIconsVue.ShoppingTrolley,
        index: 'fishProcurement',
      },
      // {
      //   name: '鱼苗库存管理',
      //   icon: ElementPlusIconsVue.Stamp,
      //   index: 'fishManagement',
      // },
      {
        name: '鱼苗质量',
        icon: ElementPlusIconsVue.MagicStick,
        index: 'fishQuality',
      },
    ],
  },
  // {
  //   name: '水质监测模块',
  //   icon: ElementPlusIconsVue.Postcard,
  //   index: 'water',
  //   children: [
  //     {
  //       name: '水质监测数据采集',
  //       icon: ElementPlusIconsVue.Collection,
  //       index: 'waterCollection',
  //     },
  //     {
  //       name: '水质指标分析与展示',
  //       icon: ElementPlusIconsVue.DataAnalysis,
  //       index: 'waterIndicate',
  //     },
  //     {
  //       name: '水质异常报警',
  //       icon: ElementPlusIconsVue.BellFilled,
  //       index: 'waterAlarm',
  //     },
  //   ],
  // },
  {
    name: '饲料管理模块',
    icon: ElementPlusIconsVue.HotWater,
    index: 'feed',
    children: [
      {
        name: '饲料采购与库存管理',
        icon: ElementPlusIconsVue.Handbag,
        index: 'feedManagement',
      },
      {
        name: '饲料投喂记录',
        icon: ElementPlusIconsVue.Stamp,
        index: 'feedRecord',
      },
      {
        name: '饲料成本统计',
        icon: ElementPlusIconsVue.Platform,
        index: 'feedStatistics',
      },
    ],
  },
  {
    name: '养殖环境控制模块',
    icon: ElementPlusIconsVue.View,
    index: 'enviroment',
    children: [
      {
        name: '温度、光照等环境参数监测',
        icon: ElementPlusIconsVue.Service,
        index: 'monitor',
      },
      {
        name: '环境参数历史数据查询',
        icon: ElementPlusIconsVue.Connection,
        index: 'environmentalHistory',
      },
    ],
  },
  {
    name: '生长情况监测模块',
    icon: ElementPlusIconsVue.Search,
    index: 'grow',
    children: [
      {
        name: '鱼群生长数据采集',
        icon: ElementPlusIconsVue.Position,
        index: 'growCollection',
      },
      {
        name: '生长曲线分析',
        icon: ElementPlusIconsVue.TrendCharts,
        index: 'growAnalysis',
      },
      {
        name: '生长状态报告生成',
        icon: ElementPlusIconsVue.Document,
        index: 'growDoc',
      },
    ],
  },
  {
    name: '销售与营销模块',
    icon: ElementPlusIconsVue.Sell,
    index: 'sell',
    children: [
      {
        name: '鱼类销售管理',
        icon: ElementPlusIconsVue.User,
        index: 'fishSell',
      },
      {
        name: '客户信息管理',
        icon: ElementPlusIconsVue.UserFilled,
        index: 'custom',
      },
      {
        name: '销售数据统计与分析',
        icon: ElementPlusIconsVue.Histogram,
        index: 'dataAnalysis',
      },
    ],
  },
];
