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

router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.name === 'permission') {
    next();
  } else {
    permission(to, next);
  }
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

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
