import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
}, {
    path: '/router',
    component: () => import('@/views/router'),
    beforeEnter: (to, from, next) => { // 路由独享拦截
        console.log('路由独享拦截...')
        next(vm => {
            console.log('路由独享拦截：', vm, to, from)
        })
    }
}, {
    path: '*',
    component: () => import('@/views/404'),
}]

const router = new Router({
    // mode: 'history',
    routes
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('全局解析守卫...')
    next(vm => {
        console.log('全局解析守卫：', vm, to, from)
    })
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('全局前置守卫...')
    next(vm => {
        console.log('全局前置守卫：', vm, to, from)
    })
})

// 全局后置守卫
router.afterEach((to, from) => {
    console.log('全局后置守卫...')
    console.log('全局后置守卫：', to, from)
})

export default router