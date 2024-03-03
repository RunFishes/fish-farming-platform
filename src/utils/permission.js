import localInfo from './storage'


export const permission = (router) => {
    router.beforeEach((to,from,next)=> {
       if(to.path !== '/login') {
            if(localInfo.get('admin'))
                next()
            else
                next('/login')
       }
    })
}