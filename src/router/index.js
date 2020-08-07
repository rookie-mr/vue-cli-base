import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
}]

const router = new Router({
    routes
})

export default router