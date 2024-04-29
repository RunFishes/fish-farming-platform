import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import routes from './config/route.config';
import {
  ElButton,
  ElForm,
  ElInput,
  ElFormItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElLoading,
} from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { permission } from '@/utils/permission';

const app = createApp(App);

//引入路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const noPermitsList = [
  'login',
  'permission',
  'visualization',
  'encyclopediaDetail',
  'encyclopedia',
];

router.beforeEach((to, from, next) => {
  if (noPermitsList.includes(to.name)) {
    next();
  } else {
    permission(to, next);
  }
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

console.log('欢迎使用鱼塘管理系统');
console.log('骚操作');
console.log('第三次提交');

app.directive('loading', ElLoading.directive);

app
  .use(router)
  .use(ElButton)
  .use(ElForm)
  .use(ElInput)
  .use(ElFormItem)
  .use(ElDropdown)
  .use(ElDropdownItem)
  .use(ElDropdownMenu);

app.mount('#app');
