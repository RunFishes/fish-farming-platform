import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export const menuList = [
  {
    name: '养殖生产模块',
    icon: ElementPlusIconsVue.Avatar,
    index: 'allCulture',
    children: [
      {
        name: '淡海水鱼产出',
        icon: ElementPlusIconsVue.TrendCharts,
        index: 'output',
      },
      {
        name: '鱼苗采购与养殖',
        icon: ElementPlusIconsVue.List,
        index: 'culture',
      },
    ],
  },
  {
    name: '市场营销模块',
    icon: ElementPlusIconsVue.ShoppingCart,
    index: 'market',
    children: [
      {
        name: '养殖产品销售',
        icon: ElementPlusIconsVue.Sell,
        index: 'sell',
      },
      {
        name: '市场产品预测',
        icon: ElementPlusIconsVue.Sunny,
        index: 'forecast',
      },
    ],
  },
];
