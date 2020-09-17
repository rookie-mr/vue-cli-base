import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login'),
}, {
    path: '/sticky',
    component: () => import('@/views/sticky'),
}, {
    path: '*',
    component: () => import('@/views/404'),
}]

export const asyncRoutes = [{ // 嵌套命名视图
    path: '/router',
    component: () => import('@/views/router'),
    meta: { // 
        roles: ['admin', 'editor']
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
            icons: () => import('@/views/icons'),
            404: () => import('@/views/404')
        },
        meta: {
            roles: ['admin']
        }
    }]
}, {
    path: '/vuex',
    component: () => import('@/views/vuex'),
    meta: {
        roles: ['admin', 'editor']
    }
}, {
    path: '/icons',
    component: () => import('@/views/icons'),
    meta: {
        roles: ['admin']
    }
}]

const createRouter = () => new Router({
    // mode: 'history', HTML5 history模式
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) { // 滚动行为
        // return 期望滚动到哪个的位置 {x: 0, y: 0} 
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

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

// 全局解析守卫——在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后被调用。
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