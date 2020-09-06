import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
}, { // 嵌套命名视图
    path: '/router',
    component: () => import('@/views/router'),
    meta: { // 

    },
    beforeEnter: (to, from, next) => { // 路由独享拦截
        console.log('路由独享拦截...')
        next(vm => {
            console.log('路由独享拦截：', vm, to, from)
        })
    },
    children: [{
        path: 'named',
        components: {
            default: () => import('@/views/router'),
            login: () => import('@/views/login'),
            404: () => import('@/views/404')
        }
    }]
}, {
    path: '/vuex',
    component: () => import('@/views/vuex'),
}, {
    path: '*',
    component: () => import('@/views/404'),
}]

const router = new Router({
    // mode: 'history', HTML5 history模式
    routes,
    scrollBehavior(to, from, savedPosition) { // 滚动行为
        // return 期望滚动到哪个的位置 {x: 0, y: 0} 
        console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
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