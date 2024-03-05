import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './config/route.config'
import localInfo from './utils/storage'
import { ElButton,ElForm,ElInput,ElFormItem } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app  = createApp(App)

//引入路由
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

// router.beforeEach((to,from,next)=> {
//     if(to.path !== '/login') {
//         if(localInfo.get('admin')) {
//             next()
//         }else {
//             next('/login')
//         }
//         return
//     }
//     next()
//  })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(ElButton).use(ElForm).use(ElInput).use(ElFormItem)

app.mount('#app')
