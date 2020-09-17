import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/request'

import '@/icons'
import '@/permission'
import sticky from '@/directive/sticky'

import * as filters from '@/filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(sticky)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
