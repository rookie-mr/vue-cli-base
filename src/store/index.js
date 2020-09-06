import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        logined: false,
        skin: 'default'
    },
    getters: { // 由state派生出的属性
        tips: (state) => (name) => { // 返回一个函数可以传递参数进行处理
            return state.logined ? '欢迎访问' + name : '请登录'
        }
    },
    mutations: { // 实际开发可将本部分抽取成单独的文件
        login(state, o) { // 默认第一个参数为当前的state，后续参数也称为mutations的载荷，载荷一般为对象
            state.logined = true
            state.user = o.name
        },
        logout(state, o) {
            state.logined = false
            state.user = o.name
        }
    },
    actions: { // 实际开发可将本部分抽取成单独的文件
        logout({commit}, o) { // 与store实例具有相同方法和属性的context对象 state、commit、dispatch...
            commit('logout', o)
        }
    },
    modules: {}
})

export default store