import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'
import '@/permission'

import * as filters from '@/filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
