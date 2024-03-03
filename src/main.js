import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './config/route.config'
import localInfo from './utils/storage'
import { ElButton,ElForm,ElInput } from 'element-plus'


const app  = createApp(App)

//引入路由
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [...routes]
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

app.use(router).use(ElButton).use(ElForm).use(ElInput)

app.mount('#app')
