import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
},{
    path: '/router',
    component: () => import('@/views/router'),
}]

const router = new Router({
    routes
})

export default router