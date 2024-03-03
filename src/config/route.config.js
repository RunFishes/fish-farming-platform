import LoginVue from '../pages/Login/Index.vue'
import VisualizationVue from '../pages/Visualization/Index.vue'

const routes = [
    {
        path: '/',
        redirect: '/visualization'
    },
    {
        path:'/login',
        name:"登陆页",
        component: LoginVue
    },
    {
        path:'/visualization',
        name:'数据展示页',
        component: VisualizationVue
    }
]


export default routes